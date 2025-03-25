import React from 'react';
import { BookOpen } from 'lucide-react';

const courses = [
  {
    title: 'Business Planning and Management',
    description: 'Learn how to create and manage a successful business with effective planning strategies.',
    link: 'https://youtube.com/playlist?list=PLEiEAq2VkUUIk2HnEsN-xgruMOtVgJK5g&si=Cj_6uAPsLLpBUaz0',
  },
  {
    title: 'Financial Management',
    description: 'Master financial management skills, including budgeting, cash flow, and business finance.',
    link: 'https://youtube.com/playlist?list=PLIS94dmuRf9MaTTKwkE979KrhZhZEq6mY&si=JHe_dYxjzFixY_eT',
  },
  {
    title: 'Digital Marketing',
    description: 'Discover modern digital marketing techniques to effectively promote and grow your business online.',
    link: 'https://youtube.com/playlist?list=PLEiEAq2VkUULa5aOQmO_al2VVmhC-eqeI&si=sHsWmwokmhqE3D6k',
  },
  {
    title: 'E-commerce Essentials',
    description: 'Learn the fundamentals of setting up and running a successful online store with e-commerce strategies.',
    link: 'https://youtu.be/ay6RKzh3QSg?si=NYEq9R0Usud5xcCJ',
  },
  {
    title: 'Communication Skills',
    description: 'Enhance your communication skills, including public speaking, writing, and interpersonal skills.',
    link: 'https://youtube.com/playlist?list=PLm_MSClsnwm-AIEbpyIxoTT8t7UzkHSYC&si=aF_ofew_jlZwyedt',
  },
  {
    title: 'Leadership & Management',
    description: 'Develop leadership and management abilities to guide your team and make strategic decisions.',
    link: 'https://youtube.com/playlist?list=PL26pr4T7OzVMIqLz61IxO1CAAjzSY1-mS&si=dKhxlCmwepUjPuA-',
  },
];

const Courses = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
        <BookOpen size={32} className="text-indigo-600 dark:text-indigo-400" />
        Explore Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{course.title}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{course.description}</p>
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Watch Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
