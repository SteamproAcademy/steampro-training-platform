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
  
  const handleStartVideo = () => {
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

  if (disabled && isVideoCompleted) {
    return (
      <div className="relative bg-green-100 border-2 border-green-300 rounded-lg overflow-hidden aspect-video mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-green-700">
            <i className="fas fa-check-circle text-6xl mb-4"></i>
            <p className="text-lg font-semibold">Video Completed!</p>
            <p className="text-sm">You can now proceed to the next section</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-black rounded-lg overflow-hidden aspect-video mb-4">
      {!showVideo ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
          <div className="text-center text-white">
            <button 
              onClick={handleStartVideo}
              disabled={disabled}
              className={`text-6xl mb-4 transition-all transform ${
                disabled 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'opacity-80 hover:opacity-100 hover:scale-110 cursor-pointer text-red-500'
              }`}
            >
              <i className="fas fa-play-circle"></i>
            </button>
            <p className="text-lg font-semibold">Training Video</p>
            <p className="text-sm opacity-70">Click to start watching</p>
            {disabled && <p className="text-sm text-yellow-300 mt-2">Video already completed</p>}
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
          {!isVideoCompleted && (
            <div className="absolute bottom-4 left-4 right-4">
              <button
                onClick={handleVideoComplete}
                className="w-full bg-steampro-blue text-white py-2 px-4 rounded-lg hover:bg-steampro-blue/90 transition-all"
              >
                Mark as Watched & Continue
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
