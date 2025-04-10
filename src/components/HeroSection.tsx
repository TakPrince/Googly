
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center pt-16 pb-24 px-4 overflow-hidden bg-gradient-to-r from-sport-blue/10 to-sport-green/10"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight">
            Experience the Ultimate <span className="text-sport-blue">Indoor Sports</span> Adventure!
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10">
            Unleash your competitive spirit with Cricket, VR Gaming, Pickleball, and Football all under one roof.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-sport-orange hover:bg-sport-orange/90 text-white text-lg px-8 py-6" 
              size="lg"
            >
              Book Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              className="border-sport-blue text-sport-blue hover:bg-sport-blue/10 text-lg px-8 py-6"
              size="lg"
            >
              Explore Games
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {["Cricket", "VR Gaming", "Pickleball", "Football"].map((game) => (
            <div 
              key={game}
              className="bg-white/80 backdrop-blur-sm py-4 px-6 rounded-lg shadow-lg hover-scale"
            >
              <h3 className="font-bold text-sport-blue">{game}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
