'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';

export default function ForbiddenPage() {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();

  const handleAction = () => {
    if (isAuthenticated) {
      router.push('/dashboard');
    } else {
      login();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <div className="text-9xl font-bold text-red-600 mb-4">403</div>
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Access Forbidden
          </h1>
          <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
            You don't have permission to access this page. Please sign in with your Google account to continue.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleAction}
            className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-neutral-800 transition-colors"
          >
            {isAuthenticated ? 'Go to Dashboard' : 'Sign in with Google'}
          </button>
          <button
            onClick={() => router.push('/')}
            className="px-8 py-3 bg-white text-black border border-neutral-300 rounded-lg font-medium hover:bg-neutral-50 transition-colors"
          >
            Back to Home
          </button>
        </div>

        <div className="mt-12 text-sm text-neutral-500">
          <p>Need help? Contact support or check our documentation.</p>
        </div>
      </div>
    </div>
  );
}

