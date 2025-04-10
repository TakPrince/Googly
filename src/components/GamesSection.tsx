
import { Button } from "@/components/ui/button";

const GamesSection = () => {
  const games = [
    {
      name: "Cricket",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2005&q=80",
      description: "Experience indoor cricket with our state-of-the-art bowling machines, professional nets, and realistic pitch conditions.",
      features: ["Professional gear", "Auto bowling machine", "Multiple pitches", "Performance tracking"]
    },
    {
      name: "VR Gaming",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Immerse yourself in cutting-edge virtual reality sports experiences, from cricket simulations to fantasy sports worlds.",
      features: ["Latest VR hardware", "Multiple game options", "Immersive environments", "Multiplayer capabilities"]
    },
    {
      name: "Pickleball",
      image: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Enjoy the fastest-growing sport in the world on our custom courts with professional equipment and coaching available.",
      features: ["Professional courts", "Equipment provided", "Beginner friendly", "Tournament setup"]
    },
    {
      name: "Football",
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      description: "Play 5-a-side indoor football on our professional turf with automated scorekeeping and atmospheric lighting.",
      features: ["Indoor turf", "5-a-side format", "Pro ball & goals", "Score tracking"]
    }
  ];

  return (
    <section id="games" className="section-padding bg-sport-lightBg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Games We Offer</h2>
          <div className="w-20 h-1 bg-sport-green mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Discover our range of exciting indoor sports and activities suitable for all skill levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {games.map((game, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover-scale"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">{game.name}</h3>
                  <span className="bg-sport-blue/10 text-sport-blue px-3 py-1 rounded-full text-sm font-medium">Popular</span>
                </div>
                <p className="text-gray-600 mb-5">
                  {game.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-gray-700">Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {game.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-sport-orange mr-2"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-sport-blue to-sport-green text-white">
                  Book {game.name} Session
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
