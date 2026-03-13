import { FaTwitter, FaTelegramPlane, FaDiscord, FaGithub } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  { icon: <FaTelegramPlane />, href: '#', label: 'Telegram' },
  { icon: <FaDiscord />, href: '#', label: 'Discord' },
  { icon: <FaGithub />, href: '#', label: 'GitHub' },
];

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'How to Buy', href: '#howtobuy' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Chart', href: '#chart' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-glass-border">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-purple to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-neon-purple to-electric-blue flex items-center justify-center text-white font-bold text-sm">
                ?
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Mystery
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              The first community-driven raffle token on Solana. Every coin is a chance at something extraordinary.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-text-secondary text-sm hover:text-neon-purple transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">
              Join the Community
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-neon-purple hover:border-neon-purple/30 transition-all duration-300 text-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-text-muted text-xs mt-4">
              Follow us for the latest updates and announcements.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © 2024 $MYSTERY. All rights reserved. This is not financial advice.
          </p>
          <p className="text-text-muted text-xs">
            Built with 💜 by the Mystery Community
          </p>
        </div>
      </div>
    </footer>
  );
}
