import React from 'react';
import { useParams } from 'react-router-dom';
import { Play, BookOpen, Clock, Award, CheckCircle } from 'lucide-react';
import YouTube from 'react-youtube';

const CoursePage = () => {
  const { id } = useParams();

  // Mock course data - in a real app, this would come from an API
  const course = {
    title: "Business Planning Fundamentals",
    description: "Learn how to create an effective business plan and set your venture up for success.",
    instructor: "Saketh",
    duration: "4 hours",
    modules: [
      {
        id: 1,
        title: "Introduction to Business Planning",
        completed: true,
        videoId: "Q", // Example YouTube video ID
        duration: "45 minutes"
      },
      {
        id: 2,
        title: "Market Research Fundamentals",
        completed: true,
        videoId: "dQw4w9WgXcQ",
        duration: "1 hour"
      },
      {
        id: 3,
        title: "Creating a Business Model Canvas",
        completed: false,
        videoId: "dQw4w9WgXcQ",
        duration: "1.5 hours"
      },
      {
        id: 4,
        title: "Financial Projections",
        completed: false,
        videoId: "dQw4w9WgXcQ",
        duration: "2 hours"
      }
    ]
  };

  const [activeModule, setActiveModule] = React.useState(course.modules[0]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{course.title}</h1>
          <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              <span>{course.modules.length} Modules</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              <span>Certificate Available</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="bg-black rounded-lg overflow-hidden mb-6">
              <YouTube
                videoId={activeModule.videoId}
                opts={{
                  width: '100%',
                  height: '480',
                  playerVars: {
                    autoplay: 0,
                  },
                }}
              />
            </div>

            {/* Module Information */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {activeModule.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {course.description}
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src=""
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Instructor
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {course.instructor}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Modules Sidebar */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 h-fit">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Course Modules
            </h3>
            <div className="space-y-4">
              {course.modules.map((module) => (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module)}
                  className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${
                    activeModule.id === module.id
                      ? 'bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-500'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {module.title}
                    </h4>
                    {module.completed && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Play className="w-4 h-4 mr-2" />
                    <span>{module.duration}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;