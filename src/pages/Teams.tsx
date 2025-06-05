
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Trophy, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Teams = () => {
  const teams = [
    {
      id: 1,
      name: "Elite Valorant Squad",
      game: "Valorant",
      rating: 4.9,
      members: 5,
      completedOrders: 1250,
      price: "$25/hour",
      image: "/placeholder.svg",
      specialties: ["Ranked Boost", "Coaching", "Team Strategy"],
      description: "Professional Valorant team with multiple tournament wins and expert coaching skills.",
      availability: "24/7"
    },
    {
      id: 2,
      name: "CS2 Champions",
      game: "CS2",
      rating: 4.8,
      members: 6,
      completedOrders: 980,
      price: "$30/hour",
      image: "/placeholder.svg",
      specialties: ["Competitive Play", "Aim Training", "Map Control"],
      description: "Former professional CS2 players offering high-level coaching and boosting services.",
      availability: "16 hours daily"
    },
    {
      id: 3,
      name: "LoL Masters",
      game: "League of Legends",
      rating: 4.7,
      members: 8,
      completedOrders: 2100,
      price: "$20/hour",
      image: "/placeholder.svg",
      specialties: ["Rank Climbing", "Champion Mastery", "Meta Analysis"],
      description: "Master and Challenger tier players specializing in all roles and champions.",
      availability: "Peak hours"
    },
    {
      id: 4,
      name: "Apex Predators",
      game: "Apex Legends",
      rating: 4.9,
      members: 4,
      completedOrders: 750,
      price: "$28/hour",
      image: "/placeholder.svg",
      specialties: ["Battle Royale", "Movement Tech", "Team Coordination"],
      description: "Top-tier Apex Legends team with consistent Predator rank achievements.",
      availability: "Evenings"
    },
    {
      id: 5,
      name: "Rocket League Pros",
      game: "Rocket League",
      rating: 4.6,
      members: 3,
      completedOrders: 650,
      price: "$22/hour",
      image: "/placeholder.svg",
      specialties: ["Aerials", "Rotation", "Mechanical Skills"],
      description: "Grand Champion level players with extensive tournament experience.",
      availability: "Afternoons"
    },
    {
      id: 6,
      name: "Overwatch Heroes",
      game: "Overwatch 2",
      rating: 4.8,
      members: 7,
      completedOrders: 1100,
      price: "$26/hour",
      image: "/placeholder.svg",
      specialties: ["Tank Play", "Support Mastery", "DPS Optimization"],
      description: "Multi-role specialists with deep understanding of team compositions.",
      availability: "24/7"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      <Navigation />
      
      {/* Header */}
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="glow-text">Elite Teams</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional gaming teams ready to boost your rank, teach you new skills, 
            and help you dominate the competition.
          </p>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team) => (
            <Card key={team.id} className="bg-dark-800 border-white/10 hover:border-neon-blue/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-neon-purple text-neon-purple">
                    {team.game}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-white font-medium">{team.rating}</span>
                  </div>
                </div>
                
                <div className="w-full h-32 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-lg mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-neon-blue" />
                </div>
                
                <CardTitle className="text-white text-xl group-hover:text-neon-blue transition-colors">
                  {team.name}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {team.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Stats */}
                <div className="flex justify-between text-sm">
                  <div className="flex items-center space-x-1 text-gray-300">
                    <Users className="w-4 h-4" />
                    <span>{team.members} members</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-300">
                    <Trophy className="w-4 h-4" />
                    <span>{team.completedOrders} orders</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>{team.availability}</span>
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <p className="text-sm text-gray-400 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {team.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="bg-dark-700 text-gray-300 text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <span className="text-2xl font-bold text-neon-blue">{team.price}</span>
                  </div>
                  <Link to={`/service/${team.id}`}>
                    <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue">
                      Book Team
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
