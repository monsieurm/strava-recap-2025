import { Bike } from 'lucide-react';

export function OgImage() {
  return (
    <div
      id="og-image"
      className="w-[1200px] h-[630px] bg-linear-to-br from-orange-500 to-red-600 text-white p-16 flex flex-col justify-between"
      style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}>
      {/* Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Bike className="size-20 text-white" strokeWidth={2} />
          <div>
            <h1 className="text-7xl font-bold">Strava Recap 2025</h1>
            <p className="text-3xl text-white/90 mt-2">Votre année à vélo</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <p className="text-4xl font-semibold">
          Générez votre récapitulatif annuel Strava
        </p>
        <p className="text-2xl text-white/90">
          📊 Statistiques complètes • 📱 Export multi-formats • 🔒 100% privé
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">strava-recap-2025.matthieurenaut.com</p>
        <div className="text-xl text-white/80">Gratuit et open source</div>
      </div>
    </div>
  );
}
