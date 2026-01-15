import { Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX, SiYoutube } from 'react-icons/si';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/assets/generated/spiderworks-logo-transparent.dim_200x200.png"
                alt="SpiderWorks"
                className="h-12 w-12"
              />
              <span className="text-2xl font-bold text-gold">SpiderWorks</span>
            </div>
            <p className="text-white/60 italic">Cinematic stories. Precision edits.</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gold/20 hover:border-gold transition-all duration-300"
                aria-label="Facebook"
              >
                <SiFacebook className="w-5 h-5 text-gold" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gold/20 hover:border-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5 text-gold" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gold/20 hover:border-gold transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <SiX className="w-5 h-5 text-gold" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gold/20 hover:border-gold transition-all duration-300"
                aria-label="YouTube"
              >
                <SiYoutube className="w-5 h-5 text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-white/60 hover:text-gold transition-colors duration-300 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="text-white/60 hover:text-gold transition-colors duration-300 text-left"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white/60 hover:text-gold transition-colors duration-300 text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white/60 hover:text-gold transition-colors duration-300 text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Get in Touch</h3>
            <div className="space-y-2 text-white/60">
              <p>Email: hello@spiderworks.com</p>
              <p>Available for freelance projects</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>© {currentYear} SpiderWorks. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-gold fill-gold" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
