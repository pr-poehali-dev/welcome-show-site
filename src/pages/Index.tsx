import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    event: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="https://cdn.poehali.dev/files/c1d4468b-6c9e-4dae-bca7-83187bb3c5a0.jpg" 
                alt="Welcome Show Logo" 
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('formats')} className="hover:text-primary transition-colors">
                Форматы работы
              </button>
              <button onClick={() => scrollToSection('scenarios')} className="hover:text-primary transition-colors">
                Сценарии
              </button>
              <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">
                Стоимость
              </button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">
                Контакты
              </button>
              <div className="flex items-center space-x-3">
                <a href="#" className="text-primary hover:text-secondary transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="text-primary hover:text-secondary transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="#" className="text-primary hover:text-secondary transition-colors">
                  <Icon name="Phone" size={20} />
                </a>
              </div>
              <Button className="bg-primary hover:bg-secondary text-white font-semibold px-6">
                Забронировать
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 pt-20"
               style={{
                 backgroundImage: `url(/img/7045eb7d-e94a-4c72-b42f-177b4cf1aca4.jpg)`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 animate-fade-in">
            WELCOME SHOW
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">
            РАЗВЛЕКАТЕЛЬНАЯ ПРОГРАММА НА ВАШ ПРАЗДНИК!<br />
            МЫ СОЗДАЁМ НАСТРОЕНИЕ!
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-secondary text-white text-lg px-8 py-4 animate-scale-in"
            onClick={() => scrollToSection('booking')}
          >
            Заказать праздник
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
            ПОЧЕМУ ПРАЗДНИК С НАМИ - ВАШ ЛУЧШИЙ ВАРИАНТ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Star" size={48} className="mx-auto text-accent mb-4" />
                <CardTitle className="text-xl font-montserrat">Опыт и Амбиции</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Welcome Show - это компания праздников с большими амбициями и опытом работы. Наши сценарии подходят для любого повода и возраста!</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Zap" size={48} className="mx-auto text-accent mb-4" />
                <CardTitle className="text-xl font-montserrat">Универсальные форматы</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Мы создали форматы, которые закроют все ваши потребности: мы будем угадывать, будем кидать, попадать, петь, танцевать, фотографировать и многое другое.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Target" size={48} className="mx-auto text-accent mb-4" />
                <CardTitle className="text-xl font-montserrat">Любая сложность</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Наша команда берётся за заказы любой сложности - мы открыты к предложениям и новым идеям!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Form 1 */}
      <section id="booking" className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-montserrat font-bold mb-8">
            ХОТИТЕ СВОЙ ЛУЧШИЙ ПРАЗДНИК?<br />
            давайте рассчитаем его стоимость!
          </h2>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-white text-gray-800"
              />
              <Input
                placeholder="Номер телефона"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="bg-white text-gray-800"
              />
              <Input
                placeholder="Ваш повод"
                value={formData.event}
                onChange={(e) => setFormData({...formData, event: e.target.value})}
                className="bg-white text-gray-800"
              />
              <Button type="submit" className="w-full bg-accent text-gray-800 hover:bg-accent/90 font-semibold">
                Рассчитать
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section id="formats" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
            К ВАМ ИЛИ К НАМ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Truck" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="text-2xl font-montserrat text-primary">ИГРА НА ВЫЕЗДЕ</CardTitle>
                <CardDescription className="text-lg">приедем в любую точку Кузбасса</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Ведущий, диджей, весь наш реквизит и музыкальное, мультимедийное оборудование приедут к вам на площадку!</p>
                <Button className="w-full bg-primary hover:bg-secondary text-white">
                  Хочу
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Calendar" size={48} className="mx-auto text-secondary mb-4" />
                <CardTitle className="text-2xl font-montserrat text-secondary">"ТВОЕ ШОУ"</CardTitle>
                <CardDescription className="text-lg">закрытая игра по билетам</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Собери свою компанию и приди к нам на "ТВОЕ ШОУ", которое мы стабильно проводим один раз в месяц!</p>
                <Button className="w-full bg-secondary hover:bg-primary text-white">
                  Хочу
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section id="scenarios" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
            СЦЕНАРИИ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-primary font-montserrat">КЛАССИЧЕСКИЙ WELCOME</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Двухчасовая программа на любой ваш повод и для любой компании! Две команды, псевдоинтеллектуальные раунды, НЕ ИГРЫ, танцы, караоке и море эмоций!</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="text-secondary font-montserrat">WELCOME KIDS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Два часа детского праздника для ребятишек от 5 лет! Простецкие, но смешные раунды, а также Just Dance, фольгированное шоу и упрощенные НЕ ИГРЫ!</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-accent font-montserrat">НЕ ИГРЫ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Часовая программа по мотивам известного шоу во ВКонтакте! Стол, куча реквизита, 8 динамичных раундов и самый настоящий накал страстей - идеально для тимбилдинга или корпоратива!</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-600">
              <CardHeader>
                <CardTitle className="text-red-600 font-montserrat">WELCOME 21+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Чернее и пошлее не придумаешь! По-настоящему жесткий формат для тех, кто любит погорячее и поострее - самое то для девичников, мальчишников и неформальных встреч с друзьями!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
            А ДЛЯ МОЕГО ПОВОДА ПОДОЙДЁТ? КОНЕЧНО!
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Gift" size={40} className="text-primary mb-2" />
                <CardTitle className="text-primary font-montserrat">ДЕНЬ РОЖДЕНИЯ/ЮБИЛЕЙ</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Друзья и родственники скажут вам спасибо за такую программу!</li>
                  <li>• Ведущий проконтролирует порядок поздравлений - без них вы не останетесь!</li>
                  <li>• Никто не останется в стороне - каждый станет частью вашего дня рождения!</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Building" size={40} className="text-secondary mb-2" />
                <CardTitle className="text-secondary font-montserrat">КОРПОРАТИВ/ТИМБИЛДИНГ</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Ожидайте премию от босса за такую идею корпоратива! *это не точно</li>
                  <li>• Самый разношёрстый и тухлый коллектив превращаем в единый организм эмоций!</li>
                  <li>• Дайте эмоциям выйти наружу, отметьте успехи каждого, закройте год вместе с Welcome Show!</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="GraduationCap" size={40} className="text-accent mb-2" />
                <CardTitle className="text-accent font-montserrat">ВЫПУСКНОЙ</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Самый важный день в жизни выпускников станет ещё важнее!</li>
                  <li>• Наша команда подготовит индивидуальный сценарий под ребят из класса!</li>
                  <li>• Приедем даже в школу с мощным и качественным оборудованием!</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Heart" size={40} className="text-pink-600 mb-2" />
                <CardTitle className="text-pink-600 font-montserrat">СВАДЬБА</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Возьмёмся даже за многочасовые заказы - программы хватит надолго!</li>
                  <li>• Такой важный момент необходимо доверить профессионалам!</li>
                  <li>• Поднимем изо стола даже самых не танцующих или не поющих родственников!</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Users" size={40} className="text-purple-600 mb-2" />
                <CardTitle className="text-purple-600 font-montserrat">ДЕВИЧНИК/МАЛЬЧИШНИК</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Скоро печать в паспорте, а значит сейчас самое время оторваться по полной!</li>
                  <li>• Повеселимся так, что в совместной жизни уже не захочется!</li>
                  <li>• Привезём с собой сценарий 21+, будет горячо!</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Trust Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-montserrat font-bold mb-8 text-gray-800">НАМ ДОВЕРЯЮТ:</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-gray-200 px-6 py-3 rounded-lg">Ростикс</div>
              <div className="bg-gray-200 px-6 py-3 rounded-lg">Проект-Сервис</div>
              <div className="bg-gray-200 px-6 py-3 rounded-lg">Магистраль</div>
              <div className="bg-gray-200 px-6 py-3 rounded-lg">Эдельвейс</div>
              <div className="bg-gray-200 px-6 py-3 rounded-lg">Крк "Волна"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
            СТОИМОСТЬ
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-primary">
              <CardHeader>
                <Icon name="Truck" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="text-2xl font-montserrat text-primary">ИГРА НА ВЫЕЗДЕ</CardTitle>
                <CardDescription className="text-lg">от 6 до 100+ человек</CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">от 15 000 рублей</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Ведущий, диджей, весь наш реквизит и музыкальное, мультимедийное оборудование приедут к вам на площадку!</p>
                <Button className="w-full bg-primary hover:bg-secondary text-white">
                  Забронировать
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-secondary">
              <CardHeader>
                <Icon name="Calendar" size={48} className="mx-auto text-secondary mb-4" />
                <CardTitle className="text-2xl font-montserrat text-secondary">ТВОЕ ШОУ</CardTitle>
                <CardDescription className="text-lg">закрытая игра по билетам</CardDescription>
                <div className="text-3xl font-bold text-secondary mt-4">800 рублей за человека</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Собери свою компанию и приди к нам на "ТВОЕ ШОУ", которое мы стабильно проводим один раз в месяц!</p>
                <Button className="w-full bg-secondary hover:bg-primary text-white">
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Form 2 */}
      <section className="py-16 bg-gradient-to-r from-secondary to-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-montserrat font-bold mb-8">
            ХОТИТЕ СВОЙ ЛУЧШИЙ ПРАЗДНИК?<br />
            давайте рассчитываем его стоимость!
          </h2>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Ваше имя"
                className="bg-white text-gray-800"
              />
              <Input
                placeholder="Номер телефона"
                className="bg-white text-gray-800"
              />
              <Input
                placeholder="Ваш повод"
                className="bg-white text-gray-800"
              />
              <Button type="submit" className="w-full bg-accent text-gray-800 hover:bg-accent/90 font-semibold">
                Рассчитать
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-8">КОНТАКТЫ</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Phone" size={24} className="text-accent" />
              <span className="text-2xl font-semibold">+7 995 060 48 88</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="MapPin" size={24} className="text-accent" />
              <span className="text-xl">Офис по адресу: Бульвар строителей 73А</span>
            </div>
          </div>
          <p className="text-xl text-accent font-semibold">
            Не ответим за 10 минут - вам скидка 15%!
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-primary hover:bg-secondary text-white px-8 py-4">
              Связаться сейчас
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-montserrat font-bold text-primary mb-4">
            WELCOME SHOW
          </div>
          <p className="text-gray-400">
            Создаём настроение на ваших праздниках!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;