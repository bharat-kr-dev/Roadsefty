

const About = () => {
    return (
        <div className="py-12 md:py-20 bg-surface-50 dark:bg-surface-950 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4">
                        Our Mission
                    </span>
                    <h1 className="text-3xl md:text-5xl font-heading font-bold text-surface-900 dark:text-white mb-6">
                        About Road Safety Insights
                    </h1>
                    <p className="text-lg md:text-xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto leading-relaxed">
                        We are a global initiative dedicated to reducing road trauma through data, education, and advocacy.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
                    <div className="bg-white dark:bg-surface-900 p-6 md:p-8 rounded-2xl shadow-sm border border-surface-100 dark:border-surface-800">
                        <h2 className="text-2xl font-heading font-bold text-surface-900 dark:text-white mb-4">Our Vision</h2>
                        <p className="text-surface-600 dark:text-surface-300 leading-relaxed mb-6">
                            A world free of road traffic fatalities and serious injuries. We believe that mobility should not come at the cost of human life.
                        </p>
                        <div className="h-1 w-20 bg-brand-500 rounded-full"></div>
                    </div>
                    <div className="bg-white dark:bg-surface-900 p-6 md:p-8 rounded-2xl shadow-sm border border-surface-100 dark:border-surface-800">
                        <h2 className="text-2xl font-heading font-bold text-surface-900 dark:text-white mb-4">Our Approach</h2>
                        <p className="text-surface-600 dark:text-surface-300 leading-relaxed mb-6">
                            We translate complex data into actionable insights. By empowering policymakers, engineers, and the public with knowledge, we drive evidence-based change.
                        </p>
                        <div className="h-1 w-20 bg-accent-500 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
