import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-surface-900 text-white py-12 border-t border-surface-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-heading font-bold mb-4 text-white">Road Safety Insights</h3>
                        <p className="text-surface-400 text-sm max-w-md leading-relaxed mb-6">
                            A global initiative to educate and advocate for safer roads. We believe that no loss of life is acceptable on our transport systems.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-surface-400">
                            <span>Made with</span>
                            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                            <span>for a safer world</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-surface-400">
                            <li><a href="/global-safety" className="hover:text-brand-400 transition-colors">Global Data</a></li>
                            <li><a href="/safe-system" className="hover:text-brand-400 transition-colors">Safe System</a></li>
                            <li><a href="/future-solutions" className="hover:text-brand-400 transition-colors">Future Solutions</a></li>
                            <li><a href="/about" className="hover:text-brand-400 transition-colors">References</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Stay Informed</h4>
                        <p className="text-xs text-surface-500 mb-3">Join our mission for zero fatalities.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-surface-800 border-surface-700 text-white text-sm rounded-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-brand-500"
                            />
                            <button className="bg-brand-600 hover:bg-brand-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-surface-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-surface-500">
                        &copy; {new Date().getFullYear()} Road Safety Insights. Educational Project.
                    </p>
                    <div className="flex gap-4 text-surface-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
