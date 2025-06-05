
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      question: "Is it safe to trust you with my account?",
      answer: "Yes, absolutely safe. We use VPN from the same region, play manually without cheats or programs. In 5 years of operation, there hasn't been a single account banned due to our fault."
    },
    {
      question: "How quickly will the order start?",
      answer: "On average, we start work within 15 minutes after payment. In rare cases, it may take up to 1 hour if all our specialists are busy."
    },
    {
      question: "Can I track the progress?",
      answer: "Of course! We have an order tracking system in your personal account. Also, our managers regularly send progress reports to the chat."
    },
    {
      question: "What if I'm not satisfied with the result?",
      answer: "We guarantee the quality of our services. If something went wrong, we will either complete the work for free or refund your money. Contact support."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank cards, electronic wallets, cryptocurrencies, and bank transfers. All payments go through secure payment systems."
    },
    {
      question: "Do you work with accounts of any level?",
      answer: "Yes, we work with accounts of any current rank and level. Our specialists have experience playing at all difficulty levels."
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
            <span className="text-white">Frequently Asked </span>
            <span className="glow-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-400">
            Answers to the most popular questions about our services
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
            Didn't find an answer to your question?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Contact Support
            </button>
            <button className="border border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Open Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
