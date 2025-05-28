
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  CreditCard, 
  ArrowLeft, 
  Shield, 
  Clock,
  MessageCircle,
  Phone
} from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [contactMethod, setContactMethod] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    address: '',
    postalCode: '',
    contactInfo: '',
    additionalNotes: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactMethod) {
      alert('Пожалуйста, выберите удобный способ связи');
      return;
    }
    // Process order
    console.log('Order submitted:', { paymentMethod, contactMethod, formData });
  };

  const orderItems = [
    {
      id: 1,
      title: "Boost до Platinum",
      game: "Valorant",
      price: "4,500₽",
      originalPrice: "5,500₽",
      duration: "3-5 дней"
    }
  ];

  const totalPrice = "4,500₽";
  const savedAmount = "1,000₽";

  return (
    <div className="min-h-screen bg-dark-900">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="text-gray-400 hover:text-white"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={20} className="mr-2" />
              Назад
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <Card className="bg-dark-800/50 border-dark-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <MessageCircle className="mr-2" size={20} />
                      Контактная информация
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-white">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-dark-700 border-dark-600 text-white"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-white">Имя *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="bg-dark-700 border-dark-600 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-white">Фамилия *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="bg-dark-700 border-dark-600 text-white"
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Preferred Contact Method */}
                <Card className="bg-dark-800/50 border-dark-600">
                  <CardHeader>
                    <CardTitle className="text-white">Удобный способ связи *</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={contactMethod} onValueChange={setContactMethod}>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="telegram" id="telegram" />
                          <Label htmlFor="telegram" className="text-white flex items-center cursor-pointer">
                            <MessageCircle className="mr-2 text-blue-400" size={16} />
                            Telegram
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="discord" id="discord" />
                          <Label htmlFor="discord" className="text-white flex items-center cursor-pointer">
                            <MessageCircle className="mr-2 text-purple-400" size={16} />
                            Discord
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="whatsapp" id="whatsapp" />
                          <Label htmlFor="whatsapp" className="text-white flex items-center cursor-pointer">
                            <Phone className="mr-2 text-green-400" size={16} />
                            WhatsApp
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                    
                    {contactMethod && (
                      <div className="mt-4">
                        <Label htmlFor="contactInfo" className="text-white">
                          {contactMethod === 'telegram' && 'Telegram username (@username)'}
                          {contactMethod === 'discord' && 'Discord username (username#1234)'}
                          {contactMethod === 'whatsapp' && 'Номер WhatsApp (+7...)'}
                        </Label>
                        <Input
                          id="contactInfo"
                          value={formData.contactInfo}
                          onChange={(e) => handleInputChange('contactInfo', e.target.value)}
                          className="bg-dark-700 border-dark-600 text-white"
                          placeholder={
                            contactMethod === 'telegram' ? '@username' :
                            contactMethod === 'discord' ? 'username#1234' :
                            '+7 XXX XXX XX XX'
                          }
                          required
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Billing Address */}
                <Card className="bg-dark-800/50 border-dark-600">
                  <CardHeader>
                    <CardTitle className="text-white">Платёжный адрес</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="country" className="text-white">Страна *</Label>
                        <Input
                          id="country"
                          value={formData.country}
                          onChange={(e) => handleInputChange('country', e.target.value)}
                          className="bg-dark-700 border-dark-600 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="city" className="text-white">Город *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className="bg-dark-700 border-dark-600 text-white"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="address" className="text-white">Адрес *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="bg-dark-700 border-dark-600 text-white"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="postalCode" className="text-white">Почтовый индекс</Label>
                      <Input
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        className="bg-dark-700 border-dark-600 text-white"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card className="bg-dark-800/50 border-dark-600">
                  <CardHeader>
                    <CardTitle className="text-white">Способ оплаты</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 p-4 border border-dark-600 rounded-lg">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="text-white flex items-center cursor-pointer flex-1">
                            <CreditCard className="mr-2 text-blue-400" size={16} />
                            Банковская карта
                          </Label>
                        </div>
                        
                        <div className="flex items-center space-x-2 p-4 border border-dark-600 rounded-lg">
                          <RadioGroupItem value="crypto" id="crypto" />
                          <Label htmlFor="crypto" className="text-white flex items-center cursor-pointer flex-1">
                            <span className="mr-2 text-yellow-400">₿</span>
                            Криптовалюта
                          </Label>
                        </div>
                        
                        <div className="flex items-center space-x-2 p-4 border border-dark-600 rounded-lg">
                          <RadioGroupItem value="qiwi" id="qiwi" />
                          <Label htmlFor="qiwi" className="text-white flex items-center cursor-pointer flex-1">
                            <span className="mr-2 text-orange-400">Q</span>
                            QIWI
                          </Label>
                        </div>
                        
                        <div className="flex items-center space-x-2 p-4 border border-dark-600 rounded-lg">
                          <RadioGroupItem value="yoomoney" id="yoomoney" />
                          <Label htmlFor="yoomoney" className="text-white flex items-center cursor-pointer flex-1">
                            <span className="mr-2 text-purple-400">ЮM</span>
                            ЮMoney
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>

                    {paymentMethod === 'card' && (
                      <div className="mt-6 space-y-4">
                        <div>
                          <Label htmlFor="cardNumber" className="text-white">Номер карты *</Label>
                          <Input
                            id="cardNumber"
                            value={formData.cardNumber}
                            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                            className="bg-dark-700 border-dark-600 text-white"
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiryDate" className="text-white">Срок действия *</Label>
                            <Input
                              id="expiryDate"
                              value={formData.expiryDate}
                              onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                              className="bg-dark-700 border-dark-600 text-white"
                              placeholder="MM/YY"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv" className="text-white">CVV *</Label>
                            <Input
                              id="cvv"
                              value={formData.cvv}
                              onChange={(e) => handleInputChange('cvv', e.target.value)}
                              className="bg-dark-700 border-dark-600 text-white"
                              placeholder="123"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="cardName" className="text-white">Имя на карте *</Label>
                          <Input
                            id="cardName"
                            value={formData.cardName}
                            onChange={(e) => handleInputChange('cardName', e.target.value)}
                            className="bg-dark-700 border-dark-600 text-white"
                            required
                          />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Additional Notes */}
                <Card className="bg-dark-800/50 border-dark-600">
                  <CardHeader>
                    <CardTitle className="text-white">Дополнительные пожелания</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={formData.additionalNotes}
                      onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                      className="bg-dark-700 border-dark-600 text-white"
                      placeholder="Укажите любые особые пожелания или требования к выполнению заказа..."
                      rows={4}
                    />
                  </CardContent>
                </Card>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-dark-800/50 border-dark-600 sticky top-8">
                <CardHeader>
                  <CardTitle className="text-white">Ваш заказ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {orderItems.map((item) => (
                    <div key={item.id} className="border-b border-dark-600 pb-4">
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.game}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center text-neon-cyan">
                          <Clock size={14} className="mr-1" />
                          <span className="text-xs">{item.duration}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold">{item.price}</div>
                          {item.originalPrice && (
                            <div className="text-gray-500 line-through text-sm">{item.originalPrice}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="space-y-2 pt-4">
                    <div className="flex justify-between text-gray-400">
                      <span>Подытог:</span>
                      <span>5,500₽</span>
                    </div>
                    <div className="flex justify-between text-green-400">
                      <span>Скидка:</span>
                      <span>-{savedAmount}</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-white border-t border-dark-600 pt-2">
                      <span>Итого:</span>
                      <span className="glow-text">{totalPrice}</span>
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-lg py-3 mt-6"
                    onClick={handleSubmit}
                  >
                    Оформить заказ
                  </Button>

                  {/* Trust Indicators */}
                  <div className="mt-6 pt-6 border-t border-dark-600">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <Shield className="text-green-400 mx-auto mb-1" size={20} />
                        <p className="text-xs text-gray-400">Безопасная оплата</p>
                      </div>
                      <div>
                        <Clock className="text-blue-400 mx-auto mb-1" size={20} />
                        <p className="text-xs text-gray-400">Быстрое выполнение</p>
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

export default Checkout;
