import { Bike } from 'lucide-react';
import type { Stats } from '@/types/strava';
import { formatTime, formatDistance, formatElevation } from '@/utils/statsCalculator';

interface ShareCardProps {
  stats: Stats;
}

export function ShareCard({ stats }: ShareCardProps) {
  return (
    <div
      id="share-card"
      className="w-[400px] h-[600px] bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white p-8 flex flex-col justify-between rounded-2xl"
      style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}>
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Bike
              className="size-14 text-orange-500"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-400 mb-1 font-medium">Nombre de sorties</p>
          <p className="text-4xl font-bold tracking-tight">
            {stats.totalActivities} {stats.totalActivities > 1 ? 'sorties' : 'sortie'}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-400 mb-1 font-medium">Jours actifs</p>
          <p className="text-4xl font-bold tracking-tight">
            {stats.activeDays} {stats.activeDays > 1 ? 'jours' : 'jour'}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-1 font-medium">Distance totale</p>
          <p className="text-4xl font-bold tracking-tight">{formatDistance(stats.totalDistance)}</p>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-1 font-medium">Temps total</p>
          <p className="text-4xl font-bold tracking-tight">{formatTime(stats.totalTime)}</p>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-1 font-medium">Dénivelé positif total</p>
          <p className="text-4xl font-bold tracking-tight">{formatElevation(stats.totalElevation)}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-orange-500 -mx-8 -mb-8 px-5 py-5 rounded-b-2xl">
        <p className="text-xs font-bold uppercase tracking-widest text-center">
          Faites votre récap sur <br /><a
            href="https://strava-recap-2025.matthieurenaut.com/"
            className="text-white underline">
            https://strava-recap-2025.matthieurenaut.com/
          </a>
        </p>
      </div>
    </div>
  );
}
