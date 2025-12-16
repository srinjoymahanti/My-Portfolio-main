import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

const ContactModal = ({ isOpen, onClose }) => {
      return (
            <AnimatePresence>
                  {isOpen && (
                        <>
                              {/* Backdrop */}
                              <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={onClose}
                                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                              />

                              {/* Modal Container */}
                              <div className="fixed inset-0 flex items-center justify-center z-[70] pointer-events-none p-4">
                                    <motion.div
                                          initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                          animate={{ scale: 1, opacity: 1, y: 0 }}
                                          exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                          transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                          className="w-full max-w-2xl bg-[#0F0005] border border-white/10 rounded-[30px] overflow-hidden shadow-2xl pointer-events-auto relative"
                                    >
                                          {/* Close Button */}
                                          <button
                                                onClick={onClose}
                                                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-[#ff2239] hover:text-white transition-colors duration-300 z-10"
                                          >
                                                <X size={20} />
                                          </button>

                                          <div className="flex flex-col md:flex-row h-full">
                                                {/* Left Side: Info (Hidden on mobile for compactness or kept for style) */}
                                                <div className="hidden md:flex w-1/3 bg-[#ff2239]/5 p-8 flex-col justify-between border-r border-white/5">
                                                      <div>
                                                            <h3 className="text-2xl font-[anzo1] text-white mb-2">Let's Talk</h3>
                                                            <p className="text-white/60 text-sm font-light leading-relaxed">
                                                                  Have a project in mind? I'm always open to discussing new ideas and opportunities.
                                                            </p>
                                                      </div>

                                                      <div className="space-y-6">
                                                            <div>
                                                                  <h4 className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</h4>
                                                                  <p className="text-white text-sm">hello@example.com</p>
                                                            </div>
                                                            <div>
                                                                  <h4 className="text-white/40 text-xs uppercase tracking-widest mb-1">Socials</h4>
                                                                  <div className="flex gap-3 text-white/60 text-sm">
                                                                        <span>LinkedIn</span>
                                                                        <span>Twitter</span>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>

                                                {/* Right Side: Form */}
                                                <div className="flex-1 p-8 md:p-10">
                                                      <h3 className="text-3xl font-[anzo1] text-white mb-8 md:hidden">Let's Talk</h3>

                                                      <form className="space-y-6" onSubmit={(e) => {
                                                            e.preventDefault();
                                                            const formData = new FormData(e.target);
                                                            const name = formData.get('name');
                                                            const email = formData.get('email');
                                                            const subject = formData.get('subject');
                                                            const message = formData.get('message');

                                                            const mailtoLink = `mailto:shahzaman.faisal.23@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                                                            window.location.href = mailtoLink;
                                                            onClose();
                                                      }}>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                                  <div className="space-y-2">
                                                                        <label className="text-xs text-white/40 uppercase tracking-widest">Name</label>
                                                                        <input
                                                                              name="name"
                                                                              type="text"
                                                                              required
                                                                              placeholder="John Doe"
                                                                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#ff2239] focus:bg-white/10 transition-all duration-300"
                                                                        />
                                                                  </div>
                                                                  <div className="space-y-2">
                                                                        <label className="text-xs text-white/40 uppercase tracking-widest">Email</label>
                                                                        <input
                                                                              name="email"
                                                                              type="email"
                                                                              required
                                                                              placeholder="john@example.com"
                                                                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#ff2239] focus:bg-white/10 transition-all duration-300"
                                                                        />
                                                                  </div>
                                                            </div>

                                                            <div className="space-y-2">
                                                                  <label className="text-xs text-white/40 uppercase tracking-widest">Subject</label>
                                                                  <input
                                                                        name="subject"
                                                                        type="text"
                                                                        required
                                                                        placeholder="Project Inquiry"
                                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#ff2239] focus:bg-white/10 transition-all duration-300"
                                                                  />
                                                            </div>

                                                            <div className="space-y-2">
                                                                  <label className="text-xs text-white/40 uppercase tracking-widest">Message</label>
                                                                  <textarea
                                                                        name="message"
                                                                        required
                                                                        rows={4}
                                                                        placeholder="Tell me about your project..."
                                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#ff2239] focus:bg-white/10 transition-all duration-300 resize-none"
                                                                  />
                                                            </div>

                                                            <button
                                                                  type="submit"
                                                                  className="w-full bg-white text-black font-[anzo3] font-bold py-4 rounded-xl hover:bg-[#ff2239] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
                                                            >
                                                                  <span>Send Message</span>
                                                                  <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                                                            </button>
                                                      </form>
                                                </div>
                                          </div>
                                    </motion.div>
                              </div>
                        </>
                  )}
            </AnimatePresence>
      );
};

export default ContactModal;
