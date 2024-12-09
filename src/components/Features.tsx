import { motion } from 'framer-motion';
import { BarChart3, Building2, ClipboardCheck, Users2 } from 'lucide-react';

const features = [
  {
    name: 'Asset Management',
    description: 'Track and manage all your facility assets in one place with detailed maintenance histories.',
    icon: Building2,
  },
  {
    name: 'Work Order Management',
    description: 'Streamline maintenance requests and work orders with automated workflows.',
    icon: ClipboardCheck,
  },
  {
    name: 'Analytics & Reporting',
    description: 'Make data-driven decisions with comprehensive analytics and custom reports.',
    icon: BarChart3,
  },
  {
    name: 'Team Collaboration',
    description: 'Improve communication and coordination across your maintenance teams.',
    icon: Users2,
  },
];

export const Features = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage your facility
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Comprehensive tools and features designed specifically for facility management professionals.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </div>
                <div className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};