
import { useState } from "react";
import { X } from "lucide-react";

const GallerySection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1547941126-3d5322b218b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      caption: "Indoor cricket session",
      category: "Cricket"
    },
    {
      url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      caption: "Football tournament",
      category: "Football"
    },
    {
      url: "https://images.unsplash.com/photo-1649699294181-0525544db107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      caption: "Pickleball matches",
      category: "Pickleball"
    },
    {
      url: "https://images.unsplash.com/photo-1622979135240-caa6648190b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      caption: "VR gaming experience",
      category: "VR Gaming"
    },
    {
      url: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80",
      caption: "Cricket batting practice",
      category: "Cricket"
    },
    {
      url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1993&q=80",
      caption: "Football skills session",
      category: "Football"
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-sport-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-sport-blue mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Take a peek at the excitement and energy at our facilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md hover-scale"
              onClick={() => setSelected(image.url)}
            >
              <div className="aspect-[4/3]">
                <img 
                  src={image.url} 
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-white font-medium">{image.caption}</span>
                <span className="text-white/70 text-sm">{image.category}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selected && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full h-auto">
              <button 
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                onClick={() => setSelected(null)}
              >
                <X size={24} />
                <span className="sr-only">Close</span>
              </button>
              <img 
                src={selected} 
                alt="Enlarged gallery image" 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
