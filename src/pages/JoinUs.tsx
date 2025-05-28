
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  DollarSign, 
  Clock, 
  Trophy, 
  Users, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Star,
  TrendingUp,
  Gamepad2,
  MessageCircle,
  FileCheck,
  UserCheck
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const JoinUs = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-neon-blue" />,
      title: "Еженедельные выплаты",
      description: "Гарантированные выплаты каждую пятницу без задержек",
      details: "От 50,000₽ до 200,000₽+ в месяц в зависимости от опыта"
    },
    {
      icon: <Clock className="w-8 h-8 text-neon-purple" />,
      title: "Гибкий график",
      description: "Работайте когда удобно, без привязки к офису",
      details: "Минимум 4-6 часов в день, выбирайте время сами"
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      title: "Премии и бонусы",
      description: "Дополнительные выплаты за качественную работу",
      details: "До 30% премии за высокие рейтинги клиентов"
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Команда профи",
      description: "Работа в команде опытных игроков",
      details: "Обмен опытом, поддержка, совместные проекты"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Полная безопасность",
      description: "Защита аккаунтов и конфиденциальности",
      details: "VPN, безопасные методы, страхование аккаунтов"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
      title: "Карьерный рост",
      description: "Развитие от исполнителя до тим-лидера",
      details: "Возможность стать наставником и получать % с команды"
    }
  ];

  const onboardingSteps = [
    {
      step: 1,
      title: "Подача заявки",
      description: "Заполните анкету и пройдите первичный отбор",
      icon: <FileCheck className="w-6 h-6" />,
      duration: "1 день",
      details: [
        "Анкета с игровым опытом",
        "Скриншоты достижений",
        "Мотивационное письмо"
      ]
    },
    {
      step: 2,
      title: "Тестовое задание",
      description: "Продемонстрируйте свои навыки на практике",
      icon: <Gamepad2 className="w-6 h-6" />,
      duration: "2-3 дня",
      details: [
        "Выполнение буста в игре",
        "Запись геймплея",
        "Соблюдение требований"
      ]
    },
    {
      step: 3,
      title: "Собеседование",
      description: "Интервью с HR и техническим специалистом",
      icon: <MessageCircle className="w-6 h-6" />,
      duration: "1 час",
      details: [
        "Видеозвонок с HR",
        "Обсуждение условий",
        "Ответы на вопросы"
      ]
    },
    {
      step: 4,
      title: "KYC процедура",
      description: "Верификация личности и подписание договора",
      icon: <UserCheck className="w-6 h-6" />,
      duration: "1-2 дня",
      details: [
        "Проверка документов",
        "Подписание NDA",
        "Настройка аккаунтов"
      ]
    }
  ];

  const requirements = [
    "Опыт игры от 2+ лет",
    "Высокий ранг в выбранной игре",
    "Стабильный интернет",
    "Знание английского языка",
    "Ответственность и пунктуальность"
  ];

  const games = [
    { name: "League of Legends", ranks: ["Diamond+"], rate: "от 500₽/час" },
    { name: "Valorant", ranks: ["Immortal+"], rate: "от 600₽/час" },
    { name: "CS2", ranks: ["Global Elite"], rate: "от 550₽/час" },
    { name: "Dota 2", ranks: ["Divine+"], rate: "от 500₽/час" },
    { name: "Overwatch 2", ranks: ["Master+"], rate: "от 450₽/час" },
    { name: "Apex Legends", ranks: ["Master+"], rate: "от 400₽/час" }
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 to-transparent"></div>
        <div className="max-w-6xl mx-auto text-center relative">
          <Badge className="mb-6 bg-neon-purple/20 text-neon-purple border-neon-purple/30">
            <Star className="w-4 h-4 mr-2" />
            Присоединяйся к команде профи
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Работай с нами
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Зарабатывай на том, что любишь. Стань частью команды профессиональных игроков 
            и получай стабильный доход от игрового мастерства.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-lg px-8 py-6"
            >
              Подать заявку
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 text-lg px-8 py-6">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 glow-text">Преимущества работы с нами</h2>
            <p className="text-gray-400 text-lg">Почему тысячи игроков выбирают нашу платформу</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-dark-800/50 border-gray-700 card-hover">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    {benefit.icon}
                    <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-300 text-base">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{benefit.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="py-16 px-4 bg-dark-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 glow-text">Процесс онбординга</h2>
            <p className="text-gray-400 text-lg">Путь от подачи заявки до первого заказа</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {onboardingSteps.map((step, index) => (
              <Card 
                key={index} 
                className={`bg-dark-800/50 border-gray-700 cursor-pointer transition-all duration-300 ${
                  selectedStep === index ? 'ring-2 ring-neon-blue' : ''
                }`}
                onClick={() => setSelectedStep(index)}
              >
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-neon-blue/20 rounded-full mx-auto mb-4">
                    {step.icon}
                  </div>
                  <Badge variant="outline" className="mb-2 border-neon-blue text-neon-blue">
                    Шаг {step.step}
                  </Badge>
                  <CardTitle className="text-lg text-white">{step.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/30">
                    <Clock className="w-3 h-3 mr-1" />
                    {step.duration}
                  </Badge>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Games and Rates */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 glow-text">Игры и ставки</h2>
            <p className="text-gray-400 text-lg">Расценки для профессиональных игроков</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <Card key={index} className="bg-dark-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    {game.name}
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      {game.rate}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-gray-400">Требуемый ранг:</p>
                    <div className="flex flex-wrap gap-2">
                      {game.ranks.map((rank, idx) => (
                        <Badge key={idx} variant="outline" className="border-neon-purple text-neon-purple">
                          {rank}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-4 bg-dark-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 glow-text">Требования</h2>
            <p className="text-gray-400 text-lg">Что нужно для работы с нами</p>
          </div>

          <Card className="bg-dark-800/50 border-gray-700">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Основные требования</h3>
                  <ul className="space-y-3">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Что мы предоставляем</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      Обучение и менторство
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      Доступ к приватным аккаунтам
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      Техническую поддержку 24/7
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      Страхование от банов
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      Корпоративные скидки
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-neon-blue/30">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4 glow-text">Готов начать?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Присоединяйся к команде профессионалов и зарабатывай на игровом мастерстве
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-lg px-8 py-6"
                >
                  Подать заявку сейчас
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 text-lg px-8 py-6">
                  Задать вопрос в Discord
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinUs;
