import { useState } from 'react';
import { Landing } from '@/components/Landing';
import { StatsDisplay } from '@/components/StatsDisplay';
import { ImageExport } from '@/components/ImageExport';
import { parseStravaArchive, filterActivities } from '@/utils/dataParser';
import { calculateStats } from '@/utils/statsCalculator';
import type { Stats } from '@/types/strava';

type AppState = 'landing' | 'loading' | 'stats';

function App() {
  const [state, setState] = useState<AppState>('landing');
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = async (file: File) => {
    setState('loading');
    setError(null);

    try {
      // Parse the archive
      const activities = await parseStravaArchive(file);

      // Filter for 2025 cycling activities
      const filteredActivities = filterActivities(activities, 2025, 'Vélo');

      if (filteredActivities.length === 0) {
        setError("Aucune activité vélo trouvée pour l'année 2025. Vérifiez votre archive.");
        setState('landing');
        return;
      }

      // Calculate stats
      const calculatedStats = calculateStats(filteredActivities);
      setStats(calculatedStats);
      setState('stats');
    } catch (err) {
      console.error('Error processing file:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue lors du traitement de votre archive.');
      setState('landing');
    }
  };

  const handleReset = () => {
    setState('landing');
    setStats(null);
    setError(null);
  };

  if (state === 'landing' || state === 'loading') {
    return (
      <Landing
        onFileSelect={handleFileSelect}
        isLoading={state === 'loading'}
        error={error || undefined}
      />
    );
  }

  if (state === 'stats' && stats) {
    return (
      <div className="bg-linear-to-br from-orange-50 via-white to-red-50">
        <StatsDisplay stats={stats} />
        <ImageExport
          stats={stats}
          onReset={handleReset}
        />
      </div>
    );
  }

  return null;
}

export default App;
