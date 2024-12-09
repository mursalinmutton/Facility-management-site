import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CTASection = () => {
  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-700 rounded-lg shadow-xl overflow-hidden"
        >
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to streamline your</span>
                <span className="block">facility management?</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-blue-200">
                Start your 30-day free trial today. No credit card required.
              </p>
              <Link
                to="/demo"
                className="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-blue-600 hover:bg-blue-50"
              >
                Get started
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};