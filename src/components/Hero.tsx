
import { ArrowRight, Play, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-blue/10 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-dark-800/50 border border-neon-blue/30 text-sm text-neon-blue mb-8 animate-glow">
            <Shield className="mr-2" size={16} />
            100% Безопасные услуги
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Профессиональный</span>
            <span className="block glow-text">Boost & Carry</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Поднимите свой ранг в любимых играх с помощью топовых игроков. 
            Быстро, безопасно и с гарантией результата.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white px-8 py-4 text-lg font-semibold transition-all duration-300 glow-border group"
            >
              Выбрать игру
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 px-8 py-4 text-lg font-semibold transition-all duration-300 group"
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Как это работает
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center text-center">
              <div className="mr-3">
                <Shield className="text-green-400" size={24} />
              </div>
              <div>
                <div className="text-lg font-bold text-white">100%</div>
                <div className="text-gray-400 text-sm">Безопасность</div>
              </div>
            </div>
            <div className="flex items-center justify-center text-center">
              <div className="mr-3">
                <Clock className="text-blue-400" size={24} />
              </div>
              <div>
                <div className="text-lg font-bold text-white">15 мин</div>
                <div className="text-gray-400 text-sm">Старт работы</div>
              </div>
            </div>
            <div className="flex items-center justify-center text-center">
              <div className="mr-3">
                <span className="text-purple-400 text-2xl">★</span>
              </div>
              <div>
                <div className="text-lg font-bold text-white">50k+</div>
                <div className="text-gray-400 text-sm">Заказов</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-neon-blue/50 rounded-full p-1">
          <div className="w-1 h-3 bg-neon-blue rounded-full animate-bounce mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
