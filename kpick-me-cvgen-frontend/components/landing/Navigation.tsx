'use client';

import { useRouter } from 'next/navigation';
import { MenuIcon, XIcon, ChevronRightIcon } from '@/components/ui/icons';
import { Logo } from '@/components/ui/logo';
import { useAuth } from '@/lib/hooks/useAuth';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onGetStarted: () => void;
}

export function Navigation({ mobileMenuOpen, setMobileMenuOpen, onGetStarted }: NavigationProps) {
  const { user, login, logout, isAuthenticated } = useAuth();
  const router = useRouter();

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <a href="#top" className="flex items-center">
              <Logo className="h-7 w-auto" />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <button 
                  onClick={() => router.push('/dashboard')}
                  className="text-sm font-medium text-black hover:text-black/80 transition-colors"
                >
                  Dashboard
                </button>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={logout}
                >
                  Sign Out
                </Button>
                {user?.avatar && (
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-8 h-8 border border-gray-200" 
                  />
                )}
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <button 
                  onClick={login}
                  className="text-sm font-medium text-black hover:text-black/80 transition-colors"
                >
                  Sign in
                </button>
                <Button 
                  onClick={onGetStarted}
                  className="px-4 text-base rounded-full"
                >
                  Get Started
                </Button>
              </div>
            )}
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-600"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <MobileMenu 
          isAuthenticated={isAuthenticated} 
          onGetStarted={onGetStarted} 
          onLogin={login} 
          onLogout={logout} 
          onDashboard={() => router.push('/dashboard')}
        />
      )}
    </nav>
  );
}

function MobileMenu({ 
  isAuthenticated, 
  onGetStarted, 
  onLogin, 
  onLogout,
  onDashboard 
}: { 
  isAuthenticated: boolean; 
  onGetStarted: () => void; 
  onLogin: () => void; 
  onLogout: () => void;
  onDashboard: () => void;
}) {
  return (
    <div className="md:hidden bg-white">
      <div className="px-4 py-4 space-y-3">
        {isAuthenticated ? (
          <div className="space-y-3">
            <button 
              onClick={onDashboard}
              className="w-full text-left text-base font-medium text-black/90 hover:text-black py-2"
            >
              Dashboard
            </button>
            <button 
              onClick={onLogout}
              className="w-full text-left text-base font-medium text-black/90 hover:text-black py-2"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <button 
              onClick={onGetStarted}
              className="w-full bg-black text-white px-4 py-3 rounded-full font-medium text-base"
            >
              Get Started
            </button>
            <button 
              onClick={onLogin}
              className="w-full text-center text-base font-medium text-black/90 hover:text-black py-2"
            >
              Sign in
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
