import { Download } from 'lucide-react';
import { ExportFormat } from '../types';

interface ExportPanelProps {
  onExport: (format: ExportFormat) => void;
  isExporting: boolean;
  targetWidth: number;
  targetHeight: number;
}

export function ExportPanel({ onExport, isExporting, targetWidth, targetHeight }: ExportPanelProps) {
  return (
    <div className="bg-white rounded-lg border border-lse-grey-3 p-4">
      <h3 className="text-sm font-semibold text-lse-grey-7 mb-3">Export Image</h3>

      <div className="mb-4 p-3 bg-lse-grey-2 rounded-lg">
        <div className="text-xs text-lse-mid-grey mb-1">Output Dimensions</div>
        <div className="text-lg font-bold text-lse-grey-7">
          {targetWidth} × {targetHeight}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => onExport('png')}
          disabled={isExporting}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-lse-red text-white rounded-lg hover:bg-lse-dark-grey transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          <Download className="w-4 h-4" />
          PNG
        </button>
        <button
          onClick={() => onExport('jpg')}
          disabled={isExporting}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-lse-red text-white rounded-lg hover:bg-lse-dark-grey transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          <Download className="w-4 h-4" />
          JPG
        </button>
      </div>

      {isExporting && (
        <div className="mt-3 text-center text-sm text-lse-mid-grey">
          Preparing download...
        </div>
      )}
    </div>
  );
}
