
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQsSection = () => {
  const faqs = [
    {
      question: "Do I need to bring my own equipment?",
      answer: "No, we provide all necessary equipment for each sport. This includes cricket bats, balls, VR headsets, pickleball rackets, and footballs. However, you're welcome to bring your own equipment if you prefer.",
    },
    {
      question: "How do I book a session?",
      answer: "You can book a session through our website by clicking the 'Book Now' button, or by calling our reception. We recommend booking at least 24 hours in advance, especially for weekend slots which tend to fill up quickly.",
    },
    {
      question: "What should I wear?",
      answer: "Comfortable sportswear and athletic shoes are recommended for all activities. For cricket, we suggest wearing appropriate sports attire. For football, turf shoes or indoor football shoes are ideal.",
    },
    {
      question: "Is there an age restriction?",
      answer: "Most of our activities are suitable for ages 8 and up. Children under 16 must be accompanied by an adult. For VR gaming, the minimum age is 10 years old due to equipment specifications.",
    },
    {
      question: "Do you offer coaching or lessons?",
      answer: "Yes, we offer professional coaching for cricket, pickleball, and football. Coaching sessions can be booked as add-ons to your regular booking or as standalone sessions. Our coaches are certified professionals with extensive experience.",
    },
    {
      question: "Can I host a birthday party or corporate event?",
      answer: "Absolutely! We offer special packages for birthday parties, team building events, and corporate functions. Please contact our events team for customized packages and availability.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "Bookings can be rescheduled or canceled up to 24 hours before your session without any charge. Cancellations within 24 hours will incur a 50% fee of the total booking cost.",
    },
    {
      question: "Do you have parking facilities?",
      answer: "Yes, we have a spacious parking lot available for all customers free of charge. During peak hours, we recommend carpooling if possible.",
    },
  ];

  return (
    <section id="faqs" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-sport-purple mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Got questions? We've got answers! If you don't see what you're looking for, feel free to contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-sport-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions? <a href="#contact" className="text-sport-blue font-medium hover:underline">Contact our team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
