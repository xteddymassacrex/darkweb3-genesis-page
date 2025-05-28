
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Trophy, Zap, Star } from 'lucide-react';

const GameCategories = () => {
  const games = [
    {
      title: "League of Legends",
      subtitle: "MOBA",
      services: ["Boost", "Coaching", "Duo Queue"],
      popular: true,
      image: "🎮",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "CS2",
      subtitle: "FPS",
      services: ["Rank Boost", "Premier", "Faceit"],
      popular: false,
      image: "🔫",
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Valorant",
      subtitle: "Tactical FPS",
      services: ["Rank Boost", "Coaching", "Account"],
      popular: true,
      image: "⚡",
      gradient: "from-pink-600 to-rose-600"
    },
    {
      title: "Dota 2",
      subtitle: "MOBA",
      services: ["MMR Boost", "Calibration", "Coaching"],
      popular: false,
      image: "🛡️",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      title: "WoW",
      subtitle: "MMORPG",
      services: ["Mythic+", "Raid", "PvP"],
      popular: false,
      image: "⚔️",
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      title: "Apex Legends",
      subtitle: "Battle Royale",
      services: ["Rank Boost", "Badges", "Stats"],
      popular: false,
      image: "🏆",
      gradient: "from-cyan-600 to-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Выберите </span>
            <span className="glow-text">Игру</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Профессиональные услуги для всех популярных игр. 
            Boost, coaching и carry от топовых игроков.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {games.map((game, index) => (
            <Card 
              key={index} 
              className="bg-dark-800/50 border-dark-600 card-hover glow-border backdrop-blur-sm group relative overflow-hidden"
            >
              {game.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-neon-blue to-neon-purple px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center">
                    <Star size={12} className="mr-1" />
                    Популярно
                  </div>
                </div>
              )}
              
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <CardContent className="p-6 relative z-10">
                {/* Game Icon */}
                <div className="text-4xl mb-4">{game.image}</div>
                
                {/* Game Info */}
                <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                <p className="text-neon-blue text-sm font-medium mb-4">{game.subtitle}</p>
                
                {/* Services */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {game.services.map((service, serviceIndex) => (
                    <span 
                      key={serviceIndex}
                      className="bg-dark-700/50 text-gray-300 px-2 py-1 rounded text-xs border border-dark-600"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                
                {/* CTA Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue transition-all duration-300 group"
                >
                  Выбрать услуги
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Games Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 px-8 py-3 text-lg font-semibold"
          >
            Посмотреть все игры
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GameCategories;
