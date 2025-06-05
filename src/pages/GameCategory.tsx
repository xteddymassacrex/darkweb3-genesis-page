
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const GameCategory = () => {
  const { gameId } = useParams();

  const gameInfo = {
    title: "League of Legends",
    subtitle: "MOBA",
    image: "🎮",
    description: "Join professional teams and improve your rank in the most popular MOBA game"
  };

  const services = [
    {
      id: 1,
      title: "Team to Gold",
      price: "$35",
      originalPrice: "$45",
      duration: "1-3 days",
      description: "Fast team-based climb to Gold division",
      features: ["VPN protection", "Process streaming", "Rank guarantee"],
      popular: false,
      discount: 15
    },
    {
      id: 2,
      title: "Team to Platinum",
      price: "$65",
      originalPrice: "$80",
      duration: "3-5 days",
      description: "Professional team sessions to reach Platinum rank",
      features: ["VPN protection", "Process streaming", "Rank guarantee", "Priority support"],
      popular: true,
      discount: 20
    },
    {
      id: 3,
      title: "Coaching Session",
      price: "$20",
      originalPrice: null,
      duration: "1 hour",
      description: "Personal training with a pro player",
      features: ["Replay analysis", "Game tips", "Development plan"],
      popular: false,
      discount: 0
    },
    {
      id: 4,
      title: "Duo Queue",
      price: "$12",
      originalPrice: null,
      duration: "1 game",
      description: "Play in duo with a professional",
      features: ["Role selection", "Real-time tips", "In-game advice"],
      popular: false,
      discount: 0
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Button variant="ghost" className="mr-4 text-gray-400 hover:text-white">
              <ArrowLeft size={20} className="mr-2" />
              Back
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="text-6xl">{gameInfo.image}</div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">{gameInfo.title}</span>
                <span className="text-neon-blue ml-4 text-lg">{gameInfo.subtitle}</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl">
                {gameInfo.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-1 max-w-md">
              <div className="relative w-full">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search services..."
                  className="pl-10 bg-dark-700 border-dark-600 text-white"
                />
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" className="border-dark-600 text-gray-300">
                <Filter size={16} className="mr-2" />
                Filters
              </Button>
              <select className="bg-dark-700 border border-dark-600 text-white px-4 py-2 rounded">
                <option>By popularity</option>
                <option>Price ↑</option>
                <option>Price ↓</option>
                <option>By duration</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} gameId={gameId} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GameCategory;
