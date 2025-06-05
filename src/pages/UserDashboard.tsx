
import { useState } from 'react';
import { User, Coins, ShoppingBag, Calendar, Star, Gift, Trophy, Settings, Users, GamepadIcon, Target, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useUser } from '@/context/UserContext';
import Navigation from '@/components/Navigation';

const UserDashboard = () => {
  const { user, addBonusTokens } = useUser();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for team sessions
  const teamSessions = [
    {
      id: '1',
      service: 'Valorant Team',
      game: 'Valorant',
      status: 'Completed',
      date: '2024-01-15',
      price: 2500,
      tokensEarned: 125,
      teamRating: 4.8,
      duration: '3 hours'
    },
    {
      id: '2',
      service: 'CS2 Training',
      game: 'Counter-Strike 2',
      status: 'In Progress',
      date: '2024-01-20',
      price: 3500,
      tokensEarned: 175,
      teamRating: 4.9,
      duration: '2 hours'
    },
    {
      id: '3',
      service: 'Dota 2 Ranked Team',
      game: 'Dota 2',
      status: 'Pending',
      date: '2024-01-22',
      price: 4000,
      tokensEarned: 200,
      teamRating: 5.0,
      duration: '4 hours'
    }
  ];

  const achievements = [
    { name: 'First Game', description: 'Played first match in a team', date: '2023-06-15', icon: Gift },
    { name: 'Team Player', description: '10+ team games', date: '2023-12-01', icon: Users },
    { name: 'Team Master', description: '50+ team games', date: '2024-01-10', icon: Trophy },
    { name: 'Team MVP', description: 'Became MVP in 5 games', date: '2024-01-15', icon: Star }
  ];

  const weeklyProgress = {
    gamesPlayed: 12,
    targetGames: 20,
    hoursPlayed: 24,
    targetHours: 40,
    teamRating: 4.7,
    winRate: 68
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <p className="text-white">Please log in to view your dashboard</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <Navigation />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">{user.name}</h1>
              <p className="text-gray-400">{user.email}</p>
              <div className="flex items-center space-x-2 mt-2">
                <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple/30">
                  {user.level}
                </Badge>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  Team Player
                </Badge>
              </div>
            </div>
          </div>

          {/* Weekly Progress */}
          <Card className="bg-dark-800 border-white/10 mb-6">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Target className="mr-2" size={20} />
                Weekly Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-gray-400 text-sm">Games</p>
                <p className="text-white font-bold">{weeklyProgress.gamesPlayed}/{weeklyProgress.targetGames}</p>
                <Progress value={(weeklyProgress.gamesPlayed / weeklyProgress.targetGames) * 100} className="mt-1" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Hours</p>
                <p className="text-white font-bold">{weeklyProgress.hoursPlayed}/{weeklyProgress.targetHours}h</p>
                <Progress value={(weeklyProgress.hoursPlayed / weeklyProgress.targetHours) * 100} className="mt-1" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Team Rating</p>
                <p className="text-neon-purple font-bold">{weeklyProgress.teamRating}/5.0</p>
                <Progress value={(weeklyProgress.teamRating / 5) * 100} className="mt-1" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Win Rate</p>
                <p className="text-green-400 font-bold">{weeklyProgress.winRate}%</p>
                <Progress value={weeklyProgress.winRate} className="mt-1" />
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-dark-800 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Coins className="w-8 h-8 text-neon-purple" />
                  <div>
                    <p className="text-2xl font-bold text-white">{user.bonusTokens}</p>
                    <p className="text-gray-400 text-sm">Bonus Tokens</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark-800 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Users className="w-8 h-8 text-neon-blue" />
                  <div>
                    <p className="text-2xl font-bold text-white">{user.totalOrders}</p>
                    <p className="text-gray-400 text-sm">Team Games</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark-800 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Clock className="w-8 h-8 text-neon-green" />
                  <div>
                    <p className="text-2xl font-bold text-white">156</p>
                    <p className="text-gray-400 text-sm">Hours Played</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark-800 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-8 h-8 text-yellow-500" />
                  <div>
                    <p className="text-2xl font-bold text-white">4.8</p>
                    <p className="text-gray-400 text-sm">Player Rating</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-dark-800 border border-white/10">
            <TabsTrigger value="overview" className="data-[state=active]:bg-neon-blue data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="sessions" className="data-[state=active]:bg-neon-blue data-[state=active]:text-white">
              Game Sessions
            </TabsTrigger>
            <TabsTrigger value="tokens" className="data-[state=active]:bg-neon-blue data-[state=active]:text-white">
              Tokens
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-neon-blue data-[state=active]:text-white">
              Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-dark-800 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Recent Game Sessions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {teamSessions.slice(0, 3).map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
                      <div>
                        <h3 className="text-white font-medium">{session.service}</h3>
                        <p className="text-gray-400 text-sm">{session.game} • {session.duration}</p>
                        <div className="flex items-center mt-1">
                          <Star size={12} className="text-yellow-400 mr-1" />
                          <span className="text-yellow-400 text-xs">{session.teamRating}</span>
                        </div>
                      </div>
                      <Badge 
                        className={
                          session.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                          session.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }
                      >
                        {session.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-dark-800 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Token Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Available:</span>
                      <span className="text-neon-purple font-bold">{user.bonusTokens} tokens</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Total spent:</span>
                      <span className="text-white">2,450 tokens</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Earned this week:</span>
                      <span className="text-green-400">+500 tokens</span>
                    </div>
                    <Button 
                      onClick={() => addBonusTokens(100)}
                      className="w-full bg-gradient-to-r from-neon-purple to-neon-blue"
                    >
                      Claim Daily Bonus
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <Card className="bg-dark-800 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Game Session History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {teamSessions.map((session) => (
                  <div key={session.id} className="p-6 bg-dark-700 rounded-lg border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-lg">{session.service}</h3>
                        <p className="text-gray-400">{session.game} • {session.duration}</p>
                        <div className="flex items-center mt-2">
                          <Star size={16} className="text-yellow-400 mr-2" />
                          <span className="text-yellow-400 font-medium">Team Rating: {session.teamRating}</span>
                        </div>
                      </div>
                      <Badge 
                        className={
                          session.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                          session.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }
                      >
                        {session.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Date:</span>
                        <p className="text-white">{session.date}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Cost:</span>
                        <p className="text-neon-blue font-bold">${session.price / 100}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Tokens earned:</span>
                        <p className="text-neon-purple font-bold">+{session.tokensEarned}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tokens" className="space-y-6">
            <Card className="bg-dark-800 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Token Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-8 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-lg border border-neon-purple/30">
                  <Coins className="w-16 h-16 text-neon-purple mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-2">{user.bonusTokens}</h2>
                  <p className="text-gray-400">Available Tokens</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h3 className="text-white font-bold mb-2">How to earn tokens?</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li>• 5% of each order amount</li>
                      <li>• Bonuses for reviews</li>
                      <li>• Weekly promotions</li>
                      <li>• Referral program</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h3 className="text-white font-bold mb-2">How to use?</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li>• 1 token = $0.01 discount</li>
                      <li>• Maximum 50% of order</li>
                      <li>• Valid for all services</li>
                      <li>• Never expire</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card className="bg-dark-800 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-dark-700 rounded-lg">
                      <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold">{achievement.name}</h3>
                        <p className="text-gray-400 text-sm">{achievement.description}</p>
                        <p className="text-gray-500 text-xs">{achievement.date}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserDashboard;
