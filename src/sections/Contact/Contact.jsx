import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import Card3D from '../../components/Card3D/Card3D';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitState, setSubmitState] = useState('idle'); // idle -> loading -> success

  // Real-time validator
  const validateField = (name, value) => {
    let error = '';
    if (!value.trim()) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = 'Please enter a valid email address.';
      }
    } else if (name === 'message' && value.trim().length < 10) {
      error = 'Message must be at least 10 characters long.';
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear submission errors when editing
    if (errors.submit) {
      setErrors(prev => {
        const { submit, ...rest } = prev;
        return rest;
      });
    }
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Mark all as touched to trigger error highlights
      const allTouched = {};
      Object.keys(formData).forEach(k => allTouched[k] = true);
      setTouched(allTouched);
      return;
    }

    setSubmitState('loading');

    // Retrieve Web3Forms access key from environment variables or fallback
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === 'your_access_key_here') {
      console.warn("Web3Forms Access Key is not configured. Falling back to simulation mode.");
      setTimeout(() => {
        setSubmitState('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
        setTouched({});
      }, 1500);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Ayushi Rai - Portfolio'
        })
      });

      const result = await response.json();
      
      if (response.status === 200 || result.success) {
        setSubmitState('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
        setTouched({});
      } else {
        setSubmitState('idle');
        setErrors({ submit: result.message || 'Form submission failed. Please try again.' });
      }
    } catch (err) {
      console.error(err);
      setSubmitState('idle');
      setErrors({ submit: 'A network error occurred. Please try again later.' });
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 w-full bg-slate-50 dark:bg-slate-900/40 transition-colors duration-500 relative bg-grid-pattern"
    >
      <div className="w-[92%] max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="text-xs font-black tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-2 block">
            06 / CONNECTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
          
          {/* Left Column: Direct Contacts info */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-2">
              Let's craft something amazing
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Have an exciting contract project, a remote full-time role, or simply want to chat about front-end animation architectures? Send a message and let's align!
            </p>

            <div className="space-y-4">
              {[
                { icon: <Mail className="w-5 h-5 text-indigo-500 dark:text-cyan-400" />, label: "Direct Email", value: "raiayushi381@gmail.com", link: "mailto:raiayushi381@gmail.com" },
                { icon: <Phone className="w-5 h-5 text-indigo-500 dark:text-cyan-400" />, label: "Phone Connection", value: "+91 9075246295", link: "tel:+919075246295" },
                { icon: <MapPin className="w-5 h-5 text-indigo-500 dark:text-cyan-400" />, label: "Location", value: "Nallasopara East, Mumbai, India", link: "#" },
              ].map((contact, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4 p-4.5 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/80 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/5 dark:bg-cyan-500/5 flex items-center justify-center border border-indigo-500/10">
                    {contact.icon}
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-450 uppercase font-black tracking-wider block">
                      {contact.label}
                    </span>
                    <a 
                      href={contact.link}
                      className="text-sm font-extrabold text-slate-700 dark:text-slate-250 cursor-none hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Form Container */}
          <div className="lg:col-span-7 w-full">
            <Card3D className="glass-card rounded-[32px] p-6 sm:p-8 border border-slate-200/50 dark:border-slate-800/80 shadow-premium w-full relative overflow-hidden min-h-[460px] flex flex-col justify-center">
              
              {/* Submission success screen overlay */}
              {submitState === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center space-y-5 animate-fade-in-up py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 animate-bounce">
                    <CheckCircle2 className="w-8 h-8 fill-emerald-500/10" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white">
                      Message Dispatched!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-sm leading-relaxed">
                      Thank you! Your inquiry was compiled and sent to my queue. I will review and reply in under 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitState('idle')}
                    className="btn-magnetic px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Main Form Code */
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="relative">
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        className={`w-full bg-slate-50/50 dark:bg-slate-900/50 border rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:bg-white dark:focus:bg-slate-900 transition-all cursor-none ${
                          touched.name && errors.name 
                            ? 'border-red-500/50 focus:ring-red-500/20' 
                            : 'border-slate-200/60 dark:border-slate-800/80 focus:ring-indigo-500/25 dark:focus:ring-cyan-500/20'
                        }`}
                        placeholder="John Doe"
                        required
                      />
                      <label 
                        htmlFor="name"
                        className="absolute left-4 -top-2 px-1 text-[10px] font-black uppercase tracking-wider bg-white dark:bg-slate-900 text-slate-400"
                      >
                        Your Name
                      </label>
                      {touched.name && errors.name && (
                        <p className="text-[10px] text-red-500 font-bold mt-1 pl-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        className={`w-full bg-slate-50/50 dark:bg-slate-900/50 border rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:bg-white dark:focus:bg-slate-900 transition-all cursor-none ${
                          touched.email && errors.email 
                            ? 'border-red-500/50 focus:ring-red-500/20' 
                            : 'border-slate-200/60 dark:border-slate-800/80 focus:ring-indigo-500/25 dark:focus:ring-cyan-500/20'
                        }`}
                        placeholder="john@example.com"
                        required
                      />
                      <label 
                        htmlFor="email"
                        className="absolute left-4 -top-2 px-1 text-[10px] font-black uppercase tracking-wider bg-white dark:bg-slate-900 text-slate-400"
                      >
                        Email Address
                      </label>
                      {touched.email && errors.email && (
                        <p className="text-[10px] text-red-500 font-bold mt-1 pl-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="relative">
                    <input 
                      type="text" 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      className={`w-full bg-slate-50/50 dark:bg-slate-900/50 border rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:bg-white dark:focus:bg-slate-900 transition-all cursor-none ${
                        touched.subject && errors.subject 
                          ? 'border-red-500/50 focus:ring-red-500/20' 
                          : 'border-slate-200/60 dark:border-slate-800/80 focus:ring-indigo-500/25 dark:focus:ring-cyan-500/20'
                      }`}
                      placeholder="Freelance Project Query"
                      required
                    />
                    <label 
                      htmlFor="subject"
                      className="absolute left-4 -top-2 px-1 text-[10px] font-black uppercase tracking-wider bg-white dark:bg-slate-900 text-slate-400"
                    >
                      Subject Topic
                    </label>
                    {touched.subject && errors.subject && (
                      <p className="text-[10px] text-red-500 font-bold mt-1 pl-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      rows="4"
                      className={`w-full bg-slate-50/50 dark:bg-slate-900/50 border rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:bg-white dark:focus:bg-slate-900 transition-all cursor-none resize-none ${
                        touched.message && errors.message 
                          ? 'border-red-500/50 focus:ring-red-500/20' 
                          : 'border-slate-200/60 dark:border-slate-800/80 focus:ring-indigo-500/25 dark:focus:ring-cyan-500/20'
                      }`}
                      placeholder="Hi Ayushi, I would love to talk about building a MERN stack music application..."
                      required
                    />
                    <label 
                      htmlFor="message"
                      className="absolute left-4 -top-2 px-1 text-[10px] font-black uppercase tracking-wider bg-white dark:bg-slate-900 text-slate-400"
                    >
                      Detailed Message
                    </label>
                    {touched.message && errors.message && (
                      <p className="text-[10px] text-red-500 font-bold mt-1 pl-1">{errors.message}</p>
                    )}
                  </div>

                  {errors.submit && (
                    <div className="p-3.5 bg-red-500/10 border border-red-500/20 text-red-500 text-xs rounded-xl font-extrabold text-center animate-fade-in-up">
                      {errors.submit}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitState === 'loading'}
                    className="btn-magnetic w-full h-12 rounded-2xl font-extrabold text-sm text-white bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center gap-2 transition-colors shadow-md hover:shadow-neon-indigo disabled:bg-indigo-400 disabled:cursor-not-allowed"
                  >
                    {submitState === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Transmitting Message Packet...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 animate-pulse" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}

            </Card3D>
          </div>

        </div>

      </div>
    </section>
  );
}
