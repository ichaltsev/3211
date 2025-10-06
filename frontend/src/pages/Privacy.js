import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
  return (
    <main className="pt-16 min-h-screen bg-[#0A0A0A] text-[#E0E0E0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-[#B3B3B3] hover:text-[#E0E0E0] mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-[#B3B3B3]">Effective date: January 1, 2025</p>
        </header>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-[#E0E0E0] mb-4">
              Averix is designed with privacy in mind. We collect minimal information necessary to provide our services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#B3B3B3]">
              <li>Wallet addresses (when you connect your wallet)</li>
              <li>Transaction data (for trading functionality)</li>
              <li>Usage analytics (anonymized and aggregated)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-[#E0E0E0] mb-4">
              Your information is used solely to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#B3B3B3]">
              <li>Provide trading platform functionality</li>
              <li>Maintain security and prevent fraud</li>
              <li>Improve our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
            <p className="text-[#E0E0E0] mb-4">
              We implement industry-standard security measures to protect your data. Your private keys and seed phrases never leave your device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-[#E0E0E0]">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:averix.found@gmail.com" className="text-[#E0E0E0] hover:underline">
                averix.found@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Privacy;