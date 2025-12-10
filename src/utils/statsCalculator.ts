import type { Activity, Stats } from '@/types/strava';

export function calculateStats(activities: Activity[]): Stats {
  if (activities.length === 0) {
    return {
      activeDays: 0,
      totalDistance: 0,
      totalTime: 0,
      totalElevation: 0,
      totalActivities: 0,
      longestRide: 0,
      averageSpeed: 0,
      favoriteBike: '',
      activities: [],
    };
  }

  // Calculate total distance (in km)
  const totalDistance = activities.reduce((sum, activity) => sum + activity.distance, 0);

  // Calculate total time (in seconds)
  const totalTime = activities.reduce((sum, activity) => sum + activity.elapsedTime, 0);

  // Calculate total elevation gain (in meters)
  const totalElevation = activities.reduce((sum, activity) => sum + activity.elevationGain, 0);

  // Calculate active days (unique dates)
  const uniqueDates = new Set(
    activities.map((activity) => activity.date.toISOString().split('T')[0])
  );
  const activeDays = uniqueDates.size;

  // Find longest ride
  const longestRide = Math.max(...activities.map((activity) => activity.distance));

  // Calculate average speed (km/h)
  // Average speed = total distance / total time in hours
  const totalTimeInHours = totalTime / 3600;
  const averageSpeed = totalTimeInHours > 0 ? totalDistance / totalTimeInHours : 0;

  // Find favorite bike (most used)
  const bikeCount = new Map<string, number>();
  activities.forEach((activity) => {
    if (activity.bike) {
      const count = bikeCount.get(activity.bike) || 0;
      bikeCount.set(activity.bike, count + 1);
    }
  });

  let favoriteBike = '';
  let maxCount = 0;
  bikeCount.forEach((count, bike) => {
    if (count > maxCount) {
      maxCount = count;
      favoriteBike = bike;
    }
  });

  return {
    activeDays,
    totalDistance: Math.round(totalDistance * 10) / 10, // Round to 1 decimal
    totalTime,
    totalElevation: Math.round(totalElevation),
    totalActivities: activities.length,
    longestRide: Math.round(longestRide * 10) / 10, // Round to 1 decimal
    averageSpeed: Math.round(averageSpeed * 10) / 10, // Round to 1 decimal
    favoriteBike,
    activities,
  };
}

export function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  if (hours > 0) {
    return `${hours} h`;
  }
  return `${minutes} m`;
}

export function formatDistance(km: number): string {
  return `${km.toLocaleString('fr-FR', { maximumFractionDigits: 1 })} km`;
}

export function formatElevation(meters: number): string {
  return `${meters.toLocaleString('fr-FR')} m`;
}

export function formatSpeed(kmh: number): string {
  return `${kmh.toLocaleString('fr-FR', { maximumFractionDigits: 1 })} km/h`;
}

