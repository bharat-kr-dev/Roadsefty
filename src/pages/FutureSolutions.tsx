import { Zap, Cpu, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

const FutureSolutions = () => {
    return (
        <div className="py-20 bg-surface-50 dark:bg-surface-950 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4">
                        Innovation & Technology
                    </span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-surface-900 dark:text-white mb-6">
                        Future & Solutions
                    </h1>
                    <p className="text-xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto leading-relaxed">
                        Technology is reshaping road safety. From autonomous vehicles to smart infrastructure,
                        innovation holds the key to eliminating road trauma.
                    </p>
                </div>

                {/* Tech Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white dark:bg-surface-900 p-8 rounded-2xl shadow-sm border border-surface-100 dark:border-surface-800"
                    >
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 w-fit mb-6">
                            <Cpu className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-surface-900 dark:text-white mb-3">AI & Predictive Analytics</h3>
                        <p className="text-surface-600 dark:text-surface-300 leading-relaxed">
                            Machine learning models predict crash risk in real-time, allowing traffic management centers to intervene before accidents happen.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white dark:bg-surface-900 p-8 rounded-2xl shadow-sm border border-surface-100 dark:border-surface-800"
                    >
                        <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400 w-fit mb-6">
                            <Wifi className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-surface-900 dark:text-white mb-3">Connected Vehicles (V2X)</h3>
                        <p className="text-surface-600 dark:text-surface-300 leading-relaxed">
                            Cars talking to each other and the infrastructure. Warnings about unseen hazards, emergency braking alerts, and traffic signal optimization.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white dark:bg-surface-900 p-8 rounded-2xl shadow-sm border border-surface-100 dark:border-surface-800"
                    >
                        <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600 dark:text-green-400 w-fit mb-6">
                            <Zap className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-surface-900 dark:text-white mb-3">Autonomous Mobility</h3>
                        <p className="text-surface-600 dark:text-surface-300 leading-relaxed">
                            Removing human error from the equation. Self-driving technology has the potential to prevent 90% of crashes caused by driver behavior.
                        </p>
                    </motion.div>
                </div>

                {/* Smart City Vision */}
                <div className="bg-surface-900 rounded-3xl overflow-hidden shadow-2xl relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 md:p-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">The Smart City Vision</h2>
                            <p className="text-surface-300 text-lg leading-relaxed mb-8">
                                Imagine a city where traffic lights adapt to pedestrian flows, streetlights brighten when a cyclist approaches,
                                and speed limits adjust dynamically based on weather and congestion. This is not science fiction; it is the future of urban safety.
                            </p>
                            <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-xl font-medium transition-colors">
                                Explore Smart Technologies
                            </button>
                        </div>
                        <div className="relative h-64 lg:h-full min-h-[300px] bg-surface-800 rounded-2xl border border-surface-700 overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
                                alt="Smart City Technology"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 to-transparent flex items-end p-6">
                                <div>
                                    <p className="text-white font-bold text-lg">Connected Infrastructure</p>
                                    <p className="text-surface-300 text-sm">Real-time data integration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FutureSolutions;
