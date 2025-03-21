import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Award, Clock } from 'lucide-react';

const Dashboard = () => {
  const courses = [
    {
      id: 1,
      title: "Business Planning Fundamentals",
      progress: 60,
      nextLesson: "Creating a Business Model Canvas",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Financial Management Basics",
      progress: 30,
      nextLesson: "Understanding Cash Flow",
      thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Digital Marketing Essentials",
      progress: 15,
      nextLesson: "Social Media Strategy",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Continue your learning journey</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
          <StatCard
            icon={<BookOpen className="h-6 w-6 text-purple-500" />}
            title="Courses Enrolled"
            value="3"
          />
          <StatCard
            icon={<TrendingUp className="h-6 w-6 text-green-500" />}
            title="Average Progress"
            value="50%"
          />

          <StatCard
            icon={<Clock className="h-6 w-6 text-orange-500" />}
            title="Learning Hours"
            value="24"
          />
        </div>

        {/* Current Courses */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </section>

        {/* Recommended Courses */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RecommendedCourseCard
              title="E-commerce Fundamentals"
              description="Learn how to set up and manage your online store"
              thumbnail=""
            />
            <RecommendedCourseCard
              title="Soft Skills"
              description="Improve your communication and leadership skills"
              thumbnail=""
            />
            <RecommendedCourseCard
              title="Financial Planning"
              description="Understand the basics of financial planning"
              thumbnail=""
            />
          </div>
        </section>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
    <div className="flex items-center">
      {icon}
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  </div>
);

const CourseCard = ({ title, progress, nextLesson, thumbnail }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
    <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600 dark:text-gray-300">Progress</span>
          <span className="text-gray-900 dark:text-white font-medium">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-purple-600 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Next: {nextLesson}
      </p>
      <Link
        to={`/course/${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="btn-primary w-full text-center"
      >
        Continue Learning
      </Link>
    </div>
  </div>
);

const RecommendedCourseCard = ({ title, description, thumbnail }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
    <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <button className="btn-secondary w-full">Enroll Now</button>
    </div>
  </div>
);

export default Dashboard;