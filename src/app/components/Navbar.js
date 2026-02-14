// components/Navbar.js
"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Wrench, 
  Home, 
  Grid, 
  Info, 
  Phone, 
  ChevronDown,
  User,
  ShoppingCart,
  Bell,
  Search,
  Calendar,
  Star,
  Shield,
  Clock
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [notificationCount, setNotificationCount] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Home', 
      path: '/', 
      icon: <Home className="w-4 h-4" />,
      dropdown: false 
    },
    { 
      name: 'Services', 
      path: '/services', 
      icon: <Grid className="w-4 h-4" />,
      dropdown: true,
      dropdownItems: [
        { name: 'Plumbing', icon: '🔧', href: '/services/plumbing' },
        { name: 'Electrical', icon: '⚡', href: '/services/electrical' },
        { name: 'Cleaning', icon: '🧹', href: '/services/cleaning' },
        { name: 'Gardening', icon: '🌿', href: '/services/gardening' },
        { name: 'Painting', icon: '🎨', href: '/services/painting' },
        { name: 'All Services', icon: '📋', href: '/services' }
      ]
    },
    { 
      name: 'About', 
      path: '/about', 
      icon: <Info className="w-4 h-4" />,
      dropdown: false 
    },
    { 
      name: 'Contact', 
      path: '/contact', 
      icon: <Phone className="w-4 h-4" />,
      dropdown: false 
    },
  ];

  const emergencyServices = [
    { name: '24/7 Plumbing', icon: '🚰', available: true },
    { name: 'Emergency Electric', icon: '⚡', available: true },
    { name: 'Lock & Key', icon: '🔑', available: false },
  ];

  return (
    <>
      {/* Top Alert Bar */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="hidden lg:block bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 px-4 text-sm"
      >
        <div className="container-padding mx-auto max-w-7xl flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Mon-Sun: 24/7 Emergency Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>100% Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 fill-current" />
              <span>4.9 Rating (10k+ Reviews)</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {emergencyServices.map((service, idx) => (
              <div key={idx} className="flex items-center space-x-1">
                <span>{service.icon}</span>
                <span className={service.available ? 'text-white' : 'text-white/50'}>
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-white/80 backdrop-blur-sm py-5'
        }`}
        style={{ top: scrolled ? '0' : '40px' }}
      >
        <div className="container-padding mx-auto max-w-7xl">
          <div className="flex justify-between items-center">
            {/* Logo with enhanced design */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg blur opacity-70 group-hover:opacity-100 transition"></div>
                <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 p-2.5 rounded-lg transform group-hover:scale-110 transition-transform">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  HomeEase
                </span>
                <span className="hidden lg:block text-xs text-gray-500">Trusted Since 2015</span>
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for services..."
                  className="w-full px-4 py-2.5 pl-10 pr-12 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                
              </div>
            </div>

            {/* Action Icons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                {notificationCount > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </button>
              
              

              <button className="flex items-center space-x-2 bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-2 rounded-full border border-emerald-100 hover:border-emerald-300 transition">
                <User className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium text-gray-700">Account</span>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.path}
                    className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:text-emerald-600 font-medium transition-all hover:bg-emerald-50 group"
                  >
                    <span className="text-emerald-600 group-hover:scale-110 transition">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                    
                  </Link>

                  
                </div>
              ))}
            </div>

            {/* Book Now Button - Desktop */}
            <button className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2.5 rounded-full font-medium hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with enhanced design */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100 mt-3"
            >
              <div className="container-padding mx-auto py-4 space-y-4">
                {/* Mobile Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    className="w-full px-4 py-3 pl-10 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>

                {/* Mobile Navigation Items */}
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.path}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 transition"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-emerald-600">{item.icon}</span>
                          <span className="font-medium text-gray-700">{item.name}</span>
                        </div>
                        {item.dropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
                      </Link>
                      
                      {/* Mobile Dropdown Items */}
                      {item.dropdown && (
                        <div className="ml-8 mt-1 space-y-1">
                          {item.dropdownItems.map((dropItem, idx) => (
                            <Link
                              key={idx}
                              href={dropItem.href}
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-emerald-50"
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="text-lg">{dropItem.icon}</span>
                              <span className="text-gray-600">{dropItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                  <button className="flex items-center justify-center space-x-2 p-3 bg-emerald-50 rounded-xl">
                    <User className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">Account</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 p-3 bg-emerald-50 rounded-xl">
                    <ShoppingCart className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">Cart (3)</span>
                  </button>
                </div>

                {/* Mobile Book Now Button */}
                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-medium flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Book a Service Now</span>
                </button>

                {/* Mobile Emergency Info */}
                <div className="bg-red-50 p-4 rounded-xl">
                  <p className="text-sm font-medium text-red-600 mb-2">Emergency Services 24/7</p>
                  <div className="flex flex-wrap gap-2">
                    {emergencyServices.map((service, idx) => (
                      <div key={idx} className={`flex items-center space-x-1 px-3 py-1 rounded-full ${
                        service.available ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        <span>{service.icon}</span>
                        <span className="text-xs">{service.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-[136px] lg:h-[112px]"></div>
    </>
  );
}