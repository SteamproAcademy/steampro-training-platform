import { useEffect, useState } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  onVideoComplete: () => void;
  disabled?: boolean;
}

export default function VideoPlayer({ videoUrl, onVideoComplete, disabled = false }: VideoPlayerProps) {
  const [isVideoCompleted, setIsVideoCompleted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  
  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    const match = url.match(/(?:embed\/|v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : '';
  };

  const videoId = getVideoId(videoUrl);
  
  const handleStartVideo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Starting video...', { disabled, showVideo });
    if (!disabled) {
      setShowVideo(true);
    }
  };

  const handleVideoComplete = () => {
    setIsVideoCompleted(true);
    onVideoComplete();
  };

  // Auto-complete video after 30 seconds for demo purposes
  useEffect(() => {
    if (showVideo && !isVideoCompleted && !disabled) {
      const timer = setTimeout(() => {
        handleVideoComplete();
      }, 30000); // 30 seconds

      return () => clearTimeout(timer);
    }
  }, [showVideo, isVideoCompleted, disabled]);

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0&enablejsapi=1`;

  const handleRewatch = () => {
    setShowVideo(false);
    setIsVideoCompleted(false);
  };

  return (
    <div className="relative bg-black rounded-lg overflow-hidden aspect-video mb-4">
      {!showVideo ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
          <div className="text-center text-white">
            <button
              onClick={handleStartVideo}
              className="block w-full h-full p-8 transition-all hover:bg-gray-800 cursor-pointer"
            >
              <div className={`text-6xl mb-4 transition-all transform ${
                isVideoCompleted 
                  ? 'text-green-500' 
                  : 'text-red-500 animate-pulse hover:scale-110'
              }`}>
                {isVideoCompleted ? '✓' : '▶'}
              </div>
              <p className="text-lg font-semibold">Training Video</p>
              <p className="text-sm opacity-70">
                {isVideoCompleted ? 'Click to rewatch' : 'Click to start watching'}
              </p>
              {isVideoCompleted && (
                <div className="mt-2 text-xs text-green-400">
                  ✓ Video completed!
                </div>
              )}
            </button>
          </div>
        </div>
      ) : (
        <>
          <iframe
            src={embedUrl}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="Training Video"
          />
          {!isVideoCompleted && (
            <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
              Watch for 30 seconds to continue
            </div>
          )}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            {!isVideoCompleted && (
              <button
                onClick={handleVideoComplete}
                className="flex-1 bg-steampro-blue text-white py-2 px-4 rounded-lg hover:bg-steampro-blue/90 transition-all"
              >
                Mark as Watched & Continue
              </button>
            )}
            <button
              onClick={handleRewatch}
              className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all"
            >
              ↻ Rewatch
            </button>
          </div>
        </>
      )}
    </div>
  );
}
