import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-light">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
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
