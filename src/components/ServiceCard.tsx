
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Shield, Star, ArrowRight, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/context/UserContext';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    price: string;
    originalPrice?: string | null;
    duration: string;
    description: string;
    features: string[];
    popular: boolean;
    discount: number;
  };
  gameId?: string;
}

const ServiceCard = ({ service, gameId }: ServiceCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useUser();

  const handleViewService = () => {
    navigate(`/service/${service.id}`);
  };

  const handleAddToCart = () => {
    addToCart({
      id: service.id.toString(),
      name: service.title,
      price: parseInt(service.price.replace(/[^\d]/g, '')),
      image: '🎮',
      gameTitle: gameId || 'Неизвестная игра'
    });
  };

  return (
    <Card className="bg-dark-800/50 border-dark-600 card-hover glow-border backdrop-blur-sm group relative overflow-hidden">
      {service.popular && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-neon-blue to-neon-purple px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center">
            <Star size={12} className="mr-1" />
            Популярно
          </div>
        </div>
      )}

      {service.discount > 0 && (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-red-500 px-2 py-1 rounded text-xs font-semibold text-white">
            -{service.discount}%
          </div>
        </div>
      )}

      <CardContent className="p-6">
        {/* Service Title */}
        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{service.description}</p>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold glow-text">{service.price}</span>
            {service.originalPrice && (
              <span className="text-gray-500 line-through text-lg">{service.originalPrice}</span>
            )}
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center mb-4 text-neon-cyan">
          <Clock size={16} className="mr-2" />
          <span className="text-sm">{service.duration}</span>
        </div>

        {/* Team Size */}
        <div className="flex items-center mb-4 text-neon-purple">
          <Users size={16} className="mr-2" />
          <span className="text-sm">Команда 5 игроков</span>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-2 text-sm">Включено:</h4>
          <ul className="space-y-1">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-300">
                <Shield size={12} className="mr-2 text-green-400" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-2">
          <Button 
            onClick={handleViewService}
            className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue transition-all duration-300 group"
          >
            Подробнее
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Button>
          <Button 
            variant="outline" 
            onClick={handleAddToCart}
            className="w-full border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10"
          >
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
