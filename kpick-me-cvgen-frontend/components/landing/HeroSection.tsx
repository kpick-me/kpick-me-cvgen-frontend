'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/contexts/LanguageContext';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  const { t } = useLanguage();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 border-b border-gray-200">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight mb-6">
          {t.hero.title}
        </h1>
        <p className="text-lg text-black/90 mb-10 max-w-xl mx-auto">
          {t.hero.subtitle}
        </p>
        <div className="space-x-4">
          <Button 
            onClick={onGetStarted}
            size="lg"
            className="font-medium"
          >
            {t.hero.cta}
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="font-medium"
            onClick={() => {
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t.hero.features}
          </Button>
        </div>
      </div>
    </div>
  );
}
