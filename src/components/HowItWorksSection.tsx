
import { MousePointerClick, MapPin, Trophy } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <MousePointerClick className="w-12 h-12 text-white" />,
      title: "Select a Game",
      description: "Choose your favorite sport from our variety of options. Book online or give us a call to reserve your slot.",
      bgColor: "bg-sport-blue"
    },
    {
      icon: <MapPin className="w-12 h-12 text-white" />,
      title: "Visit the Center",
      description: "Arrive 15 minutes before your scheduled time. Our staff will provide equipment and brief you on the rules.",
      bgColor: "bg-sport-orange"
    },
    {
      icon: <Trophy className="w-12 h-12 text-white" />,
      title: "Play and Enjoy",
      description: "Dive into the action! Enjoy your game, compete with friends, and make memorable experiences.",
      bgColor: "bg-sport-green"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <div className="w-20 h-1 bg-sport-purple mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Getting started at Googly Box Cricket is easy! Just follow these simple steps.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`${step.bgColor} w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                  {step.icon}
                </div>
                <span className="bg-gray-100 text-gray-500 font-bold py-1 px-4 rounded-full mb-4">
                  Step {index + 1}
                </span>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
