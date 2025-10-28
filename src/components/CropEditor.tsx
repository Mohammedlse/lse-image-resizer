import { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { ZoomIn, ZoomOut } from 'lucide-react';
import { CropArea } from '../types';

interface CropEditorProps {
  image: string;
  targetWidth: number;
  targetHeight: number;
  onCropComplete: (croppedArea: CropArea) => void;
}

export function CropEditor({ image, targetWidth, targetHeight, onCropComplete }: CropEditorProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const aspect = targetWidth / targetHeight;

  const handleCropComplete = useCallback(
    (_: any, croppedAreaPixels: any) => {
      onCropComplete(croppedAreaPixels);
    },
    [onCropComplete]
  );

  return (
    <div className="flex flex-col h-full">
      <div className="relative flex-1 bg-black rounded-lg overflow-hidden" style={{ minHeight: '400px' }}>
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={aspect}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={handleCropComplete}
        />
      </div>

      <div className="mt-4 px-4 py-3 bg-white rounded-lg border border-gray-200">
        <div className="flex items-center gap-3">
          <ZoomOut className="w-5 h-5 text-gray-400" />
          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer zoom-slider"
          />
          <ZoomIn className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-gray-600 font-medium w-12 text-right">
            {Math.round(zoom * 100)}%
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Drag to position • Scroll or use slider to zoom
        </p>
      </div>
    </div>
  );
}
