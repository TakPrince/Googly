
import { Trophy, Users, Star, Activity } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Trophy className="w-10 h-10 text-sport-orange" />,
      title: "Premium Experience",
      description: "State-of-the-art facilities designed for ultimate gameplay and comfort.",
    },
    {
      icon: <Users className="w-10 h-10 text-sport-blue" />,
      title: "For Everyone",
      description: "Suitable for all ages and skill levels - from beginners to professionals.",
    },
    {
      icon: <Star className="w-10 h-10 text-sport-green" />,
      title: "Multiple Games",
      description: "Enjoy diverse sports experiences all under one roof.",
    },
    {
      icon: <Activity className="w-10 h-10 text-sport-purple" />,
      title: "Active Lifestyle",
      description: "Promoting fitness through fun and engaging activities.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Googly Box Cricket</h2>
          <div className="w-20 h-1 bg-sport-orange mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            We're not just another sports center; we're a revolution in indoor sports entertainment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="People playing indoor sports" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-sport-blue text-white py-4 px-6 rounded shadow-lg">
                <p className="font-bold text-xl">Est. 2023</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Where Passion Meets Play</h3>
            <p className="text-gray-600 mb-6">
              Founded by a team of sports enthusiasts, Googly Box Cricket brings together
              the excitement of multiple indoor sports in a modern, accessible environment.
              Our mission is to provide a space where people of all ages can experience the
              joy of sports, regardless of weather conditions or time constraints.
            </p>
            <p className="text-gray-600 mb-8">
              With custom-designed courts and arenas, cutting-edge equipment, and a vibrant
              atmosphere, we've created the perfect destination for friends, families, and
              colleagues to engage in healthy competition and create lasting memories.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  {feature.icon}
                  <h4 className="font-bold mt-3 mb-1">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
