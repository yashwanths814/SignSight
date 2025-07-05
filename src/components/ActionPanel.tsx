import React, { useState } from 'react';
import { Volume2, Monitor, MousePointer, RotateCcw, ArrowLeft, ArrowRight, ThumbsUp } from 'lucide-react';

interface ActionPanelProps {
  currentGesture: string;
  theme: 'light' | 'dark';
}

export default function ActionPanel({ currentGesture, theme }: ActionPanelProps) {
  const [lastAction, setLastAction] = useState<string>('');

  const gestureActions = {
    'open_palm': { 
      name: 'Volume Up', 
      icon: Volume2, 
      color: 'blue',
      description: 'Increase system volume'
    },
    'fist': { 
      name: 'Volume Down', 
      icon: Volume2, 
      color: 'red',
      description: 'Decrease system volume'
    },
    'thumbs_up': { 
      name: 'Brightness Up', 
      icon: Monitor, 
      color: 'green',
      description: 'Increase screen brightness'
    },
    'swipe_left': { 
      name: 'Previous Tab', 
      icon: ArrowLeft, 
      color: 'purple',
      description: 'Switch to previous browser tab'
    },
    'swipe_right': { 
      name: 'Next Tab', 
      icon: ArrowRight, 
      color: 'pink',
      description: 'Switch to next browser tab'
    },
  };

  const executeAction = (action: string) => {
    setLastAction(action);
    // Here you would implement the actual system controls
    // For demo purposes, we'll just show the action
    console.log(`Executing action: ${action}`);
    
    // Play audio feedback
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(action);
      utterance.rate = 1.2;
      utterance.volume = 0.3;
      window.speechSynthesis.speak(utterance);
    }
  };

  React.useEffect(() => {
    if (currentGesture !== 'none' && gestureActions[currentGesture as keyof typeof gestureActions]) {
      const action = gestureActions[currentGesture as keyof typeof gestureActions];
      executeAction(action.name);
    }
  }, [currentGesture]);

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
            theme === 'dark' ? 'bg-green-500/20' : 'bg-green-500/20'
          }`}>
            <RotateCcw className={`w-5 h-5 ${
              theme === 'dark' ? 'text-green-400' : 'text-green-600'
            }`} />
          </div>
          <div>
            <h3 className={`font-semibold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Action Control
            </h3>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              System controls via gestures
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Current Action */}
        {currentGesture !== 'none' && gestureActions[currentGesture as keyof typeof gestureActions] && (
          <div className={`p-4 rounded-2xl border-2 border-dashed transition-all duration-300 ${
            theme === 'dark' 
              ? 'bg-cyan-500/10 border-cyan-500/30' 
              : 'bg-blue-500/10 border-blue-500/30'
          }`}>
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-xl ${
                theme === 'dark' ? 'bg-cyan-500/20' : 'bg-blue-500/20'
              }`}>
                {React.createElement(gestureActions[currentGesture as keyof typeof gestureActions].icon, {
                  className: `w-5 h-5 ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}`
                })}
              </div>
              <div>
                <h4 className={`font-medium ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {gestureActions[currentGesture as keyof typeof gestureActions].name}
                </h4>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Active now
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action List */}
        <div className="space-y-3">
          <h4 className={`text-lg font-semibold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Available Actions
          </h4>
          
          {Object.entries(gestureActions).map(([gesture, action]) => {
            const Icon = action.icon;
            const isActive = currentGesture === gesture;
            
            return (
              <div
                key={gesture}
                className={`p-3 rounded-xl border transition-all duration-300 ${
                  isActive 
                    ? theme === 'dark' 
                      ? 'bg-white/10 border-white/20 scale-105' 
                      : 'bg-white/30 border-white/40 scale-105'
                    : theme === 'dark' 
                      ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                      : 'bg-white/10 border-white/20 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    theme === 'dark' ? 'bg-white/10' : 'bg-white/20'
                  }`}>
                    <Icon className={`w-4 h-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-700'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h5 className={`font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {action.name}
                    </h5>
                    <p className={`text-xs ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {action.description}
                    </p>
                  </div>
                  {isActive && (
                    <div className={`w-2 h-2 rounded-full ${
                      theme === 'dark' ? 'bg-green-400' : 'bg-green-500'
                    } animate-pulse`}></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Last Action */}
        {lastAction && (
          <div className={`p-3 rounded-xl border ${
            theme === 'dark' 
              ? 'bg-green-500/10 border-green-500/20' 
              : 'bg-green-500/10 border-green-500/20'
          }`}>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-green-400' : 'text-green-600'
            }`}>
              Last action: <span className="font-medium">{lastAction}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}