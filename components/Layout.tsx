import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AiSearchModal from './AiSearchModal';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  
  // Theme State Management
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme as 'light' | 'dark';
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
    }
    return 'dark'; // Defaulting to dark as per original html class
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const isActive = (path: string) => location.pathname === path ? 'text-primary font-bold' : 'text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white';

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="size-8 text-primary">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
                </svg>
              </div>
              <Link to="/" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
                Marketing Widget
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/')}`}>Home</Link>
              <Link to="/services" className={`text-sm font-medium transition-colors ${isActive('/services')}`}>Services</Link>
              <Link to="/case-studies" className={`text-sm font-medium transition-colors ${isActive('/case-studies')}`}>Case Studies</Link>
              <Link to="/resources" className={`text-sm font-medium transition-colors ${isActive('/resources')}`}>Resources</Link>
              <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about')}`}>About</Link>
              <Link to="/pricing" className={`text-sm font-medium transition-colors ${isActive('/pricing')}`}>Pricing</Link>
              <Link to="/roi-calculator" className={`text-sm font-medium transition-colors ${isActive('/roi-calculator')}`}>ROI Calculator</Link>
              <Link to="/blog" className={`text-sm font-medium transition-colors ${isActive('/blog')}`}>Blog</Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
                {/* Search Trigger */}
               <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10 transition-colors"
                aria-label="Search"
               >
                 <span className="material-symbols-outlined text-xl">search</span>
               </button>

               {/* Dark Mode Toggle Desktop */}
               <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle Dark Mode"
               >
                 <span className="material-symbols-outlined text-xl transition-transform duration-500 rotate-0 dark:-rotate-180">
                    {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                 </span>
               </button>

               <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors">
                Login
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-primary/90 transition-colors">
                Get a Quote
              </Link>
            </div>

            <div className="md:hidden flex items-center gap-2">
                {/* Search Trigger Mobile */}
               <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10 transition-colors"
               >
                 <span className="material-symbols-outlined text-xl">search</span>
               </button>

              {/* Dark Mode Toggle Mobile */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle Dark Mode"
               >
                 <span className="material-symbols-outlined text-xl transition-transform duration-500 rotate-0 dark:-rotate-180">
                    {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                 </span>
               </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 rounded-md"
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-white/10 bg-white dark:bg-background-dark">
            <div className="space-y-1 px-4 pb-3 pt-2">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 rounded-md">Home</Link>
              <Link to="/services" className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 rounded-md">Services</Link>
              <Link to="/case-studies" className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 rounded-md">Case Studies</Link>
              <Link to="/resources" className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 rounded-md">Resources</Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 rounded-md">About</Link>
              <Link to="/pricing" className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 rounded-md">Pricing</Link>
              <Link to="/roi-calculator" className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 rounded-md">ROI Calculator</Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-primary font-bold">Get a Quote</Link>
            </div>
          </div>
        )}
      </header>

      <AiSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <main className="flex-grow">
        {children}
      </main>

      <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-background-dark pt-16 pb-8 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="size-6 text-primary">
                   <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
                  </svg>
                </div>
                <span className="text-lg font-bold text-slate-900 dark:text-white font-display">Marketing Widget</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm">
                AI-Powered Digital Success. We turn messy marketing into a predictable revenue engine.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 font-display">Services</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><Link to="/services/web-development" className="hover:text-primary">Web Development</Link></li>
                <li><Link to="/services/seo" className="hover:text-primary">SEO</Link></li>
                <li><Link to="/services/paid-advertising" className="hover:text-primary">Paid Advertising</Link></li>
                <li><Link to="/services/branding" className="hover:text-primary">Branding</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 font-display">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-primary">Careers</Link></li>
                <li><Link to="/resources" className="hover:text-primary">Resource Library</Link></li>
                <li><Link to="/archive" className="hover:text-primary">News Archive</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 font-display">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
                <li><Link to="/roi-calculator" className="hover:text-primary">ROI Calculator</Link></li>
                <li><a href="#" className="hover:text-primary">Twitter / X</a></li>
                <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 dark:text-slate-400">© 2024 Marketing Widget. All rights reserved.</p>
            <div className="flex gap-4 items-center">
              <Link to="/privacy" className="text-sm text-slate-500 hover:text-primary">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-slate-500 hover:text-primary">Terms of Service</Link>
              <Link to="/contact" className="text-sm font-bold text-white bg-primary px-3 py-1.5 rounded hover:bg-blue-700 transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;