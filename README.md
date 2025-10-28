# LSE Image Resizer & Cropper

A professional image cropping and resizing tool built with React and TypeScript, designed with the London School of Economics branding and colour scheme.

**Created by:** Mohammed Abdulmajeed  
**License:** Open Source

## 🚀 Features

- **Image Upload**: Support for PNG and JPG image formats
- **Predefined Sizes**: Quick selection from common image dimensions:
  - Hero Banner (1920 × 680)
  - UI Card (560 × 374) 
  - Promo Banner (1000 × 1000)
  - Open Graph (1200 × 630)
- **Custom Dimensions**: Set your own width and height requirements
- **Interactive Cropping**: Drag, zoom, and position your image with precision
- **Multiple Export Formats**: Download as PNG or JPG
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **LSE Branding**: Professional styling with official LSE colors and typography

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 7.1.12
- **Styling**: Tailwind CSS 3.4.1 with custom LSE color palette
- **Image Cropping**: react-easy-crop 5.5.3
- **Icons**: Lucide React 0.344.0
- **Development**: ESLint, PostCSS, Autoprefixer

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd LSE-Image-Resizer-Cropper
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 How to Use

1. **Upload Image**: Click the upload area and select a PNG or JPG image
2. **Choose Dimensions**: Select from predefined sizes or enter custom dimensions
3. **Crop & Position**: Use the interactive cropper to position your image perfectly
4. **Adjust Zoom**: Use the zoom slider to fine-tune the crop area
5. **Export**: Download your resized image as PNG or JPG

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ImageUpload.tsx      # File upload component
│   ├── PresetSizes.tsx      # Predefined size selection
│   ├── CustomSize.tsx       # Custom dimension input
│   ├── CropEditor.tsx       # Interactive image cropper
│   └── ExportPanel.tsx      # Export functionality
├── utils/
│   └── cropImage.ts         # Image processing utilities
├── types.ts                 # TypeScript type definitions
├── App.tsx                  # Main application component
└── main.tsx                 # Application entry point
```

## 🎨 Design System

The application uses the official LSE color palette:

- **Primary Red**: #E0112b
- **Greys**: Various shades from #F4F4F4 to #393d3e
- **Secondary Colors**: Yellow, lime green, mint green, blues, and purples
- **Typography**: Roboto font family

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## 🔧 Configuration

The project includes configuration for:
- **Vite**: Modern build tool with React plugin
- **Tailwind CSS**: Utility-first CSS framework with custom LSE colors
- **TypeScript**: Type safety and better development experience
- **ESLint**: Code linting and formatting

## 🤝 Contributing

This is an open-source project. Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

## 📄 License

This project is open source and available under standard open source terms.

## 👨‍💻 Author

**Mohammed Abdulmajeed**

---

*Professional Image Resizing Tool for the London School of Economics and Political Science*