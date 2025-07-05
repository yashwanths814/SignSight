import React, { useState, useEffect, useRef } from 'react';
import { Camera, Waves, Volume2, Monitor, MousePointer, RotateCcw, Settings, Sun, Moon, Info } from 'lucide-react';
import WebcamView from './components/WebcamView';
import GestureDisplay from './components/GestureDisplay';
import ActionPanel from './components/ActionPanel';
import InstructionsPanel from './components/InstructionsPanel';
import LoadingScreen from './components/LoadingScreen';
import { useGestureDetection } from './hooks/useGestureDetection';
import { useTheme } from './hooks/useTheme';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { currentGesture, confidence, isModelReady } = useGestureDetection();

  useEffect(() => {
    if (isModelReady) {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [isModelReady]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`min-h-screen transition-all duration-700 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-1/2 -left-1/2 w-full h-full rounded-full opacity-20 ${
          theme === 'dark' ? 'bg-gradient-to-r from-cyan-500 to-purple-500' : 'bg-gradient-to-r from-blue-300 to-purple-300'
        } blur-3xl animate-pulse`}></div>
        <div className={`absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full opacity-20 ${
          theme === 'dark' ? 'bg-gradient-to-r from-pink-500 to-cyan-500' : 'bg-gradient-to-r from-purple-300 to-pink-300'
        } blur-3xl animate-pulse`} style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-2xl backdrop-blur-sm ${
              theme === 'dark' 
                ? 'bg-white/10 border border-white/20' 
                : 'bg-white/40 border border-white/30'
            }`}>
              <Waves className={`w-8 h-8 ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}`} />
            </div>
            <div>
              <h1 className={`text-3xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Gesture Control
              </h1>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Control your computer with hand gestures
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowInstructions(!showInstructions)}
              className={`p-3 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-white/10 border border-white/20 hover:bg-white/20 text-white' 
                  : 'bg-white/40 border border-white/30 hover:bg-white/60 text-gray-900'
              }`}
            >
              <Info className="w-5 h-5" />
            </button>
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-white/10 border border-white/20 hover:bg-white/20 text-yellow-400' 
                  : 'bg-white/40 border border-white/30 hover:bg-white/60 text-gray-900'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Webcam and Gesture Display */}
            <div className="xl:col-span-2 space-y-6">
              <WebcamView theme={theme} />
              <GestureDisplay 
                gesture={currentGesture} 
                confidence={confidence} 
                theme={theme} 
              />
            </div>
            
            {/* Action Panel */}
            <div className="space-y-6">
              <ActionPanel currentGesture={currentGesture} theme={theme} />
            </div>
          </div>
        </div>
      </div>

      {/* Instructions Modal */}
      {showInstructions && (
        <InstructionsPanel 
          onClose={() => setShowInstructions(false)} 
          theme={theme} 
        />
      )}
    </div>
  );
}

export default App;