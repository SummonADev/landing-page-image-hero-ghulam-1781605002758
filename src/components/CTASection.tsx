import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #0a6e96 0%, #0e7faa 40%, #3bbfcf 100%)',
      }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Ready to Master Network Monitoring?
        </h2>
        <p className="text-cyan-100 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Download your free complete guide and start building a more reliable, secure, and efficient network today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-teal px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-50 transition-colors duration-200 shadow-xl"
          >
            Download Free Guide <ArrowRight size={20} />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors duration-200"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
