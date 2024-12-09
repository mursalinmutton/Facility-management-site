import { motion } from 'framer-motion';
import { FileText, BookOpen, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ResourcesPage = () => {
  const resources = [
    {
      title: 'Case Studies',
      description: 'Learn how our clients achieved success with My Facility Plan',
      icon: FileText,
      link: '/resources/case-studies',
      items: [
        {
          title: 'Global Tech Campus Management',
          preview: 'How a tech giant reduced operational costs by 30%',
        },
        {
          title: 'Healthcare Facility Optimization',
          preview: 'Streamlining operations across 50+ medical facilities',
        },
      ],
    },
    {
      title: 'Blog',
      description: 'Expert insights and industry trends',
      icon: BookOpen,
      link: '/resources/blog',
      items: [
        {
          title: 'The Future of Smart Buildings',
          preview: 'Emerging trends in facility management technology',
        },
        {
          title: 'Sustainable Facility Management',
          preview: 'Best practices for reducing environmental impact',
        },
      ],
    },
    {
      title: 'News',
      description: 'Latest updates and announcements',
      icon: Newspaper,
      link: '/resources/news',
      items: [
        {
          title: 'New Analytics Dashboard Release',
          preview: 'Enhanced reporting capabilities now available',
        },
        {
          title: 'Industry Recognition',
          preview: 'My Facility Plan wins Innovation Award',
        },
      ],
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
            <h1 className="text-4xl font-extrabold text-gray-900">Resources</h1>
            <p className="mt-4 text-xl text-gray-500">
              Discover insights, best practices, and success stories
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <resource.icon className="h-8 w-8 text-blue-600" />
                  <h3 className="mt-4 text-2xl font-bold text-gray-900">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-gray-500">{resource.description}</p>
                  <div className="mt-6 space-y-4">
                    {resource.items.map((item) => (
                      <div key={item.title} className="border-l-4 border-blue-600 pl-4">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm text-gray-500">{item.preview}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={resource.link}
                    className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-500"
                  >
                    View all {resource.title.toLowerCase()}
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};