// pages/about.js
"use client"
import Layout from '../components/Layout';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Users, 
  Target, 
  Heart, 
  Award, 
  MapPin, 
  Star, 
  Clock, 
  Shield,
  Calendar,
  TrendingUp,
  CheckCircle,
  Quote,
  Briefcase,
  GraduationCap,
  Linkedin,
  Twitter,
  Mail,
  Home,
  Leaf,
  Coffee,
  Zap
} from 'lucide-react';

// Team Members Data
const teamMembers = [
  {
    name: 'Rajesh Patel',
    role: 'Founder & CEO',
    image: '/api/placeholder/300/300',
    bio: 'Anand native with 20+ years in home services industry. Started HomeEase with a vision to make quality home services accessible to every family in Anand.',
    experience: '20+ years',
    education: 'MBA, Sardar Patel University',
    quote: "Building Anand's most trusted home service platform, one happy customer at a time.",
    social: { linkedin: '#', twitter: '#', email: '#' }
  },
  {
    name: 'Priya Desai',
    role: 'Operations Director',
    image: '/api/placeholder/300/300',
    bio: 'Ensuring service excellence across all 15+ localities of Anand. Priya leads our team of 100+ professionals with a focus on quality and customer satisfaction.',
    experience: '15+ years',
    education: 'B.Tech, NIT Surat',
    quote: 'Quality is not an act, it\'s a habit we practice every day.',
    social: { linkedin: '#', twitter: '#', email: '#' }
  },
  {
    name: 'Amit Shah',
    role: 'Technical Lead',
    image: '/api/placeholder/300/300',
    bio: 'Expert in quality assurance and professional training. Amit has trained over 500 professionals and ensures every service meets our high standards.',
    experience: '12+ years',
    education: 'Diploma in Engineering',
    quote: 'Every home in Anand deserves nothing but the best service.',
    social: { linkedin: '#', twitter: '#', email: '#' }
  }
];

// Company Milestones
const milestones = [
  { year: '2015', title: 'Founded in Anand', description: 'Started with just 5 professionals', icon: <Home /> },
  { year: '2017', title: 'Expanded Services', description: 'Added 10+ new service categories', icon: <TrendingUp /> },
  { year: '2019', title: '1000th Customer', description: 'Reached milestone in Anand', icon: <Users /> },
  { year: '2021', title: 'Digital Transformation', description: 'Launched mobile app', icon: <Zap /> },
  { year: '2023', title: '5000+ Happy Families', description: 'Trusted across Anand', icon: <Heart /> },
  { year: '2024', title: 'Best Service Provider', description: 'Awarded by Anand Chamber', icon: <Award /> }
];

// Statistics
const statistics = [
  { icon: <Users />, value: '5000+', label: 'Happy Families in Anand' },
  { icon: <Star />, value: '4.9', label: 'Average Rating' },
  { icon: <Clock />, value: '8+', label: 'Years of Service' },
  { icon: <Shield />, value: '100+', label: 'Certified Pros' },
  { icon: <MapPin />, value: '15+', label: 'Localities in Anand' },
  { icon: <CheckCircle />, value: '50+', label: 'Services Offered' }
];

// Core Values
const coreValues = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Customer First',
    description: 'Your satisfaction drives everything we do',
    color: 'from-emerald-500 to-teal-500',
    details: ['24/7 customer support', 'Money-back guarantee', 'Regular feedback collection']
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Excellence',
    description: 'We never compromise on quality',
    color: 'from-blue-500 to-cyan-500',
    details: ['ISO standard processes', 'Regular professional training', 'Strict quality checks']
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Integrity',
    description: 'Honest and transparent service',
    color: 'from-purple-500 to-pink-500',
    details: ['Fixed pricing policy', 'No hidden costs ever', 'Background-checked pros']
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Innovation',
    description: 'Constantly improving our services',
    color: 'from-orange-500 to-red-500',
    details: ['Digital booking platform', 'Eco-friendly practices', 'Modern tools & equipment']
  }
];

// Local Impact
const localImpact = [
  { 
    metric: 'Local Employment', 
    value: '100+', 
    description: 'Jobs created for Anand residents',
    icon: '👥'
  },
  { 
    metric: 'Local Businesses', 
    value: '50+', 
    description: 'Partner vendors in Anand',
    icon: '🤝'
  },
  { 
    metric: 'Community Events', 
    value: '25+', 
    description: 'Sponsored annually',
    icon: '🎉'
  },
  { 
    metric: 'Training Programs', 
    value: '30+', 
    description: 'Conducted for local youth',
    icon: '📚'
  }
];

