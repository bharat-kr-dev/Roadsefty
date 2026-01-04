import { motion } from 'framer-motion';
import { AlertCircle, Search } from 'lucide-react';

const DataAnalysis = () => {


    return (
        <div className="py-20 bg-surface-50 dark:bg-surface-950 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4">
                        Evidence-Based Approach
                    </span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-surface-900 dark:text-white mb-6">
                        Data & Analysis
                    </h1>
                    <p className="text-xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto leading-relaxed">
                        Moving from reactive crash counting to proactive risk assessment.
                        Effective road safety management relies on comprehensive, high-quality data.
                    </p>
                </div>

                {/* Reactive vs Proactive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-surface-900 p-8 rounded-2xl shadow-sm border border-surface-100 dark:border-surface-800"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl text-red-600 dark:text-red-400">
                                <AlertCircle className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-heading font-bold text-surface-900 dark:text-white">Reactive Analysis</h2>
                        </div>
                        <p className="text-surface-600 dark:text-surface-300 mb-6 leading-relaxed">
                            Traditionally, road safety has relied on analyzing crash data—waiting for incidents to happen before taking action.
                            While necessary, this approach is insufficient for achieving Vision Zero.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-surface-700 dark:text-surface-200">
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                <span>Crash frequency & severity maps</span>
                            </li>
                            <li className="flex items-center gap-3 text-surface-700 dark:text-surface-200">
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                <span>Blackspot identification</span>
                            </li>
                            <li className="flex items-center gap-3 text-surface-700 dark:text-surface-200">
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                <span>Trend analysis over time</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-surface-900 p-8 rounded-2xl shadow-sm border border-surface-100 dark:border-surface-800"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600 dark:text-green-400">
                                <Search className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-heading font-bold text-surface-900 dark:text-white">Proactive Analysis</h2>
                        </div>
                        <p className="text-surface-600 dark:text-surface-300 mb-6 leading-relaxed">
                            Modern approaches focus on identifying risk factors and unsafe conditions <em>before</em> crashes occur.
                            This involves monitoring Safety Performance Indicators (SPIs).
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-surface-700 dark:text-surface-200">
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                <span>Speed compliance surveys</span>
                            </li>
                            <li className="flex items-center gap-3 text-surface-700 dark:text-surface-200">
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                <span>Seatbelt & helmet wearing rates</span>
                            </li>
                            <li className="flex items-center gap-3 text-surface-700 dark:text-surface-200">
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                <span>Road infrastructure safety ratings (iRAP)</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* The Data Pyramid */}
                <div className="bg-surface-900 text-white rounded-3xl overflow-hidden shadow-2xl relative">
                    <div className="absolute inset-0 bg-brand-900/20"></div>
                    <div className="relative z-10 p-12 md:p-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">The Data Pyramid</h2>
                        <p className="text-surface-300 max-w-2xl mx-auto mb-12 text-lg">
                            Fatalities are just the tip of the iceberg. For every death, there are dozens of hospitalizations, hundreds of minor injuries, and thousands of unsafe events.
                        </p>

                        <div className="max-w-3xl mx-auto flex flex-col items-center gap-2">
                            <div className="w-32 py-3 bg-red-600 rounded-t-lg shadow-lg text-sm font-bold animate-pulse">Fatalities</div>
                            <div className="w-56 py-3 bg-orange-500 shadow-lg text-sm font-bold">Serious Injuries</div>
                            <div className="w-80 py-3 bg-yellow-500 shadow-lg text-sm font-bold text-surface-900">Minor Injuries</div>
                            <div className="w-full max-w-md py-3 bg-blue-500 shadow-lg text-sm font-bold">Damage Only Crashes</div>
                            <div className="w-full max-w-xl py-3 bg-green-500 rounded-b-lg shadow-lg text-sm font-bold">Unsafe Behaviors / Near Misses</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataAnalysis;
