// pages/contact.js
"use client"
import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  User,
  MessageSquare,
  Calendar,
  CheckCircle,
  AlertCircle,
  
 
  ChevronRight,
  Home,
  Wrench,
  Sparkles,
  Shield,
  Star
} from 'lucide-react';
import { useState, useEffect } from 'react';
import  {FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    address: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState('main');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: true, message: 'Thank you! We\'ll contact you within 30 minutes.' });
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus({ submitted: false, success: false, message: '' });
      setFormData({
        name: '', email: '', phone: '', service: '', address: '',
        preferredDate: '', preferredTime: '', message: ''
      });
    }, 3000);
  };

  // Anand-specific contact information
  const contactInfo = {
    main: {
      title: 'Head Office - Anand',
      address: ['Shop No. 4-5, Galaxy Complex', 'Gandhi Road, Anand - 388001', 'Gujarat'],
      phone: ['+91 98765 43210', '+91 98765 43211'],
      email: ['info@homeeaseanand.com', 'support@homeeaseanand.com'],
      hours: ['Mon-Sat: 8:00 AM - 8:00 PM', 'Sunday: 9:00 AM - 5:00 PM'],
      emergency: '+91 98765 43212 (24/7)'
    },
    branch1: {
      title: 'Vallabh Vidyanagar Branch',
      address: ['12-13, Sardar Patel Complex', 'Vallabh Vidyanagar - 388120', 'Gujarat'],
      phone: ['+91 98765 43213', '+91 98765 43214'],
      email: ['vidyanagar@homeeaseanand.com'],
      hours: ['Mon-Sat: 9:00 AM - 7:00 PM', 'Sunday: Closed'],
      emergency: '+91 98765 43215'
    },
    branch2: {
      title: 'GIDC Branch',
      address: ['A-101, Industrial Estate', 'GIDC, Anand - 388121', 'Gujarat'],
      phone: ['+91 98765 43216', '+91 98765 43217'],
      email: ['gidc@homeeaseanand.com'],
      hours: ['Mon-Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
      emergency: '+91 98765 43218'
    }
  };

  const services = [
    'Plumbing', 'Electrical', 'Dry Cleaning', 'Gardening', 
    'Home Decor', 'Washer Repair', 'Cleaning', 'Painting',
    'Carpentry', 'HVAC', 'Moving', 'Handyman'
  ];

  const faqs = [
    {
      question: 'How quickly can you send a professional in Anand?',
      answer: 'We guarantee 30-60 minute response time for emergency services in all areas of Anand including Gandhi Road, GIDC, and Vallabh Vidyanagar.'
    },
    {
      question: 'Do you serve all areas of Anand?',
      answer: 'Yes! We cover all major localities including Gandhi Road, GIDC, Vallabh Vidyanagar, New Anand, Borsad Road, and surrounding areas.'
    },
    {
      question: 'What are your emergency service charges?',
      answer: 'Emergency services have a nominal additional charge of ₹100-200 depending on the time. Regular service charges apply as per standard rates.'
    },
    {
      question: 'Do you provide free estimates?',
      answer: 'Yes, we provide free on-site estimates for all services. You can also get a quick estimate over phone or WhatsApp.'
    }
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container-padding mx-auto max-w-7xl">
          {/* Hero Section with Anand Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-medium mb-4">
              <MapPin className="w-4 h-4" />
              <span>Get in Touch - Anand, Gujarat</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Contact <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">HomeEase Anand</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here 24/7 to assist you with all your home service needs in Anand
            </p>
          </motion.div>

          {/* Emergency Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-8 flex flex-wrap items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-red-800">24/7 Emergency Services Available</h3>
                <p className="text-sm text-red-600">Immediate response for plumbing, electrical, and lock & key emergencies</p>
              </div>
            </div>
            <a href="tel:+919876543212" className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition">
              <Phone className="w-4 h-4" />
              <span>Emergency: +91 98765 43212</span>
            </a>
          </motion.div>

          {/* Branch Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center mb-8"
          >
            {Object.keys(contactInfo).map((branch) => (
              <button
                key={branch}
                onClick={() => setSelectedBranch(branch)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedBranch === branch
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-emerald-50'
                }`}
              >
                {contactInfo[branch].title}
              </button>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards - Dynamic based on branch */}
            <motion.div
              key={selectedBranch}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Main Branch Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-emerald-600 to-teal-600 p-6 rounded-2xl text-white shadow-xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{contactInfo[selectedBranch].title}</h3>
                    {contactInfo[selectedBranch].address.map((line, i) => (
                      <p key={i} className="opacity-90 text-sm">{line}</p>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-0.5 opacity-80" />
                    <div>
                      {contactInfo[selectedBranch].phone.map((num, i) => (
                        <p key={i} className="text-sm">{num}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-0.5 opacity-80" />
                    <div>
                      {contactInfo[selectedBranch].email.map((email, i) => (
                        <p key={i} className="text-sm">{email}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-0.5 opacity-80" />
                    <div>
                      {contactInfo[selectedBranch].hours.map((hour, i) => (
                        <p key={i} className="text-sm">{hour}</p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm font-semibold mb-2">Emergency:</p>
                    <a href={`tel:${contactInfo[selectedBranch].emergency}`} className="flex items-center gap-2 text-sm bg-white/20 px-3 py-2 rounded-lg hover:bg-white/30 transition">
                      <Phone className="w-4 h-4" />
                      {contactInfo[selectedBranch].emergency}
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Quick Connect Cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="https://wa.me/919876543210"
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-500 p-4 rounded-xl text-white flex flex-col items-center text-center"
                >
                  <FaWhatsapp className="w-8 h-8 mb-2" />
                  <span className="text-sm font-medium">WhatsApp</span>
                  <span className="text-xs opacity-90">Quick Response</span>
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-500 p-4 rounded-xl text-white flex flex-col items-center text-center"
                >
                  <MessageSquare className="w-8 h-8 mb-2" />
                  <span className="text-sm font-medium">Live Chat</span>
                  <span className="text-xs opacity-90">Online Now</span>
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <h3 className="font-semibold mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-emerald-600 hover:text-white transition"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Book a Service or Send Inquiry</h2>
                
                <AnimatePresence>
                  {formStatus.submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`mb-6 p-4 rounded-lg ${
                        formStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                      } flex items-center gap-3`}
                    >
                      {formStatus.success ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                      {formStatus.message}
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <User className="w-4 h-4 text-emerald-600" />
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Rajesh Patel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-emerald-600" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rajesh@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-emerald-600" />
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-emerald-600" />
                        Service Needed <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="">Select a service</option>
                        {services.map(service => (
                          <option key={service} value={service.toLowerCase()}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      Your Address in Anand <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 15, Gandhi Road, Anand"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-emerald-600" />
                        Preferred Time
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="">Select time slot</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                        <option value="evening">Evening (3 PM - 6 PM)</option>
                        <option value="emergency">Emergency (24/7)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      Your Message / Requirements
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Please describe your requirement in detail..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <input type="checkbox" required className="rounded text-emerald-600" />
                    <span>I agree to receive calls and messages regarding my service request</span>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-lg font-medium hover:from-emerald-700 hover:to-teal-700 transition-all flex items-center justify-center gap-2 text-lg"
                  >
                    <Send className="w-5 h-5" />
                    Send Message & Get Free Estimate
                  </motion.button>

                  <p className="text-xs text-gray-400 text-center">
                    By submitting, you agree to our privacy policy and terms of service.
                    We'll respond within 30 minutes during business hours.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Map Section - Anand Specific */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Our Location in Anand</h2>
              <div className="h-96 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.216384498!2d72.979565!3d22.564575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e7b8c9d8b6f%3A0x8b8b8b8b8b8b8b8b!2sAnand%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1644262073405!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
              
              {/* Nearby Localities */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm text-gray-500 mr-2">Service Areas:</span>
                {['Gandhi Road', 'GIDC', 'Vallabh Vidyanagar', 'New Anand', 'Borsad Road', 'Mogri', 'Karamsad'].map((area, i) => (
                  <span key={i} className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
              <p className="text-gray-600">Quick answers to common queries about our services in Anand</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-emerald-50 transition"
                  >
                    <span className="font-medium text-gray-800">{faq.question}</span>
                    <ChevronRight className={`w-5 h-5 text-emerald-600 transition-transform ${
                      activeFaq === index ? 'rotate-90' : ''
                    }`} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-4 text-gray-600"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: <Shield />, text: '100% Safe & Secure' },
              { icon: <Clock />, text: '24/7 Support' },
              { icon: <CheckCircle />, text: 'Verified Professionals' },
              { icon: <Star />, text: '4.9 Rating in Anand' }
            ].map((badge, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3">
                <div className="text-emerald-600">{badge.icon}</div>
                <span className="text-sm font-medium text-gray-700">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}