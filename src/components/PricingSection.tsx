
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const pricingOptions = [
    {
      game: "Cricket",
      price: 25,
      color: "border-sport-blue",
      bgColor: "bg-sport-blue",
      textColor: "text-sport-blue",
      features: [
        "Professional cricket equipment",
        "Auto bowling machine",
        "Performance analysis",
        "Coaching available (add-on)",
      ],
    },
    {
      game: "VR Gaming",
      price: 30,
      color: "border-sport-purple",
      bgColor: "bg-sport-purple",
      textColor: "text-sport-purple",
      features: [
        "Latest VR headsets",
        "Multiple game choices",
        "Comfortable gaming stations",
        "Multiplayer sessions",
      ],
      popular: true,
    },
    {
      game: "Pickleball",
      price: 20,
      color: "border-sport-orange",
      bgColor: "bg-sport-orange",
      textColor: "text-sport-orange",
      features: [
        "Professional pickleball courts",
        "Equipment provided",
        "Court booking for 60 minutes",
        "Coaching available (add-on)",
      ],
    },
    {
      game: "Football",
      price: 40,
      color: "border-sport-green",
      bgColor: "bg-sport-green",
      textColor: "text-sport-green",
      features: [
        "Indoor turf pitch",
        "Professional footballs",
        "Team play (up to 5-a-side)",
        "Evening lighting",
      ],
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
          <div className="w-20 h-1 bg-sport-orange mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Affordable rates for world-class indoor sports experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`border-t-4 ${option.color} bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${option.popular ? 'relative' : ''}`}
            >
              {option.popular && (
                <div className="absolute top-0 right-0">
                  <div className={`${option.bgColor} text-white py-1 px-4 text-xs font-bold uppercase tracking-wider shadow-md transform rotate-45 translate-x-5 -translate-y-1`}>
                    Popular
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <h3 className={`text-xl font-bold ${option.textColor} mb-2`}>
                  {option.game}
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">${option.price}</span>
                  <span className="text-gray-500 ml-2">/ hour</span>
                </div>
                <ul className="mb-6 space-y-3">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className={`h-5 w-5 ${option.textColor} shrink-0 mr-2`} />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${option.bgColor} hover:opacity-90 text-white`}
                  variant={option.popular ? "default" : "outline"}
                >
                  Book {option.game}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-3 text-center">Group & Corporate Packages</h3>
          <p className="text-gray-600 text-center mb-6">
            Special rates available for groups of 8+ people and corporate events.
            Contact us for customized packages and team-building activities.
          </p>
          <div className="flex justify-center">
            <Button className="bg-sport-blue hover:bg-sport-blue/90 text-white">
              Contact for Group Rates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
