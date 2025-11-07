export const FileTextIcon = () => (
  <div className="w-8 h-8 border-2 border-current rounded flex items-center justify-center">
    <div className="w-4 h-5 border-t-2 border-b-2 border-current"></div>
  </div>
);

export const DownloadIcon = () => (
  <div className="w-8 h-8 flex flex-col items-center justify-center">
    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-current mb-1"></div>
    <div className="w-6 h-0.5 bg-current"></div>
  </div>
);

export const VideoIcon = () => (
  <div className="w-8 h-8 border-2 border-current rounded flex items-center justify-center relative">
    <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-current ml-1"></div>
  </div>
);

export const BrainIcon = () => (
  <div className="w-8 h-8 flex items-center justify-center">
    <div className="relative w-6 h-6 border-2 border-current rounded-full">
      <div className="absolute top-1 left-1 w-1 h-1 bg-current rounded-full"></div>
      <div className="absolute top-1 right-1 w-1 h-1 bg-current rounded-full"></div>
      <div className="absolute bottom-1 left-1.5 w-3 h-1 border-t-2 border-current rounded-t"></div>
    </div>
  </div>
);

export const LayoutDashboardIcon = () => (
  <div className="w-8 h-8 grid grid-cols-2 gap-1">
    <div className="bg-current rounded"></div>
    <div className="bg-current rounded"></div>
    <div className="bg-current rounded"></div>
    <div className="bg-current rounded"></div>
  </div>
);

export const MenuIcon = () => (
  <div className="w-6 h-6 flex flex-col justify-around">
    <div className="w-full h-0.5 bg-current"></div>
    <div className="w-full h-0.5 bg-current"></div>
    <div className="w-full h-0.5 bg-current"></div>
  </div>
);

export const XIcon = () => (
  <div className="w-6 h-6 relative">
    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-current transform rotate-45"></div>
    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-current transform -rotate-45"></div>
  </div>
);

export const CheckCircleIcon = () => (
  <div className="w-5 h-5 border-2 border-current rounded-full flex items-center justify-center">
    <div className="text-xs">✓</div>
  </div>
);

export const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

// Additional icons for dashboard and features

export const ChartIcon = () => (
  <div className="w-6 h-6 flex items-end justify-around">
    <div className="w-1 h-2 bg-current"></div>
    <div className="w-1 h-4 bg-current"></div>
    <div className="w-1 h-3 bg-current"></div>
    <div className="w-1 h-5 bg-current"></div>
  </div>
);

export const SettingsIcon = () => (
  <div className="w-6 h-6 relative flex items-center justify-center">
    <div className="absolute w-4 h-4 border-2 border-current rounded-full"></div>
    <div className="absolute w-1 h-1 bg-current rounded-full"></div>
    <div className="absolute top-0 left-1/2 w-0.5 h-1.5 bg-current -translate-x-1/2"></div>
    <div className="absolute bottom-0 left-1/2 w-0.5 h-1.5 bg-current -translate-x-1/2"></div>
  </div>
);

export const UserIcon = () => (
  <div className="w-6 h-6 flex flex-col items-center justify-center">
    <div className="w-3 h-3 border-2 border-current rounded-full"></div>
    <div className="w-5 h-2 border-2 border-current border-t-0 rounded-b-full mt-0.5"></div>
  </div>
);

export const PlusIcon = () => (
  <div className="w-6 h-6 relative flex items-center justify-center">
    <div className="absolute w-4 h-0.5 bg-current"></div>
    <div className="absolute w-0.5 h-4 bg-current"></div>
  </div>
);

export const EditIcon = () => (
  <div className="w-6 h-6 relative">
    <div className="absolute bottom-0 right-0 w-3 h-3 border-2 border-current border-t-0 border-l-0"></div>
    <div className="absolute top-0 left-0 w-2 h-3 border-2 border-current transform rotate-45"></div>
  </div>
);

export const TrashIcon = () => (
  <div className="w-6 h-6 flex flex-col items-center justify-center">
    <div className="w-4 h-0.5 bg-current mb-0.5"></div>
    <div className="w-3 h-4 border-2 border-current border-t-0 rounded-b"></div>
  </div>
);

export const SearchIcon = () => (
  <div className="w-6 h-6 relative flex items-center justify-center">
    <div className="w-4 h-4 border-2 border-current rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-2 h-0.5 bg-current transform rotate-45 translate-x-0.5 translate-y-0.5"></div>
  </div>
);

export const ClockIcon = () => (
  <div className="w-6 h-6 relative flex items-center justify-center">
    <div className="w-5 h-5 border-2 border-current rounded-full"></div>
    <div className="absolute w-0.5 h-2 bg-current origin-bottom" style={{ transform: 'translateY(-0.5rem)' }}></div>
    <div className="absolute w-1.5 h-0.5 bg-current origin-left"></div>
  </div>
);

export const StarIcon = () => (
  <div className="w-6 h-6 relative flex items-center justify-center">
    <div className="w-0 h-0 border-l-3 border-r-3 border-b-5 border-transparent border-b-current"></div>
    <div className="absolute w-0 h-0 border-l-3 border-r-3 border-t-5 border-transparent border-t-current top-2"></div>
  </div>
);

export const ArrowRightIcon = () => (
  <div className="w-6 h-6 flex items-center justify-center">
    <div className="w-4 h-0.5 bg-current"></div>
    <div className="w-0 h-0 border-t-3 border-b-3 border-l-3 border-transparent border-l-current -ml-1"></div>
  </div>
);