
import { useState } from 'react';
import { User, Coins, ShoppingBag, Calendar, Star, Gift, Trophy, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useUser } from '@/context/UserContext';
import Navigation from '@/components/Navigation';

const UserDashboard = () => {
  const { user, addBonusTokens } = useUser();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for orders
  const orders = [
    {
      id: '1',
      service: 'Буст рейтинга CS2',
      game: 'Counter-Strike 2',
      status: 'Выполнен',
      date: '2024-01-15',
      price: 2500,
      tokensEarned: 125
    },
    {
      id: '2',
      service: 'Прокачка аккаунта Valorant',
      game: 'Valorant',
      status: 'В процессе',
      date: '2024-01-20',
      price: 3500,
      tokensEarned: 175
    },
    {
      id: '3',
      service: 'Калибровка Dota 2',
      game: 'Dota 2',
      status: 'Ожидает',
      date: '2024-01-22',
      price: 4000,
      tokensEarned: 200
    }
  ];

  const achievements = [
    { name: 'Первая покупка', description: 'Совершили первый заказ', date: '2023-06-15', icon: Gift },
    { name: 'Постоянный клиент', description: '10+ заказов', date: '2023-12-01', icon: Star },
    { name: 'VIP клиент', description: '50+ заказов', date: '2024-01-10', icon: Trophy }
  ];

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
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">{user.name}</h1>
              <p className="text-gray-400">{user.email}</p>
              <Badge className="mt-2 bg-neon-purple/20 text-neon-purple border-neon-purple/30">
                {user.level}
              </Badge>
            </div>
          </div>

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
                  <ShoppingBag className="w-8 h-8 text-neon-blue" />
                  <div>
                    <p className="text-2xl font-bold text-white">{user.totalOrders}</p>
                    <p className="text-gray-400 text-sm">Всего заказов</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark-800 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-8 h-8 text-neon-green" />
                  <div>
                    <p className="text-2xl font-bold text-white">7</p>
                    <p className="text-gray-400 text-sm">Месяцев с нами</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark-800 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-8 h-8 text-yellow-500" />
                  <div>
                    <p className="text-2xl font-bold text-white">4.9</p>
                    <p className="text-gray-400 text-sm">Рейтинг</p>
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
            <TabsTrigger value="orders" className="data-[state=active]:bg-neon-blue data-[state=active]:text-white">
              Заказы
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
                  <CardTitle className="text-white">Последние заказы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {orders.slice(0, 3).map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
                      <div>
                        <h3 className="text-white font-medium">{order.service}</h3>
                        <p className="text-gray-400 text-sm">{order.game}</p>
                      </div>
                      <Badge 
                        className={
                          order.status === 'Выполнен' ? 'bg-green-500/20 text-green-400' :
                          order.status === 'В процессе' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }
                      >
                        {order.status}
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
                    <Button 
                      onClick={() => addBonusTokens(100)}
                      className="w-full bg-gradient-to-r from-neon-purple to-neon-blue"
                    >
                      Получить бонус
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card className="bg-dark-800 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">История заказов</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="p-6 bg-dark-700 rounded-lg border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-lg">{order.service}</h3>
                        <p className="text-gray-400">{order.game}</p>
                      </div>
                      <Badge 
                        className={
                          order.status === 'Выполнен' ? 'bg-green-500/20 text-green-400' :
                          order.status === 'В процессе' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }
                      >
                        {order.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Дата:</span>
                        <p className="text-white">{order.date}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Стоимость:</span>
                        <p className="text-neon-blue font-bold">{order.price}₽</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Получено токенов:</span>
                        <p className="text-neon-purple font-bold">+{order.tokensEarned}</p>
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
