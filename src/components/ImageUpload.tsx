import { Upload } from 'lucide-react';
import { useRef } from 'react';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  hasImage: boolean;
}

export function ImageUpload({ onImageSelect, hasImage }: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      onImageSelect(file);
    } else {
      alert('Please upload a PNG or JPG file');
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="mb-6">
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg"
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        onClick={handleClick}
        className="w-full py-4 px-6 border-2 border-dashed border-lse-grey-3 rounded-lg hover:border-lse-red hover:bg-lse-grey-2 transition-colors flex flex-col items-center justify-center gap-2"
      >
        <Upload className="w-8 h-8 text-lse-mid-grey" />
        <span className="text-sm font-medium text-lse-grey-7">
          {hasImage ? 'Change Image' : 'Upload Image'}
        </span>
        <span className="text-xs text-lse-mid-grey">PNG or JPG</span>
      </button>
    </div>
  );
}
