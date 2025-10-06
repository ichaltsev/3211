import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Disclaimer = () => {
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
          <h1 className="text-4xl font-bold mb-4">Risk Disclaimer</h1>
          <p className="text-[#B3B3B3]">Important Notice</p>
        </header>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">No Investment Advice</h2>
            <p className="text-[#E0E0E0] mb-4">
              The information provided on Averix is for educational and informational purposes only. Nothing on this platform constitutes financial, investment, legal, or tax advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Trading Risks</h2>
            <p className="text-[#E0E0E0] mb-4">
              Trading cryptocurrencies and other digital assets involves substantial risk of loss and is not suitable for all investors. You should carefully consider whether trading is suitable for you in light of your circumstances, knowledge, and financial resources.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Market Volatility</h2>
            <p className="text-[#E0E0E0] mb-4">
              Digital asset markets are highly volatile and unpredictable. Past performance is not indicative of future results. You may lose some or all of your invested capital.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Regulatory Risk</h2>
            <p className="text-[#E0E0E0] mb-4">
              Cryptocurrency regulations are evolving and may change in ways that could adversely affect the value of digital assets or the ability to trade them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Responsibility</h2>
            <p className="text-[#E0E0E0] mb-4">
              You are solely responsible for your trading decisions and the consequences thereof. Always conduct your own research and consider consulting with qualified professionals before making investment decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-[#E0E0E0]">
              For questions about this disclaimer, contact us at{' '}
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

export default Disclaimer;