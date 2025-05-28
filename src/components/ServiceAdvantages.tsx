
import { Shield, Clock, Users, Headphones } from 'lucide-react';

const ServiceAdvantages = () => {
  const advantages = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Безопасность",
      description: "Используем только легальные методы. VPN защита и полная конфиденциальность.",
      color: "text-green-400"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Быстрое выполнение",
      description: "Начинаем работу в течение 15 минут. Средняя скорость выполнения на 40% выше.",
      color: "text-blue-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Топовые игроки",
      description: "Команда из профессиональных игроков с высшими рангами в каждой игре.",
      color: "text-purple-400"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Поддержка 24/7",
      description: "Онлайн-чат и персональный менеджер. Отвечаем в любое время суток.",
      color: "text-orange-400"
    }
  ];

  return (
    <section className="py-20 bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Почему выбирают </span>
            <span className="glow-text">нас</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Более 50,000 довольных клиентов доверяют нам свои аккаунты
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              {/* Icon */}
              <div className={`${advantage.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                {advantage.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {advantage.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold glow-text mb-2">50,000+</div>
            <div className="text-gray-400">Выполненных заказов</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold glow-text mb-2">4.9/5</div>
            <div className="text-gray-400">Средняя оценка</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold glow-text mb-2">15 мин</div>
            <div className="text-gray-400">Время начала работы</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAdvantages;
