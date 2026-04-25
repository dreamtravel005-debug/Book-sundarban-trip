"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, Mail, MapPin, Send, CheckCircle2, 
  Loader2, Clock, Calendar, ChevronDown, Users,
  ArrowRight, ShieldCheck, Globe
} from "lucide-react";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");
  
  // To keep the name visible on the success screen after form reset
  const [submittedName, setSubmittedName] = useState("");
  
  // matched keys with your provided API: fullName, phone, date, persons, message
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "", // Optional for UI
    date: "",
    persons: "2",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SENDING");
    
    // Save the name for the success UI
    const nameToDisplay = formData.fullName;

    try {
      const response = await fetch("/api/contact", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), 
      });

      if (response.ok) {
        setSubmittedName(nameToDisplay);
        setStatus("SUCCESS");
        // Resetting form data
        setFormData({ fullName: "", phone: "", email: "", date: "", persons: "2", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("ERROR");
    }
  };

  if (!mounted) return null;

  return (
    <div className="bg-[#fcfcfc] text-slate-900 min-h-screen font-sans selection:bg-emerald-100 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center bg-emerald-950 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img src="/images/sundarban.jpg" className="w-full h-full object-cover" alt="Sundarban Safari" />
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-bold uppercase tracking-[0.3em]">Premium Wild Journeys</span>
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none"
          >
            Get In <span className="text-emerald-500">Touch.</span>
          </motion.h1>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-32 -mt-16 md:-mt-24 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: INFORMATION PANEL */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-slate-200/50 border border-white"
            >
              <h3 className="text-2xl font-black mb-10 tracking-tight text-emerald-950 uppercase">Connect Us</h3>
              <div className="space-y-8">
                <ContactDetail icon={<Phone size={20}/>} label="Reservation" val="+91 629566 5770 / 9339703384" />
                <ContactDetail icon={<Mail size={20}/>} label="Email Support" val="info@booksundarbantrip@gmail.com" />
                <ContactDetail icon={<MapPin size={20}/>} label="Location" val="Village: Gosaba , Post Office: Gosaba , Dist: South 24 Pgs , Gosaba Market Durga Mandir Road, Pin - 743370, West Bengal, India" />
                <ContactDetail icon={<Clock size={20}/>} label="Support Hours" val="9 AM - 9 PM IST" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-emerald-950 p-10 rounded-[2.5rem] md:rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-6">Stay Connected</p>
                <div className="flex gap-4">
                  <SocialLink path="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  <SocialLink path="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" isInstagram />
                  <SocialLink path="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z" isYoutube />
                </div>
              </div>
              <Globe className="absolute -bottom-10 -right-10 text-white opacity-5" size={200} />
            </motion.div>
          </div>

          {/* RIGHT: SMART INQUIRY FORM */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="bg-white p-6 md:p-14 lg:p-16 rounded-[2.5rem] md:rounded-[4.5rem] shadow-2xl shadow-slate-200 border border-white min-h-162.5 flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {status === "SUCCESS" ? (
                  <motion.div 
                    key="success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 md:py-20"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                      <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Success, {submittedName}!</h2>
                    <p className="text-slate-500 text-lg max-w-sm mx-auto mt-6 leading-relaxed">
                      Your inquiry has been received. Our expert will contact you via phone within 24 hours.
                    </p>
                    <button 
                      onClick={() => setStatus("IDLE")}
                      className="mt-10 px-12 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-emerald-600 transition-all shadow-xl"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" exit={{ opacity: 0, y: -20 }}>
                    <div className="mb-10 md:mb-14">
                      <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4 text-emerald-950">Inquiry Form</h2>
                      <div className="h-2 w-20 bg-emerald-500 rounded-full"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase ml-2 tracking-widest">Full Name</label>
                        <input required type="text" value={formData.fullName} onChange={(e)=>setFormData({...formData, fullName:e.target.value})} className="field" placeholder="Enter your full name" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase ml-2 tracking-widest">Phone Number</label>
                        <input required type="text" value={formData.phone} onChange={(e)=>setFormData({...formData, phone:e.target.value})} className="field" placeholder="+91" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase ml-2 tracking-widest">Travel Date</label>
                        <input required type="date" value={formData.date} onChange={(e)=>setFormData({...formData, date:e.target.value})} className="field" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase ml-2 tracking-widest">Total Persons</label>
                        <input required type="number" min="1" value={formData.persons} onChange={(e)=>setFormData({...formData, persons:e.target.value})} className="field" />
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase ml-2 tracking-widest">Special Requirements / Message</label>
                        <textarea required rows={4} value={formData.message} onChange={(e)=>setFormData({...formData, message:e.target.value})} className="field py-5 min-h-35" placeholder="Tell us more about your plan..."></textarea>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={status === "SENDING"}
                        className="md:col-span-2 w-full py-5 md:py-6 bg-emerald-600 text-white rounded-2xl md:rounded-4xl font-black uppercase tracking-[0.25em] text-xs md:text-sm flex items-center justify-center gap-4 shadow-2xl shadow-emerald-200 transition-all disabled:opacity-50 hover:bg-emerald-700"
                      >
                        {status === "SENDING" ? <Loader2 className="animate-spin" /> : <>Send Inquiry <ArrowRight size={20}/></>}
                      </motion.button>
                    </form>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-6 opacity-30 grayscale">
                       <div className="flex items-center gap-2 font-bold text-[10px] uppercase"><ShieldCheck size={16}/> Verified Safari Agency</div>
                       <div className="flex items-center gap-2 font-bold text-[10px] uppercase"><Users size={16}/> 15k+ Satisfied Explorers</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="px-4 md:px-8 pb-32 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] md:rounded-[5rem] overflow-hidden border-8 md:border-15 border-white shadow-3xl h-112.5 md:h-150 relative"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473444.99839002435!2d88.95732597574455!3d22.01939236844728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a004caac2c7b315%3A0x4716abcfbb16c93c!2sSundarbans!5e0!3m2!1sen!2sin!4v1776256889397!5m2!1sen!2sin" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            className="grayscale hover:grayscale-0 transition-all duration-1000 contrast-125 saturate-50"
          ></iframe>
        </motion.div>
      </section>

      {/* --- CSS --- */}
      <style jsx>{`
        .field {
          width: 100%;
          padding: 1.15rem 1.5rem;
          border-radius: 1.25rem;
          background-color: #f8fafc;
          border: 2px solid transparent;
          font-weight: 700;
          font-size: 0.95rem;
          color: #0f172a;
          outline: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @media (max-width: 768px) {
          .field { padding: 1rem 1.25rem; font-size: 0.875rem; }
        }
        .field:focus {
          background-color: white;
          border-color: #10b981;
          box-shadow: 0 15px 30px -10px rgba(16, 185, 129, 0.15);
        }
      `}</style>

    </div>
  );
}

// --- SUB COMPONENTS ---

function ContactDetail({ icon, label, val }: any) {
  return (
    <div className="flex items-center gap-5 md:gap-6 group">
      <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
        <p className="font-bold text-slate-800 text-sm md:text-lg leading-tight">{val}</p>
      </div>
    </div>
  );
}

function SocialLink({ path, isInstagram, isYoutube }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5, backgroundColor: "#10b981" }}
      className="w-12 h-12 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {isInstagram && (
          <>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </>
        )}
        {isYoutube && (
          <>
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z" />
            <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
          </>
        )}
        {!isInstagram && !isYoutube && <path d={path} />}
      </svg>
    </motion.div>
  );
}