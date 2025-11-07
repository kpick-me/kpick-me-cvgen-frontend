'use client'

import { useState } from 'react';
import {
  FileTextIcon,
  DownloadIcon,
  VideoIcon,
  LayoutDashboardIcon,
  CheckCircleIcon,
  GoogleIcon,
  MenuIcon,
  XIcon,
  ChevronRightIcon,
  SkillIcon,
} from '@/components/ui/icons';
import { Logo } from '@/components/ui/logo';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const name = "CVgen";

  const features = [
    {
      icon: <FileTextIcon className="w-6 h-6" />,
      title: "Smart CV Builder",
      description: "AI-powered suggestions and multiple templates.",
      className: "md:col-span-2 md:row-span-2 bg-blue-50",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <DownloadIcon className="w-6 h-6" />,
      title: "Multi-Format Export",
      description: "PDF, DOCX, JSON, or a shareable link.",
      className: "md:col-span-1",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: <VideoIcon className="w-6 h-6" />,
      title: "Interview Prep",
      description: "AI-driven mock interviews.",
      className: "md:col-span-1",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: <SkillIcon className="w-6 h-6" />,
      title: "Skills Training",
      description: "Interactive coding and professional challenges.",
      className: "md:col-span-2",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    }
  ];

  const exportFormats = [
    { name: "PDF", description: "Industry-standard, perfect for email and printing" },
    { name: "DOCX", description: "Editable Word format for easy customization" },
    { name: "JSON", description: "Structured data for developer portfolios and APIs" },
    { name: "Share Link", description: "Generate a unique URL to share your CV online" }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <nav className="bg-white/95 backdrop-blur-lg border-b border-neutral-200/70 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-6">
              <a href="#top">
                <Logo className="h-7 w-auto" />
              </a>
                <div className="hidden md:flex items-center space-x-6">
                  <a href="#features" className="text-sm font-medium text-neutral-600 hover:text-black transition-colors relative group">
                    Features
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </a>
                  <a href="#how-it-works" className="text-sm font-medium text-neutral-600 hover:text-black transition-colors relative group">
                    How it Works
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </a>
                </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-sm font-medium text-neutral-600 hover:text-black transition-colors">
                <span>Sign in</span>
              </button>
              <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors">
                <span>Get Started</span>
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-600"
            >
              {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-200">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-base font-medium text-neutral-700 hover:text-black">Features</a>
              <a href="#how-it-works" className="block text-base font-medium text-neutral-700 hover:text-black">How it Works</a>
              <a href="#pricing" className="block text-base font-medium text-neutral-700 hover:text-black">Pricing</a>
              <button className="w-full flex items-center justify-center space-x-2 bg-black text-white px-4 py-2 rounded-lg font-medium">
                <span>Get Started</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2">
                <span>Sign in</span>
              </button>
            </div>
          </div>
        )}
      </nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-900 tracking-tight mb-6">
            Build Your Perfect CV,
            <span className="block bg-clip-text text-indigo-700">
              Land Your Dream Job
            </span>
          </h1>
          <p className="text-lg text-neutral-600 mb-10 max-w-xl mx-auto">
            Create professional CVs, practice interviews with AI, and master your skills through interactive challenges.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-neutral-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started for Free
          </button>
        </div>
      </div>
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group p-6 rounded-2xl border border-neutral-200/70 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 ${feature.className}`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${feature.bgColor} ${feature.iconColor} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-neutral-900 mb-6 tracking-tight">
            Export Your CV in Any Format
          </h2>
          <p className="text-lg text-neutral-600 mb-12">
            From industry-standard PDFs to JSON for your developer portfolio, we've got you covered.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exportFormats.map((format, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border-2 border-neutral-100 hover:border-blue-500/30 hover:shadow-lg transition-all duration-200">
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 flex-shrink-0 mt-1">
                  <CheckCircleIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">{format.name}</h3>
                  <p className="text-neutral-600 text-sm">{format.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
        <div className="bg-neutral-900 p-8 sm:p-10 rounded-2xl text-white shadow-xl overflow-hidden">
          <div className="mb-4 text-purple-400">
            <VideoIcon className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold mb-4">AI Interview Practice</h2>
          <p className="mb-6 text-neutral-300">
            Prepare with our AI interviewer. Get personalized questions and instant feedback.
          </p>
          <ul className="space-y-2 mb-6">
            {["Role-specific questions", "Real-time feedback", "Performance analytics"].map((item) => (
              <li key={item} className="flex items-center space-x-2">
                <div className="text-green-400">
                  <CheckCircleIcon className="w-5 h-5" />
                </div>
                <span className="text-neutral-200">{item}</span>
              </li>
            ))}
          </ul>
          <button className="bg-white text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-neutral-200 transition-colors">
            Start Practicing
          </button>
        </div>
        <div className="bg-white border border-neutral-200/70 p-8 sm:p-10 rounded-2xl shadow-xl">
          <div className="mb-4 text-green-600">
            <SkillIcon className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-neutral-900">Skills Training</h2>
          <p className="mb-6 text-neutral-600">
            Level up with interactive coding challenges, quizzes, and real-world scenarios.
          </p>
          <ul className="space-y-2 mb-6">
            {["Coding challenges", "Interactive quizzes", "Progress tracking"].map((item) => (
              <li key={item} className="flex items-center space-x-2">
                <div className="text-green-500">
                  <CheckCircleIcon className="w-5 h-5" />
                </div>
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
          <button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-neutral-800 transition-colors">
            Browse Challenges
          </button>
        </div>
      </div>
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0 md:ml-auto">
          <Logo className="h-7 w-auto" />
          <span className="ml-2 text-xl font-semibold text-neutral-900">{name}</span>
        </div>
          </div>
          <div className="mt-8 text-center md:text-right">
        <p className="text-sm text-neutral-500">© 2025 {name}. Build your future with confidence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}