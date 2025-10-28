import { Lock, Unlock } from 'lucide-react';
import { useState, useEffect } from 'react';

interface CustomSizeProps {
  width: number;
  height: number;
  onSizeChange: (width: number, height: number) => void;
  isActive: boolean;
  onActivate: () => void;
}

export function CustomSize({ width, height, onSizeChange, isActive, onActivate }: CustomSizeProps) {
  const [localWidth, setLocalWidth] = useState(width);
  const [localHeight, setLocalHeight] = useState(height);
  const [lockAspect, setLockAspect] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(width / height);

  useEffect(() => {
    setLocalWidth(width);
    setLocalHeight(height);
    setAspectRatio(width / height);
  }, [width, height]);

  const handleWidthChange = (value: string) => {
    const newWidth = parseInt(value) || 0;
    setLocalWidth(newWidth);

    if (lockAspect && newWidth > 0) {
      const newHeight = Math.round(newWidth / aspectRatio);
      setLocalHeight(newHeight);
      onSizeChange(newWidth, newHeight);
    } else {
      onSizeChange(newWidth, localHeight);
    }

    if (!isActive) onActivate();
  };

  const handleHeightChange = (value: string) => {
    const newHeight = parseInt(value) || 0;
    setLocalHeight(newHeight);

    if (lockAspect && newHeight > 0) {
      const newWidth = Math.round(newHeight * aspectRatio);
      setLocalWidth(newWidth);
      onSizeChange(newWidth, newHeight);
    } else {
      onSizeChange(localWidth, newHeight);
    }

    if (!isActive) onActivate();
  };

  const toggleLockAspect = () => {
    if (!lockAspect) {
      setAspectRatio(localWidth / localHeight);
    }
    setLockAspect(!lockAspect);
  };

  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-lse-grey-7 mb-3">Custom Size</h3>
      <div className={`p-4 rounded-lg border-2 transition-all ${
        isActive ? 'border-lse-red bg-lse-grey-2' : 'border-lse-grey-3'
      }`}>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="text-xs text-lse-mid-grey block mb-1">Width (px)</label>
            <input
              type="number"
              value={localWidth}
              onChange={(e) => handleWidthChange(e.target.value)}
              className="w-full px-3 py-2 border border-lse-grey-3 rounded focus:outline-none focus:border-lse-red"
              min="1"
            />
          </div>
          <div>
            <label className="text-xs text-lse-mid-grey block mb-1">Height (px)</label>
            <input
              type="number"
              value={localHeight}
              onChange={(e) => handleHeightChange(e.target.value)}
              className="w-full px-3 py-2 border border-lse-grey-3 rounded focus:outline-none focus:border-lse-red"
              min="1"
            />
          </div>
        </div>
        <button
          onClick={toggleLockAspect}
          className={`flex items-center gap-2 text-xs font-medium transition-colors ${
            lockAspect ? 'text-lse-red' : 'text-lse-mid-grey'
          }`}
        >
          {lockAspect ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
          Lock Aspect Ratio
        </button>
      </div>
    </div>
  );
}
