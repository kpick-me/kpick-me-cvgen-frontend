'use client';

import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/ui/language-switcher';

export default function NotFoundPage() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      <div className="text-center px-4">
        <div className="mb-8">
          <div className="text-9xl font-bold text-neutral-900 mb-4">404</div>
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            {t.errors.notFound}
          </h1>
          <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
            {t.errors.notFound}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => router.push('/dashboard')}
            className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-neutral-800 transition-colors"
          >
            {t.nav.dashboard}
          </button>
          <button
            onClick={() => router.push('/')}
            className="px-8 py-3 bg-white text-black border border-neutral-300 rounded-lg font-medium hover:bg-neutral-50 transition-colors"
          >
            {t.nav.home}
          </button>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => router.push('/dashboard')}
              className="text-sm px-4 py-2 text-neutral-700 hover:text-black hover:bg-neutral-100 rounded-md transition-colors"
            >
              {t.nav.dashboard}
            </button>
            <button
              onClick={() => router.push('/interviews')}
              className="text-sm px-4 py-2 text-neutral-700 hover:text-black hover:bg-neutral-100 rounded-md transition-colors"
            >
              {t.nav.interviews}
            </button>
            <button
              onClick={() => router.push('/training')}
              className="text-sm px-4 py-2 text-neutral-700 hover:text-black hover:bg-neutral-100 rounded-md transition-colors"
            >
              {t.nav.training}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

