
import { X, Plus, Minus, ShoppingBag, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUser } from '@/context/UserContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice, 
    getTotalItems,
    user 
  } = useUser();
  
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="absolute left-0 top-0 h-full w-96 bg-dark-900 border-r border-white/10 shadow-2xl transform transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-6 h-6 text-neon-blue" />
            <h2 className="text-xl font-bold text-white">
              Cart ({getTotalItems()})
            </h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCartOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="bg-dark-800 rounded-lg p-4 border border-white/10">
                <div className="flex items-start space-x-3">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium truncate">{item.name}</h3>
                    <p className="text-gray-400 text-sm">{item.gameTitle}</p>
                    <p className="text-neon-blue font-bold">${item.price}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 flex-shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                
                {/* Quantity controls */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 border-gray-600 text-gray-300"
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="text-white font-medium w-8 text-center">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 border-gray-600 text-gray-300"
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                  <span className="text-white font-bold">
                    ${item.price * item.quantity}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-white/10 p-6 space-y-4">
            {/* Bonus tokens info */}
            {user && (
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-1 text-gray-400">
                  <Coins className="w-4 h-4" />
                  <span>Available tokens:</span>
                </div>
                <span className="text-neon-purple font-medium">{user.bonusTokens}</span>
              </div>
            )}
            
            <div className="flex items-center justify-between text-lg font-bold text-white">
              <span>Total:</span>
              <span className="text-neon-blue">${getTotalPrice()}</span>
            </div>
            
            <Button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue transition-all duration-300"
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
