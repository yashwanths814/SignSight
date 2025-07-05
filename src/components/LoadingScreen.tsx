import React from 'react';
import { Loader2, Hand, Brain } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Hand className="w-12 h-12 text-cyan-400" />
            </div>
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Brain className="w-12 h-12 text-purple-400" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-2">
            Gesture Control
          </h1>
          <p className="text-lg text-gray-300">
            Initializing AI models and camera systems
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <Loader2 className="w-12 h-12 text-cyan-400 animate-spin" />
            <div className="absolute inset-0 w-12 h-12 border-2 border-cyan-400/30 rounded-full animate-pulse"></div>
          </div>
          
          <div className="text-center">
            <p className="text-white font-medium mb-2">Loading AI Models...</p>
            <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            This may take a few moments on first load
          </p>
        </div>
      </div>
    </div>
  );
}