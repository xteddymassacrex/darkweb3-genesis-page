
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      question: "Безопасно ли доверять вам свой аккаунт?",
      answer: "Да, абсолютно безопасно. Мы используем VPN того же региона, играем вручную без читов и программ. За 5 лет работы не было ни одного заблокированного аккаунта по нашей вине."
    },
    {
      question: "Как быстро начнется выполнение заказа?",
      answer: "В среднем мы начинаем работу в течение 15 минут после оплаты. В редких случаях это может занять до 1 часа, если все наши специалисты заняты."
    },
    {
      question: "Могу ли я отслеживать прогресс выполнения?",
      answer: "Конечно! У нас есть система трекинга заказов в личном кабинете. Также наши менеджеры регулярно присылают отчеты о прогрессе в чат."
    },
    {
      question: "Что если я не доволен результатом?",
      answer: "Мы гарантируем качество наших услуг. Если что-то пошло не так, мы либо доделаем работу бесплатно, либо вернем деньги. Обращайтесь в поддержку."
    },
    {
      question: "Какие способы оплаты вы принимаете?",
      answer: "Мы принимаем банковские карты, электронные кошельки, криптовалюты и банковские переводы. Все платежи проходят через защищенные платежные системы."
    },
    {
      question: "Работаете ли вы с аккаунтами любого уровня?",
      answer: "Да, мы работаем с аккаунтами любого текущего ранга и уровня. Наши специалисты имеют опыт игры на всех уровнях сложности."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-dark-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Часто задаваемые </span>
            <span className="glow-text">вопросы</span>
          </h2>
          <p className="text-lg text-gray-400">
            Ответы на самые популярные вопросы о наших услугах
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <Card 
              key={index}
              className="bg-dark-800/50 border-dark-600 glow-border backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-dark-700/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {item.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="text-neon-blue flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-neon-blue flex-shrink-0" size={20} />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Не нашли ответ на свой вопрос?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Написать в поддержку
            </button>
            <button className="border border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Открыть чат
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
