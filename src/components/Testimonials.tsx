import { Star } from 'lucide-react';

type Testimonial = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'IT Director',
    company: 'CloudTech Inc.',
    avatar: 'SM',
    quote:
      'This guide transformed how we think about network monitoring. We reduced downtime by 60% in the first quarter after implementing these strategies.',
    rating: 5,
  },
  {
    name: 'James Chen',
    role: 'Network Engineer',
    company: 'DataFlow Systems',
    avatar: 'JC',
    quote:
      'The most comprehensive resource on network monitoring I\'ve ever come across. Every section is actionable and backed by real-world examples.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'CTO',
    company: 'Nexus Solutions',
    avatar: 'PN',
    quote:
      'We handed this guide to our entire engineering team. It leveled up everyone\'s understanding of network health and proactive monitoring.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-cyan-100 text-brand-teal font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
            Trusted by Network Professionals
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            See how teams around the world are using our guide to build better, more resilient networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white flex flex-col gap-5"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm"
                  style={{ background: 'linear-gradient(135deg, #0e7faa, #3bbfcf)' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">{t.name}</p>
                  <p className="text-sm text-gray-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
