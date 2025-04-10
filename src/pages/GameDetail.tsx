
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const GameDetail = () => {
  const { gameName } = useParams();
  const [game, setGame] = useState<any>(null);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // This would typically be an API call, but we're using static data
    const games = {
      cricket: {
        name: "Cricket",
        image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Experience indoor cricket with state-of-the-art bowling machines and professional nets.",
        detailedDescription: "Our indoor cricket facility features professional-grade pitches, automated bowling machines with speed adjustments from 60-160 km/h, and high-quality equipment. Perfect for both beginners looking to learn and experienced players wanting to improve their technique.",
        features: [
          "Professional cricket pitches with realistic bounce",
          "Automated bowling machines with variable speed and spin",
          "HD video analysis of your batting technique",
          "Professional coaching available on request",
          "Tournament facilities for team events"
        ],
        pricing: "₹800 per hour / ₹2000 for 3 hours",
        maxPlayers: "6 players per session"
      },
      vr: {
        name: "VR Gaming",
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Immerse yourself in cutting-edge virtual reality sports experiences and simulations.",
        detailedDescription: "Step into the future with our state-of-the-art virtual reality gaming zones. Experience a wide range of sports and adventures in immersive virtual environments. From cricket simulations to extreme sports, our VR setups deliver an unparalleled gaming experience.",
        features: [
          "Latest Meta Quest and HTC Vive headsets",
          "Sports simulations including cricket, golf, and tennis",
          "Multiplayer capability for group experiences",
          "Dedicated VR arenas with motion tracking",
          "New games added monthly"
        ],
        pricing: "₹600 per hour / ₹1500 for 3 hours",
        maxPlayers: "4 players simultaneously"
      },
      pickleball: {
        name: "Pickleball",
        image: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Enjoy the fastest-growing sport in the world on our custom indoor courts.",
        detailedDescription: "Our premium pickleball courts are designed to provide the perfect playing experience for this fast-growing sport. With professional flooring, proper lighting, and quality equipment, you can enjoy competitive matches or casual games in a climate-controlled environment.",
        features: [
          "4 professional indoor pickleball courts",
          "Professional-grade paddles and balls provided",
          "Beginner-friendly lessons available",
          "Regular tournaments and leagues",
          "Court-side refreshment service"
        ],
        pricing: "₹500 per hour / ₹1200 for 3 hours",
        maxPlayers: "4 players per court"
      },
      football: {
        name: "Football",
        image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Play 5-a-side indoor football on our professional turf with atmospheric lighting.",
        detailedDescription: "Our indoor football arena features premium artificial turf that mimics the feel of natural grass while providing the perfect surface for fast-paced 5-a-side games. With professional lighting, scoreboard systems, and quality equipment, it's the ideal venue for friendly matches and mini-tournaments.",
        features: [
          "Professional 5-a-side indoor pitch",
          "High-quality artificial turf",
          "Electronic scoreboard and timing system",
          "Professional footballs and bibs provided",
          "Changing rooms with showers"
        ],
        pricing: "₹1000 per hour / ₹2500 for 3 hours",
        maxPlayers: "10 players (5-a-side)"
      }
    };
    
    // Convert game name to lowercase and replace spaces with hyphens
    const gameKey = gameName?.toLowerCase().replace(/ /g, "-") || "";
    
    // Normalize the game key for lookup
    const normalizedKey = 
      gameKey === "vr-gaming" ? "vr" : 
      gameKey === "box-cricket" || gameKey === "indoor-cricket" ? "cricket" : 
      gameKey;
    
    setGame(games[normalizedKey as keyof typeof games] || null);
    
  }, [gameName]);
  
  if (!game) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-24 flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Game Not Found</h1>
            <p className="mb-8">Sorry, we couldn't find information about this game.</p>
            <Link to="/#games">
              <Button>Back to Games</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${game.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">{game.name}</h1>
            </div>
          </div>
        </div>
        
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Link to="/#games" className="inline-flex items-center text-sport-blue hover:text-sport-orange transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all games
          </Link>
        </div>
        
        {/* Game Details */}
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:grid md:grid-cols-12">
              <div className="md:col-span-7 p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">About {game.name}</h2>
                <p className="text-gray-700 mb-6 text-lg">{game.detailedDescription}</p>
                
                <h3 className="text-xl font-bold mb-3">Features</h3>
                <ul className="space-y-2 mb-8">
                  {game.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-sport-green font-bold mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="bg-sport-orange hover:bg-sport-orange/90 text-white text-lg px-6 py-5" 
                  size="lg"
                >
                  Book Now
                </Button>
              </div>
              
              <div className="md:col-span-5 bg-gray-50 p-6 md:p-8">
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <h3 className="text-xl font-bold mb-3">Pricing</h3>
                  <p className="text-sport-blue text-xl font-semibold">{game.pricing}</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <h3 className="text-xl font-bold mb-3">Maximum Players</h3>
                  <p className="text-gray-700">{game.maxPlayers}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Reservation</h3>
                  <p className="text-gray-700 mb-4">Book in advance to secure your slot. Weekends fill up quickly!</p>
                  <p className="text-gray-700">For group bookings or events, please contact us directly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GameDetail;
