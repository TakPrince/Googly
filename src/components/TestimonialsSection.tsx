
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Cricket Enthusiast",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=922&q=80",
      rating: 5,
      text: "The best indoor cricket facility I've ever used! The auto bowling machines are incredible, and the analytics helped improve my game. Staff is super friendly too.",
    },
    {
      name: "Michael Chen",
      role: "Weekly Footballer",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 4,
      text: "I love the football fields here - the turf is well-maintained and the evening matches under the special lighting create an awesome atmosphere.",
    },
    {
      name: "Jessica Smith",
      role: "VR Gaming Fan",
      image: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80",
      rating: 5,
      text: "The VR gaming experience blew me away! It's so immersive and the range of sports games is impressive. My friends and I come back every weekend now!",
    },
    {
      name: "David Thompson",
      role: "Corporate Event Planner",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 5,
      text: "We organized our company's team building event here and it was a massive hit. The staff was accommodating and helped us plan a multi-sport tournament. Highly recommended!",
    },
  ];

  const renderStars = (count: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-sport-blue/5 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-sport-green mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it - hear from our happy players!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-sport-blue">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <blockquote>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-gray-700">
            Join hundreds of satisfied customers who love our facility!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
