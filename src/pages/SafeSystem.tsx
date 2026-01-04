import { Users, Heart, MapPin, Gauge, Car, Ambulance } from 'lucide-react';
import { motion } from 'framer-motion';

const SafeSystem = () => {


    return (
        <div className="py-20 bg-surface-50 dark:bg-surface-950 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4">
                        A Paradigm Shift
                    </span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-surface-900 dark:text-white mb-6">
                        The Safe System Approach
                    </h1>
                    <p className="text-xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto leading-relaxed">
                        Accepting that humans make mistakes and are vulnerable.
                        Designing a transport system that accommodates these errors without resulting in death or serious injury.
                    </p>
                </div>

                {/* Core Principles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-surface-900 p-8 rounded-2xl shadow-sm border border-surface-100 dark:border-surface-800"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-brand-100 dark:bg-brand-900/30 rounded-xl text-brand-600 dark:text-brand-400">
                                <Users className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-heading font-bold text-surface-900 dark:text-white">Shared Responsibility</h2>
                        </div>
                        <p className="text-surface-600 dark:text-surface-300 leading-relaxed text-lg">
                            Safety is not just the responsibility of the road user. System designers (engineers, policymakers, vehicle manufacturers)
                            share the responsibility to provide a safe environment. If a user makes a mistake, the system should prevent a fatality.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-surface-900 p-8 rounded-2xl shadow-sm border border-surface-100 dark:border-surface-800"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl text-red-600 dark:text-red-400">
                                <Heart className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-heading font-bold text-surface-900 dark:text-white">Human Vulnerability</h2>
                        </div>
                        <p className="text-surface-600 dark:text-surface-300 leading-relaxed text-lg">
                            The human body has limited tolerance to crash forces. The system must be designed to manage kinetic energy
                            so that in the event of a crash, the forces exerted on the human body do not exceed survivable limits.
                        </p>
                    </motion.div>
                </div>

                {/* The 5 Pillars */}
                <h2 className="text-3xl font-heading font-bold text-surface-900 dark:text-white mb-12 text-center">The 5 Pillars of Action</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {[
                        {
                            icon: <MapPin className="h-8 w-8" />,
                            title: "Safe Roads",
                            desc: "Forgiving roads that self-explain and minimize crash severity.",
                            color: "bg-blue-100 text-blue-600"
                        },
                        {
                            icon: <Gauge className="h-8 w-8" />,
                            title: "Safe Speeds",
                            desc: "Speed limits appropriate for the road function and design.",
                            color: "bg-green-100 text-green-600"
                        },
                        {
                            icon: <Car className="h-8 w-8" />,
                            title: "Safe Vehicles",
                            desc: "Vehicles with active and passive safety features (ABS, ESC, Airbags).",
                            color: "bg-purple-100 text-purple-600"
                        },
                        {
                            icon: <Users className="h-8 w-8" />,
                            title: "Safe People",
                            desc: "Educated, licensed, and sober road users complying with rules.",
                            color: "bg-orange-100 text-orange-600"
                        },
                        {
                            icon: <Ambulance className="h-8 w-8" />,
                            title: "Post-Crash Care",
                            desc: "Fast and effective emergency response and rehabilitation.",
                            color: "bg-red-100 text-red-600"
                        },
                    ].map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-surface-900 p-6 rounded-2xl shadow-sm border border-surface-100 dark:border-surface-800 hover:shadow-md transition-shadow"
                        >
                            <div className={`p-4 rounded-xl w-fit mb-4 ${pillar.color} dark:bg-opacity-20`}>
                                {pillar.icon}
                            </div>
                            <h3 className="text-lg font-heading font-bold text-surface-900 dark:text-white mb-2">{pillar.title}</h3>
                            <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
                                {pillar.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SafeSystem;
