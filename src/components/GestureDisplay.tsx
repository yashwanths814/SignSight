import React from 'react';
import { Hand, Activity, Zap } from 'lucide-react';

interface GestureDisplayProps {
  gesture: string;
  confidence: number;
  theme: 'light' | 'dark';
}

export default function GestureDisplay({ gesture, confidence, theme }: GestureDisplayProps) {
  const getGestureIcon = (gestureType: string) => {
    switch (gestureType) {
      case 'open_palm':
        return <Hand className="w-8 h-8" />;
      case 'fist':
        return <Zap className="w-8 h-8" />;
      case 'thumbs_up':
        return <Activity className="w-8 h-8" />;
      default:
        return <Hand className="w-8 h-8" />;
    }
  };

  const getGestureColor = (gestureType: string) => {
    switch (gestureType) {
      case 'open_palm':
        return theme === 'dark' ? 'text-blue-400' : 'text-blue-600';
      case 'fist':
        return theme === 'dark' ? 'text-red-400' : 'text-red-600';
      case 'thumbs_up':
        return theme === 'dark' ? 'text-green-400' : 'text-green-600';
      case 'swipe_left':
        return theme === 'dark' ? 'text-purple-400' : 'text-purple-600';
      case 'swipe_right':
        return theme === 'dark' ? 'text-pink-400' : 'text-pink-600';
      default:
        return theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
    }
  };

  const formatGestureName = (gestureType: string) => {
    return gestureType.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className={`rounded-3xl backdrop-blur-sm border transition-all duration-500 ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10' 
        : 'bg-white/20 border-white/30'
    }`}>
      <div className={`p-6 border-b ${
        theme === 'dark' ? 'border-white/10' : 'border-white/20'
      }`}>
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-xl ${
            theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-500/20'
          }`}>
            <Activity className={`w-5 h-5 ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`} />
          </div>
          <div>
            <h3 className={`font-semibold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Gesture Detection
            </h3>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Real-time hand tracking
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="text-center space-y-6">
          {/* Gesture Icon */}
          <div className={`mx-auto w-24 h-24 rounded-full border-2 border-dashed flex items-center justify-center transition-all duration-300 ${
            gesture !== 'none' 
              ? `${getGestureColor(gesture)} border-current scale-110` 
              : theme === 'dark' 
                ? 'text-gray-500 border-gray-500' 
                : 'text-gray-400 border-gray-400'
          }`}>
            {getGestureIcon(gesture)}
          </div>

          {/* Gesture Name */}
          <div>
            <h4 className={`text-2xl font-bold mb-2 transition-all duration-300 ${
              gesture !== 'none' 
                ? getGestureColor(gesture)
                : theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {gesture !== 'none' ? formatGestureName(gesture) : 'No Gesture'}
            </h4>
            
            {/* Confidence Bar */}
            {gesture !== 'none' && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Confidence
                  </span>
                  <span className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {Math.round(confidence * 100)}%
                  </span>
                </div>
                <div className={`w-full h-2 rounded-full overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${
                      theme === 'dark' ? 'bg-gradient-to-r from-cyan-500 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'
                    }`}
                    style={{ width: `${confidence * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Status Message */}
          <p className={`text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {gesture !== 'none' 
              ? 'Gesture detected! Check action panel for controls.' 
              : 'Show your hand to the camera to begin.'
            }
          </p>
        </div>
      </div>
    </div>
  );
}