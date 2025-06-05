
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
      service: 'Команда Valorant',
      game: 'Valorant',
      status: 'Завершена',
      date: '2024-01-15',
      price: 2500,
      tokensEarned: 125,
      teamRating: 4.8,
      duration: '3 часа'
    },
    {
      id: '2',
      service: 'Тренировка CS2',
      game: 'Counter-Strike 2',
      status: 'В процессе',
      date: '2024-01-20',
      price: 3500,
      tokensEarned: 175,
      teamRating: 4.9,
      duration: '2 часа'
    },
    {
      id: '3',
      service: 'Рейтинговая команда Dota 2',
      game: 'Dota 2',
      status: 'Ожидает',
      date: '2024-01-22',
      price: 4000,
      tokensEarned: 200,
      teamRating: 5.0,
      duration: '4 часа'
    }
  ];

  const achievements = [
    { name: 'Первая игра', description: 'Сыграли первый матч в команде', date: '2023-06-15', icon: Gift },
    { name: 'Командный игрок', description: '10+ игр в команде', date: '2023-12-01', icon: Users },
    { name: 'Мастер команды', description: '50+ игр в команде', date: '2024-01-10', icon: Trophy },
    { name: 'MVP команды', description: 'Стали MVP в 5 играх', date: '2024-01-15', icon: Star }
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
        <p className="text-white">Пожалуйста, войдите в систему</p>
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
                  Командный игрок
                </Badge>
              </div>
            </div>
          </div>

          {/* Weekly Progress */}
          <Card className="bg-dark-800 border-white/10 mb-6">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Target className="mr-2" size={20} />
                Прогресс недели
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-gray-400 text-sm">Игры</p>
                <p className="text-white font-bold">{weeklyProgress.gamesPlayed}/{weeklyProgress.targetGames}</p>
                <Progress value={(weeklyProgress.gamesPlayed / weeklyProgress.targetGames) * 100} className="mt-1" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Часы</p>
                <p className="text-white font-bold">{weeklyProgress.hoursPlayed}/{weeklyProgress.targetHours}ч</p>
                <Progress value={(weeklyProgress.hoursPlayed / weeklyProgress.targetHours) * 100} className="mt-1" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Рейтинг команды</p>
                <p className="text-neon-purple font-bold">{weeklyProgress.teamRating}/5.0</p>
                <Progress value={(weeklyProgress.teamRating / 5) * 100} className="mt-1" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Винрейт</p>
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
                    <p className="text-gray-400 text-sm">Бонусных токенов</p>
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
                    <p className="text-gray-400 text-sm">Игр в команде</p>
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
                    <p className="text-gray-400 text-sm">Часов в игре</p>
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
                    <p className="text-gray-400 text-sm">Рейтинг игрока</p>
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
              Обзор
            </TabsTrigger>
            <TabsTrigger value="sessions" className="data-[state=active]:bg-neon-blue data-[state=active]:text-white">
              Игровые сессии
            </TabsTrigger>
            <TabsTrigger value="tokens" className="data-[state=active]:bg-neon-blue data-[state=active]:text-white">
              Токены
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-neon-blue data-[state=active]:text-white">
              Достижения
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-dark-800 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Последние игровые сессии</CardTitle>
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
                          session.status === 'Завершена' ? 'bg-green-500/20 text-green-400' :
                          session.status === 'В процессе' ? 'bg-yellow-500/20 text-yellow-400' :
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
                  <CardTitle className="text-white">Использование токенов</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Доступно:</span>
                      <span className="text-neon-purple font-bold">{user.bonusTokens} токенов</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Потрачено всего:</span>
                      <span className="text-white">2,450 токенов</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Заработано за неделю:</span>
                      <span className="text-green-400">+500 токенов</span>
                    </div>
                    <Button 
                      onClick={() => addBonusTokens(100)}
                      className="w-full bg-gradient-to-r from-neon-purple to-neon-blue"
                    >
                      Получить дневной бонус
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <Card className="bg-dark-800 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">История игровых сессий</CardTitle>
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
                          <span className="text-yellow-400 font-medium">Рейтинг команды: {session.teamRating}</span>
                        </div>
                      </div>
                      <Badge 
                        className={
                          session.status === 'Завершена' ? 'bg-green-500/20 text-green-400' :
                          session.status === 'В процессе' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }
                      >
                        {session.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Дата:</span>
                        <p className="text-white">{session.date}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Стоимость:</span>
                        <p className="text-neon-blue font-bold">{session.price}₽</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Получено токенов:</span>
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
                <CardTitle className="text-white">Управление токенами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-8 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-lg border border-neon-purple/30">
                  <Coins className="w-16 h-16 text-neon-purple mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-2">{user.bonusTokens}</h2>
                  <p className="text-gray-400">Доступных токенов</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h3 className="text-white font-bold mb-2">Как получить токены?</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li>• 5% от суммы каждого заказа</li>
                      <li>• Бонусы за отзывы</li>
                      <li>• Еженедельные акции</li>
                      <li>• Реферальная программа</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-dark-700 rounded-lg">
                    <h3 className="text-white font-bold mb-2">Как использовать?</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li>• 1 токен = 1₽ скидки</li>
                      <li>• Максимум 50% от заказа</li>
                      <li>• Действуют на все услуги</li>
                      <li>• Не сгорают</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card className="bg-dark-800 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Достижения</CardTitle>
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
