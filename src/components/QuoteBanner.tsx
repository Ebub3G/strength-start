import { useState, useEffect } from 'react';
import { motivationalQuotes } from '../types/workout';

export const QuoteBanner = () => {
  const [currentQuote, setCurrentQuote] = useState('');

  useEffect(() => {
    // Get quote based on current day to rotate daily
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const quoteIndex = dayOfYear % motivationalQuotes.length;
    setCurrentQuote(motivationalQuotes[quoteIndex]);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-soft to-purple-light rounded-2xl p-6 mb-6 border border-purple-light/50">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
          ✨
        </div>
        <div>
          <p className="text-sm font-medium text-purple-dark mb-1">Daily Motivation</p>
          <p className="text-foreground font-medium leading-relaxed">{currentQuote}</p>
        </div>
      </div>
    </div>
  );
};