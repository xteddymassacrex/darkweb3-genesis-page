
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, Home } from 'lucide-react';
import { useUser } from '@/context/UserContext';
import { toast } from 'sonner';

const SignOut = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    // If user is not logged in, redirect to sign in
    if (!user) {
      navigate('/sign-in');
    }
  }, [user, navigate]);

  const handleSignOut = () => {
    setUser(null);
    toast.success('Successfully signed out!');
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/dashboard');
  };

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-dark-800 border-white/10">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
              <LogOut className="w-6 h-6 text-red-500" />
            </div>
            <CardTitle className="text-2xl font-bold text-white">Sign Out</CardTitle>
            <CardDescription className="text-gray-400">
              Are you sure you want to sign out?
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* User Info */}
            <div className="bg-dark-700 rounded-lg p-4 border border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium">{user.name}</p>
                  <p className="text-gray-400 text-sm">{user.email}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                onClick={handleSignOut}
                variant="destructive"
                className="w-full"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Yes, Sign Out
              </Button>
              
              <Button 
                onClick={handleCancel}
                variant="outline" 
                className="w-full border-gray-600 text-white hover:bg-gray-700"
              >
                Cancel
              </Button>
            </div>

            {/* Home Link */}
            <div className="text-center">
              <Link to="/" className="inline-flex items-center text-gray-400 hover:text-neon-blue transition-colors text-sm">
                <Home className="w-4 h-4 mr-2" />
                Go to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignOut;
