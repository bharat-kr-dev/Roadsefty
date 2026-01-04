import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldAlert } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Global Safety', path: '/global-safety' },
        { name: 'Data & Analysis', path: '/data-analysis' },
        { name: 'Safe System', path: '/safe-system' },
        { name: 'Future & Solutions', path: '/future-solutions' },
        { name: 'About', path: '/about' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-white/80 dark:bg-surface-950/80 backdrop-blur-md transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                            <div className="bg-brand-600 p-2 rounded-lg text-white group-hover:bg-brand-700 transition-colors">
                                <ShieldAlert className="h-6 w-6" />
                            </div>
                            <span className="font-heading font-bold text-xl text-surface-900 dark:text-white tracking-tight">Road Safety Insights</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${location.pathname === link.path
                                    ? 'text-brand-700 bg-brand-50 dark:bg-brand-900/30 dark:text-brand-300'
                                    : 'text-surface-600 hover:text-brand-600 hover:bg-surface-100 dark:text-surface-300 dark:hover:text-white dark:hover:bg-surface-800'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-surface-500 hover:text-brand-600 hover:bg-surface-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500 transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-surface-900 border-b border-surface-200 dark:border-surface-800">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-3 rounded-lg text-base font-medium ${location.pathname === link.path
                                    ? 'text-brand-700 bg-brand-50 dark:bg-brand-900/30 dark:text-brand-300'
                                    : 'text-surface-600 hover:text-brand-600 hover:bg-surface-50 dark:text-surface-300 dark:hover:text-white dark:hover:bg-surface-800'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
