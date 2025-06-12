import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HomeNavbar } from '@/components/layout/HomeNavbar';
import { 
  GraduationCap, 
  Users, 
  User, 
  ShieldCheck, 
  BookOpen,
  Globe,
  MessageSquare,
  Award,
  UserCheck,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Zap,
  Target,
  Rocket,
  Brain,
  Heart,
  TrendingUp
} from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const rolesRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });
  const rolesInView = useInView(rolesRef, { once: true });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Brain className="h-10 w-10" />,
      title: "AI-Powered Learning",
      description: "Personalized learning paths powered by artificial intelligence",
      color: "from-purple-500 to-pink-500",
      delay: 0.1
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Global Connectivity",
      description: "Connect with students and mentors from around the world",
      color: "from-blue-500 to-cyan-500",
      delay: 0.2
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: "Career Acceleration",
      description: "Fast-track your career with industry-relevant skills",
      color: "from-orange-500 to-red-500",
      delay: 0.3
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Community Support",
      description: "Join a supportive community of learners and educators",
      color: "from-pink-500 to-rose-500",
      delay: 0.4
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Goal Achievement",
      description: "Set and achieve your educational goals with precision",
      color: "from-green-500 to-emerald-500",
      delay: 0.5
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Progress Tracking",
      description: "Monitor your learning progress with detailed analytics",
      color: "from-indigo-500 to-purple-500",
      delay: 0.6
    }
  ];

  const roles = [
    {
      id: 'student',
      title: 'Student',
      icon: <GraduationCap className="h-16 w-16" />,
      description: 'Embark on your learning journey',
      benefits: [
        'Interactive learning modules',
        'AI-powered study assistant',
        'Peer collaboration tools',
        'Progress tracking dashboard'
      ],
      gradient: 'from-purple-600 via-purple-500 to-pink-500',
      shadowColor: 'shadow-purple-500/25'
    },
    {
      id: 'mentor',
      title: 'Mentor',
      icon: <Users className="h-16 w-16" />,
      description: 'Guide the next generation',
      benefits: [
        'Content creation tools',
        'Student progress insights',
        'Virtual classroom features',
        'Impact measurement'
      ],
      gradient: 'from-blue-600 via-blue-500 to-cyan-500',
      shadowColor: 'shadow-blue-500/25'
    },
    {
      id: 'parent',
      title: 'Parent',
      icon: <User className="h-16 w-16" />,
      description: 'Support your child\'s growth',
      benefits: [
        'Real-time progress updates',
        'Parent-teacher communication',
        'Learning resource access',
        'Achievement celebrations'
      ],
      gradient: 'from-green-600 via-green-500 to-emerald-500',
      shadowColor: 'shadow-green-500/25'
    },
    {
      id: 'organization',
      title: 'Organization',
      icon: <ShieldCheck className="h-16 w-16" />,
      description: 'Transform education at scale',
      benefits: [
        'Institutional analytics',
        'Curriculum management',
        'Multi-user administration',
        'Custom branding options'
      ],
      gradient: 'from-orange-600 via-orange-500 to-red-500',
      shadowColor: 'shadow-orange-500/25'
    }
  ];

  const stats = [
    { value: '50K+', label: 'Active Students', icon: <Users className="h-6 w-6" /> },
    { value: '2K+', label: 'Expert Mentors', icon: <Award className="h-6 w-6" /> },
    { value: '500+', label: 'Rural Schools', icon: <BookOpen className="h-6 w-6" /> },
    { value: '95%', label: 'Success Rate', icon: <TrendingUp className="h-6 w-6" /> }
  ];

  const handleRoleSelect = (role: string) => {
    navigate('/auth', { state: { selectedRole: role } });
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <HomeNavbar />
      
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20">
        <motion.div 
          style={{ y, opacity }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={heroInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <Badge className="mb-4 px-6 py-2 text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-lg">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Revolutionizing Rural Education
                </Badge>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-pulse">
                  AI Saathi
                </span>
                <br />
                <span className="text-gray-800 dark:text-white">
                  Your Learning
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                  Companion
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                Empowering rural students with AI-powered education, connecting dreams to opportunities across India
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => navigate('/auth')}
                >
                  <Rocket className="mr-2 h-6 w-6" />
                  Start Your Journey
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 text-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    const featuresSection = document.getElementById('features');
                    if (featuresSection) {
                      featuresSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Zap className="mr-2 h-6 w-6" />
                  Explore Features
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50, rotateY: -30 }}
              animate={heroInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative perspective-1000">
                <motion.div
                  animate={{ 
                    rotateY: [0, 5, 0, -5, 0],
                    rotateX: [0, 2, 0, -2, 0]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative transform-gpu"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-3xl blur-3xl transform scale-110" />
                  <img
                    src="/images/aisaathi1.png"
                    alt="AI Saathi Learning Platform"
                    className="relative rounded-3xl shadow-2xl w-full max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-8 -right-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 shadow-xl"
                >
                  <Star className="h-8 w-8 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-8 -left-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-4 shadow-xl"
                >
                  <Lightbulb className="h-8 w-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-200/50"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 text-white"
                >
                  {stat.icon}
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
                >
                  {stat.value}
                </motion.p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 px-6 py-2 text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
              <Brain className="mr-2 h-5 w-5" />
              Cutting-Edge Features
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Revolutionary
              </span>
              <br />
              Learning Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover how AI Saathi transforms traditional education with innovative technology and personalized learning approaches
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" 
                     style={{ background: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})` }} />
                <Card className="relative h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 text-white shadow-lg`}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" ref={rolesRef} className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={rolesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 px-6 py-2 text-lg bg-gradient-to-r from-green-600 to-blue-600 text-white border-0">
              <Users className="mr-2 h-5 w-5" />
              Choose Your Path
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
                Your Role,
              </span>
              <br />
              <span className="text-gray-800 dark:text-white">
                Your Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Select your role and unlock a personalized experience designed specifically for your educational needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                animate={rolesInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  z: 100
                }}
                className="group cursor-pointer"
                onClick={() => handleRoleSelect(role.id)}
              >
                <Card className={`h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden ${role.shadowColor} hover:shadow-2xl`}>
                  <div className={`h-32 bg-gradient-to-br ${role.gradient} relative overflow-hidden`}>
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 10, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full"
                    />
                    <motion.div
                      animate={{ 
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="text-white"
                      >
                        {role.icon}
                      </motion.div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                      {role.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {role.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {role.benefits.map((benefit, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={rolesInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <Button className={`w-full bg-gradient-to-r ${role.gradient} text-white border-0 hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                      Get Started as {role.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600" />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-white"
          >
            <motion.h2 
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Ready to Transform Your
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-300">
                Learning Journey?
              </span>
            </motion.h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Join thousands of students already experiencing the future of education
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="px-12 py-6 text-xl bg-white text-purple-600 hover:bg-gray-100 border-0 shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => navigate('/auth')}
              >
                <Rocket className="mr-3 h-6 w-6" />
                Start Your Adventure Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center mb-6"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-3 mr-4">
                  <span className="text-white font-bold text-2xl">AI</span>
                </div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Saathi
                </h2>
              </motion.div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Empowering rural education through innovative technology and personalized learning experiences.
              </p>
              <div className="flex space-x-4">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <Star className="h-6 w-6 text-white" />
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-purple-400">Platform</h3>
              <ul className="space-y-3">
                {['Features', 'Pricing', 'Community', 'Support'].map((item, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-pink-400">Resources</h3>
              <ul className="space-y-3">
                {['Documentation', 'Blog', 'Help Center', 'Contact'].map((item, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="border-t border-gray-800 mt-12 pt-8 text-center"
          >
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} AI Saathi. Transforming education, one student at a time.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Home;