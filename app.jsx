const { useState, useEffect } = React;
const { motion } = window.Motion;

// --- Components --- //

// Navbar Component
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'How to Buy', href: '#howtobuy' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Chart', href: '#chart' },
];

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass-strong' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <img 
            src="public/lannister_logo.png" 
            alt="Lannister Logo" 
            className="w-10 h-10 object-contain rounded-full border-2 border-neon-purple/50 group-hover:border-electric-blue transition-colors duration-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
          />
          <span className="font-heading font-bold text-xl text-white tracking-tight">
            Lannister
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-secondary text-sm font-medium hover:text-text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-neon-purple after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="btn-primary text-sm py-3 px-6">
            Buy $LANNISTER
          </button>
        </div>

        <button
          className="md:hidden text-text-primary text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <i className="fa-solid fa-times"></i> : <i className="fa-solid fa-bars"></i>}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full glass-strong transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col py-6 px-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-text-secondary text-base font-medium hover:text-text-primary transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <button className="btn-primary text-sm mt-2 text-text-primary">Buy $LANNISTER</button>
        </div>
      </div>
    </nav>
  );
}

// Floating 2D Logo Component (Replacing Coin3D)
function FloatingLogo() {
  return (
    <div className="w-48 h-48 md:w-64 md:h-64 lg:w-[340px] lg:h-[340px] xl:w-[400px] xl:h-[400px] relative z-10 drop-shadow-[0_0_80px_rgba(168,85,247,0.5)] flex justify-center items-center">
      <img src="public/lannister_logo.png" alt="Lannister Logo" className="w-[80%] h-[80%] object-contain" />
    </div>
  );
}

// Hero Component
const heroTags = [
  'A Lannister Always Pays His Debts',
  'Iron Bank Approved',
  'Rule The Realm',
  'Hear Me Roar',
];

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 px-4"
    >
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-neon-purple/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-electric-blue/8 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 mb-10"
      >
        <div className="animate-float relative flex justify-center items-center">
          <div className="absolute inset-0 rounded-full bg-neon-purple/20 blur-[80px] scale-150" />
          <FloatingLogo />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center z-10 mb-6"
      >
        <span className="text-white font-heading font-black text-6xl md:text-8xl lg:text-9xl leading-[1.1] tracking-tighter block mb-2">Hear Me</span>
        <span className="gradient-text max-w-full font-heading font-black text-6xl md:text-8xl lg:text-9xl leading-[1.1] tracking-tighter block pb-4">Roar.</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-text-secondary text-lg md:text-xl lg:text-2xl text-center max-w-2xl mx-auto z-10 mb-12 leading-relaxed font-medium"
      >
        A Lannister always pays his debts. Join the richest house in Westeros. Rule the crypto realm with $LANNISTER.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6 z-10 mb-16 w-full px-4"
      >
        <button className="btn-primary w-full sm:w-auto text-lg py-4 px-10 flex items-center justify-center gap-3">
          Buy $LANNISTER
          <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
        </button>
        <button className="btn-secondary w-full sm:w-auto text-lg py-4 px-10">
          Learn More
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex flex-wrap items-center justify-center gap-3 z-10"
      >
        {heroTags.map((tag) => (
          <span
            key={tag}
            className="glass text-xs md:text-sm text-text-secondary px-4 py-2 rounded-full border border-glass-border hover:border-neon-purple/30 hover:text-white transition-all duration-300 cursor-default"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}
    </section>
  );
}

