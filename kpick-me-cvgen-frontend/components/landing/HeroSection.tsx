'use client';

import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 border-b border-gray-200">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight mb-6">
          Build Your Perfect CV,
          <span className="block text-black">
            Land Your Dream Job
          </span>
        </h1>
        <p className="text-lg text-black/90 mb-10 max-w-xl mx-auto">
          Create professional CVs, practice interviews with AI, and master your skills through interactive challenges.
        </p>
        <div className="space-x-4">
          <Button 
            onClick={onGetStarted}
            size="lg"
            className="font-medium"
          >
            Get Started for Free
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="font-medium"
            onClick={() => {
              // TODO: Add scroll to features
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
