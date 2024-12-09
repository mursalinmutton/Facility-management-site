import { motion } from 'framer-motion';
import { LeadForm } from '../components/LeadForm';
import { MapPin, Phone, Mail } from 'lucide-react';

export const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit us',
      details: ['123 Business Street', 'Suite 100', 'San Francisco, CA 94111'],
    },
    {
      icon: Phone,
      title: 'Call us',
      details: ['+1 (555) 123-4567', 'Mon-Fri 9am-6pm PST'],
    },
    {
      icon: Mail,
      title: 'Email us',
      details: ['support@myfacilityplan.com', 'sales@myfacilityplan.com'],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
            <p className="mt-4 text-xl text-gray-500">
              We'd love to hear from you
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8 text-center"
              >
                <item.icon className="h-8 w-8 text-blue-600 mx-auto" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <div className="mt-2 text-gray-500">
                  {item.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <LeadForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
};