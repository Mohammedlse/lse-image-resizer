export interface PresetSize {
  name: string;
  width: number;
  height: number;
}

export interface CropArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

export type ExportFormat = 'png' | 'jpg';
