import { Activity, Shield, Bell, BarChart2, Globe, Zap } from 'lucide-react';

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: <Activity size={28} />,
    title: 'Real-Time Monitoring',
    description:
      'Track your network performance in real time with live dashboards and instant alerts for any anomalies.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Security & Compliance',
    description:
      'Detect threats, enforce policies, and stay compliant with industry standards across your entire infrastructure.',
  },
  {
    icon: <Bell size={28} />,
    title: 'Intelligent Alerts',
    description:
      'Get smart notifications via email, SMS, or Slack so you never miss a critical network event.',
  },
  {
    icon: <BarChart2 size={28} />,
    title: 'Advanced Analytics',
    description:
      'Dive deep into traffic patterns, bandwidth usage, and historical data to make informed decisions.',
  },
  {
    icon: <Globe size={28} />,
    title: 'Global Coverage',
    description:
      'Monitor distributed networks across multiple locations and cloud environments from a single pane of glass.',
  },
  {
    icon: <Zap size={28} />,
    title: 'Fast Incident Response',
    description:
      'Resolve issues faster with automated remediation workflows and a built-in runbook library.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-cyan-100 text-brand-teal font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
            Everything You Need to Monitor Your Network
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From small business LANs to enterprise-grade distributed systems, our solution scales with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-50 transition-all duration-300 bg-white"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-50 text-brand-teal flex items-center justify-center mb-5 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
