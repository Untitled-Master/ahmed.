import { useState } from 'react';
import { BlurFade } from "../magicui/blur-fade";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Maximize2, X } from "lucide-react";

const images = Array.from({ length: 6 }, (_, i) => {
  return `https://www.nitch.com/content/notes/1739306197-${i}.jpg`;
});

const ModernGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-[#09090B] px-4 py-12">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#FAFAFA]">𝙞 𝙩𝙝𝙞𝙣𝙠 𝙩𝙝𝙚𝙧𝙚𝙛𝙤𝙧𝙚 𝙞 𝙖𝙢</h2>
          <p className="mt-2 text-lg text-[#FAFAFA]/60">
          - René Descartes
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((imageUrl, idx) => (
            <BlurFade 
              key={imageUrl} 
              delay={0.15 + idx * 0.05} 
              inView
              className="group relative mb-4 block w-full"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={imageUrl}
                  alt={`Gallery image ${idx + 1}`}
                  loading="lazy"
                  className="w-full transform object-cover transition duration-300 ease-in-out hover:scale-105"
                />
                <div 
                  onClick={() => handleImageClick(imageUrl)}
                  className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <Maximize2 className="h-8 w-8 text-[#FAFAFA]" />
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        <Dialog 
          open={Boolean(selectedImage)} 
          onOpenChange={handleCloseModal}
        >
          <DialogContent className="max-w-[0vw] max-h-[40vw] bg-[#09090B] p-0 sm:max-w-[25vw]">
            <button
              onClick={handleCloseModal}
              className="absolute right-4 top-4 rounded-full bg-[#09090B]/80 p-2 text-[#FAFAFA] hover:bg-[#09090B]"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage}
              alt="Selected gallery image"
              className="h-full w-full rounded-lg object-contain"
            />
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
};

export default ModernGallery;