import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PricingPage = () => {
  const tiers = [
    {
      name: 'Starter',
      price: 49,
      description: 'Perfect for small facilities',
      features: [
        'Up to 100 assets',
        'Basic work order management',
        'Mobile app access',
        'Email support',
        '5 team members',
      ],
    },
    {
      name: 'Professional',
      price: 99,
      description: 'For growing organizations',
      features: [
        'Up to 1000 assets',
        'Advanced work order management',
        'Preventive maintenance',
        'Analytics dashboard',
        'Priority support',
        'Unlimited team members',
      ],
      mostPopular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited assets',
        'Custom workflows',
        'Advanced analytics',
        'API access',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee',
      ],
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Simple, transparent pricing
            </h1>
            <p className="mt-5 text-xl text-gray-500">
              Choose the plan that's right for your facility
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  tier.mostPopular ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                <div className="p-8">
                  {tier.mostPopular && (
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                  <p className="mt-4 text-gray-500">{tier.description}</p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-900">
                      {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                    </span>
                    {typeof tier.price === 'number' && (
                      <span className="text-base font-medium text-gray-500">
                        /month
                      </span>
                    )}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-blue-600" />
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md ${
                        tier.mostPopular
                          ? 'text-white bg-blue-600 hover:bg-blue-700'
                          : 'text-blue-600 bg-blue-100 hover:bg-blue-200'
                      }`}
                    >
                      {tier.price === 'Custom' ? 'Contact Sales' : 'Get started'}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};