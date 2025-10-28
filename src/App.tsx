import { useState, useCallback } from 'react';
import { ImageIcon } from 'lucide-react';
import { ImageUpload } from './components/ImageUpload';
import { PresetSizes } from './components/PresetSizes';
import { CustomSize } from './components/CustomSize';
import { CropEditor } from './components/CropEditor';
import { ExportPanel } from './components/ExportPanel';
import { PresetSize, CropArea, ExportFormat } from './types';
import { getCroppedImg } from './utils/cropImage';

function App() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<PresetSize | null>(null);
  const [customWidth, setCustomWidth] = useState(1200);
  const [customHeight, setCustomHeight] = useState(630);
  const [isCustomActive, setIsCustomActive] = useState(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<CropArea | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  const handleImageSelect = useCallback((file: File) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setImageSrc(reader.result as string);
      if (!selectedPreset && !isCustomActive) {
        setSelectedPreset({ name: 'Open Graph', width: 1200, height: 630 });
      }
    });
    reader.readAsDataURL(file);
  }, [selectedPreset, isCustomActive]);

  const handlePresetSelect = useCallback((preset: PresetSize) => {
    setSelectedPreset(preset);
    setIsCustomActive(false);
  }, []);

  const handleCustomSizeChange = useCallback((width: number, height: number) => {
    setCustomWidth(width);
    setCustomHeight(height);
  }, []);

  const handleCustomActivate = useCallback(() => {
    setIsCustomActive(true);
    setSelectedPreset(null);
  }, []);

  const handleCropComplete = useCallback((croppedArea: CropArea) => {
    setCroppedAreaPixels(croppedArea);
  }, []);

  const handleExport = useCallback(async (format: ExportFormat) => {
    if (!imageSrc || !croppedAreaPixels) return;

    setIsExporting(true);
    try {
      const targetWidth = isCustomActive ? customWidth : selectedPreset?.width || 1200;
      const targetHeight = isCustomActive ? customHeight : selectedPreset?.height || 630;

      const croppedImageUrl = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        targetWidth,
        targetHeight,
        format
      );

      const link = document.createElement('a');
      link.download = `resized-image-${targetWidth}x${targetHeight}.${format}`;
      link.href = croppedImageUrl;
      link.click();

      URL.revokeObjectURL(croppedImageUrl);
    } catch (error) {
      console.error('Error exporting image:', error);
      alert('Failed to export image. Please try again.');
    } finally {
      setIsExporting(false);
    }
  }, [imageSrc, croppedAreaPixels, isCustomActive, customWidth, customHeight, selectedPreset]);

  const currentWidth = isCustomActive ? customWidth : selectedPreset?.width || 1200;
  const currentHeight = isCustomActive ? customHeight : selectedPreset?.height || 630;

  return (
    <div className="min-h-screen bg-lse-grey-2">
      <header className="bg-lse-red text-white py-4 shadow-sm border-b border-lse-dark-grey/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ImageIcon className="w-6 h-6" />
              <div>
                <h1 className="text-xl font-semibold">LSE Image Resizer</h1>
                <p className="text-xs text-lse-grey-2/80">Professional Image Cropping & Resizing Tool</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center text-xs text-lse-grey-2/60">
              <span>London School of Economics</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-5 sticky top-6">
              <ImageUpload onImageSelect={handleImageSelect} hasImage={!!imageSrc} />

              {imageSrc && (
                <>
                  <PresetSizes
                    selectedPreset={selectedPreset}
                    onSelectPreset={handlePresetSelect}
                  />

                  <CustomSize
                    width={customWidth}
                    height={customHeight}
                    onSizeChange={handleCustomSizeChange}
                    isActive={isCustomActive}
                    onActivate={handleCustomActivate}
                  />
                </>
              )}
            </div>
          </aside>

          <section className="lg:col-span-6">
            <div className="bg-white rounded-lg shadow-md p-5 h-full">
              {imageSrc ? (
                <>
                  <div className="mb-4">
                    <h2 className="text-lg font-bold text-gray-900">Edit & Crop</h2>
                    <p className="text-sm text-gray-600">
                      Target: {currentWidth} × {currentHeight}
                    </p>
                  </div>
                  <CropEditor
                    image={imageSrc}
                    targetWidth={currentWidth}
                    targetHeight={currentHeight}
                    onCropComplete={handleCropComplete}
                  />
                </>
              ) : (
                  <div className="flex flex-col items-center justify-center h-full min-h-[500px] text-center">
                  <ImageIcon className="w-16 h-16 text-lse-mid-grey mb-4" />
                  <h2 className="text-xl font-semibold text-lse-grey-7 mb-2">
                    No Image Selected
                  </h2>
                  <p className="text-lse-mid-grey max-w-md">
                    Upload an image to get started with cropping and resizing. Choose from
                    predefined sizes or create your own custom dimensions.
                  </p>
                </div>
              )}
            </div>
          </section>

          <aside className="lg:col-span-3">
            <div className="sticky top-6 space-y-4">
              {imageSrc && (
                <ExportPanel
                  onExport={handleExport}
                  isExporting={isExporting}
                  targetWidth={currentWidth}
                  targetHeight={currentHeight}
                />
              )}

              <div className="bg-white rounded-lg shadow-md p-5">
                <h3 className="text-sm font-semibold text-lse-grey-7 mb-3">How to Use</h3>
                <ol className="text-xs text-lse-mid-grey space-y-2">
                  <li className="flex gap-2">
                    <span className="font-bold text-lse-red">1.</span>
                    <span>Upload a PNG or JPG image</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-lse-red">2.</span>
                    <span>Select a preset or enter custom dimensions</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-lse-red">3.</span>
                    <span>Drag and zoom to position your image</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-lse-red">4.</span>
                    <span>Download as PNG or JPG</span>
                  </li>
                </ol>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-lse-white border-t border-lse-grey-3 mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-lse-mid-grey">
          <p>London School of Economics and Political Science</p>
          <p className="mt-1 text-xs text-lse-mid-grey">
            Professional Image Resizing Tool
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
