
import { Shield, Zap, Globe, Code, Cpu, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-neon-blue" />,
      title: "Secure & Reliable",
      description: "Built with enterprise-grade security and reliability standards to protect your digital assets."
    },
    {
      icon: <Zap className="w-8 h-8 text-neon-purple" />,
      title: "Lightning Fast",
      description: "Optimized performance with cutting-edge technology for blazing-fast load times."
    },
    {
      icon: <Globe className="w-8 h-8 text-neon-cyan" />,
      title: "Global Reach",
      description: "Scalable infrastructure that grows with your business across the globe."
    },
    {
      icon: <Code className="w-8 h-8 text-neon-pink" />,
      title: "Clean Code",
      description: "Well-structured, maintainable code following industry best practices."
    },
    {
      icon: <Cpu className="w-8 h-8 text-neon-blue" />,
      title: "AI-Powered",
      description: "Leverage artificial intelligence to automate and optimize your workflows."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-neon-purple" />,
      title: "Innovation",
      description: "Stay ahead with the latest Web3 technologies and innovative solutions."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-transparent to-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Why Choose </span>
            <span className="glow-text">Our Platform</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the perfect blend of innovation, security, and performance 
            with our comprehensive Web3 solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-dark-800/50 border-dark-600 card-hover glow-border backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-white text-xl mb-2">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
