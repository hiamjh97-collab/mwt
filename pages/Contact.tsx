import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
       <div className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="container mx-auto relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-black mb-4 font-display">Get In Touch</h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">We're here to help and answer any question you might have.</p>
            </div>
       </div>

       <div className="container mx-auto px-6 py-16 -mt-10 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-800">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                                <input type="text" className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary p-3" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                                <input type="text" className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary p-3" placeholder="Doe" />
                            </div>
                        </div>
                        <div>
                             <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                             <input type="email" className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary p-3" placeholder="john@example.com" />
                        </div>
                        <div>
                             <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                             <textarea rows={4} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary p-3" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors shadow-lg">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="space-y-6">
                    <div className="bg-primary text-white p-8 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined">mail</span>
                                <div>
                                    <p className="font-bold">Email</p>
                                    <p className="text-blue-100">contact@marketingwidget.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined">location_on</span>
                                <div>
                                    <p className="font-bold">Location</p>
                                    <p className="text-blue-100">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined">call</span>
                                <div>
                                    <p className="font-bold">Phone</p>
                                    <p className="text-blue-100">+880 1234 567 890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 h-64 relative overflow-hidden">
                         <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Map Location" className="absolute inset-0 w-full h-full object-cover" />
                         <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                             <div className="bg-white text-slate-900 px-4 py-2 rounded-lg font-bold shadow-lg">Our Office</div>
                         </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  );
};

export default Contact;