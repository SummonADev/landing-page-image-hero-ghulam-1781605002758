import { Search, Settings, TrendingUp } from 'lucide-react';

type Step = {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: '01',
    icon: <Search size={24} />,
    title: 'Discover Your Network',
    description:
      'Automatically scan and map all devices, connections, and services across your infrastructure within minutes.',
  },
  {
    number: '02',
    icon: <Settings size={24} />,
    title: 'Configure Monitoring',
    description:
      'Set up custom thresholds, alert rules, and dashboards tailored to your specific network requirements.',
  },
  {
    number: '03',
    icon: <TrendingUp size={24} />,
    title: 'Optimize & Improve',
    description:
      'Use actionable insights and reports to continuously improve performance and prevent future incidents.',
  },
];

export default function HowItWorks() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      id="how-it-works"
      style={{
        background:
          'linear-gradient(135deg, #e8fafe 0%, #d0f5f8 50%, #d8faf0 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-white/70 text-brand-teal font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
            Up and Running in Minutes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our streamlined onboarding process gets you from setup to full visibility in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-brand-teal/30 via-brand-light/50 to-brand-teal/30" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-6 relative z-10">
                <div className="text-brand-teal">{step.icon}</div>
              </div>
              <span className="text-xs font-bold tracking-widest text-brand-light mb-2">
                STEP {step.number}
              </span>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
