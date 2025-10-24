import React, { useState, useEffect } from 'react';
import { Eye, Shield, AlertTriangle, Users, TrendingUp, CheckCircle, ArrowRight, ChevronRight, Zap, Award, Clock, Menu, Factory, Building2, Hospital, Hotel, ShoppingCart, Camera, FileText, Mail, Phone, MapPin, Anchor } from 'lucide-react';

const AquaEagleWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
    favicon.type = 'image/png';
    favicon.rel = 'icon';
    favicon.href = "/images/logo.png";
    document.head.appendChild(favicon);
    
    document.title = 'Aqua Eagle Intelligence - AI Computer Vision Solutions';
    
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const ImageWithLoader = ({ src, alt, className, fallbackIcon: FallbackIcon = Camera }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    return (
      <div className="relative w-full h-full">
        {loading && !error && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-700 animate-pulse">
            <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {error ? (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-700">
            <div className="text-center text-gray-400">
              <FallbackIcon className="w-16 h-16 mx-auto mb-2" />
              <p className="text-sm">Image Coming Soon</p>
            </div>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            className={className}
            onLoad={() => setLoading(false)}
            onError={() => {
              setLoading(false);
              setError(true);
            }}
          />
        )}
      </div>
    );
  };

  const Logo = () => (
    <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
      <img 
        src="/images/logo.png" 
        alt="Aqua Eagle Intelligence" 
        className="w-12 h-12 object-contain"
      />
      <div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
          AquaEagle Intelligence
        </h1>
        <p className="text-xs text-gray-500">Vision Beyond Sight</p>
      </div>
    </div>
  );

  const Navigation = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => setCurrentPage('home')} className={`${currentPage === 'home' ? 'text-cyan-600' : 'text-gray-700'} hover:text-cyan-600 transition`}>Home</button>
            <button onClick={() => setCurrentPage('solutions')} className={`${currentPage === 'solutions' ? 'text-cyan-600' : 'text-gray-700'} hover:text-cyan-600 transition`}>Solutions</button>
            <button onClick={() => setCurrentPage('industries')} className={`${currentPage === 'industries' ? 'text-cyan-600' : 'text-gray-700'} hover:text-cyan-600 transition`}>Industries</button>
            <button onClick={() => setCurrentPage('case-studies')} className={`${currentPage === 'case-studies' ? 'text-cyan-600' : 'text-gray-700'} hover:text-cyan-600 transition`}>Case Studies</button>
            <button onClick={() => setCurrentPage('about')} className={`${currentPage === 'about' ? 'text-cyan-600' : 'text-gray-700'} hover:text-cyan-600 transition`}>About</button>
          </div>
          
          <button 
            onClick={() => setCurrentPage('contact')}
            className="hidden md:block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
          >
            Get Started
          </button>

          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cyan-50 rounded">Home</button>
            <button onClick={() => { setCurrentPage('solutions'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cyan-50 rounded">Solutions</button>
            <button onClick={() => { setCurrentPage('industries'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cyan-50 rounded">Industries</button>
            <button onClick={() => { setCurrentPage('case-studies'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cyan-50 rounded">Case Studies</button>
            <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cyan-50 rounded">About</button>
            <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 bg-cyan-600 text-white rounded">Get Started</button>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => {
    const solutions = [
      { title: "PPE Detection", description: "Real-time monitoring of personal protective equipment compliance", icon: Shield, image: "ppe-detection-demo.png" },
      { title: "Fall Detection", description: "Instant alerts for fall incidents to enable rapid emergency response", icon: AlertTriangle, image: "fall-detection-system.png" },
      { title: "Weapon Detection", description: "Advanced AI-powered security screening for weapon identification", icon: Eye, image: "weapon-detection-ai.png" },
      { title: "Fire & Smoke Detection", description: "Early detection of fire and smoke using thermal imaging and AI", icon: AlertTriangle },
      { title: "Spill Detection", description: "Automated detection of oil and chemical spills at pumps and facilities", icon: AlertTriangle, image: "spill-detection-monitor.png" },
      { title: "Forklift Zone Monitoring", description: "Red zone safety monitoring to prevent workplace accidents", icon: AlertTriangle, image: "forklift-safety-zone.png" },
      { title: "Smoking & Phone Detection", description: "Detect unauthorized smoking and phone usage in restricted areas", icon: Eye },
      { title: "Queue Management", description: "Intelligent queue monitoring and wait time optimization", icon: Users },
      { title: "Crowd Counting", description: "Accurate real-time people counting and crowd density analysis", icon: Users },
      { title: "Footfall Analytics", description: "Customer flow tracking and heat mapping for retail optimization", icon: TrendingUp, image: "footfall-retail-analytics.png" },
      { title: "Litter Detection", description: "Maintain cleanliness with automated waste and litter detection", icon: Eye }
    ];

    const industries = [
      { name: "Manufacturing & Industrial", icon: Factory },
      { name: "Oil & Gas Facilities", icon: Anchor },
      { name: "Healthcare & Hospitals", icon: Hospital },
      { name: "Luxury Hotels & Hospitality", icon: Hotel },
      { name: "Retail & Shopping Centers", icon: ShoppingCart },
      { name: "Security & Surveillance", icon: Camera }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-semibold">
                  AI-Powered Computer Vision Solutions
                </div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                    WE AUTOMATE
                  </span>
                  <br />
                  SAFETY & SECURITY
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Transform your facilities with cutting-edge computer vision technology. 
                  Real-time monitoring, instant alerts, and intelligent analytics for industries, 
                  oil rigs, hospitals, hotels, and retail sectors.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setCurrentPage('contact')}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition flex items-center space-x-2"
                  >
                    <span>Request Demo</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setCurrentPage('solutions')}
                    className="border-2 border-cyan-600 text-cyan-700 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition"
                  >
                    View Solutions
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl opacity-20 blur-3xl"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden mb-4 h-64 relative group">
                    <ImageWithLoader
                      src="/images/ppe-detection-demo.png"
                      alt="AI Detection Demo"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                      <div className="text-sm font-semibold">Live AI Detection</div>
                      <div className="text-xs opacity-80">Real-time monitoring in action</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl">
                      <Shield className="w-10 h-10 text-cyan-600 mb-3" />
                      <div className="text-3xl font-bold text-gray-800">95%</div>
                      <div className="text-sm text-gray-600">Incident Reduction</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                      <Zap className="w-10 h-10 text-blue-600 mb-3" />
                      <div className="text-3xl font-bold text-gray-800">24/7</div>
                      <div className="text-sm text-gray-600">Monitoring</div>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl">
                      <Clock className="w-10 h-10 text-cyan-600 mb-3" />
                      <div className="text-3xl font-bold text-gray-800">&lt;3s</div>
                      <div className="text-sm text-gray-600">Alert Time</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                      <Award className="w-10 h-10 text-blue-600 mb-3" />
                      <div className="text-3xl font-bold text-gray-800">99%</div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-cyan-50 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-4">Industries We Serve</h3>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Delivering specialized computer vision solutions across diverse sectors
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition group cursor-pointer" onClick={() => setCurrentPage('industries')}>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{industry.name}</h4>
                    <ChevronRight className="w-6 h-6 text-cyan-600 mx-auto opacity-0 group-hover:opacity-100 transition" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4">Our Computer Vision Solutions</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive AI-powered monitoring for every aspect of your operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-cyan-500 relative overflow-hidden">
                    {solution.image && (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                        <img src={`/images/${solution.image}`} alt={solution.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{solution.title}</h4>
                      <p className="text-sm text-gray-600">{solution.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <button 
                onClick={() => setCurrentPage('solutions')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
              >
                View All Solutions
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Security?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join industry leaders who trust Aqua Eagle Intelligence for their computer vision needs
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition"
              >
                Schedule a Demo
              </button>
              <button 
                onClick={() => setCurrentPage('case-studies')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition"
              >
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  };

  const SolutionsPage = () => {
    const solutions = [
      {
        title: "PPE Detection",
        description: "AI-powered detection of personal protective equipment compliance, ensuring workers wear helmets, vests, gloves, and safety gear. Instant alerts for violations with 99% accuracy.",
        features: ["Real-time PPE compliance monitoring", "Multi-class PPE detection", "Violation alerts & reports", "Integration with existing CCTV"],
        image: "ppe-detection-demo.png"
      },
      {
        title: "Fall Detection",
        description: "Advanced fall detection system using computer vision to identify slip, trip, and fall incidents immediately. Automatic emergency response triggering.",
        features: ["Instant fall incident detection", "Emergency alert system", "Work-at-height monitoring", "Historical incident analytics"],
        image: "fall-detection-system.png"
      },
      {
        title: "Weapon Detection",
        description: "State-of-the-art weapon detection for enhanced security in hotels, hospitals, and public spaces. Identifies firearms, knives, and threatening objects.",
        features: ["Real-time weapon identification", "Multiple weapon type detection", "Security team instant alerts", "Integration with access control"],
        image: "weapon-detection-ai.png"
      },
      {
        title: "Oil & Chemical Spill Detection",
        description: "Environmental monitoring system detecting oil spills, chemical leaks, and hazardous material releases in real-time for oil rigs and industrial facilities.",
        features: ["Liquid spill detection", "Chemical leak identification", "Environmental compliance tracking", "Automated containment alerts"],
        image: "spill-detection-monitor.png"
      },
      {
        title: "Fire & Smoke Detection",
        description: "Early fire and smoke detection system using thermal imaging and computer vision. Identifies fire hazards and smoke before they spread, enabling rapid response.",
        features: ["Early fire detection", "Smoke pattern recognition", "Thermal imaging integration", "Automatic fire alarm triggering", "Evacuation route monitoring"],
        image: "fire_smoke_case.png"
      },
      {
        title: "Forklift Red Zone Monitoring",
        description: "Safety system monitoring forklift operations and restricted areas. Prevents collisions between vehicles, workers, and equipment in warehouses and factories.",
        features: ["Red zone intrusion detection", "Vehicle-pedestrian collision prevention", "Speed limit monitoring", "Operator behavior analytics"],
        image: "forklift-safety-zone.png"
      },
      {
        title: "Crowd Counting & Management",
        description: "Accurate people counting and crowd density analysis for retail, events, hospitals, and public spaces. Real-time occupancy monitoring.",
        features: ["Real-time headcount tracking", "Crowd density heatmaps", "Occupancy limit alerts", "Traffic flow analysis"],
        image: "crowd_counting.png"
      },
      {
        title: "Queue Management System",
        description: "Intelligent queue monitoring and management for retail, banks, hospitals, and service centers. Optimizes customer flow and reduces wait times.",
        features: ["Real-time queue length monitoring", "Wait time estimation", "Staff allocation optimization", "Customer flow analytics", "Automated alerts for long queues"],
        image: "queue_managment.png"
      },
      {
        title: "Smoking & Phone Usage Detection",
        description: "Behavioral monitoring detecting unauthorized smoking in restricted areas and phone usage in hazardous zones. Ensures compliance with safety regulations.",
        features: ["Smoking detection in no-smoking zones", "Phone usage in restricted areas", "Distracted worker identification", "Automatic violation recording", "Real-time supervisor alerts"],
        image: "smoking_case.png"
      },
      {
        title: "Customer Footfall Analytics",
        description: "Retail analytics solution tracking customer movement patterns, dwell time, and conversion rates. Optimize store layout and staffing.",
        features: ["Customer journey mapping", "Dwell time analysis", "Zone-wise traffic reports", "Peak hours identification"],
        image: "footfall-retail-analytics.png"
      },
      {
        title: "Litter Detection",
        description: "Automated waste and litter detection maintaining cleanliness in public areas, hotels, hospitals, and industrial sites. Housekeeping optimization.",
        features: ["Litter and waste detection", "Cleanliness compliance monitoring", "Automated housekeeping alerts", "Before/after documentation"],
        image: "litter_detection.png"
      }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Computer Vision Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade AI-powered monitoring solutions designed for industrial safety, security, and operational efficiency
            </p>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h3 className="text-3xl font-bold mb-4 text-cyan-400">{solution.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">{solution.description}</p>
                  <div className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => setCurrentPage('contact')}
                    className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-xl transition"
                  >
                    Learn More
                  </button>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  {solution.image ? (
                    <div className="relative rounded-xl overflow-hidden shadow-2xl h-80 group">
                      <ImageWithLoader
                        src={`/images/${solution.image}`}
                        alt={solution.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ) : (
                    <div className="bg-slate-700 rounded-xl p-8 h-80 flex items-center justify-center group hover:bg-slate-600 transition-colors">
                      <div className="text-center text-gray-400">
                        <Camera className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        <p className="text-sm">Image Coming Soon</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-2xl p-12 text-center border border-cyan-500/30">
            <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can develop tailored computer vision modules for your specific industry needs
            </p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
            >
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    );
  };

  const IndustriesPage = () => {
    const industries = [
      {
        name: "Manufacturing & Industrial",
        icon: Factory,
        description: "Comprehensive safety and productivity monitoring for manufacturing plants and industrial facilities.",
        solutions: ["PPE compliance monitoring", "Equipment safety detection", "Forklift zone management", "Ergonomics assessment", "Quality control monitoring"],
        stats: { reduction: "85%", metric: "workplace incidents" },
        image: "manufacturing-safety.png"
      },
      {
        name: "Oil & Gas Facilities",
        icon: Anchor,
        description: "Critical safety monitoring for oil rigs, refineries, and petrochemical plants with hazardous environments.",
        solutions: ["Spill detection & containment", "Confined space monitoring", "Gas leak detection", "Red zone intrusion alerts", "Emergency response automation"],
        stats: { reduction: "90%", metric: "safety violations" },
        image: "oil-rig-monitoring.png"
      },
      {
        name: "Healthcare & Hospitals",
        icon: Hospital,
        description: "Patient and staff safety monitoring, fall detection, and operational efficiency in healthcare facilities.",
        solutions: ["Patient fall detection", "PPE compliance for staff", "Crowd management", "Restricted area monitoring", "Hygiene compliance tracking"],
        stats: { reduction: "75%", metric: "response time" },
        image: "hospital-safety-system.png"
      },
      {
        name: "Luxury Hotels & Hospitality",
        icon: Hotel,
        description: "Enhanced security, guest safety, and operational excellence for premium hospitality properties.",
        solutions: ["Weapon detection systems", "Crowd counting & management", "Litter detection", "Staff safety monitoring", "Valet & parking management"],
        stats: { improvement: "95%", metric: "guest satisfaction" },
        image: "hotel-security-ai.png"
      },
      {
        name: "Retail & Shopping Centers",
        icon: ShoppingCart,
        description: "Customer analytics, theft prevention, and operational insights for retail environments.",
        solutions: ["Footfall analytics", "Customer behavior tracking", "Shoplifting detection", "Queue management", "Inventory monitoring"],
        stats: { increase: "40%", metric: "conversion rate" },
        image: "retail-analytics-system.png"
      },
      {
        name: "Security & Surveillance",
        icon: Camera,
        description: "Advanced security solutions for corporate campuses, government facilities, and critical infrastructure.",
        solutions: ["Perimeter intrusion detection", "Weapon detection", "Suspicious behavior analysis", "Access control integration", "Incident documentation"],
        stats: { reduction: "92%", metric: "security breaches" },
        image: "robbery.png"
      }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized computer vision solutions tailored for your industry's unique safety and operational challenges
            </p>
          </div>

          <div className="space-y-16">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-cyan-500/30">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-cyan-400">{industry.name}</h3>
                      </div>
                      <p className="text-gray-300 mb-6 text-lg">{industry.description}</p>
                      
                      <h4 className="text-xl font-semibold mb-4 text-white">Key Solutions:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {industry.solutions.map((solution, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                            <span className="text-gray-300">{solution}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-cyan-900/30 rounded-lg p-4 inline-block">
                        <div className="text-4xl font-bold text-cyan-400">
                          {industry.stats.reduction || industry.stats.increase || industry.stats.improvement}
                        </div>
                        <div className="text-sm text-gray-300">
                          {industry.stats.reduction && 'Reduction in'} 
                          {industry.stats.increase && 'Increase in'} 
                          {industry.stats.improvement && 'Improvement in'} {industry.stats.metric}
                        </div>
                      </div>
                    </div>

                    <div>
                      {industry.image ? (
                        <div className="relative rounded-xl overflow-hidden shadow-xl h-full min-h-[300px]">
                          <ImageWithLoader
                            src={`/images/${industry.image}`}
                            alt={industry.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            fallbackIcon={industry.icon}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                        </div>
                      ) : (
                        <div className="bg-slate-700 rounded-xl p-6 h-full min-h-[300px] flex items-center justify-center group hover:bg-slate-600 transition-colors">
                          <div className="text-center text-gray-400">
                            <Icon className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <p className="text-sm">Visual Coming Soon</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const CaseStudiesPage = () => {
    const caseStudies = [
      {
        title: "Global Oil Refinery Reduces Spill Incidents by 95%",
        industry: "Oil & Gas",
        client: "International Petroleum Corp",
        challenge: "Manual monitoring unable to detect spills quickly, resulting in environmental damage and regulatory penalties",
        solution: "Deployed Aqua Eagle's AI spill detection system across 50+ cameras monitoring critical zones",
        results: ["95% reduction in spill response time", "Zero regulatory violations in 18 months", "$2.8M saved in cleanup costs", "100% detection accuracy for oil and chemical spills"],
        image: "case-study-oil-refinery.png"
      },
      {
        title: "Chemical Plant Achieves Zero Smoking Violations",
        industry: "Chemical Processing",
        client: "Apex Chemical Industries",
        challenge: "Smoking in restricted areas posing fire and explosion risks in hazardous chemical zones",
        solution: "Implemented AI smoking detection system monitoring 120+ cameras across the facility",
        results: ["Zero smoking incidents in 18 months", "100% compliance with safety regulations", "Employee awareness increased 90%", "Automated fine system reduced violations 95%"],
        image: "case-study-smoking-detection.png"
      },
      {
        title: "Airport Reduces Queue Wait Times by 60%",
        industry: "Aviation / Transportation",
        client: "International Airport Authority",
        challenge: "Long passenger queues at security checkpoints causing frustration and flight delays",
        solution: "Deployed AI queue management system analyzing real-time queue lengths and optimizing staff allocation",
        results: ["60% reduction in average wait time", "35% improvement in passenger satisfaction", "Dynamic staff allocation saving $800K annually", "Real-time queue data for operations center"],
        image: "case-study-queue-management.png"
      },
      {
        title: "Bank Branch Network Optimizes Customer Service with Smart Queues",
        industry: "Banking & Finance",
        client: "National Bank (150+ branches)",
        challenge: "Inconsistent customer service due to poor queue management and staff allocation",
        solution: "Implemented intelligent queue monitoring with predictive analytics across all branches",
        results: ["45% reduction in customer wait time", "Customer complaints reduced 70%", "Service quality scores improved 50%", "Staff productivity increased 30%"],
        image: "case-study-bank-queues.png"
      },
      {
        title: "Hospital Eliminates Phone Usage in Operating Rooms",
        industry: "Healthcare",
        client: "Metro Medical Center",
        challenge: "Medical staff using phones in sterile areas causing contamination and distraction risks",
        solution: "Deployed AI phone usage detection in operating rooms and sterile zones with immediate alerts",
        results: ["100% compliance in restricted areas", "Zero contamination incidents from phone use", "Surgical efficiency improved 25%", "Staff accountability increased"],
        image: "case-study-phone-usage.png"
      },
      {
        title: "Luxury Hotel Chain Enhances Security with Weapon Detection",
        industry: "Hospitality",
        client: "Prestige Hotels International (12 properties)",
        challenge: "Need for discreet security screening without impacting guest experience, threat detection gaps",
        solution: "Deployed AI weapon detection at entrances, lobbies, and event spaces across all properties",
        results: ["100% threat detection rate", "Zero false positives after calibration", "30% reduction in security staff", "Guest satisfaction score increased to 9.4/10"],
        image: "case-study-hotel-security.png"
      },
      {
        title: "Manufacturing Plant Achieves Zero PPE Violations",
        industry: "Manufacturing",
        client: "Global Auto Parts Manufacturer",
        challenge: "Frequent PPE violations leading to OSHA citations and worker injuries across 3 shifts",
        solution: "Installed PPE detection system monitoring 80+ cameras covering production floors",
        results: ["Zero OSHA violations in 12 months", "90% reduction in safety incidents", "Workers' comp costs down 65%", "Safety culture score improved 40%"],
        image: "case-study-manufacturing-ppe.png"
      },
      {
        title: "Warehouse Operations: 92% Reduction in Forklift Accidents",
        industry: "Logistics",
        client: "National Distribution Company",
        challenge: "High rate of forklift-pedestrian near-misses and collisions in busy warehouse environment",
        solution: "Implemented forklift red zone monitoring and collision avoidance system",
        results: ["92% reduction in forklift incidents", "Zero serious injuries in 24 months", "$800K saved in equipment damage", "Insurance premiums reduced 40%"],
        image: "case-study-warehouse-forklift.png"
      }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from organizations that transformed their operations with Aqua Eagle Intelligence
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group">
                <div className="grid md:grid-cols-3 gap-0">
                  {study.image ? (
                    <div className="relative overflow-hidden h-full min-h-[250px]">
                      <ImageWithLoader
                        src={`/images/${study.image}`}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        fallbackIcon={FileText}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  ) : (
                    <div className="bg-slate-700 p-8 flex items-center justify-center group-hover:bg-slate-600 transition-colors min-h-[250px]">
                      <div className="text-center text-gray-400">
                        <FileText className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        <p className="text-sm">Case Study Visual</p>
                        <p className="text-xs mt-2">Coming Soon</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="md:col-span-2 p-8">
                    <div className="inline-block px-4 py-1 bg-cyan-900/50 text-cyan-400 rounded-full text-sm mb-4">
                      {study.industry}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{study.title}</h3>
                    <p className="text-cyan-400 mb-6 font-semibold">{study.client}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start space-x-2 bg-cyan-900/20 p-3 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setCurrentPage('contact')}
                      className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-xl transition"
                    >
                      Request Full Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-2xl p-12 text-center border border-cyan-500/30">
            <h3 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join these industry leaders and transform your operations with AI-powered computer vision
            </p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
            >
              Schedule Your Demo
            </button>
          </div>
        </div>
      </div>
    );
  };

  const AboutPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Aqua Eagle Intelligence
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading the revolution in AI-powered computer vision for industrial safety and security
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Mission</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Aqua Eagle Intelligence is dedicated to transforming workplace safety and security through cutting-edge artificial intelligence and computer vision technology. We believe that every worker deserves to return home safely, and every facility deserves world-class protection.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our mission is to eliminate preventable incidents through intelligent automation, real-time monitoring, and predictive analytics that empower organizations to create safer, more efficient operations.
              </p>
            </div>
            <div className="bg-slate-700 rounded-xl p-8 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Building2 className="w-24 h-24 mx-auto mb-4" />
                <p className="text-sm">Company Headquarters</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-cyan-500/30 text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Deployments Worldwide</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-cyan-500/30 text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300">Average Incident Reduction</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-cyan-500/30 text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-cyan-500/30">
                <h3 className="text-xl font-bold mb-3 text-white">Innovation First</h3>
                <p className="text-gray-300">Constantly pushing the boundaries of what's possible with AI and computer vision technology</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-cyan-500/30">
                <h3 className="text-xl font-bold mb-3 text-white">Safety Above All</h3>
                <p className="text-gray-300">Every solution designed with the primary goal of protecting human life and preventing injuries</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-cyan-500/30">
                <h3 className="text-xl font-bold mb-3 text-white">Customer Success</h3>
                <p className="text-gray-300">Dedicated to ensuring our clients achieve measurable results and ROI from our solutions</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-cyan-500/30">
                <h3 className="text-xl font-bold mb-3 text-white">Privacy & Ethics</h3>
                <p className="text-gray-300">Committed to responsible AI development with strict data privacy and ethical guidelines</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-cyan-500/30 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Why Choose Aqua Eagle Intelligence?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-white">Industry-Leading Accuracy</h4>
                  <p className="text-gray-300">99% detection accuracy powered by proprietary AI models trained on millions of scenarios</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-white">Rapid Deployment</h4>
                  <p className="text-gray-300">Go live in days, not months, with seamless integration into existing camera infrastructure</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-white">Scalable Architecture</h4>
                  <p className="text-gray-300">From single sites to global enterprises, our cloud and edge solutions scale with your needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-white">Continuous Innovation</h4>
                  <p className="text-gray-300">Regular updates and new AI modules keep your system at the cutting edge</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-2xl p-12 border border-cyan-500/30">
            <h3 className="text-3xl font-bold mb-4">Partner With Us</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's work together to create safer, smarter workplaces for the future
            </p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    );
  };

  const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      company: '',
      phone: '',
      industry: '',
      message: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your interest! Our team will contact you within 24 hours.');
      setFormData({ name: '', email: '', company: '', phone: '', industry: '', message: '' });
    };

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get Started Today
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Schedule a personalized demo and discover how Aqua Eagle Intelligence can transform your operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-cyan-500/30 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-gray-300">contact@aquaeagle-intelligence.com</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Phone</div>
                      <div className="text-gray-300">+90 (551) 032-8412</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Headquarters</div>
                      <div className="text-gray-300">34771-Umraniye<br />Istanbul, Turkey</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-cyan-500/30">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                    <div className="text-gray-300">30-minute personalized demo of our solutions</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                    <div className="text-gray-300">ROI analysis specific to your facility</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                    <div className="text-gray-300">Technical consultation with our experts</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                    <div className="text-gray-300">Custom deployment roadmap</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-cyan-500/30">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Request a Demo</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-white">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-white">Work Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-white">Company Name *</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-white">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-white">Industry *</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    required
                  >
                    <option value="">Select your industry</option>
                    <option value="manufacturing">Manufacturing & Industrial</option>
                    <option value="oil-gas">Oil & Gas</option>
                    <option value="healthcare">Healthcare & Hospitals</option>
                    <option value="hospitality">Hotels & Hospitality</option>
                    <option value="retail">Retail & Shopping Centers</option>
                    <option value="security">Security & Surveillance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-white">Tell us about your needs</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    placeholder="What challenges are you looking to solve?"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-xl transition"
                >
                  Schedule Demo
                </button>
                <p className="text-sm text-gray-400 text-center">
                  By submitting this form, you agree to our privacy policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt="Aqua Eagle Intelligence" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold">AquaEagle Intelligence</span>
            </div>
            <p className="text-gray-400 text-sm">Vision Beyond Sight</p>
          </div>
          <div>
            <h5 className="font-bold mb-4">Solutions</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-cyan-400 cursor-pointer">PPE Detection</li>
              <li className="hover:text-cyan-400 cursor-pointer">Fall Detection</li>
              <li className="hover:text-cyan-400 cursor-pointer">Weapon Detection</li>
              <li className="hover:text-cyan-400 cursor-pointer">Spill Detection</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Industries</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-cyan-400 cursor-pointer">Oil & Gas</li>
              <li className="hover:text-cyan-400 cursor-pointer">Healthcare</li>
              <li className="hover:text-cyan-400 cursor-pointer">Hospitality</li>
              <li className="hover:text-cyan-400 cursor-pointer">Retail</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Company</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-cyan-400 cursor-pointer" onClick={() => setCurrentPage('about')}>About Us</li>
              <li className="hover:text-cyan-400 cursor-pointer" onClick={() => setCurrentPage('case-studies')}>Case Studies</li>
              <li className="hover:text-cyan-400 cursor-pointer" onClick={() => setCurrentPage('contact')}>Contact</li>
              <li className="hover:text-cyan-400 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 Aqua Eagle Intelligence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'solutions' && <SolutionsPage />}
      {currentPage === 'industries' && <IndustriesPage />}
      {currentPage === 'case-studies' && <CaseStudiesPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      <Footer />
    </div>
  );
};

export default AquaEagleWebsite;