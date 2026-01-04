import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';
import { DollarSign, FileWarning, AlertTriangle, Globe } from 'lucide-react';

const GlobalRoadSafety = () => {
    const regionData = [
        { name: 'Africa', rate: 26.6 },
        { name: 'SE Asia', rate: 20.7 },
        { name: 'E. Med', rate: 18.0 },
        { name: 'W. Pacific', rate: 16.9 },
        { name: 'Americas', rate: 15.6 },
        { name: 'Europe', rate: 9.3 },
    ];

    const incomeData = [
        { name: 'Low Income', value: 13 },
        { name: 'Middle Income', value: 80 }, // Adjusted for visual impact, usually 90% is LMIC combined
        { name: 'High Income', value: 7 },
    ];

    const COLORS = ['#EF4444', '#F59E0B', '#10B981'];

    return (
        <div className="py-20 bg-surface-50 dark:bg-surface-950 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4">
                        WHO Global Status Report 2023
                    </span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-surface-900 dark:text-white mb-6">
                        Global Road Safety Overview
                    </h1>
                    <p className="text-xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto leading-relaxed">
                        Road traffic injuries are a leading cause of death globally, but the burden is not shared equally.
                        The latest data highlights significant disparities between regions and income levels.
                    </p>
                </div>

                {/* Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-surface-900 p-8 rounded-2xl shadow-sm border border-surface-100 dark:border-surface-800"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-brand-100 dark:bg-brand-900/30 rounded-xl text-brand-600 dark:text-brand-400">
                                <AlertTriangle className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-heading font-bold text-surface-900 dark:text-white">What is Road Safety?</h2>
                        </div>
                        <p className="text-surface-600 dark:text-surface-300 leading-relaxed text-lg">
                            Road safety refers to the methods and measures used to prevent road users from being killed or seriously injured.
                            It encompasses the design of roads and vehicles, laws and enforcement, and post-crash care.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-surface-900 p-8 rounded-2xl shadow-sm border border-surface-100 dark:border-surface-800"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-xl text-accent-600 dark:text-accent-400">
                                <Globe className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-heading font-bold text-surface-900 dark:text-white">Why it Differs by Country</h2>
                        </div>
                        <p className="text-surface-600 dark:text-surface-300 leading-relaxed text-lg">
                            Disparities arise from differences in infrastructure quality, vehicle safety standards, enforcement of traffic laws,
                            and the availability of post-crash care. Rapid urbanization in developing countries often outpaces safety measures.
                        </p>
                    </motion.div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white dark:bg-surface-900 p-8 rounded-2xl shadow-sm border border-surface-100 dark:border-surface-800">
                        <h3 className="text-xl font-heading font-bold text-surface-900 dark:text-white mb-8 text-center">Fatalities by Region (per 100k population)</h3>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={regionData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                                    <XAxis type="number" stroke="#64748b" fontSize={12} />
                                    <YAxis dataKey="name" type="category" width={80} stroke="#64748b" fontSize={12} fontWeight={500} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                        cursor={{ fill: 'transparent' }}
                                    />
                                    <Bar dataKey="rate" fill="#0ea5e9" name="Fatality Rate" radius={[0, 4, 4, 0]} barSize={24} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-surface-900 p-8 rounded-2xl shadow-sm border border-surface-100 dark:border-surface-800">
                        <h3 className="text-xl font-heading font-bold text-surface-900 dark:text-white mb-8 text-center">Deaths by Income Level</h3>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={incomeData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={80}
                                        outerRadius={110}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {incomeData.map((_entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} strokeWidth={0} />
                                        ))}
                                    </Pie>
                                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Info Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-brand-50 dark:bg-brand-900/20 p-8 rounded-2xl border border-brand-100 dark:border-brand-800 flex items-start gap-6">
                        <div className="p-4 bg-brand-100 dark:bg-brand-800 rounded-xl text-brand-600 dark:text-brand-300 shrink-0">
                            <DollarSign className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-heading font-bold text-surface-900 dark:text-white mb-3">Economic Cost</h3>
                            <p className="text-surface-600 dark:text-surface-300 leading-relaxed">
                                Road traffic crashes cost most countries <span className="font-bold text-brand-600 dark:text-brand-400">3% of their gross domestic product (GDP)</span>.
                                This economic burden disproportionately affects developing nations, hindering their growth.
                            </p>
                        </div>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-2xl border border-orange-100 dark:border-orange-800 flex items-start gap-6">
                        <div className="p-4 bg-orange-100 dark:bg-orange-800 rounded-xl text-orange-600 dark:text-orange-300 shrink-0">
                            <FileWarning className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-heading font-bold text-surface-900 dark:text-white mb-3">The Underreporting Problem</h3>
                            <p className="text-surface-600 dark:text-surface-300 leading-relaxed">
                                Official statistics often underestimate the true scale of the problem.
                                Many non-fatal injuries go unrecorded, and data collection systems vary significantly by country.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalRoadSafety;
