import { PresetSize } from '../types';

interface PresetSizesProps {
  selectedPreset: PresetSize | null;
  onSelectPreset: (preset: PresetSize) => void;
}

const PRESETS: PresetSize[] = [
  { name: 'Hero Banner', width: 1920, height: 680 },
  { name: 'UI Card', width: 560, height: 374 },
  { name: 'Promo Banner', width: 1000, height: 1000 },
  { name: 'Open Graph', width: 1200, height: 630 },
];

export function PresetSizes({ selectedPreset, onSelectPreset }: PresetSizesProps) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-lse-grey-7 mb-3">Predefined Sizes</h3>
      <div className="grid grid-cols-1 gap-2">
        {PRESETS.map((preset) => (
          <button
            key={preset.name}
            onClick={() => onSelectPreset(preset)}
            className={`p-3 rounded-lg border-2 text-left transition-all ${
              selectedPreset?.name === preset.name
                ? 'border-lse-red bg-lse-grey-2 text-lse-red'
                : 'border-lse-grey-3 hover:border-lse-mid-grey text-lse-grey-7'
            }`}
          >
            <div className="font-medium text-sm">{preset.name}</div>
            <div className="text-xs text-lse-mid-grey mt-1">
              {preset.width} × {preset.height}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
