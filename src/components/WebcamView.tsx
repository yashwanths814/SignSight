import React, { useRef, useEffect, useState } from 'react';
import { Camera, CameraOff, AlertCircle } from 'lucide-react';

interface WebcamViewProps {
  theme: 'light' | 'dark';
}

export default function WebcamView({ theme }: WebcamViewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setIsStreaming(true);
        setPermissionGranted(true);
        setError(null);
      }
    } catch (err) {
      setError('Camera access denied. Please allow camera permissions.');
      setIsStreaming(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
    }
    setIsStreaming(false);
  };

  const toggleCamera = () => {
    if (isStreaming) {
      stopCamera();
    } else {
      startCamera();
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-3xl backdrop-blur-sm border transition-all duration-500 ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-white/20 border-white/30'
    }`}>
      {/* Header */}
      <div className={`flex items-center justify-between p-4 border-b ${
        theme === 'dark' ? 'border-white/10' : 'border-white/20'
      }`}>
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-xl ${
            theme === 'dark' ? 'bg-cyan-500/20' : 'bg-blue-500/20'
          }`}>
            <Camera className={`w-5 h-5 ${
              theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
            }`} />
          </div>
          <div>
            <h3 className={`font-semibold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Camera Feed
            </h3>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {isStreaming ? 'Live' : 'Disconnected'}
            </p>
          </div>
        </div>
        
        <button
          onClick={toggleCamera}
          className={`p-2 rounded-xl transition-all duration-300 hover:scale-105 ${
            theme === 'dark' 
              ? 'bg-white/10 hover:bg-white/20 text-white' 
              : 'bg-white/20 hover:bg-white/40 text-gray-900'
          }`}
        >
          {isStreaming ? <CameraOff className="w-5 h-5" /> : <Camera className="w-5 h-5" />}
        </button>
      </div>

      {/* Video Content */}
      <div className="relative aspect-video">
        {error ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-8">
              <AlertCircle className={`w-16 h-16 mx-auto mb-4 ${
                theme === 'dark' ? 'text-red-400' : 'text-red-500'
              }`} />
              <p className={`text-lg font-medium mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Camera Access Required
              </p>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {error}
              </p>
              <button
                onClick={startCamera}
                className={`mt-4 px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                Try Again
              </button>
            </div>
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              playsInline
              muted
            />
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none"
            />
            
            {/* Status Indicator */}
            <div className="absolute top-4 right-4">
              <div className={`flex items-center space-x-2 px-3 py-1 rounded-full backdrop-blur-sm ${
                isStreaming 
                  ? theme === 'dark' 
                    ? 'bg-green-500/20 border border-green-500/30' 
                    : 'bg-green-500/20 border border-green-500/30'
                  : theme === 'dark' 
                    ? 'bg-red-500/20 border border-red-500/30' 
                    : 'bg-red-500/20 border border-red-500/30'
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  isStreaming ? 'bg-green-400' : 'bg-red-400'
                } ${isStreaming ? 'animate-pulse' : ''}`}></div>
                <span className={`text-xs font-medium ${
                  isStreaming 
                    ? 'text-green-400' 
                    : 'text-red-400'
                }`}>
                  {isStreaming ? 'LIVE' : 'OFFLINE'}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}