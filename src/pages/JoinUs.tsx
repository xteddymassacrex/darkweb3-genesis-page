
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
      title: "Weekly Payments",
      description: "Guaranteed payments every Friday without delays",
      details: "From $750 to $3,000+ per month depending on experience"
    },
    {
      icon: <Clock className="w-8 h-8 text-neon-purple" />,
      title: "Flexible Schedule",
      description: "Work when convenient, no office restrictions",
      details: "Minimum 4-6 hours per day, choose your own time"
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      title: "Bonuses & Rewards",
      description: "Additional payments for quality work",
      details: "Up to 30% bonus for high client ratings"
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Pro Team",
      description: "Work in a team of experienced players",
      details: "Experience sharing, support, joint projects"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Complete Safety",
      description: "Account protection and confidentiality",
      details: "VPN, safe methods, account insurance"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
      title: "Career Growth",
      description: "Development from player to team leader",
      details: "Opportunity to become a mentor and earn % from team"
    }
  ];

  const onboardingSteps = [
    {
      step: 1,
      title: "Application",
      description: "Fill out the form and pass initial screening",
      icon: <FileCheck className="w-6 h-6" />,
      duration: "1 day",
      details: [
        "Gaming experience form",
        "Achievement screenshots",
        "Motivation letter"
      ]
    },
    {
      step: 2,
      title: "Test Assignment",
      description: "Demonstrate your skills in practice",
      icon: <Gamepad2 className="w-6 h-6" />,
      duration: "2-3 days",
      details: [
        "Complete a team session",
        "Gameplay recording",
        "Meeting requirements"
      ]
    },
    {
      step: 3,
      title: "Interview",
      description: "Interview with HR and technical specialist",
      icon: <MessageCircle className="w-6 h-6" />,
      duration: "1 hour",
      details: [
        "Video call with HR",
        "Discuss conditions",
        "Answer questions"
      ]
    },
    {
      step: 4,
      title: "KYC Procedure",
      description: "Identity verification and contract signing",
      icon: <UserCheck className="w-6 h-6" />,
      duration: "1-2 days",
      details: [
        "Document verification",
        "NDA signing",
        "Account setup"
      ]
    }
  ];

  const requirements = [
    "2+ years gaming experience",
    "High rank in chosen game",
    "Stable internet connection",
    "English language knowledge",
    "Responsibility and punctuality"
  ];

  const games = [
    { name: "League of Legends", ranks: ["Diamond+"], rate: "from $7/hour" },
    { name: "Valorant", ranks: ["Immortal+"], rate: "from $8/hour" },
    { name: "CS2", ranks: ["Global Elite"], rate: "from $7.5/hour" },
    { name: "Dota 2", ranks: ["Divine+"], rate: "from $7/hour" },
    { name: "Overwatch 2", ranks: ["Master+"], rate: "from $6/hour" },
    { name: "Apex Legends", ranks: ["Master+"], rate: "from $5.5/hour" }
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
            Join the Pro Team
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Work with Us
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Earn from what you love. Become part of a professional gaming team 
            and get stable income from your gaming skills.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-lg px-8 py-6"
            >
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 glow-text">Benefits of Working with Us</h2>
            <p className="text-gray-400 text-lg">Why thousands of players choose our platform</p>
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
            <h2 className="text-4xl font-bold mb-4 glow-text">Onboarding Process</h2>
            <p className="text-gray-400 text-lg">Journey from application to first order</p>
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
                    Step {step.step}
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
            <h2 className="text-4xl font-bold mb-4 glow-text">Games and Rates</h2>
            <p className="text-gray-400 text-lg">Rates for professional players</p>
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
                    <p className="text-gray-400">Required rank:</p>
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
            <h2 className="text-4xl font-bold mb-4 glow-text">Requirements</h2>
            <p className="text-gray-400 text-lg">What you need to work with us</p>
          </div>

          <Card className="bg-dark-800/50 border-gray-700">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Basic Requirements</h3>
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
                  <h3 className="text-xl font-bold text-white mb-4">What We Provide</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      Training and mentorship
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      Access to private accounts
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      24/7 technical support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      Ban insurance
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      Corporate discounts
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
              <h2 className="text-3xl font-bold mb-4 glow-text">Ready to Start?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Join the team of professionals and earn from your gaming skills
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-lg px-8 py-6"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 text-lg px-8 py-6">
                  Ask in Discord
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
