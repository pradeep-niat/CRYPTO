import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaChartLine, FaGlobe } from 'react-icons/fa';

const phases = [
  {
    quarter: 'Q1 2024',
    badge: 'LAUNCH',
    title: 'Foundation & Launch',
    icon: <FaRocket className="text-3xl" />,
    items: [
      'Token launch on Solana',
      'Website & social media launch',
      'Initial liquidity locked & burned',
      'Community building kickoff',
      '1,000 holders milestone',
    ],
    color: '#A855F7',
  },
  {
    quarter: 'Q2 2024',
    badge: 'GROWTH',
    title: 'Community & Partnerships',
    icon: <FaUsers className="text-3xl" />,
    items: [
      'CEX listing applications',
      'Influencer marketing campaigns',
      'Community governance launch',
      'Staking platform release',
      '10,000 holders milestone',
    ],
    color: '#3B82F6',
  },
  {
    quarter: 'Q3 2024',
    badge: 'EXPANSION',
    title: 'Ecosystem Development',
    icon: <FaChartLine className="text-3xl" />,
    items: [
      'Mystery Raffle platform live',
      'NFT collection launch',
      'Cross-chain bridge development',
      'Beef up security & audits',
      'Strategic partnerships',
    ],
    color: '#22D3EE',
  },
  {
    quarter: 'Q4 2024',
    badge: 'LONG-TERM GROWTH',
    title: 'Global Adoption',
    icon: <FaGlobe className="text-3xl" />,
    items: [
      'Multi-chain deployment',
      'Merchant integrations',
      'Mobile app release',
      'DAO governance transition',
      'Innovation & scaling',
    ],
    color: '#10B981',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-padding relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">
            Roadmap
          </h2>
          <p className="text-text-secondary text-lg max-w-lg mx-auto">
            Our journey from launch to global adoption
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-purple via-electric-blue to-electric-cyan hidden md:block -translate-x-1/2" />
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-purple via-electric-blue to-electric-cyan md:hidden -translate-x-1/2" />

          {phases.map((phase, i) => (
            <motion.div
              key={phase.quarter}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-100px' }}
              className={`relative mb-20 last:mb-0 flex items-center md:items-start ${
                i % 2 === 0
                  ? 'md:flex-row md:pr-[50%]'
                  : 'md:flex-row-reverse md:pl-[50%]'
              } flex-row pl-12 md:pl-0 w-full`}
            >
              {/* Timeline Dot */}
              <div
                className="absolute md:left-1/2 left-6 md:-translate-x-1/2 -translate-x-1/2 w-5 h-5 rounded-full z-10 md:mt-10 mt-0"
                style={{
                  backgroundColor: phase.color,
                  boxShadow: `0 0 15px ${phase.color}80, 0 0 30px ${phase.color}40`,
                  border: `4px solid #0A0A0F`,
                }}
              />

              {/* Card Wrapper for Spacing */}
              <div className={`w-full ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                {/* Card */}
                <div className="glass-strong p-8 w-full group hover:bg-white/[0.02] hover:border-current transition-all duration-500 rounded-3xl relative overflow-hidden" 
                     style={{ '--tw-border-opacity': 0.3, borderColor: `${phase.color}40` }}>
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                       style={{ backgroundImage: `linear-gradient(to bottom right, ${phase.color}, transparent)` }} />
                       
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10">
                    <span
                      className="text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest inline-block w-max"
                      style={{
                        backgroundColor: `${phase.color}15`,
                        color: phase.color,
                        border: `1px solid ${phase.color}30`
                      }}
                    >
                      {phase.badge}
                    </span>
                    <span className="text-text-muted text-sm font-semibold tracking-wide">
                      {phase.quarter}
                    </span>
                  </div>
                  
                  <h3 className="font-heading font-extrabold text-2xl text-white mb-5 relative z-10">
                    {phase.title}
                  </h3>
                  
                  <ul className="space-y-3 relative z-10">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="text-text-secondary text-[15px] flex items-start gap-3 leading-relaxed"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                          style={{ backgroundColor: phase.color, boxShadow: `0 0 10px ${phase.color}80` }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Floating icon */}
                  <div
                    className="absolute -top-4 -right-4 md:block hidden opacity-20 group-hover:opacity-40 transition-opacity duration-500 mix-blend-screen pointer-events-none"
                    style={{
                      color: phase.color,
                      transform: 'scale(4)'
                    }}
                  >
                    {phase.icon}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
