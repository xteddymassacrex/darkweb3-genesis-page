
import { Shield, Clock, Users, Headphones } from 'lucide-react';

const ServiceAdvantages = () => {
  const advantages = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Safe",
      description: "We only use legitimate methods. VPN protection and complete confidentiality.",
      color: "text-green-400"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Execution",
      description: "We start work within 15 minutes. Average execution speed is 40% higher.",
      color: "text-blue-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Top Players",
      description: "Team of professional players with highest ranks in every game.",
      color: "text-purple-400"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Online chat and personal manager. We respond at any time of day.",
      color: "text-orange-400"
    }
  ];

  return (
    <section className="py-20 bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Why choose </span>
            <span className="glow-text">us</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            More than 50,000 satisfied clients trust us with their gaming experience
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              {/* Icon */}
              <div className={`${advantage.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                {advantage.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {advantage.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold glow-text mb-2">50,000+</div>
            <div className="text-gray-400">Completed Sessions</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold glow-text mb-2">4.9/5</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold glow-text mb-2">15 min</div>
            <div className="text-gray-400">Setup Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAdvantages;
