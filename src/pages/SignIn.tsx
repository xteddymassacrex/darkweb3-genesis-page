
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Chrome, MessageCircle, ArrowLeft } from 'lucide-react';
import { useUser } from '@/context/UserContext';
import { toast } from 'sonner';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // Mock Google authentication
    const mockUser = {
      id: '1',
      name: 'John Google User',
      email: 'john@gmail.com',
      bonusTokens: 1500,
      level: 'Pro Player',
      totalOrders: 15,
      joinDate: '2024-01-15'
    };
    
    setUser(mockUser);
    toast.success('Successfully signed in with Google!');
    navigate('/dashboard');
  };

  const handleDiscordSignIn = () => {
    // Mock Discord authentication
    const mockUser = {
      id: '2',
      name: 'DiscordGamer#1234',
      email: 'gamer@discord.com',
      bonusTokens: 2000,
      level: 'Elite Player',
      totalOrders: 25,
      joinDate: '2024-02-20'
    };
    
    setUser(mockUser);
    toast.success('Successfully signed in with Discord!');
    navigate('/dashboard');
  };

  const handleEmailSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    // Mock email authentication
    const mockUser = {
      id: '3',
      name: email.split('@')[0],
      email: email,
      bonusTokens: 1000,
      level: 'Player',
      totalOrders: 5,
      joinDate: '2024-06-05'
    };
    
    setUser(mockUser);
    toast.success('Successfully signed in!');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back button */}
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-neon-blue mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <Card className="bg-dark-800 border-white/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-white">Welcome Back</CardTitle>
            <CardDescription className="text-gray-400">
              Sign in to your TeamPlay account
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Social Sign In */}
            <div className="space-y-3">
              <Button 
                onClick={handleGoogleSignIn}
                variant="outline" 
                className="w-full border-gray-600 text-white hover:bg-gray-700"
              >
                <Chrome className="w-4 h-4 mr-2" />
                Continue with Google
              </Button>
              
              <Button 
                onClick={handleDiscordSignIn}
                variant="outline" 
                className="w-full border-gray-600 text-white hover:bg-gray-700"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Continue with Discord
              </Button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-600" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-dark-800 px-2 text-gray-400">Or continue with email</span>
              </div>
            </div>

            {/* Email Sign In */}
            <form onSubmit={handleEmailSignIn} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-dark-700 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-300">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-dark-700 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue"
              >
                Sign In
              </Button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Don't have an account?{' '}
                <Link to="/sign-up" className="text-neon-blue hover:text-neon-purple transition-colors">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
