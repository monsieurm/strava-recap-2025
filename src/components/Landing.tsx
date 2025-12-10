import { useState, useCallback } from 'react';
import { Upload, FileArchive } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface LandingProps {
  onFileSelect: (file: File) => void;
  isLoading?: boolean;
  error?: string;
}

export function Landing({ onFileSelect, isLoading = false, error }: LandingProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const files = Array.from(e.dataTransfer.files);
      const zipFile = files.find(file => file.name.endsWith('.zip'));

      if (zipFile) {
        onFileSelect(zipFile);
      }
    },
    [onFileSelect],
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        onFileSelect(file);
      }
    },
    [onFileSelect],
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-orange-100 rounded-full">
              <FileArchive className="w-12 h-12 text-orange-600" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">Strava Recap 2025</CardTitle>
          <CardDescription className="text-base mt-2">Générez votre récapitulatif annuel de vélo à partir de votre archive Strava</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div
            className={`
              border-2 border-dashed rounded-lg p-12 text-center transition-colors
              ${isDragging ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-orange-400'}
              ${isLoading ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}
            `}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-input')?.click()}>
            <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-semibold mb-2">{isLoading ? 'Analyse en cours...' : 'Déposez votre archive Strava ici'}</h3>
            <p className="text-sm text-gray-600 mb-4">ou cliquez pour sélectionner un fichier</p>
            <p className="text-xs text-gray-500">Format accepté : fichier ZIP</p>
          </div>

          <input
            id="file-input"
            type="file"
            accept=".zip"
            onChange={handleFileInput}
            className="hidden"
            disabled={isLoading}
          />

          <div className="space-y-3 text-sm text-gray-600">
            <h4 className="font-semibold text-gray-900">Comment obtenir votre archive ?</h4>
            <ol className="list-decimal list-inside space-y-2 pl-2">
              <li>Connectez-vous à votre compte Strava</li>
              <li>Allez dans Paramètres → Mon compte</li>
              <li>Cliquez sur "Télécharger ou supprimer votre compte"</li>
              <li>Demandez votre archive de données</li>
              <li>Téléchargez le fichier ZIP reçu par email</li>
            </ol>
            <p>
              Ou cliquez sur ce{' '}
              <a
                href="https://www.strava.com/athlete/delete_your_account"
                target="_blank"
                rel="noopener noreferrer"
                className="underline">
                lien
              </a>
            </p>
          </div>

          <Alert>
            <AlertDescription className="text-sm">🔒 Vos données restent privées. Tout le traitement se fait localement dans votre navigateur, aucune donnée n'est envoyée à un serveur.</AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
