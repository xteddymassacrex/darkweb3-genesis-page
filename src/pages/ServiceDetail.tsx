
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Shield, Clock, Star, Users, CheckCircle, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  
  // State for options
  const [currentRank, setCurrentRank] = useState('silver-1');
  const [targetRank, setTargetRank] = useState('platinum-4');
  const [additionalOptions, setAdditionalOptions] = useState({
    stream: false,
    vpnProtection: true,
    priorityQueue: false,
    soloQueue: false,
    duoQueue: true,
    specificAgents: false
  });
  const [playTimeRange, setPlayTimeRange] = useState([2, 6]); // hours per day
  const [budgetRange, setBudgetRange] = useState([4500]); // single value slider
  const [agentCount, setAgentCount] = useState([3]); // number of agents to play
  const [gameMode, setGameMode] = useState('competitive');

  const service = {
    id: 1,
    title: "Boost to Platinum",
    price: "$45",
    originalPrice: "$55",
    duration: "3-5 days",
    description: "Professional boost to Platinum rank with guaranteed results and complete account security.",
    image: "⚡",
    discount: 20,
    rating: 4.9,
    completedOrders: 1247,
    features: [
      "VPN account protection",
      "Process streaming on request", 
      "Rank achievement guarantee",
      "Priority support 24/7",
      "Money back guarantee if unsuccessful",
      "Detailed progress report"
    ],
    process: [
      "Choose your current and desired rank",
      "Pay for the service using any method",
      "Provide your account details",
      "Track progress in real-time",
      "Receive your account with the new rank"
    ],
    booster: {
      name: "ProGamer_RU",
      rating: 5.0,
      completedJobs: 342,
      rank: "Grandmaster",
      avatar: "👨‍💻"
    }
  };

  const handleOptionChange = (option: string, checked: boolean) => {
    setAdditionalOptions(prev => ({
      ...prev,
      [option]: checked
    }));
  };

  const calculatePrice = () => {
    let basePrice = 45;
    if (additionalOptions.stream) basePrice += 5;
    if (additionalOptions.priorityQueue) basePrice += 3;
    if (additionalOptions.soloQueue) basePrice += 2;
    if (additionalOptions.specificAgents) basePrice += 4;
    
    // Adjust based on time range
    const timeMultiplier = (playTimeRange[1] - playTimeRange[0]) * 0.1;
    basePrice += basePrice * timeMultiplier;
    
    return `$${basePrice.toFixed(0)}`;
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
              Back to services
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
                      <span>{service.completedOrders} orders</span>
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
                  <h3 className="text-xl font-bold text-white mb-4">What's included</h3>
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
                  <h3 className="text-xl font-bold text-white mb-4">How it works</h3>
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
                  <h3 className="text-xl font-bold text-white mb-4">Your booster</h3>
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
                          {service.booster.completedJobs} orders
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="border-neon-blue/50 text-neon-blue">
                      <MessageCircle size={16} className="mr-2" />
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Order Form */}
            <div className="lg:col-span-1">
              <Card className="bg-dark-800/50 border-dark-600 sticky top-8">
                <CardContent className="p-6 space-y-6">
                  {/* Price */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-bold glow-text">{calculatePrice()}</span>
                      {service.originalPrice && (
                        <span className="text-gray-500 line-through text-xl">{service.originalPrice}</span>
                      )}
                    </div>
                    {service.discount > 0 && (
                      <div className="bg-red-500 px-2 py-1 rounded text-xs font-semibold text-white inline-block">
                        {service.discount}% off
                      </div>
                    )}
                  </div>

                  {/* Rank Selection */}
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white font-medium mb-2 block">Current rank</Label>
                      <select 
                        value={currentRank}
                        onChange={(e) => setCurrentRank(e.target.value)}
                        className="w-full bg-dark-700 border border-dark-600 text-white px-3 py-2 rounded"
                      >
                        <option value="silver-1">Silver I</option>
                        <option value="silver-2">Silver II</option>
                        <option value="gold-4">Gold IV</option>
                        <option value="gold-3">Gold III</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label className="text-white font-medium mb-2 block">Target rank</Label>
                      <select 
                        value={targetRank}
                        onChange={(e) => setTargetRank(e.target.value)}
                        className="w-full bg-dark-700 border border-dark-600 text-white px-3 py-2 rounded"
                      >
                        <option value="platinum-4">Platinum IV</option>
                        <option value="platinum-3">Platinum III</option>
                        <option value="platinum-2">Platinum II</option>
                        <option value="platinum-1">Platinum I</option>
                      </select>
                    </div>
                  </div>

                  {/* Game Mode Selection */}
                  <div>
                    <Label className="text-white font-medium mb-3 block">Game mode</Label>
                    <RadioGroup value={gameMode} onValueChange={setGameMode}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="competitive" id="competitive" />
                        <Label htmlFor="competitive" className="text-gray-300">Competitive</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ranked" id="ranked" />
                        <Label htmlFor="ranked" className="text-gray-300">Ranked</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="premier" id="premier" />
                        <Label htmlFor="premier" className="text-gray-300">Premier (+$2)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Queue Type Selection */}
                  <div>
                    <Label className="text-white font-medium mb-3 block">Queue type</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="soloQueue" 
                          checked={additionalOptions.soloQueue}
                          onCheckedChange={(checked) => handleOptionChange('soloQueue', checked as boolean)}
                        />
                        <Label htmlFor="soloQueue" className="text-gray-300">
                          Solo queue (+$2)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="duoQueue" 
                          checked={additionalOptions.duoQueue}
                          onCheckedChange={(checked) => handleOptionChange('duoQueue', checked as boolean)}
                        />
                        <Label htmlFor="duoQueue" className="text-gray-300">
                          Duo queue
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Play Time Range */}
                  <div>
                    <Label className="text-white font-medium mb-3 block">
                      Daily playtime: {playTimeRange[0]}-{playTimeRange[1]} hours
                    </Label>
                    <Slider
                      value={playTimeRange}
                      onValueChange={setPlayTimeRange}
                      max={12}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>1 hour</span>
                      <span>12 hours</span>
                    </div>
                  </div>

                  {/* Number of Agents */}
                  <div>
                    <Label className="text-white font-medium mb-3 block">
                      Number of agents: {agentCount[0]}
                    </Label>
                    <Slider
                      value={agentCount}
                      onValueChange={setAgentCount}
                      max={5}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>1 agent</span>
                      <span>5 agents</span>
                    </div>
                  </div>

                  {/* Additional Options */}
                  <div>
                    <Label className="text-white font-medium mb-3 block">Additional options</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="stream" 
                          checked={additionalOptions.stream}
                          onCheckedChange={(checked) => handleOptionChange('stream', checked as boolean)}
                        />
                        <Label htmlFor="stream" className="text-gray-300">
                          Stream process (+$5)
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="vpnProtection" 
                          checked={additionalOptions.vpnProtection}
                          onCheckedChange={(checked) => handleOptionChange('vpnProtection', checked as boolean)}
                        />
                        <Label htmlFor="vpnProtection" className="text-gray-300">
                          VPN protection (included)
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="priorityQueue" 
                          checked={additionalOptions.priorityQueue}
                          onCheckedChange={(checked) => handleOptionChange('priorityQueue', checked as boolean)}
                        />
                        <Label htmlFor="priorityQueue" className="text-gray-300">
                          Priority queue (+$3)
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="specificAgents" 
                          checked={additionalOptions.specificAgents}
                          onCheckedChange={(checked) => handleOptionChange('specificAgents', checked as boolean)}
                        />
                        <Label htmlFor="specificAgents" className="text-gray-300">
                          Play specific agents (+$4)
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 pt-4">
                    <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-lg py-3">
                      Order Now
                    </Button>
                    <Button variant="outline" className="w-full border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10">
                      Add to Cart
                    </Button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="pt-6 border-t border-dark-600">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <Shield className="text-green-400 mx-auto mb-1" size={20} />
                        <p className="text-xs text-gray-400">100% Safe</p>
                      </div>
                      <div>
                        <Clock className="text-blue-400 mx-auto mb-1" size={20} />
                        <p className="text-xs text-gray-400">Quick Start</p>
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
