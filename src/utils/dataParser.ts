import JSZip from 'jszip';
import Papa from 'papaparse';
import { parse } from 'date-fns';
import { fr } from 'date-fns/locale';
import type { Activity, CSVRow } from '@/types/strava';

export async function parseStravaArchive(file: File): Promise<Activity[]> {
  try {
    // Extract ZIP
    const zip = await JSZip.loadAsync(file);
    
    // Find activities.csv
    const activitiesFile = zip.file(/activities\.csv$/i)[0];
    
    if (!activitiesFile) {
      throw new Error('Le fichier activities.csv n\'a pas été trouvé dans l\'archive');
    }

    // Read CSV content
    const csvContent = await activitiesFile.async('string');
    
    // Parse CSV
    const parseResult = await new Promise<Papa.ParseResult<CSVRow>>((resolve, reject) => {
      Papa.parse<CSVRow>(csvContent, {
        header: true,
        skipEmptyLines: true,
        complete: resolve,
        error: reject,
      });
    });

    if (parseResult.errors.length > 0) {
      console.warn('Erreurs de parsing CSV:', parseResult.errors);
    }

    // Detect format (French or English) by checking first row
    const isFrenchFormat = parseResult.data.length > 0 && "Date de l'activité" in parseResult.data[0];
    
    // Transform and filter data
    const activities: Activity[] = parseResult.data
      .map((row): Activity | null => {
        try {
          let dateStr: string;
          let activityId: string;
          let activityName: string;
          let activityType: string;
          let distanceStr: string;
          let elapsedTimeStr: string;
          let elevationStr: string;
          let bike: string | undefined;
          let speedStr: string;

          if (isFrenchFormat) {
            // French format
            const frRow = row as any;
            dateStr = frRow["Date de l'activité"];
            activityId = frRow["ID de l'activité"];
            activityName = frRow["Nom de l'activité"];
            activityType = frRow["Type d'activité"];
            distanceStr = frRow.Distance?.replace(',', '.') || '0';
            elapsedTimeStr = frRow["Temps écoulé"] || '0';
            elevationStr = frRow["Dénivelé positif"]?.replace(',', '.') || '0';
            bike = frRow.Matériel || undefined;
            speedStr = frRow["Vitesse moyenne"]?.replace(',', '.') || '0';
          } else {
            // English format
            const enRow = row as any;
            dateStr = enRow["Activity Date"];
            activityId = enRow["Activity ID"];
            activityName = enRow["Activity Name"];
            activityType = enRow["Activity Type"];
            distanceStr = enRow.Distance?.replace(',', '.') || '0';
            elapsedTimeStr = enRow["Elapsed Time"] || '0';
            elevationStr = enRow["Elevation Gain"]?.replace(',', '.') || '0';
            bike = enRow["Activity Gear"] || undefined;
            speedStr = enRow["Average Speed"]?.replace(',', '.') || '0';
          }

          // Parse date
          let date: Date;
          try {
            if (isFrenchFormat) {
              // French format: "4 juin 2020, 11:13:16"
              date = parse(dateStr, 'd MMMM yyyy, HH:mm:ss', new Date(), { locale: fr });
            } else {
              // English format: "Dec 24, 2020, 9:14:33 PM"
              date = new Date(dateStr);
            }
          } catch {
            // Fallback to simple date parsing
            date = new Date(dateStr);
          }

          // Parse numeric values
          const distance = parseFloat(distanceStr);
          const elapsedTime = parseInt(elapsedTimeStr, 10);
          const elevationGain = parseFloat(elevationStr);
          const averageSpeed = parseFloat(speedStr);

          return {
            id: activityId,
            date,
            name: activityName,
            type: activityType,
            distance,
            elapsedTime,
            elevationGain,
            bike,
            averageSpeed,
          };
        } catch (error) {
          console.warn('Erreur lors du parsing d\'une activité:', error, row);
          return null;
        }
      })
      .filter((activity): activity is Activity => activity !== null);

    return activities;
  } catch (error) {
    console.error('Erreur lors du parsing de l\'archive:', error);
    throw new Error('Impossible de lire l\'archive Strava. Assurez-vous qu\'il s\'agit d\'une archive valide.');
  }
}

export function filterActivities(
  activities: Activity[],
  year: number = 2025,
  type: string = 'Vélo'
): Activity[] {
  // List of bike activity types in different languages and variants
  const bikeTypes = [
    'Vélo',           // French
    'Ride',           // English
    'VirtualRide',    // Virtual cycling
    'EBikeRide',      // E-bike
    'E-Bike Ride',    // English variant
    'Cyclisme',       // French variant
    'Cycling',        // English variant
    'Biking',         // English variant
  ];
  
  return activities.filter((activity) => {
    const activityYear = activity.date.getFullYear();
    const matchesYear = activityYear === year;
    
    // If a specific type is requested and it's in our bike types list, use exact match
    // Otherwise, check if the activity type is in the bike types list
    const matchesType = type === 'Vélo' 
      ? bikeTypes.includes(activity.type)
      : activity.type === type;
    
    return matchesYear && matchesType;
  });
}