// About Component
function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric-blue/10 blur-[120px] pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-24 h-24 mx-auto bg-gradient-to-br from-neon-purple to-electric-blue rounded-3xl flex items-center justify-center mb-12 rotate-12 hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-neon-purple/20"
        >
          <i className="fa-solid fa-crown text-4xl text-white"></i>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-text-secondary leading-relaxed"
        >
          Rise with{' '}
          <span className="text-neon-purple">$LANNISTER</span>, where power meets golden returns.
          We control the treasury, with the Iron Bank backing our every move. Empowered by{' '}
          <span className="text-electric-blue">the Lion's roar</span>, forged by the truest lords of Westeros. Join the conquest where{' '}
          <span className="text-neon-purple">royalty meets crypto innovation</span>.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex items-center justify-center mt-20"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-neon-purple/20 blur-[40px] scale-150" />
          <img
            src="public/lannister_coin.png"
            onError={(e) => e.target.src = 'public/lannister_coin.png'}
            alt="Lannister Coin"
            className="w-32 h-32 animate-float-slow relative z-10 drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]"
          />
          <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 text-right">
            <p className="text-text-primary font-heading font-bold text-sm">Buy on DEX</p>
            <p className="text-text-muted text-xs">and claim it all</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Tokenomics Component
const stats = [
  { icon: <i className="fa-solid fa-coins text-2xl"></i>, label: 'Total Supply', value: '1,000,000,000', sub: '$LANNISTER', color: 'from-neon-purple to-neon-purple-light' },
  { icon: <i className="fa-solid fa-cart-shopping text-2xl"></i>, label: 'Buy Tax', value: '0%', sub: 'No buy tax', color: 'from-green-600 to-emerald-700' },
  { icon: <i className="fa-solid fa-tags text-2xl"></i>, label: 'Sell Tax', value: '0%', sub: 'No sell tax', color: 'from-blue-600 to-cyan-700' },
  { icon: <i className="fa-solid fa-fire text-2xl"></i>, label: 'Liquidity', value: 'BURNED', sub: '🔥 Wildfire', color: 'from-red-600 to-orange-700' },
];

const distribution = [
  { label: 'King\'s Landing', pct: 40, color: '#D4AF37' },
  { label: 'Casterly Rock', pct: 30, color: '#8B0000' },
  { label: 'Treasury', pct: 15, color: '#A52A2A' },
  { label: 'Liquidity', pct: 15, color: '#8A7373' },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const cardVariants = { hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } } };

