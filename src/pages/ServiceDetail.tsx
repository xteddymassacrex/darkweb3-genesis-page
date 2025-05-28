
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Shield, Clock, Star, Users, CheckCircle, MessageCircle } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const service = {
    id: 1,
    title: "Boost до Platinum",
    price: "4,500₽",
    originalPrice: "5,500₽",
    duration: "3-5 дней",
    description: "Профессиональный буст до Platinum ранга с гарантией результата и полной безопасностью аккаунта.",
    image: "⚡",
    discount: 20,
    rating: 4.9,
    completedOrders: 1247,
    features: [
      "VPN защита аккаунта",
      "Стрим процесса по запросу", 
      "Гарантия достижения ранга",
      "Приоритетная поддержка 24/7",
      "Возврат средств при неудаче",
      "Подробный отчет о прогрессе"
    ],
    process: [
      "Выберите текущий и желаемый ранг",
      "Оплатите услугу любым способом",
      "Передайте данные аккаунта",
      "Следите за прогрессом в реальном времени",
      "Получите аккаунт с новым рангом"
    ],
    booster: {
      name: "ProGamer_RU",
      rating: 5.0,
      completedJobs: 342,
      rank: "Grandmaster",
      avatar: "👨‍💻"
    }
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <Navigation />

      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <ArrowLeft size={20} className="mr-2" />
              Назад к услугам
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Service Header */}
              <div className="flex items-start gap-6">
                <div className="text-6xl">{service.image}</div>
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {service.title}
                  </h1>
                  <p className="text-lg text-gray-400 mb-4">
                    {service.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center text-yellow-400">
                      <Star size={16} className="mr-1 fill-current" />
                      <span className="font-semibold">{service.rating}</span>
                    </div>
                    <div className="flex items-center text-green-400">
                      <CheckCircle size={16} className="mr-1" />
                      <span>{service.completedOrders} заказов</span>
                    </div>
                    <div className="flex items-center text-blue-400">
                      <Clock size={16} className="mr-1" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <Card className="bg-dark-800/50 border-dark-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Что включено</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <Shield size={16} className="mr-3 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Process */}
              <Card className="bg-dark-800/50 border-dark-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Как это работает</h3>
                  <div className="space-y-4">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-neon-blue text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-300 pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Booster Info */}
              <Card className="bg-dark-800/50 border-dark-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Ваш бустер</h3>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{service.booster.avatar}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{service.booster.name}</h4>
                      <p className="text-neon-purple font-medium">{service.booster.rank}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Star size={14} className="mr-1 text-yellow-400 fill-current" />
                          {service.booster.rating}
                        </div>
                        <div className="flex items-center">
                          <Users size={14} className="mr-1" />
                          {service.booster.completedJobs} заказов
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="border-neon-blue/50 text-neon-blue">
                      <MessageCircle size={16} className="mr-2" />
                      Написать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Order Form */}
            <div className="lg:col-span-1">
              <Card className="bg-dark-800/50 border-dark-600 sticky top-8">
                <CardContent className="p-6">
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-bold glow-text">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-gray-500 line-through text-xl">{service.originalPrice}</span>
                      )}
                    </div>
                    {service.discount > 0 && (
                      <div className="bg-red-500 px-2 py-1 rounded text-xs font-semibold text-white inline-block">
                        Скидка {service.discount}%
                      </div>
                    )}
                  </div>

                  {/* Options */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Текущий ранг</label>
                      <select className="w-full bg-dark-700 border border-dark-600 text-white px-3 py-2 rounded">
                        <option>Silver I</option>
                        <option>Silver II</option>
                        <option>Gold IV</option>
                        <option>Gold III</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">Желаемый ранг</label>
                      <select className="w-full bg-dark-700 border border-dark-600 text-white px-3 py-2 rounded">
                        <option>Platinum IV</option>
                        <option>Platinum III</option>
                        <option>Platinum II</option>
                        <option>Platinum I</option>
                      </select>
                    </div>

                    <div className="flex items-center">
                      <input type="checkbox" id="stream" className="mr-2" />
                      <label htmlFor="stream" className="text-gray-300 text-sm">
                        Стрим процесса (+500₽)
                      </label>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-lg py-3">
                      Заказать сейчас
                    </Button>
                    <Button variant="outline" className="w-full border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10">
                      Добавить в корзину
                    </Button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="mt-6 pt-6 border-t border-dark-600">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <Shield className="text-green-400 mx-auto mb-1" size={20} />
                        <p className="text-xs text-gray-400">100% Безопасно</p>
                      </div>
                      <div>
                        <Clock className="text-blue-400 mx-auto mb-1" size={20} />
                        <p className="text-xs text-gray-400">Быстрый старт</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
