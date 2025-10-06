import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
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
          <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
          <p className="text-[#B3B3B3]">Effective date: January 1, 2025</p>
        </header>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="text-[#E0E0E0] mb-4">
              By accessing and using Averix, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use License</h2>
            <p className="text-[#E0E0E0] mb-4">
              Permission is granted to temporarily use Averix for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p className="text-[#E0E0E0] mb-4">
              The materials on Averix are provided on an 'as is' basis. Averix makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
            <p className="text-[#E0E0E0] mb-4">
              In no event shall Averix or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Averix.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-[#E0E0E0]">
              If you have any questions about these Terms of Use, please contact us at{' '}
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

export default Terms;