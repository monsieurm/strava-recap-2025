import { useState } from 'react';
import { Instagram, Twitter, Share2 } from 'lucide-react';
import { toPng } from 'html-to-image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ShareCard } from '@/components/ShareCard';
import type { Stats } from '@/types/strava';

interface ImageExportProps {
  onReset: () => void;
  stats: Stats;
}

type ExportFormat = {
  name: string;
  width: number;
  height: number;
  icon: React.ReactNode;
  description: string;
};

const EXPORT_FORMATS: ExportFormat[] = [
  {
    name: 'Instagram Story',
    width: 1080,
    height: 1920,
    icon: <Instagram className="w-4 h-4" />,
    description: '1080x1920',
  },
  {
    name: 'Instagram Post',
    width: 1080,
    height: 1080,
    icon: <Instagram className="w-4 h-4" />,
    description: '1080x1080',
  },
  {
    name: 'Twitter/X',
    width: 1200,
    height: 675,
    icon: <Twitter className="w-4 h-4" />,
    description: '1200x675',
  },
];

export function ImageExport({ onReset, stats }: ImageExportProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const exportShareCard = async (format: ExportFormat) => {
    setIsExporting(true);
    setError(null);

    try {
      const element = document.getElementById('share-card');
      if (!element) {
        throw new Error('Impossible de trouver la carte de partage');
      }

      // Use high pixel ratio for better quality
      const pixelRatio = 3;

      const dataUrl = await toPng(element, {
        quality: 1,
        pixelRatio: pixelRatio,
        backgroundColor: '#000000',
        cacheBust: true,
      });

      // Download the image
      const link = document.createElement('a');
      link.download = `strava-recap-2025-${format.name.toLowerCase().replace(/\s+/g, '-')}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Erreur lors de l\'export:', err);
      setError('Une erreur est survenue lors de l\'export de l\'image. Veuillez réessayer.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-8 pt-4 pb-8">
      {/* Hidden share card for export */}
      <div className="fixed -left-[9999px] -top-[9999px]">
        <ShareCard stats={stats} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Share2 className="w-6 h-6" />
            Partager votre récap
          </CardTitle>
          <CardDescription>
            Téléchargez votre récapitulatif au format image pour le partager sur les réseaux sociaux
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Preview */}
          <div className="flex justify-center p-8 bg-linear-to-br from-gray-50 to-gray-100 rounded-lg">
            <div className="scale-75 origin-center">
              <ShareCard stats={stats} />
            </div>
          </div>

          {/* Export buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {EXPORT_FORMATS.map((format) => (
              <Button
                key={format.name}
                variant="outline"
                className="h-auto flex-col gap-2 p-4"
                onClick={() => exportShareCard(format)}
                disabled={isExporting}
              >
                {format.icon}
                <div className="text-center">
                  <div className="font-semibold">{format.name}</div>
                  <div className="text-xs text-muted-foreground">{format.description}</div>
                </div>
              </Button>
            ))}
          </div>

          <div className="pt-4 border-t">
            <Button variant="ghost" onClick={onReset} className="w-full">
              Recommencer avec une autre archive
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

