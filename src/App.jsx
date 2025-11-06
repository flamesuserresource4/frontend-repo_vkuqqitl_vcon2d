import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-500" />
            <span>Free Website AI</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#get-started" className="hover:text-gray-900">Get started</a>
          </nav>
          <a
            href="#get-started"
            className="hidden rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white md:block"
          >
            Launch app
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>

      <footer className="border-t border-gray-200 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Free Website AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