export default function About() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container-padding mx-auto max-w-7xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-medium mb-4">
              <MapPin className="w-4 h-4" />
              <span>Proudly Serving Anand Since 2015</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">HomeEase</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for quality home services in Anand, Gujarat
            </p>
          </motion.div>

          {/* Quick Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-6 mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {statistics.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-emerald-600 w-6 h-6 mx-auto mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ===== STORY SECTION ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  <span className="text-emerald-600 font-bold text-2xl">HomeEase</span> was born in 2015 in the heart of <span className="font-semibold text-gray-800">Anand</span> with a simple vision: to make quality home services accessible to every family in our city.
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a small team of 5 passionate professionals has grown into Anand's most trusted home service platform, serving over <span className="font-semibold text-emerald-600">5000+ happy families</span> across 15+ localities including Gandhi Road, GIDC, Vallabh Vidyanagar, and New Anand.
                </p>
                <p className="text-gray-600 mb-6">
                  Today, we're proud to offer <span className="font-semibold text-emerald-600">50+ services</span> backed by <span className="font-semibold text-emerald-600">100+ certified professionals</span> who share our commitment to excellence. Every plumber, electrician, and gardener in our network undergoes rigorous background checks and continuous training.
                </p>
                
                {/* Achievement Cards */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-emerald-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-emerald-600">50+</div>
                    <div className="text-sm text-gray-600">Services Offered</div>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-teal-600">100+</div>
                    <div className="text-sm text-gray-600">Certified Pros</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-gray-600">Anand Localities</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600">Customer Support</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/api/placeholder/600/400"
                    alt="HomeEase Team Anand"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>Our headquarters in Anand</span>
                    </div>
                    <p className="text-sm opacity-90">Serving Anand since 2015</p>
                  </div>
                </div>
                
                {/* Floating Milestone */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -left-8 top-20 bg-white p-4 rounded-xl shadow-xl hidden lg:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">8+ Years</p>
                      <p className="text-sm text-gray-500">of excellence in Anand</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Milestones Timeline */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold text-center mb-8">Our Journey</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative bg-white rounded-xl p-4 shadow-lg text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                      {milestone.icon}
                    </div>
                    <div className="font-bold text-emerald-600">{milestone.year}</div>
                    <div className="font-semibold text-sm mb-1">{milestone.title}</div>
                    <div className="text-xs text-gray-500">{milestone.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ===== VALUES SECTION ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do at HomeEase
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-white mb-4 transform rotate-3 group-hover:rotate-0 transition`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{value.description}</p>
                  <ul className="space-y-2">
                    {value.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Value in Action Banner */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Values in Action</h3>
                  <p className="mb-4 opacity-90">
                    Every day, we live by these values. From our rigorous hiring process 
                    to our customer-first approach, these principles guide every decision we make.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold">98%</div>
                      <div className="text-sm opacity-90">Customer Satisfaction</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold">100%</div>
                      <div className="text-sm opacity-90">Service Guarantee</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    <span>100% background-checked professionals</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    <span>Fixed pricing with no hidden charges</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    <span>Continuous training and skill development</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== TEAM SECTION ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The passionate team behind HomeEase in Anand
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Social Links */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <a href={member.social.linkedin} className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href={member.social.twitter} className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition">
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a href={`mailto:${member.social.email}`} className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                    <div className="space-y-2 text-sm border-t pt-4">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Briefcase className="w-4 h-4 text-emerald-600" />
                        <span>{member.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <GraduationCap className="w-4 h-4 text-emerald-600" />
                        <span>{member.education}</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                      <Quote className="w-4 h-4 text-emerald-600 mb-1" />
                      <p className="text-sm text-gray-600 italic">"{member.quote}"</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Team Stats */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">100+</div>
                  <div className="text-gray-600">Total Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">50+</div>
                  <div className="text-gray-600">Service Professionals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">15+</div>
                  <div className="text-gray-600">Support Staff</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">8+</div>
                  <div className="text-gray-600">Years Together</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== IMPACT SECTION ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Anand</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Making a meaningful difference in our community
              </p>
            </div>

            {/* Impact Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {localImpact.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-xl flex items-center gap-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white text-3xl">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">{item.value}</div>
                    <div className="text-lg font-medium text-emerald-600">{item.metric}</div>
                    <div className="text-sm text-gray-500">{item.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Community Initiatives */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 text-white mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Community Initiatives</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition">
                  <div className="text-4xl mb-3">🌱</div>
                  <h4 className="font-bold mb-2">Green Anand</h4>
                  <p className="text-sm opacity-90">Planted 500+ trees across the city</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition">
                  <div className="text-4xl mb-3">👨‍🎓</div>
                  <h4 className="font-bold mb-2">Skill Training</h4>
                  <p className="text-sm opacity-90">Trained 200+ local youth</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition">
                  <div className="text-4xl mb-3">🏥</div>
                  <h4 className="font-bold mb-2">Health Camps</h4>
                  <p className="text-sm opacity-90">Free health checkups for workers</p>
                </div>
              </div>
            </div>

            {/* Testimonials from Anand */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Dr. Mehul Shah',
                  location: 'Gandhi Road, Anand',
                  text: 'HomeEase has been a blessing for our society. Their plumbers and electricians are always professional and punctual. I\'ve been using their services for 3 years now.',
                  rating: 5
                },
                {
                  name: 'Nidhi Patel',
                  location: 'Vallabh Vidyanagar',
                  text: 'The gardening team transformed our college campus beautifully. Highly recommend their services! They\'re now our go-to for all maintenance work.',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-3xl p-12 shadow-xl"
          >
            <h3 className="text-3xl font-bold mb-4">Join Our HomeEase Family</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the best home services in Anand with our trusted professionals
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-700 transition transform hover:scale-105 shadow-lg">
                Book a Service
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-medium hover:bg-emerald-50 transition transform hover:scale-105">
                Become a Partner
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Join 5000+ happy families in Anand who trust HomeEase
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}