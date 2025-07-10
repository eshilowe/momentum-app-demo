import React, { useState } from 'react';
import { 
  ArrowLeft, Calendar, CheckCircle, Clock, Target, Play, Share2, Bookmark, Heart, Award,
  Zap, Moon, Sun, Sparkles, TrendingUp, Camera, Check, Brain, Shield, Smile, Battery,
  Leaf, Wind, Star, ChevronRight, ChevronDown, Plus, Edit3, BarChart3, Flame, Coffee,
  Book, Music, Users, TreePine, MessageCircle, Settings, Dumbbell, Droplets, Home,
  Phone, Scissors, Calculator, Gift, Search, Bell, Trophy
} from 'lucide-react';

const UnifiedChallengeSystem = () => {
  const [currentView, setCurrentView] = useState('discovery');
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [userChallenges, setUserChallenges] = useState(new Set(['lemon-water']));

  // Set global styles
  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif';
    document.body.style.backgroundColor = '#f9fafb';
  }, []);

  const MomentumLogo = () => (
    <svg viewBox="0 0 200 200" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="momentumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'#f59e0b', stopOpacity:1}} />
          <stop offset="50%" style={{stopColor:'#ef4444', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:'#dc2626', stopOpacity:1}} />
        </linearGradient>
      </defs>
      <path d="M 45 140 Q 45 50, 55 50 Q 65 50, 85 100 Q 100 130, 115 100 Q 135 50, 145 50 Q 155 50, 155 140" 
            stroke="url(#momentumGradient)" strokeWidth="14" fill="none" strokeLinecap="round"/>
      <path d="M 165 70 L 185 65" stroke="url(#momentumGradient)" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.8"/>
      <path d="M 165 90 L 190 85" stroke="url(#momentumGradient)" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.9"/>
      <path d="M 165 110 L 185 105" stroke="url(#momentumGradient)" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.7"/>
    </svg>
  );

  const challenges = {
    'lemon-water': {
      id: 'lemon-water', title: '21-Day Lemon Water Challenge', category: 'Glow-Up & Transformation', duration: 21,
      participants: '2.1K', price: '$4.99', rating: 4.8, difficulty: 'Beginner', image: '🍋',
      gradient: 'from-yellow-400 to-orange-400', 
      description: 'Transform your health and glow from the inside out with this simple yet powerful daily habit.',
      benefits: ['Improved skin clarity & natural glow', 'Enhanced hydration & detoxification', 'Boosted metabolism & weight management']
    },
    'morning-meditation': {
      id: 'morning-meditation', title: '21-Day Morning Meditation', category: 'Confidence & Mindset', duration: 21,
      participants: '1.8K', price: '$6.99', rating: 4.9, difficulty: 'Beginner', image: '🧘‍♀️',
      gradient: 'from-purple-400 to-indigo-400',
      description: 'Transform your mornings with 10 minutes of guided meditation daily.',
      benefits: ['Reduced stress & anxiety', 'Better focus & clarity', 'Inner peace & calm']
    },
    'fitness-transformation': {
      id: 'fitness-transformation', title: '21-Day Fitness Transformation', category: 'Fitness', duration: 21,
      participants: '3.2K', price: '$5.99', rating: 4.7, difficulty: 'Intermediate', image: '💪',
      gradient: 'from-orange-400 to-red-400',
      description: 'Build strength, endurance, and confidence with progressive daily workouts.',
      benefits: ['Increased strength & muscle tone', 'Better cardiovascular health', 'Enhanced flexibility & mobility']
    }
  };

  const categories = [
    { id: 'productivity-success', name: 'Productivity & Success', icon: Zap, gradient: 'from-yellow-500 to-orange-400', count: 18 },
    { id: 'confidence-mindset', name: 'Confidence & Mindset', icon: Brain, gradient: 'from-purple-500 to-violet-400', count: 22 },
    { id: 'glow-up', name: 'Glow-Up & Transformation', icon: Star, gradient: 'from-pink-500 to-rose-400', count: 15 },
    { id: 'fitness', name: 'Fitness', icon: Dumbbell, gradient: 'from-orange-500 to-amber-400', count: 8 },
    { id: 'nutrition', name: 'Nutrition', icon: Leaf, gradient: 'from-green-500 to-emerald-400', count: 7 },
    { id: 'money', name: 'Money', icon: Heart, gradient: 'from-blue-500 to-cyan-400', count: 9 }
  ];

  const ChallengeCard = ({ challenge, onClick, isJoined = false }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer active:scale-95 transition-all duration-200" onClick={() => onClick(challenge)}>
      <div className={`h-40 bg-gradient-to-br ${challenge.gradient} flex items-center justify-center relative`}>
        <span className="text-5xl">{challenge.image}</span>
        <div className="absolute top-3 right-3 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full">
          <span className={`text-xs font-medium ${
            challenge.difficulty === 'Beginner' ? 'text-green-600' :
            challenge.difficulty === 'Intermediate' ? 'text-amber-600' : 'text-red-600'
          }`}>
            {challenge.difficulty}
          </span>
        </div>
        {isJoined && (
          <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Check className="w-3 h-3" /> Joined
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 font-medium">{challenge.category}</span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-amber-400 fill-current" />
            <span className="text-sm font-semibold text-gray-700">{challenge.rating}</span>
          </div>
        </div>
        <h3 className="font-bold text-lg mb-2 text-gray-900 leading-tight">{challenge.title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{challenge.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {challenge.duration} days
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {challenge.participants}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-xl text-gray-900">{challenge.price}</span>
          <button className={`px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg active:scale-95 transition-all duration-200 ${
            isJoined ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-red-500 to-orange-500 text-white'
          }`}>
            {isJoined ? 'Continue' : 'Join Challenge'}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 max-w-sm mx-auto">
      {/* Status Bar */}
      <div className="bg-black text-white px-4 py-1 flex items-center justify-between text-sm">
        <span className="font-medium">9:41</span>
        <div className="flex items-center gap-1">
          <span>📶📶</span>
          <span className="bg-white text-black px-1 rounded text-xs font-bold">85%</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <MomentumLogo />
            <h1 className="font-semibold text-lg text-gray-900">Momentum</h1>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-4">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-5 text-white mb-4 relative overflow-hidden">
          <div className="absolute top-4 right-4 opacity-20">
            <MomentumLogo />
          </div>
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-2">Transform Your Life</h2>
            <p className="text-red-100 text-sm mb-3">Start your journey with science-backed 21-day challenges</p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 bg-white rounded-full border-2 border-red-500"></div>
                <div className="w-6 h-6 bg-orange-200 rounded-full border-2 border-red-500"></div>
                <div className="w-6 h-6 bg-yellow-200 rounded-full border-2 border-red-500"></div>
              </div>
              <span className="text-sm text-red-100">Join 10K+ active members</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <h2 className="text-lg font-bold mb-3 text-gray-900">Categories</h2>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id} className="bg-white rounded-xl p-4 border border-gray-100 active:scale-95 transition-all duration-200 shadow-sm cursor-pointer">
                <div className={`bg-gradient-to-r ${category.gradient} w-10 h-10 rounded-xl flex items-center justify-center mb-3`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{category.name}</h3>
                <p className="text-xs text-gray-500">{category.count} challenges</p>
              </div>
            );
          })}
        </div>

        {/* Popular Challenges */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Popular Now</h2>
          <button className="text-red-500 text-sm font-semibold">View All</button>
        </div>
        
        <div className="space-y-4 pb-20">
          {Object.values(challenges).map((challenge) => (
            <ChallengeCard 
              key={challenge.id} 
              challenge={challenge} 
              onClick={(challenge) => {
                setSelectedChallenge(challenge);
                setCurrentView('detail');
              }}
              isJoined={userChallenges.has(challenge.id)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200">
        <div className="flex items-center justify-around py-2">
          {[
            { id: 'discover', label: 'Discover', icon: Home, active: true },
            { id: 'my-challenges', label: 'My Challenges', icon: Play },
            { id: 'progress', label: 'Progress', icon: Trophy },
            { id: 'community', label: 'Community', icon: Users },
            { id: 'profile', label: 'Profile', icon: Heart }
          ].map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                  tab.active ? 'text-red-500' : 'text-gray-400'
                }`}
              >
                <IconComponent className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">{tab.label}</span>
                {tab.active && <div className="w-1 h-1 bg-red-500 rounded-full mt-1"></div>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

function App() {
  return <UnifiedChallengeSystem />;
}

export default App;