function Tokenomics() {
  return (
    <section id="tokenomics" className="section-padding relative">
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">The King's Treasury</h2>
          <p className="text-text-secondary text-lg max-w-lg mx-auto">Absolute wealth, zero taxes, Lion distribution</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={cardVariants} className="glass-strong p-8 text-center group hover:-translate-y-2 hover:bg-white/[0.03] transition-all duration-500 cursor-default rounded-3xl relative overflow-hidden" style={{ '--tw-border-opacity': 0.1 }}>
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(to bottom, #A855F7, transparent)` }} />
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg relative z-10`}>
                {stat.icon}
              </div>
              <h3 className="text-text-secondary text-sm font-bold tracking-widest uppercase mb-2">{stat.label}</h3>
              <div className="text-3xl font-heading font-black text-white mb-1">{stat.value}</div>
              <div className="text-text-muted text-sm font-medium">{stat.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="glass p-8 md:p-12 rounded-3xl relative z-10 shadow-xl">
          <p className="text-white font-heading font-bold text-2xl mb-8 text-center">Treasury Distribution</p>
          <div className="w-full h-6 rounded-full overflow-hidden flex mb-8 bg-mystery-dark border border-glass-border shadow-inner">
            {distribution.map((d) => (
              <motion.div key={d.label} initial={{ width: 0 }} whileInView={{ width: `${d.pct}%` }} transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }} viewport={{ once: true }} style={{ backgroundColor: d.color, boxShadow: `0 0 10px ${d.color}80` }} className="h-full relative overflow-hidden group/bar">
                <div className="absolute inset-0 w-[200%] opacity-30 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover/bar:translate-x-1/2 transition-transform duration-[2s] ease-in-out" />
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
            {distribution.map((d) => (
              <div key={d.label} className="flex items-center gap-3 glass px-4 py-2 rounded-full border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-3.5 h-3.5 rounded-full shadow-sm shadow-current" style={{ backgroundColor: d.color, color: d.color }} />
                <span className="text-white font-medium text-sm">{d.label} <span className="text-text-secondary ml-1">({d.pct}%)</span></span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// HowToBuy Component
const steps = [
  { step: '01', icon: <i className="fa-solid fa-wallet text-4xl"></i>, title: 'Forge a Wallet', description: 'Download Phantom or any Solana-compatible wallet. Protect your phrase like Castle Black.', color: '#D4AF37' },
  { step: '02', icon: <i className="fa-solid fa-exchange-alt text-4xl"></i>, title: 'Summon SOL', description: 'Buy SOL on a centralized exchange. Send the SOL to your Phantom wallet address.', color: '#8B0000' },
  { step: '03', icon: <i className="fa-solid fa-hand-holding-dollar text-4xl"></i>, title: 'Pledge $LANNISTER', description: 'Connect your wallet to Raydium. Swap your SOL for $LANNISTER. Winter is coming, but we have gold.', color: '#FF2400' },
];

const itemVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

function HowToBuy() {
  return (
    <section id="how-to-buy" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-purple/5 blur-[150px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">How to Pledge?</h2>
          <p className="text-text-secondary text-lg max-w-lg mx-auto">Three simple steps to join the Lions</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-px border-t-2 border-dashed border-glass-border hidden md:block -z-10" />
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="glass p-8 rounded-3xl relative group shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="text-6xl font-heading font-black opacity-5 absolute top-4 right-6 pointer-events-none" style={{ color: step.color }}>{step.step}</div>
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ backgroundColor: `${step.color}15`, color: step.color }}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed font-medium">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Roadmap Component
const phases = [
  { quarter: 'Phase 1', badge: 'THE LION WAKES', title: 'Foundation & Launch', icon: <i className="fa-solid fa-crown text-3xl"></i>, items: ['Token launch on Solana', 'Casterly Rock Treasury setup', 'Initial liquidity locked & burned', 'Vassal gathering'], color: '#D4AF37' },
  { quarter: 'Phase 2', badge: 'MARCHING FORTH', title: 'Realm Expansion', icon: <i className="fa-solid fa-chess-knight text-3xl"></i>, items: ['CEX listing applications', 'Small council formed', 'Community vassalage launch', '10,000 bannermen milestone'], color: '#8B0000' },
  { quarter: 'Phase 3', badge: 'CONQUEST', title: 'Iron Throne Development', icon: <i className="fa-solid fa-khanda text-3xl"></i>, items: ['Lannister Treasury platform live', 'King\'s Guard NFTs', 'Cross-chain bridge development', 'Strategic alliances'], color: '#FF2400' },
  { quarter: 'Phase 4', badge: 'THE GOLDEN AGE', title: 'Seven Kingdoms', icon: <i className="fa-solid fa-dragon text-3xl"></i>, items: ['Multi-chain deployment', 'Merchant guild integrations', 'Mobile raven app release', 'Ruling the crypto realm'], color: '#D4AF37' },
];

function Roadmap() {
  return (
    <section id="roadmap" className="section-padding relative overflow-hidden">
      <div className="max-w-5xl mx-auto z-10 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-20">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">Conquest Plan</h2>
          <p className="text-text-secondary text-lg max-w-lg mx-auto">Our campaign for the Iron Throne</p>
        </motion.div>

        <div className="relative mt-12">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-electric-blue to-transparent opacity-30 shadow-[0_0_15px_rgba(212,175,55,0.5)] z-0" />

          {phases.map((phase, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div key={phase.quarter} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true, margin: '-100px' }} className={`relative z-10 flex flex-col md:flex-row items-center gap-8 mb-24 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot & Icon */}
                <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 flex items-center justify-center -translate-y-[-10px] md:-translate-y-[20px] z-20">
                  <div className="w-6 h-6 rounded-full bg-mystery-dark border-4 border-white shadow-[0_0_20px_rgba(212,175,55,0.6)] z-20" style={{ borderColor: phase.color }} />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-[60px] md:ml-0 ${isEven ? 'md:pr-12 lg:pr-16 text-left md:text-right' : 'md:pl-12 lg:pl-16 text-left'}`}>
                  <div className="glass p-8 rounded-3xl transform transition-transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: phase.color }} />
                    <div className="absolute opacity-5 -right-6 top-1/2 -translate-y-1/2 transition-transform group-hover:scale-110 pointer-events-none" style={{ color: phase.color }}>
                      {phase.icon}
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-4 bg-mystery-dark shadow-inner text-white" style={{ border: `1px solid ${phase.color}40`, textShadow: `0 0 10px ${phase.color}80` }}>
                      {phase.quarter} • {phase.badge}
                    </div>
                    <h3 className="text-3xl font-heading font-black text-white mb-6">{phase.title}</h3>
                    <ul className="space-y-4">
                      {phase.items.map((item, i) => (
                        <li key={i} className={`flex items-start gap-3 ${isEven ? 'md:flex-row-reverse md:justify-end' : ''}`}>
                          <div className="mt-1 flex-shrink-0" style={{ color: phase.color }}><i className="fa-solid fa-check-circle text-sm" /></div>
                          <span className="text-text-secondary font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// LiveChart Component
function LiveChart() {
  return (
    <section id="chart" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">The Crown's Ledger</h2>
          <p className="text-text-secondary text-lg max-w-lg mx-auto">Track $LANNISTER vault status in real-time</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="glass-strong p-2 md:p-4">
          <div className="aspect-[16/9] md:aspect-[21/9] w-full rounded-2xl overflow-hidden bg-mystery-dark flex items-center justify-center border border-glass-border">
            {/* DexScreener Integration */}
            <iframe 
              src="https://dexscreener.com/solana/placeholder?embed=1&theme=dark&info=0" 
              className="w-full h-full border-0"
              title="Lannister Chart"
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer Component
const socialLinks = [
  { icon: <i className="fa-brands fa-twitter"></i>, href: '#', label: 'Twitter' },
  { icon: <i className="fa-brands fa-telegram"></i>, href: '#', label: 'Telegram' },
  { icon: <i className="fa-brands fa-discord"></i>, href: '#', label: 'Discord' },
  { icon: <i className="fa-brands fa-github"></i>, href: '#', label: 'GitHub' },
];

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'How to Buy', href: '#howtobuy' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Chart', href: '#chart' },
];

function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-glass-border relative bg-mystery-dark">
      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="public/lannister_logo.png" 
                alt="Lannister Logo" 
                className="w-10 h-10 object-contain rounded-full border-2 border-neon-purple/50"
              />
              <span className="font-heading font-bold text-xl text-white">Lannister</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">The richest house on Solana. Rule the market with golden precision and absolute power.</p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-text-primary mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-text-secondary text-sm hover:text-neon-purple transition-colors duration-300">{link.label}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Join the Community</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a key={social.icon} href={social.href} className="w-10 h-10 rounded-full glass-border-dark flex items-center justify-center text-white hover:text-white hover:bg-neon-purple hover:-translate-y-1 transition-all duration-300">
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">© 2024 House Lannister. All rights reserved. Not financial advice.</p>
          <p className="text-text-muted text-xs">Forged with 🦁 by the Lannister Vaults</p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div className="relative text-text-primary selection:bg-neon-purple selection:text-white pb-20 overflow-x-hidden min-h-screen bg-mystery-black">

      <Navbar />
      <main>
        <Hero />
        <About />
        <Tokenomics />
        <HowToBuy />
        <Roadmap />
        <LiveChart />
      </main>
      <Footer />
    </div>
  );
}

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
