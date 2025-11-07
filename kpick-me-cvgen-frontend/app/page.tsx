'use client'

import { useState } from 'react';

import {
  FileTextIcon,
  DownloadIcon,
  VideoIcon,
  BrainIcon,
  LayoutDashboardIcon,
  CheckCircleIcon,
  GoogleIcon,
  MenuIcon, 
  XIcon,
} from '@/components/ui/icons';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <FileTextIcon />,
      title: "Smart CV Builder",
      description: "Create professional CVs with AI-powered suggestions and multiple templates"
    },
    {
      icon: <DownloadIcon />,
      title: "Multi-Format Export",
      description: "Export your CV as PDF, DOCX, JSON, or share via unique link"
    },
    {
      icon: <VideoIcon />,
      title: "Interview Prep",
      description: "Practice with AI-driven mock interviews tailored to your target role"
    },
    {
      icon: <BrainIcon />,
      title: "Skills Training",
      description: "Improve your coding and professional skills through interactive challenges"
    }
  ];

  const exportFormats = [
    { name: "PDF", description: "Industry-standard, perfect for email and printing" },
    { name: "DOCX", description: "Editable Word format for easy customization" },
    { name: "JSON", description: "Structured data for developer portfolios and APIs" },
    { name: "HTML", description: "Web-ready format with custom styling" },
    { name: "Share Link", description: "Generate a unique URL to share your CV online" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-blue-600">
                <LayoutDashboardIcon />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">CVPro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition">How it Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
            </div>
            <div className="hidden md:block">
              <button className="flex items-center space-x-2 bg-white border-2 border-gray-300 hover:border-blue-500 px-6 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
                <GoogleIcon />
                <span className="font-medium text-gray-700">Sign in with Google</span>
              </button>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-gray-700 hover:text-blue-600">Features</a>
              <a href="#how-it-works" className="block text-gray-700 hover:text-blue-600">How it Works</a>
              <a href="#pricing" className="block text-gray-700 hover:text-blue-600">Pricing</a>
              <button className="w-full flex items-center justify-center space-x-2 bg-white border-2 border-gray-300 px-4 py-2 rounded-lg">
                <GoogleIcon />
                <span className="font-medium">Sign in with Google</span>
              </button>
            </div>
          </div>
        )}
      </nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Build Your Perfect CV
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Land Your Dream Job
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create professional CVs, practice interviews with AI, and master your skills through interactive challenges
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105">
            Get Started for Free
          </button>
        </div>
        <div id="features" className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 border border-gray-100">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Export Your CV in Multiple Formats
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exportFormats.map((format, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-200">
                <div className="flex items-start space-x-3">
                  <div className="text-green-500 flex-shrink-0 mt-1">
                    <CheckCircleIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{format.name}</h3>
                    <p className="text-gray-600 text-sm">{format.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-24 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-2xl text-white shadow-xl">
            <div className="mb-4">
              <VideoIcon />
            </div>
            <h2 className="text-2xl font-bold mb-4">AI Interview Practice</h2>
            <p className="mb-6 text-purple-100">
              Prepare for real interviews with our AI interviewer. Get personalized questions based on your CV and target role, with instant feedback on your answers.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center space-x-2">
                <div className="text-green-300">
                  <CheckCircleIcon />
                </div>
                <span>Role-specific questions</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="text-green-300">
                  <CheckCircleIcon />
                </div>
                <span>Real-time feedback</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="text-green-300">
                  <CheckCircleIcon />
                </div>
                <span>Performance analytics</span>
              </li>
            </ul>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
              Start Practicing
            </button>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-teal-600 p-8 rounded-2xl text-white shadow-xl">
            <div className="mb-4">
              <BrainIcon />
            </div>
            <h2 className="text-2xl font-bold mb-4">Skills Training</h2>
            <p className="mb-6 text-green-100">
              Level up your skills with interactive coding challenges, technical quizzes, and real-world scenarios. Track your progress and earn certificates.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center space-x-2">
                <div className="text-green-300">
                  <CheckCircleIcon />
                </div>
                <span>Coding challenges</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="text-green-300">
                  <CheckCircleIcon />
                </div>
                <span>Interactive quizzes</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="text-green-300">
                  <CheckCircleIcon />
                </div>
                <span>Progress tracking</span>
              </li>
            </ul>
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
              Browse Challenges
            </button>
          </div>
        </div>
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Powerful Dashboard to Track Your Progress
          </h2>
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
                <div className="text-gray-600">CVs Created</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-4xl font-bold text-purple-600 mb-2">8</div>
                <div className="text-gray-600">Interviews Practiced</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-4xl font-bold text-green-600 mb-2">24</div>
                <div className="text-gray-600">Challenges Completed</div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">View detailed analytics, manage your CVs, and track your interview performance all in one place</p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">
                View Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white mt-24 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 CVPro. Build your future with confidence.</p>
        </div>
      </footer>
    </div>
  );
}