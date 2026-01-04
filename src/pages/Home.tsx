import { Link } from 'react-router-dom';
import { ArrowRight, Globe, AlertTriangle, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-900">
                {/* Background Gradient */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-surface-900 via-surface-950 to-black"></div>

                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-900/10 skew-x-12 transform origin-top-right"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent-900/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-left"
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-sm font-medium mb-6 backdrop-blur-sm">
                                Global Road Safety Report 2023
                            </span>
                            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight mb-6 leading-tight">
                                Protecting What <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
                                    Matters Most
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-surface-200 max-w-xl mb-10 font-light leading-relaxed">
                                Every 24 seconds, a life is lost on the world's roads. We can change this narrative through the Safe System approach.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/global-safety"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-brand-600 font-heading rounded-full hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600"
                                >
                                    Explore Global Data
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/safe-system"
                                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-white/10 border border-white/20 font-heading rounded-full hover:bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50"
                                >
                                    Learn Safe System
                                </Link>
                            </div>
                        </motion.div>

                        {/* Image Collage */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="relative hidden lg:block"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 mt-8">
                                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-48">
                                        <img
                                            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600"
                                            alt="Smart traffic lights"
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-64">
                                        <img
                                            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=600"
                                            alt="Safe road trip"
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-64">
                                        <img
                                            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=600"
                                            alt="Cyclist safety"
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-48">
                                        <img
                                            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=600"
                                            alt="Urban pedestrian crossing"
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full shadow-xl">
                                <div className="bg-brand-500 rounded-full p-3">
                                    <Globe className="h-8 w-8 text-white animate-pulse" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
                    </div>
                </motion.div>
            </section>

            {/* Key Statistics Section */}
            <section className="py-24 bg-surface-50 dark:bg-surface-950 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-surface-300 dark:via-surface-700 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 dark:text-white mb-4">The Silent Epidemic</h2>
                        <p className="text-lg text-surface-600 dark:text-surface-300 max-w-2xl mx-auto">
                            The latest WHO data reveals the staggering scale of the crisis, but also shows signs of progress in some regions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Stat Card 1 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-surface-900 p-8 rounded-2xl shadow-xl shadow-surface-200/50 dark:shadow-none border border-surface-100 dark:border-surface-800 relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Activity className="h-24 w-24 text-brand-500" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <Activity className="h-7 w-7" />
                                </div>
                                <h3 className="text-5xl font-heading font-bold text-surface-900 dark:text-white text-center mb-2">1.19M</h3>
                                <p className="text-surface-500 dark:text-surface-400 text-center font-medium uppercase tracking-wide text-sm">Lives Lost Annually</p>
                                <p className="mt-4 text-surface-600 dark:text-surface-300 text-center text-sm leading-relaxed">
                                    A slight decrease from previous years, but still an unacceptably high toll on humanity.
                                </p>
                            </div>
                        </motion.div>

                        {/* Stat Card 2 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-surface-900 p-8 rounded-2xl shadow-xl shadow-surface-200/50 dark:shadow-none border border-surface-100 dark:border-surface-800 relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Globe className="h-24 w-24 text-accent-500" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-accent-50 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <Globe className="h-7 w-7" />
                                </div>
                                <h3 className="text-5xl font-heading font-bold text-surface-900 dark:text-white text-center mb-2">#1</h3>
                                <p className="text-surface-500 dark:text-surface-400 text-center font-medium uppercase tracking-wide text-sm">Killer of Youth</p>
                                <p className="mt-4 text-surface-600 dark:text-surface-300 text-center text-sm leading-relaxed">
                                    Road traffic injuries are the leading cause of death for children and young adults aged 5-29.
                                </p>
                            </div>
                        </motion.div>

                        {/* Stat Card 3 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-surface-900 p-8 rounded-2xl shadow-xl shadow-surface-200/50 dark:shadow-none border border-surface-100 dark:border-surface-800 relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <AlertTriangle className="h-24 w-24 text-red-500" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <AlertTriangle className="h-7 w-7" />
                                </div>
                                <h3 className="text-5xl font-heading font-bold text-surface-900 dark:text-white text-center mb-2">92%</h3>
                                <p className="text-surface-500 dark:text-surface-400 text-center font-medium uppercase tracking-wide text-sm">In Low/Middle Income</p>
                                <p className="mt-4 text-surface-600 dark:text-surface-300 text-center text-sm leading-relaxed">
                                    The burden is disproportionately borne by countries with the fewest resources to tackle it.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Animation / Visual Section */}
            <section className="py-24 bg-white dark:bg-surface-900 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-brand-600 dark:text-brand-400 font-bold tracking-wider uppercase text-sm mb-2 block">Visualizing Impact</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-surface-900 dark:text-white mb-6 leading-tight">
                                Seeing the Unseen <br />
                                <span className="text-brand-500">Dangers</span>
                            </h2>
                            <p className="text-lg text-surface-600 dark:text-surface-300 mb-8 leading-relaxed">
                                Road safety isn't just about numbers; it's about understanding the dynamics of movement and human interaction.
                                Advanced simulations and data visualization help us predict and prevent crashes before they happen.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold">1</div>
                                    <span className="text-surface-700 dark:text-surface-200 font-medium">Predictive Modeling</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center text-accent-600 dark:text-accent-400 font-bold">2</div>
                                    <span className="text-surface-700 dark:text-surface-200 font-medium">Behavioral Analysis</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-surface-800"
                        >
                            {/* Placeholder for GIF/Video - Using a high-quality relevant image for now as a placeholder for the "GIF" request */}
                            <img
                                src="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?q=80&w=2016&auto=format&fit=crop"
                                alt="Traffic flow simulation visualization"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <p className="font-bold text-lg">Traffic Flow Simulation</p>
                                    <p className="text-sm text-white/80">AI-driven analysis of intersection safety</p>
                                </div>
                            </div>
                            {/* Play Button Overlay to suggest video/GIF content */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg animate-pulse">
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Impact Stories Section */}
            <section className="py-24 bg-surface-50 dark:bg-surface-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 dark:text-white mb-4">Stories of Change</h2>
                        <p className="text-lg text-surface-600 dark:text-surface-300 max-w-2xl mx-auto">
                            Real people, real impact. How safe system interventions are saving lives around the world.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                city: "Bogotá, Colombia",
                                title: "Speed Limit Reform",
                                desc: "Reducing urban speed limits to 50km/h led to a significant drop in fatalities.",
                                img: "https://www.shutterstock.com/image-photo/traffic-sign-informing-speed-limit-260nw-2286610577.jpg"
                            },
                            {
                                city: "Fortaleza, Brazil",
                                title: "Pedestrian Priority",
                                desc: "Redesigning intersections to prioritize pedestrians reduced injuries by 40%.",
                                img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800"
                            },
                            {
                                city: "Mumbai, India",
                                title: "Safe School Zones",
                                desc: "Implementing safe zones around schools protected thousands of children.",
                                img: "https://images.unsplash.com/photo-1570126618953-d437176e8c79?auto=format&fit=crop&q=80&w=800"
                            }
                        ].map((story, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-surface-900 rounded-2xl overflow-hidden shadow-lg border border-surface-100 dark:border-surface-800"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img src={story.img} alt={story.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider mb-2">{story.city}</div>
                                    <h3 className="text-xl font-heading font-bold text-surface-900 dark:text-white mb-3">{story.title}</h3>
                                    <p className="text-surface-600 dark:text-surface-300 text-sm leading-relaxed">{story.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-24 bg-brand-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Join the Movement for Safer Roads</h2>
                    <p className="text-xl text-brand-100 mb-10 leading-relaxed">
                        Road safety is a shared responsibility. Whether you are a policymaker, engineer, or road user, your actions matter.
                        Together, we can achieve Vision Zero.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-brand-900 font-bold rounded-full hover:bg-brand-50 transition-colors shadow-lg">
                            Get Involved
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                            Donate to the Cause
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
