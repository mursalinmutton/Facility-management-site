import { motion } from 'framer-motion';
import { HelpCircle, Book, MessageCircle, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SupportPage = () => {
  const resources = [
    {
      title: 'Documentation',
      description: 'Detailed guides and API references',
      icon: Book,
      link: '#',
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      link: '#',
    },
    {
      title: 'FAQs',
      description: 'Common questions and answers',
      icon: HelpCircle,
      link: '#',
    },
    {
      title: 'Live Chat',
      description: '24/7 support team',
      icon: MessageCircle,
      link: '#',
    },
  ];

  const faqs = [
    {
      question: 'How do I get started?',
      answer: 'Sign up for a free trial, and our team will guide you through the setup process. We offer personalized onboarding sessions to ensure you get the most out of our platform.',
    },
    {
      question: 'Can I import data from another system?',
      answer: 'Yes, we support data import from most major facility management systems. Our team can help you migrate your existing data seamlessly.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide 24/7 support through live chat, email, and phone. Enterprise customers get dedicated support representatives.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use industry-standard encryption and security measures to protect your data. We are SOC 2 Type II certified and GDPR compliant.',
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
            <h1 className="text-4xl font-extrabold text-gray-900">Support Center</h1>
            <p className="mt-4 text-xl text-gray-500">
              We're here to help you succeed
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <resource.icon className="h-8 w-8 text-blue-600" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-gray-500">{resource.description}</p>
                <Link
                  to={resource.link}
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-500"
                >
                  Learn more
                  <svg
                    className="ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="mt-8 first:mt-0"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-gray-500">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};