
import { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User, LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useUser } from '@/context/UserContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalItems, setIsCartOpen, user } = useUser();

  const navItems = [
    { name: 'Games', href: '#games' },
    { name: 'Teams', href: '/teams' },
    { name: 'Careers', href: '/join-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold glow-text">TeamPlay</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-neon-blue nav-link px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-300 hover:text-neon-blue nav-link px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-neon-blue"
            >
              <Search size={20} />
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCartOpen(true)}
              className="text-gray-300 hover:text-neon-blue relative"
            >
              <ShoppingCart size={20} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-neon-purple text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>

            {/* User Profile / Auth */}
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 text-gray-300 hover:text-neon-blue transition-colors"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-300 hover:text-neon-blue"
                  >
                    <User size={20} />
                  </Button>
                  <span className="text-sm font-medium">{user.name}</span>
                </Link>
                
                <Link to="/sign-out">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-300 hover:text-red-400"
                  >
                    <LogOut size={20} />
                  </Button>
                </Link>
              </>
            ) : (
              <Link to="/sign-in">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:text-neon-blue hover:border-neon-blue"
                >
                  <LogIn size={16} className="mr-2" />
                  Sign In
                </Button>
              </Link>
            )}

            {/* CTA Button */}
            <Link to="/game/valorant">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue transition-all duration-300 glow-border">
                Find Service
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-neon-blue p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-800/95 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-neon-blue block px-3 py-2 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-300 hover:text-neon-blue block px-3 py-2 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              {/* Mobile buttons */}
              <div className="pt-4 space-y-2">
                <div className="flex items-center space-x-2 px-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 flex-1"
                  >
                    <Search size={16} className="mr-2" />
                    Search
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsCartOpen(true);
                      setIsOpen(false);
                    }}
                    className="border-gray-600 text-gray-300 relative"
                  >
                    <ShoppingCart size={16} />
                    {getTotalItems() > 0 && (
                      <span className="absolute -top-1 -right-1 bg-neon-purple text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {getTotalItems()}
                      </span>
                    )}
                  </Button>
                  
                  {user ? (
                    <>
                      <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-300"
                        >
                          <User size={16} />
                        </Button>
                      </Link>
                      <Link to="/sign-out" onClick={() => setIsOpen(false)}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-300"
                        >
                          <LogOut size={16} />
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <Link to="/sign-in" onClick={() => setIsOpen(false)}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300"
                      >
                        <LogIn size={16} />
                      </Button>
                    </Link>
                  )}
                </div>
                <Link to="/game/valorant" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple">
                    Find Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
