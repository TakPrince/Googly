
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GamesSection = () => {
  const games = [
    {
      name: "Cricket",
      slug: "cricket",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Experience indoor cricket with state-of-the-art bowling machines and professional nets."
    },
    {
      name: "VR Gaming",
      slug: "vr-gaming",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Immerse yourself in cutting-edge virtual reality sports experiences and simulations."
    },
    {
      name: "Pickleball",
      slug: "pickleball",
      image: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Enjoy the fastest-growing sport in the world on our custom indoor courts."
    },
    {
      name: "Football",
      slug: "football",
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Play 5-a-side indoor football on our professional turf with atmospheric lighting."
    }
  ];

  return (
    <section id="games" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Games We Offer</h2>
          <div className="w-20 h-1 bg-sport-green mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Discover our range of exciting indoor sports and activities
          </p>
        </div>
        
        {/* Mobile view - Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {games.map((game, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none shadow-lg overflow-hidden">
                    <div className="relative h-52 overflow-hidden">
                      <img 
                        src={game.image} 
                        alt={game.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="text-xl font-bold text-white">{game.name}</h3>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-gray-600">{game.description}</p>
                      <Link 
                        to={`/games/${game.slug}`}
                        className="inline-flex items-center text-sport-blue mt-3 hover:text-sport-orange transition-colors"
                      >
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 sm:left-4" />
            <CarouselNext className="right-2 sm:right-4" />
          </Carousel>
        </div>
        
        {/* Desktop view - Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <Card key={index} className="border-none shadow-lg overflow-hidden hover-scale">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{game.name}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600">{game.description}</p>
                <Link 
                  to={`/games/${game.slug}`}
                  className="inline-flex items-center text-sport-blue mt-3 hover:text-sport-orange transition-colors"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
