import { useState } from 'react';
import { toPng } from 'html-to-image';
import { Button } from '@/components/ui/button';
import { OgImage } from '@/components/OgImage';

export function GenerateOg() {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateOgImage = async () => {
    setIsGenerating(true);
    try {
      const element = document.getElementById('og-image');
      if (!element) {
        throw new Error('Element not found');
      }

      const dataUrl = await toPng(element, {
        quality: 1,
        pixelRatio: 1,
        backgroundColor: '#f97316',
        cacheBust: true,
      });

      // Download the image
      const link = document.createElement('a');
      link.download = 'og-image.png';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Error generating OG image:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Générateur d'Image OpenGraph</h1>
          <p className="text-gray-600">
            Image de partage pour les réseaux sociaux (1200x630px)
          </p>
        </div>

        {/* Preview */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-center">
            <div className="scale-75 origin-center border-2 border-gray-300">
              <OgImage />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <Button onClick={generateOgImage} disabled={isGenerating} size="lg">
            {isGenerating ? 'Génération...' : 'Télécharger l\'image OG (1200x630)'}
          </Button>
        </div>

        {/* Hidden element for export */}
        <div className="fixed -left-[9999px] -top-[9999px]">
          <OgImage />
        </div>
      </div>
    </div>
  );
}
