import React from 'react';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';

const colorSchemes = {
  emerald: {
    primary: 'from-brand-yellow to-pink-400',
    secondary: 'from-sky-400 to-brand-green-light',
  },
  ocean: {
    primary: 'from-sky-400 to-blue-500',
    secondary: 'from-teal-300 to-emerald-400',
  },
  sunset: {
    primary: 'from-orange-400 to-pink-500',
    secondary: 'from-rose-300 to-amber-300',
  },
};

const MainLayout = ({ children }) => {
  const { visualMode } = useApp();

  const backgroundConfig =
    visualMode === 'calm'
      ? { speed: 'slow', colorScheme: 'ocean', pattern: 'orbits' }
      : { speed: 'normal', colorScheme: 'emerald', pattern: 'blobs' };

  const scheme = colorSchemes[backgroundConfig.colorScheme] || colorSchemes.emerald;

  const primarySpeedClass =
    backgroundConfig.speed === 'slow'
      ? 'motion-safe:animate-float-blobs-calmer'
      : backgroundConfig.speed === 'fast'
        ? 'motion-safe:animate-float-blobs-fast'
        : 'motion-safe:animate-float-blobs';

  const secondarySpeedClass =
    backgroundConfig.speed === 'slow'
      ? 'motion-safe:animate-float-blobs-slow'
      : backgroundConfig.speed === 'fast'
        ? 'motion-safe:animate-float-blobs-fast'
        : 'motion-safe:animate-float-blobs-slow';

  return (
    <div className="min-h-screen flex flex-col bg-brand-light">
      <Navbar />
      <main className="flex-grow pt-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden motion-safe:animate-fade-in-soft">
          {backgroundConfig.pattern === 'blobs' && (
            <>
              <div
                className={`absolute -top-10 -left-6 w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br ${scheme.primary} opacity-40 blur-3xl mix-blend-screen ${primarySpeedClass}`}
              />
              <div
                className={`absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr ${scheme.secondary} opacity-30 blur-3xl mix-blend-screen ${secondarySpeedClass}`}
              />
              <div
                className={`hidden md:block absolute top-1/2 -right-24 w-64 h-64 rounded-full bg-gradient-to-tl ${scheme.primary} opacity-25 blur-3xl mix-blend-screen ${secondarySpeedClass}`}
              />
            </>
          )}
          {backgroundConfig.pattern === 'orbits' && (
            <>
              <div
                className={`absolute -top-24 right-1/4 w-52 h-52 md:w-64 md:h-64 rounded-full border border-white/20 bg-gradient-to-br ${scheme.primary} opacity-35 blur-3xl mix-blend-screen ${primarySpeedClass}`}
              />
              <div
                className={`absolute -bottom-24 left-1/4 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr ${scheme.secondary} opacity-25 blur-3xl mix-blend-screen ${secondarySpeedClass}`}
              />
            </>
          )}
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </main>
      <footer className="bg-brand-green-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="font-display text-2xl font-bold">Shayak</span>
            <p className="mt-4 text-brand-green-bg/80 text-sm">
              Empowering students and teachers with AI-driven learning tools.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-brand-green-bg/80">
              <li>Features</li>
              <li>Pricing</li>
              <li>Case Studies</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-brand-green-bg/80">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-brand-green-bg/80">
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-white/10 text-center text-sm text-brand-green-bg/60">
          © {new Date().getFullYear()} Shayak. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
