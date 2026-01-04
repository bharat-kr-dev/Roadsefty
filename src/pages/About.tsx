

const About = () => {
    return (
        <div className="py-20 bg-surface-50 dark:bg-surface-950 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4">
                        Our Mission
                    </span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-surface-900 dark:text-white mb-6">
                        About Road Safety Insights
                    </h1>
                    <p className="text-xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto leading-relaxed">
                        We are a global initiative dedicated to reducing road trauma through data, education, and advocacy.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-white dark:bg-surface-900 p-8 rounded-2xl shadow-sm border border-surface-100 dark:border-surface-800">
                        <h2 className="text-2xl font-heading font-bold text-surface-900 dark:text-white mb-4">Our Vision</h2>
                        <p className="text-surface-600 dark:text-surface-300 leading-relaxed mb-6">
                            A world free of road traffic fatalities and serious injuries. We believe that mobility should not come at the cost of human life.
                        </p>
                        <div className="h-1 w-20 bg-brand-500 rounded-full"></div>
                    </div>
                    <div className="bg-white dark:bg-surface-900 p-8 rounded-2xl shadow-sm border border-surface-100 dark:border-surface-800">
                        <h2 className="text-2xl font-heading font-bold text-surface-900 dark:text-white mb-4">Our Approach</h2>
                        <p className="text-surface-600 dark:text-surface-300 leading-relaxed mb-6">
                            We translate complex data into actionable insights. By empowering policymakers, engineers, and the public with knowledge, we drive evidence-based change.
                        </p>
                        <div className="h-1 w-20 bg-accent-500 rounded-full"></div>
                    </div>
                </div>

                {/* Team Section */}
                <h2 className="text-3xl font-heading font-bold text-surface-900 dark:text-white mb-12 text-center">Meet the Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { name: "Dr. Sarah Chen", role: "Lead Researcher", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200" },
                        { name: "James Wilson", role: "Policy Analyst", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" },
                        { name: "Maria Garcia", role: "Data Scientist", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200" },
                        { name: "David Kim", role: "Urban Planner", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200" },
                    ].map((member, index) => (
                        <div key={index} className="text-center group">
                            <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white dark:border-surface-800 shadow-lg">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-lg font-heading font-bold text-surface-900 dark:text-white">{member.name}</h3>
                            <p className="text-brand-600 dark:text-brand-400 font-medium">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
