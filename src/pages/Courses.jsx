import React, { useState, useEffect } from 'react';
import { BookOpen, PlayCircle } from 'lucide-react';
import YouTube from 'react-youtube';
import axios from 'axios';

const modules = [
  {
    title: 'Business ',
    playlistUrl: 'https://youtube.com/playlist?list=PL18rl3KEg0oIdg5pB2aX6KFaBjtN3V3OA&si=JHmgU-MFlLnYZtMh',
    thumbnail: 'src/assests/Business Planning and Strategy.jpg',
  },
  {
    title: 'Financial Literacy & Management',
    playlistUrl: 'https://youtube.com/playlist?list=PLIS94dmuRf9MaTTKwkE979KrhZhZEq6mY',
    thumbnail: 'src/assests/Financial.jpg',
  },
  {
    title: 'Digital Marketing & Outreach',
    playlistUrl: 'https://youtube.com/playlist?list=PLEiEAq2VkUULa5aOQmO_al2VVmhC-eqeI',
    thumbnail: 'src/assests/Digital marketing.jpg',
  },
  {
    title: 'E-commerce Essentials',
    playlistUrl: 'https://youtube.com/watch?v=ay6RKzh3QSg',
    thumbnail: 'src/assests/E_commerce.jpg',
  },
  {
    title: 'Effective Communication Skills',
    playlistUrl: 'https://youtube.com/playlist?list=PLm_MSClsnwm-AIEbpyIxoTT8t7UzkHSYC',
    thumbnail: 'src/assests/Effective Communication.jpg',
  },
  {
    title: 'Leadership & Team Management',
    playlistUrl: 'https://youtube.com/playlist?list=PL26pr4T7OzVMIqLz61IxO1CAAjzSY1-mS',
    thumbnail: 'src/assests/Leadership and Team Management.jpg',
  },
];

const API_KEY = 'AIzaSyB-l_D92ECCObDby9zbnKVpu7Mqjqaj_GY';

const customTitles = {
  '': 'Introduction to Business Planning',
};

const extractPlaylistId = (url) => {
  const match = url.match(/[?&]list=([^&]+)/);
  return match ? match[1] : null;
};

const Courses = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async (playlistUrl) => {
      const playlistId = extractPlaylistId(playlistUrl);
      if (!playlistId) return;

      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems`,
          {
            params: {
              part: 'snippet',
              maxResults: 50,
              playlistId: playlistId,
              key: API_KEY,
            },
          }
        );

        const fetchedVideos = response.data.items.map((video) => {
          const videoId = video.snippet.resourceId.videoId;
          return {
            ...video,
            snippet: {
              ...video.snippet,
              title: customTitles[videoId] || video.snippet.title,
            },
          };
        });

        setVideos(fetchedVideos);
        if (fetchedVideos.length > 0) {
          setCurrentVideo(fetchedVideos[0].snippet.resourceId.videoId);
        }
      } catch (error) {
        console.error('Error fetching playlist videos:', error);
      }
    };

    if (selectedModule) {
      fetchVideos(selectedModule.playlistUrl);
    }
  }, [selectedModule]);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
        <BookOpen size={32} className="text-indigo-600 dark:text-indigo-400" />
        Explore Courses

      </h2>

      {!selectedModule ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md cursor-pointer flex flex-col justify-between"
              onClick={() => setSelectedModule(module)}
            >
              {/* thumbnail property */}
              <img
                src={module.thumbnail}
                alt={module.title}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{module.title}</h3>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition mt-auto">
                Watch
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          <button
            onClick={() => setSelectedModule(null)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Back to Courses

          </button>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{selectedModule.title}</h3>
          {/* Video Player */}
          {currentVideo && (
            <div className="w-max aspect-video">
              <YouTube videoId={currentVideo} className="w-full h-full" />
            </div>
          )}

          <div className="flex flex-col gap-4 mt-6">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => setCurrentVideo(video.snippet.resourceId.videoId)}
                className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition ${
                  currentVideo === video.snippet.resourceId.videoId
                    ? 'bg-red-200 dark:bg-red-800 border-2 border-red-500'
                    : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <img
                  src={video.snippet.thumbnails?.default?.url}
                  alt={video.snippet.title}
                  className="w-20 h-12 rounded-md"
                />
                <PlayCircle
                  className={
                    currentVideo === video.snippet.resourceId.videoId
                      ? 'text-red-600 dark:text-red-400'
                      : 'text-indigo-600 dark:text-indigo-400'
                  }
                />
                <p className="text-gray-900 dark:text-white">{video.snippet.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;