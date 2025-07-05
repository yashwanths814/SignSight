import React from 'react';
import { X, Hand, Volume2, Monitor, ArrowLeft, ArrowRight, ThumbsUp } from 'lucide-react';

interface InstructionsPanelProps {
  onClose: () => void;
  theme: 'light' | 'dark';
}

export default function InstructionsPanel({ onClose, theme }: InstructionsPanelProps) {
  const instructions = [
    {
      gesture: 'Open Palm',
      icon: Hand,
      action: 'Volume Up',
      description: 'Show your open palm to the camera',
      color: 'blue'
    },
    {
      gesture: 'Closed Fist',
      icon: Hand,
      action: 'Volume Down',
      description: 'Make a fist with your hand',
      color: 'red'
    },
    {
      gesture: 'Thumbs Up',
      icon: ThumbsUp,
      action: 'Brightness Up',
      description: 'Give a thumbs up gesture',
      color: 'green'
    },
    {
      gesture: 'Swipe Left',
      icon: ArrowLeft,
      action: 'Previous Tab',
      description: 'Move your hand from right to left',
      color: 'purple'
    },
    {
      gesture: 'Swipe Right',
      icon: ArrowRight,
      action: 'Next Tab',
      description: 'Move your hand from left to right',
      color: 'pink'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl backdrop-blur-sm border ${
        theme === 'dark' 
          ? 'bg-gray-900/90 border-white/20' 
          : 'bg-white/90 border-white/30'
      }`}>
        {/* Header */}
        <div className={`flex items-center justify-between p-6 border-b ${
          theme === 'dark' ? 'border-white/10' : 'border-white/20'
        }`}>
          <div>
            <h2 className={`text-2xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              How to Use Gesture Control
            </h2>
            <p className={`text-sm mt-1 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Learn the available hand gestures and their actions
            </p>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-xl transition-all duration-300 hover:scale-105 ${
              theme === 'dark' 
                ? 'bg-white/10 hover:bg-white/20 text-white' 
                : 'bg-white/20 hover:bg-white/40 text-gray-900'
            }`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Getting Started */}
          <div className="mb-8">
            <h3 className={`text-lg font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Getting Started
            </h3>
            <div className={`p-4 rounded-2xl ${
              theme === 'dark' ? 'bg-white/5' : 'bg-white/20'
            }`}>
              <ol className={`space-y-2 text-sm ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>1. Allow camera access when prompted</li>
                <li>2. Position your hand clearly in the camera view</li>
                <li>3. Perform gestures slowly and deliberately</li>
                <li>4. Wait for the system to recognize your gesture</li>
                <li>5. See the action execute automatically</li>
              </ol>
            </div>
          </div>

          {/* Gesture Guide */}
          <div className="mb-8">
            <h3 className={`text-lg font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Gesture Guide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {instructions.map((instruction, index) => {
                const Icon = instruction.icon;
                return (
                  <div
                    key={index}
                    className={`p-4 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                      theme === 'dark' 
                        ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                        : 'bg-white/20 border-white/30 hover:bg-white/30'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-xl ${
                        theme === 'dark' ? 'bg-white/10' : 'bg-white/20'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-700'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-medium mb-1 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {instruction.gesture}
                        </h4>
                        <p className={`text-sm mb-2 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {instruction.description}
                        </p>
                        <div className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium ${
                          theme === 'dark' 
                            ? 'bg-cyan-500/20 text-cyan-400' 
                            : 'bg-blue-500/20 text-blue-600'
                        }`}>
                          → {instruction.action}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tips */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Tips for Best Results
            </h3>
            <div className={`p-4 rounded-2xl ${
              theme === 'dark' ? 'bg-white/5' : 'bg-white/20'
            }`}>
              <ul className={`space-y-2 text-sm ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>• Ensure good lighting for better hand detection</li>
                <li>• Keep your hand within the camera frame</li>
                <li>• Make gestures clearly and hold them briefly</li>
                <li>• Avoid quick or jerky movements</li>
                <li>• Keep background simple and uncluttered</li>
                <li>• Allow camera permissions for full functionality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}