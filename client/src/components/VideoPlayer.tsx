import { useEffect, useRef, useState } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  onVideoComplete: () => void;
  disabled?: boolean;
}

export default function VideoPlayer({ videoUrl, onVideoComplete, disabled = false }: VideoPlayerProps) {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    const match = url.match(/(?:embed\/|v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : '';
  };

  const videoId = getVideoId(videoUrl);
  
  // Simulate video progress for demo purposes
  // In a real implementation, you would use YouTube Player API
  useEffect(() => {
    if (!isPlaying || disabled) return;

    const interval = setInterval(() => {
      setCurrentTime(prev => {
        const newTime = prev + 1;
        const newProgress = duration > 0 ? (newTime / duration) * 100 : 0;
        setProgress(newProgress);
        
        if (newProgress >= 100) {
          setIsPlaying(false);
          onVideoComplete();
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, duration, disabled, onVideoComplete]);

  // Set demo duration when component mounts
  useEffect(() => {
    setDuration(932); // 15:32 in seconds
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlay = () => {
    if (!disabled) {
      setIsPlaying(true);
    }
  };

  const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&disablekb=1&modestbranding=1&rel=0`;

  return (
    <div className="relative bg-black rounded-lg overflow-hidden aspect-video mb-4">
      {!isPlaying ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="text-center text-white">
            <button 
              onClick={handlePlay}
              disabled={disabled}
              className={`text-6xl mb-4 opacity-70 transition-opacity ${
                disabled ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-100 cursor-pointer'
              }`}
            >
              <i className="fas fa-play-circle"></i>
            </button>
            <p className="text-lg">Training Video</p>
            <p className="text-sm opacity-70">Duration: {formatTime(duration)}</p>
          </div>
        </div>
      ) : (
        <iframe
          ref={iframeRef}
          src={embedUrl}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-3">
        <div className="w-full bg-gray-600 rounded-full h-1">
          <div 
            className="bg-steampro-blue h-1 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-white mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
