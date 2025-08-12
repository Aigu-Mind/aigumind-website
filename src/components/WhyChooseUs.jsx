import WhyChooseUsCard from "./WhyChooseUsCard";

export default function WhyChooseUs() {
  const cardsData = [
    {
      icon: "/images/why1.png",
      title: "AI + Human Expertise",
      description: "A perfect blend of automation and human insight."
    },
    {
      icon: "/images/why2.png",
      title: "Proven Results",
      description: "From boosting eCommerce conversions to cutting operational hours in half."
    },
    {
      icon: "/images/why3.png",
      title: "End-to-End Partnership",
      description: "We design, build, and continuously optimize your systems."
    },
    {
      icon: "/images/why4.png",
      title: "24/7 Global Support",
      description: "Always on, wherever your business operates."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-[#060D14] to-[#122941] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why Leading Brands Choose Us
        </h2>
        <p className="text-gray-300 mb-4 max-w-3xl mx-auto">
          We don't just deliver projects — we engineer outcomes. At AIGUMIND,
          every solution is built with AI-first thinking, business impact, and
          long-term scalability in mind.
        </p>
        {/* Blue horizontal line */}
        <div className="mx-auto my-4 h-1 w-24 bg-[#4285F4] rounded mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsData.map((card, index) => (
            <WhyChooseUsCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
