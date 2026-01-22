
import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X, Phone, Mail, MapPin, MessageSquare, ArrowRight, Laptop, ShieldCheck, Cpu, Headphones, ChevronRight, Github, Linkedin, Facebook, Users, Monitor, Printer, Search, Filter, Globe, BarChart3, Clock, Award, ShoppingCart, CheckCircle2, FileText, Send, Building2, GraduationCap, Briefcase, Landmark } from 'lucide-react';
import { SERVICES, PARTNERS, LOCATIONS, PRODUCTS } from './constants';
import AIAssistant from './components/AIAssistant';

type Page = 'home' | 'about' | 'services' | 'products' | 'contact' | 'quote';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigate = (page: Page, params?: { product?: string }) => {
    if (params?.product) {
      setSelectedProduct(params.product);
    } else if (page !== 'quote') {
      setSelectedProduct(null);
    }
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  // --- Components ---

  const Logo = ({ light = false }: { light?: boolean }) => (
    <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate('home')}>
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Diamond shape logo reconstruction */}
        <div className={`absolute inset-0 rotate-45 rounded-lg border-2 transition-transform duration-500 group-hover:rotate-[225deg] ${light ? 'bg-blue-600 border-white/20' : 'bg-blue-900 border-blue-100'}`}></div>
        <span className="relative text-white font-serif italic text-2xl font-bold translate-y-[-1px]">F</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-display font-black tracking-tighter ${light ? 'text-white' : 'text-blue-900'}`}>FULTEC</span>
        <span className={`text-[10px] font-bold tracking-[0.3em] uppercase ${light ? 'text-blue-300' : 'text-blue-600'}`}>SYSTEMS</span>
      </div>
    </div>
  );

  const Navbar = () => (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || currentPage !== 'home' ? 'bg-white shadow-xl py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo light={!scrolled && currentPage === 'home'} />
          
          <div className="hidden md:flex items-center space-x-10">
            {['Home', 'About', 'Services', 'Products', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => navigate(item.toLowerCase() as Page)} 
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 ${
                  currentPage === item.toLowerCase() 
                    ? 'text-blue-600' 
                    : (scrolled || currentPage !== 'home' ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white')
                }`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => navigate('quote')}
              className="bg-blue-600 text-white px-7 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
            >
              Request Quote
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={scrolled || currentPage !== 'home' ? 'text-slate-900' : 'text-white'}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-2xl absolute w-full left-0 border-t border-gray-100 p-8 space-y-6 animate-in slide-in-from-top duration-300">
          {['Home', 'About', 'Services', 'Products', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => navigate(item.toLowerCase() as Page)} 
              className={`block w-full text-left text-xl font-bold ${currentPage === item.toLowerCase() ? 'text-blue-600' : 'text-slate-800'}`}
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => navigate('quote')}
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-500/20"
          >
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <div className="animate-in fade-in duration-1000">
      {/* Immersive Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105 animate-[pulse_20s_infinite]">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
            alt="Fultec Hero" 
            className="w-full h-full object-cover brightness-[0.35]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/90 via-blue-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8 animate-in slide-in-from-bottom duration-1000">
              <span className="w-12 h-[2px] bg-blue-500"></span>
              <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-xs">Innovation Partner Since 1992</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-display font-black text-white leading-[0.9] mb-10 animate-in slide-in-from-left duration-1000">
              Elevating <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-100 italic">Technology</span> <br/>
              In Belize
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-2xl leading-relaxed animate-in slide-in-from-left duration-1000 delay-200 font-medium">
              We engineer mission-critical IT infrastructure and cybersecurity solutions that power the nation's leading enterprises and government institutions.
            </p>
            <div className="flex flex-wrap gap-6 animate-in slide-in-from-bottom duration-1000 delay-300">
              <button onClick={() => navigate('quote')} className="group bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-500 transition-all flex items-center shadow-2xl shadow-blue-600/40">
                Begin Transformation <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
              </button>
              <button onClick={() => navigate('services')} className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all">
                Explore Solutions
              </button>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20"></div>
        </div>
      </section>

      {/* Authority Section - Core Values */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-blue-900 leading-tight mb-8">
                Uncompromising Standards. <br/>
                <span className="text-blue-600">Local Presence.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <ShieldCheck size={30} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Zero Trust Security</h4>
                    <p className="text-slate-600">Implementing advanced Fortinet and Bitdefender stacks to ensure national digital safety.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Award size={30} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Platinum Partnerships</h4>
                    <p className="text-slate-600">The only Dell Platinum and HP Amplify Power partner in the region, ensuring genuine global warranty.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" alt="Tech Excellence" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-blue-900 p-12 rounded-[2.5rem] shadow-2xl border border-white/10 hidden md:block">
                <div className="text-5xl font-black text-white mb-2">32</div>
                <div className="text-blue-300 font-bold uppercase text-[10px] tracking-widest">Years of Trust</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center p-16 bg-slate-50 rounded-[4rem]">
            <div>
              <div className="text-5xl font-black text-blue-900 mb-2">500+</div>
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Corporate Clients</p>
            </div>
            <div>
              <div className="text-5xl font-black text-blue-900 mb-2">15k+</div>
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Systems Deployed</p>
            </div>
            <div>
              <div className="text-5xl font-black text-blue-900 mb-2">Platinum</div>
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Dell Status</p>
            </div>
            <div>
              <div className="text-5xl font-black text-blue-900 mb-2">24/7</div>
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Service Desk</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions by Sector Section */}
      <section className="py-32 bg-blue-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-xs block mb-4">Strategic Impact</span>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6">Empowering Every Sector</h2>
            <p className="text-xl text-blue-200/60 max-w-2xl mx-auto">From individual workstation needs to nationwide government infrastructure, our impact is everywhere.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Landmark />, title: "Government", desc: "Securing national ID systems and critical public infrastructure." },
              { icon: <Building2 />, title: "Corporate", desc: "Powering enterprise data centers and hybrid workforce solutions." },
              { icon: <GraduationCap />, title: "Education", desc: "Equipping schools with modern computer labs and digital tools." },
              { icon: <Briefcase />, title: "Small Business", desc: "Providing accessible, high-performance IT to fuel local growth." },
            ].map((sector, idx) => (
              <div key={idx} className="p-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {React.cloneElement(sector.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{sector.title}</h3>
                <p className="text-blue-200/60 leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service Preview */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs block mb-4">Our Expertise</span>
              <h2 className="text-5xl font-display font-black text-slate-900 leading-tight">Mastering Modern Infrastructure</h2>
            </div>
            <button onClick={() => navigate('services')} className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-sm hover:gap-4 transition-all">
              View All Capabilities <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((s) => (
              <div key={s.id} className="p-10 rounded-[3rem] border border-gray-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all group cursor-pointer" onClick={() => navigate('services')}>
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                  {s.id === 'hardware' && <Monitor size={28} />}
                  {s.id === 'cybersecurity' && <ShieldCheck size={28} />}
                  {s.id === 'infrastructure' && <Cpu size={28} />}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-600 mb-6">{s.description}</p>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                  <ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm block mb-4">Our Journey</span>
          <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-8 max-w-4xl leading-[1]">A Legacy of Technological Leadership</h1>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <p className="text-xl text-slate-600 leading-relaxed">
              Founded in 1992 by Dean and Diana Fuller, Fultec Systems Ltd. has evolved from a local computer assembly workshop into Belize's most trusted IT infrastructure and security provider. For over three decades, we have been the silent engine behind some of the country's most significant technological leaps.
            </p>
            <div className="bg-blue-50 p-10 rounded-[3rem] border border-blue-100">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <Globe size={32} />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">National Impact</h3>
              </div>
              <p className="text-slate-600">From the first ATM networks to national digital identification systems, our footprint is woven into the fabric of Belize's modernization.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <BarChart3 />, title: "Excellence", desc: "Commitment to the highest international quality standards in hardware and service." },
            { icon: <ShieldCheck />, title: "Integrity", desc: "Building long-term value through transparent partnerships and ethical IT practices." },
            { icon: <Clock />, title: "Reliability", desc: "Ensuring zero downtime for critical business operations across all sectors." },
          ].map((item, idx) => (
            <div key={idx} className="p-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-blue-600 mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ServicesPage = () => (
    <div className="pt-32 pb-24 bg-slate-50 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm block mb-4">What We Do</span>
          <h2 className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-6">Enterprise Capabilities</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Scalable IT solutions designed to meet the rigorous demands of modern corporate and government entities.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, idx) => (
            <div key={s.id} className="group bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:bg-blue-600 transition-all duration-500 overflow-hidden relative">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  {s.id === 'hardware' && <Monitor size={32} />}
                  {s.id === 'cybersecurity' && <ShieldCheck size={32} />}
                  {s.id === 'infrastructure' && <Cpu size={32} />}
                  {s.id === 'managed-it' && <Headphones size={32} />}
                  {s.id === 'printing' && <Printer size={32} />}
                  {s.id === 'consulting' && <Users size={32} />}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{s.title}</h3>
                <p className="text-slate-600 mb-8 group-hover:text-blue-50 transition-colors leading-relaxed">{s.description}</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-wider group-hover:bg-white/10 group-hover:text-white">Enterprise</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-wider group-hover:bg-white/10 group-hover:text-white">Managed</span>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-0 group-hover:opacity-10 transition-opacity">
                 {s.id === 'hardware' && <Monitor size={200} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProductsPage = () => {
    const [filter, setFilter] = useState('All');
    const categories = useMemo(() => ['All', ...new Set(PRODUCTS.map(p => p.category))], []);
    
    const filteredProducts = PRODUCTS.filter(p => filter === 'All' || p.category === filter);

    return (
      <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm block mb-4">Hardware Showcase</span>
              <h2 className="text-5xl font-display font-black text-slate-900 leading-tight">Superior Technology</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                    filter === cat ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30' : 'bg-gray-100 text-slate-500 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((p, idx) => (
              <div 
                key={p.id} 
                className="group bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-10"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-72 overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 shadow-lg">
                    {p.brand}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">{p.category}</p>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{p.name}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed h-12 overflow-hidden">{p.description}</p>
                  <div className="space-y-2 mb-8 h-24 overflow-y-auto">
                    {p.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs font-medium text-slate-600">
                        <CheckCircle2 size={14} className="text-blue-500" />
                        {spec}
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => navigate('quote', { product: p.name })}
                    className="w-full py-4 bg-slate-50 border border-gray-100 text-slate-900 rounded-2xl font-bold text-sm uppercase tracking-widest group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const QuotePage = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
    };

    if (submitted) {
      return (
        <div className="pt-48 pb-24 text-center animate-in zoom-in duration-500">
          <div className="max-w-xl mx-auto px-4">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="text-4xl font-display font-black text-slate-900 mb-4">Quote Request Sent!</h2>
            <p className="text-slate-600 text-lg mb-10">Our sales engineers will review your requirements and provide a detailed proposal within 24 hours.</p>
            <button 
              onClick={() => navigate('home')}
              className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold uppercase tracking-widest shadow-xl shadow-blue-500/20"
            >
              Return Home
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm block mb-4">Proposal Request</span>
              <h2 className="text-5xl font-display font-black text-slate-900 mb-8">Professional <br/>IT Procurement</h2>
              <p className="text-lg text-slate-600 mb-12">Fultec Systems provides specialized quotes for enterprise hardware, license renewals, and custom infrastructure builds. Get a comprehensive price analysis today.</p>
              
              <div className="space-y-6">
                {[
                  { icon: <FileText className="text-blue-600" />, title: "Price Accuracy", desc: "Live market pricing through direct brand partnerships." },
                  { icon: <Award className="text-blue-600" />, title: "Certified Setup", desc: "Professional installation included with all hardware quotes." },
                  { icon: <ShieldCheck className="text-blue-600" />, title: "Warranty Guarantee", desc: "Local support and authorized repair for all items." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-gray-100">
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Your Full Name</label>
                      <input required type="text" className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-4 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none" placeholder="Enter name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Company / Entity</label>
                      <input type="text" className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-4 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none" placeholder="Business name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Work Email</label>
                      <input required type="email" className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-4 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none" placeholder="email@company.bz" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Phone Number</label>
                      <input required type="tel" className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-4 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none" placeholder="+501 XXX-XXXX" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Product / Service</label>
                      <input 
                        required 
                        type="text" 
                        defaultValue={selectedProduct || ''}
                        className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-4 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none" 
                        placeholder="e.g. Dell Latitude 5440" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Approx. Quantity</label>
                      <input required type="number" min="1" defaultValue="1" className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-4 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Special Requirements / Project Details</label>
                    <textarea rows={4} className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-4 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none" placeholder="Describe storage needs, software pre-installs, or specific configurations..."></textarea>
                  </div>

                  <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-3">
                    <Send size={18} />
                    Submit Quote Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ContactPage = () => (
    <div className="pt-32 pb-24 bg-white animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm block mb-4">Connect</span>
            <h2 className="text-5xl font-display font-black text-slate-900 mb-8">Let's Talk Technology</h2>
            <p className="text-lg text-slate-600 mb-12">Whether you need a minor repair or a national infrastructure upgrade, our team is ready to assist you.</p>
            
            <div className="space-y-8 mb-12">
              {LOCATIONS.map(loc => (
                <div key={loc.city} className="p-8 bg-slate-50 rounded-[2.5rem] border border-gray-100 shadow-sm">
                  <h4 className="text-xl font-bold mb-4">{loc.city} Hub</h4>
                  <div className="space-y-4 text-slate-600">
                    <div className="flex items-center gap-4"><MapPin size={20} className="text-blue-600" /> {loc.address}</div>
                    <div className="flex items-center gap-4"><Phone size={20} className="text-blue-600" /> {loc.phone}</div>
                    <a href={`https://wa.me/${loc.whatsapp.replace(/\D/g, '')}`} className="flex items-center gap-4 font-bold text-green-600 hover:text-green-700 transition-colors">
                      <MessageSquare size={20} /> WhatsApp: {loc.whatsapp}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <form className="bg-slate-900 p-12 rounded-[3.5rem] shadow-2xl space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                  <input type="text" className="w-full bg-slate-800 border-none rounded-2xl p-4 text-white focus:ring-2 focus:ring-blue-600 transition-all outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Email Address</label>
                  <input type="email" className="w-full bg-slate-800 border-none rounded-2xl p-4 text-white focus:ring-2 focus:ring-blue-600 transition-all outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Service Required</label>
                <select className="w-full bg-slate-800 border-none rounded-2xl p-4 text-white focus:ring-2 focus:ring-blue-600 transition-all outline-none appearance-none">
                  <option>Managed IT Support</option>
                  <option>Cybersecurity Solution</option>
                  <option>Hardware Procurement</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Message</label>
                <textarea rows={4} className="w-full bg-slate-800 border-none rounded-2xl p-4 text-white focus:ring-2 focus:ring-blue-600 transition-all outline-none" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/20">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'products' && <ProductsPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'quote' && <QuotePage />}
      </main>

      {/* Partners Marquee */}
      <section className="py-24 bg-slate-50 overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Strategic Alliances</p>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="py-12 animate-marquee whitespace-nowrap flex items-center gap-32 pr-32">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div key={i} className="flex flex-col items-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                <img src={p.logo} alt={p.name} className="h-10 md:h-12 w-auto object-contain opacity-40 hover:opacity-100" />
                {p.tier && <span className="text-[9px] font-bold text-blue-600 mt-3">{p.tier}</span>}
              </div>
            ))}
          </div>
          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center gap-32 pr-32">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div key={i} className="flex flex-col items-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                <img src={p.logo} alt={p.name} className="h-10 md:h-12 w-auto object-contain opacity-40 hover:opacity-100" />
                {p.tier && <span className="text-[9px] font-bold text-blue-600 mt-3">{p.tier}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-5">
              <Logo light />
              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md mt-8">
                Leading Belize into the digital future since 1992. We provide the infrastructure, security, and expertise that modern businesses demand.
              </p>
              <div className="flex gap-4">
                {[Facebook, Linkedin, Github].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-blue-400">Navigation</h4>
              <ul className="space-y-5 text-slate-400 font-medium">
                {['Home', 'About', 'Services', 'Products', 'Contact', 'Quote'].map(p => (
                  <li key={p}>
                    <button onClick={() => navigate(p.toLowerCase() as Page)} className="hover:text-white transition-colors flex items-center gap-2 group text-left">
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      {p}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-blue-400">Hub Locations</h4>
              <div className="space-y-8">
                {LOCATIONS.map(l => (
                  <div key={l.city} className="flex gap-4 group">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-200">{l.city}</div>
                      <div className="text-slate-500 text-sm leading-relaxed">{l.address}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} Fultec Systems Ltd. Registered in Belize.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant Chat Widget */}
      <AIAssistant />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
