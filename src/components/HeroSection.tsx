
import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      bg: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2005&q=80",
      title: "Experience the Ultimate Indoor Cricket",
      subtitle: "Professional gear, advanced bowling machines, and realistic playing conditions"
    },
    {
      bg: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Immersive VR Gaming Experience",
      subtitle: "Latest VR technology for sports simulation and entertainment"
    },
    {
      bg: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Professional Pickleball Courts",
      subtitle: "Join the fastest growing sport with our premium indoor facilities"
    },
    {
      bg: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      title: "Indoor Football Arena",
      subtitle: "5-a-side format with professional turf and scoring systems"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section 
      id="home" 
      className="h-screen relative flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Slider background */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.bg})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 z-20 p-2 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide} 
        className="absolute right-4 z-20 p-2 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Content */}
      <div className="container mx-auto text-center relative z-10 px-4">
        <div className="max-w-3xl mx-auto">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`transition-all duration-500 ${currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute'}`}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 mb-10">
                {slide.subtitle}
              </p>
            </div>
          ))}
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-sport-orange hover:bg-sport-orange/90 text-white text-lg px-8 py-6" 
              size="lg"
            >
              Book Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          
          </div>
        </div>
        
        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-sport-orange w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
