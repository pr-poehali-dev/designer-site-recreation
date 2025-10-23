import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeNav, setActiveNav] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Palette',
      title: 'UI/UX Design',
      description: 'Создаем интуитивные интерфейсы, которые влюбляют пользователей с первого клика'
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Design',
      description: 'Адаптивные дизайны для iOS и Android с фокусом на пользовательский опыт'
    },
    {
      icon: 'Layers',
      title: 'Branding',
      description: 'Разрабатываем уникальную визуальную идентичность вашего бренда'
    },
    {
      icon: 'Sparkles',
      title: '3D Design',
      description: 'Футуристичные 3D элементы и анимации для wow-эффекта'
    }
  ];

  const process = [
    { step: '01', title: 'Research', description: 'Глубокий анализ вашего бизнеса и целевой аудитории' },
    { step: '02', title: 'Concept', description: 'Создание концепции и прототипов дизайна' },
    { step: '03', title: 'Design', description: 'Разработка финальных макетов и дизайн-системы' },
    { step: '04', title: 'Deliver', description: 'Передача проекта с полной документацией' }
  ];

  const team = [
    { name: 'Алексей Орбитов', role: 'Lead Designer', avatar: '🎨' },
    { name: 'Мария Неонова', role: 'UX Researcher', avatar: '🔮' },
    { name: 'Дмитрий Футурис', role: '3D Artist', avatar: '🚀' }
  ];

  const blogPosts = [
    {
      title: 'Будущее UI/UX дизайна',
      date: '15 окт 2025',
      category: 'Тренды',
      image: 'https://cdn.poehali.dev/files/15d71bcb-2dcd-440f-b6ba-b8b6e806cdee.jpg'
    },
    {
      title: 'Нейроморфизм в действии',
      date: '10 окт 2025',
      category: 'Туториал'
    },
    {
      title: '10 правил современного дизайна',
      date: '5 окт 2025',
      category: 'Гайд'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-orbitron neon-text">DESIGN STUDIO</h1>
            <div className="hidden md:flex gap-8">
              {['home', 'services', 'process', 'team', 'blog', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeNav === item ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item === 'home' ? 'Главная' : 
                   item === 'services' ? 'Услуги' :
                   item === 'process' ? 'Процесс' :
                   item === 'team' ? 'Команда' :
                   item === 'blog' ? 'Блог' : 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-bold font-orbitron mb-6 neon-text">
              Innovate. Create. Inspire.
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Наша студия раздвигает границы дизайна, создавая инновационные цифровые впечатления
            </p>
            <Button 
              size="lg" 
              className="neon-glow bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-full font-orbitron"
            >
              Исследовать проекты
            </Button>
          </div>
          
          <div className="mt-20 relative">
            <div className="w-full h-[400px] rounded-3xl overflow-hidden neon-glow">
              <img 
                src="https://cdn.poehali.dev/files/15d71bcb-2dcd-440f-b6ba-b8b6e806cdee.jpg" 
                alt="Design showcase"
                className="w-full h-full object-cover animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold font-orbitron text-center mb-16 neon-text">Наши услуги</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:neon-glow group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <Icon name={service.icon as any} size={48} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-xl font-bold font-orbitron mb-3">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold font-orbitron text-center mb-16 neon-text">Процесс работы</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative group">
                <div className="text-8xl font-bold font-orbitron text-primary/20 mb-4">{item.step}</div>
                <h4 className="text-2xl font-bold font-orbitron mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold font-orbitron text-center mb-16 neon-text">Наша команда</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="bg-card border-border hover:neon-glow transition-all">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h4 className="text-xl font-bold font-orbitron mb-2">{member.name}</h4>
                  <p className="text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold font-orbitron text-center mb-16 neon-text">Блог</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary transition-all hover:neon-glow cursor-pointer overflow-hidden group"
              >
                {post.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="text-primary text-sm mb-2">{post.category}</div>
                  <h4 className="text-xl font-bold font-orbitron mb-3">{post.title}</h4>
                  <p className="text-muted-foreground text-sm">{post.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="text-5xl font-bold font-orbitron mb-8 neon-text">Готовы к сотрудничеству?</h3>
          <p className="text-xl text-muted-foreground mb-12">
            Давайте создадим что-то удивительное вместе
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="neon-glow bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-full font-orbitron"
            >
              <Icon name="Mail" className="mr-2" size={20} />
              Связаться с нами
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 rounded-full font-orbitron"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold font-orbitron neon-text">DESIGN STUDIO</div>
            <div className="flex gap-6">
              <Icon name="Instagram" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Twitter" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Linkedin" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Dribbble" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
            <p className="text-muted-foreground text-sm">© 2025 Design Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
