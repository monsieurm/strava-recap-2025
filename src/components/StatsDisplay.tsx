import { useEffect } from 'react';
import { Bike, Calendar, Clock, Mountain, TrendingUp, Award, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Stats } from '@/types/strava';
import { formatTime, formatDistance, formatElevation, formatSpeed } from '@/utils/statsCalculator';
import { cn } from '@/lib/utils';

// Umami tracking
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, unknown>) => void;
    };
  }
}

interface StatsDisplayProps {
  stats: Stats;
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
  className?: string;
}

function StatCard({ icon, label, value, color, className }: StatCardProps) {
  return (
    <Card className={cn('transition-shadow bg-white', className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <div className={`inline-flex p-2 rounded-lg ${color}`}>{icon}</div>
            <div>
              <p className="text-sm text-muted-foreground">{label}</p>
              <p className="text-3xl font-bold mt-1">{value}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsDisplay({ stats }: StatsDisplayProps) {
  // Track stats view with Umami
  useEffect(() => {
    if (window.umami) {
      window.umami.track('stats-generated');
    }
  }, []);

  return (
    <div
      id="stats-container"
      className="p-8 pb-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-in fade-in duration-500">
          <Badge className="text-sm px-4 py-1 text-white bg-orange-600">Année 2025</Badge>
          <h1 className="text-5xl font-bold bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Votre année à vélo</h1>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-700">
          <StatCard
            icon={<Calendar className="w-6 h-6 text-red-600" />}
            label="Nombre de sorties"
            value={stats.totalActivities.toString()}
            color="bg-red-100"
            className="md:col-span-2 lg:col-start-2 lg:col-span-1"
            />

          <StatCard
            icon={<Calendar className="w-6 h-6 text-orange-600" />}
            label="Jours actifs"
            value={stats.activeDays.toString()}
            color="bg-orange-100"
            className="col-start-1"
          />

          <StatCard
            icon={<TrendingUp className="w-6 h-6 text-blue-600" />}
            label="Distance totale"
            value={formatDistance(stats.totalDistance)}
            color="bg-blue-100"
          />

          <StatCard
            icon={<Clock className="w-6 h-6 text-green-600" />}
            label="Temps total"
            value={formatTime(stats.totalTime)}
            color="bg-green-100"
          />

          <StatCard
            icon={<Mountain className="w-6 h-6 text-purple-600" />}
            label="Dénivelé positif"
            value={formatElevation(stats.totalElevation)}
            color="bg-purple-100"
          />

          <StatCard
            icon={<Zap className="w-6 h-6 text-yellow-600" />}
            label="Vitesse moyenne"
            value={formatSpeed(stats.averageSpeed)}
            color="bg-yellow-100"
          />

          <StatCard
            icon={<Award className="w-6 h-6 text-cyan-600" />}
            label="Plus longue sortie"
            value={formatDistance(stats.longestRide)}
            color="bg-cyan-100"
          />
        </div>

        {/* Favorite Bike */}
        {stats.favoriteBike && (
          <Card className="animate-in fade-in duration-1000">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bike className="w-6 h-6 text-orange-600" />
                Vélo préféré
              </CardTitle>
              <CardDescription>Le vélo que vous avez le plus utilisé cette année</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">{stats.favoriteBike}</p>
            </CardContent>
          </Card>
        )}

        {/* Summary Card */}
        <Card className="bg-linear-to-r from-orange-500 to-red-500 text-white animate-in fade-in duration-1000">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Félicitations ! 🎉</h2>
              <p className="text-lg opacity-90">
                Vous avez parcouru l'équivalent de <span className="font-bold">{Math.round(stats.totalDistance / 40)} fois</span> la distance Paris-Bruxelles !
              </p>
              <p className="text-sm opacity-80">Continuez comme ça en 2026 ! 🚴‍♂️</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
