import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 min-h-screen flex items-center overflow-hidden">
      {/* Background gradient matching the image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #e0f7f9 0%, #c8f0f4 20%, #b2eaf0 40%, #cef5ec 60%, #d4f5e2 80%, #e8faf0 100%)',
        }}
      />

      {/* Decorative blob */}
      <div
        className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-tl-full opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at bottom right, #a8eddc 0%, #b2f0e8 40%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: text content */}
          <div className="flex-1 max-w-xl">
            <p className="text-gray-700 text-xl md:text-2xl font-normal mb-2">
              Your Complete Guide to
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
              style={{ color: '#0a6e96' }}
            >
              Network<br />
              Monitoring<br />
              Solutions
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Discover powerful tools and strategies to monitor, analyze, and optimize your network infrastructure — all in one comprehensive guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-brand-teal text-white px-7 py-3.5 rounded-full font-semibold text-lg hover:bg-brand-light transition-colors duration-200 shadow-lg"
              >
                Read the Guide <ArrowRight size={20} />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-teal text-brand-teal px-7 py-3.5 rounded-full font-semibold text-lg hover:bg-brand-teal hover:text-white transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="/images/BlogPost_graphics-NetworkMonitoring.png"
              alt="Network Monitoring Solutions"
              className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
