
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const CustomerReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Alex M.",
      game: "League of Legends",
      service: "Boost to Diamond",
      rating: 5,
      text: "Excellent service! Climbed from Gold to Diamond in 3 days. The booster played carefully, no account issues whatsoever.",
      avatar: "AM"
    },
    {
      name: "Maria K.",
      game: "Valorant",
      service: "Coaching",
      rating: 5,
      text: "The coach explained all my mistakes and gave concrete advice. Climbed 2 ranks in a week! Recommend to everyone.",
      avatar: "MK"
    },
    {
      name: "Dmitry V.",
      game: "CS2",
      service: "Premier Boost",
      rating: 5,
      text: "Quickly and efficiently boosted my Premier rating. They communicated in chat, answered all questions. Will order again.",
      avatar: "DV"
    },
    {
      name: "Anna S.",
      game: "WoW",
      service: "Mythic+ keys",
      rating: 5,
      text: "Completed all keys up to +20, got excellent gear. Professional team, knows all tactics.",
      avatar: "AS"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-dark-800/30 to-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Customer </span>
            <span className="glow-text">Reviews</span>
          </h2>
          <p className="text-lg text-gray-400">
            What our customers say about the quality of our services
          </p>
        </div>

        {/* Reviews Slider */}
        <div className="relative">
          <Card className="bg-dark-800/50 border-dark-600 glow-border backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                {/* Navigation */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevReview}
                  className="border-dark-600 hover:bg-dark-700"
                >
                  <ChevronLeft size={20} />
                </Button>

                {/* Review Content */}
                <div className="flex-1 mx-8">
                  <div className="text-center mb-6">
                    {/* Avatar */}
                    <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                      {reviews[currentReview].avatar}
                    </div>
                    
                    {/* Name and Game */}
                    <h3 className="text-xl font-bold text-white mb-1">
                      {reviews[currentReview].name}
                    </h3>
                    <p className="text-neon-blue text-sm">
                      {reviews[currentReview].game} • {reviews[currentReview].service}
                    </p>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`${
                          i < reviews[currentReview].rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 text-lg text-center leading-relaxed">
                    "{reviews[currentReview].text}"
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextReview}
                  className="border-dark-600 hover:bg-dark-700"
                >
                  <ChevronRight size={20} />
                </Button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentReview ? 'bg-neon-blue' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
