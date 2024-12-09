import { motion } from 'framer-motion';
import { Users, Award, Clock, Building } from 'lucide-react';

export const AboutPage = () => {
  const stats = [
    { name: 'Clients Worldwide', value: '500+', icon: Users },
    { name: 'Years Experience', value: '15+', icon: Clock },
    { name: 'Facilities Managed', value: '2000+', icon: Building },
    { name: 'Industry Awards', value: '25+', icon: Award },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              About My Facility Plan
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Leading the way in modern facility management solutions
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white overflow-hidden"
                >
                  <div className="px-4 py-5 sm:p-6 text-center">
                    <stat.icon className="h-12 w-12 text-blue-600 mx-auto" />
                    <p className="mt-4 text-5xl font-extrabold text-blue-600">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
                <p className="mt-4 text-lg text-gray-500">
                  To revolutionize facility management through innovative technology solutions that empower organizations to make data-driven decisions, optimize operations, and create sustainable, efficient workspaces.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Our Vision</h2>
                <p className="mt-4 text-lg text-gray-500">
                  To be the global leader in facility management software, setting industry standards for innovation, efficiency, and sustainability in smart building management.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};