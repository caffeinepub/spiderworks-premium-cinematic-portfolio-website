import { Button } from '@/components/ui/button';
import { Mail, Instagram, Send } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';

export default function Contact() {
  const contactInfo = [
    {
      icon: <SiInstagram className="w-8 h-8" />,
      label: 'Instagram',
      value: '@yawr.piyush',
      link: 'https://instagram.com/yawr.piyush',
    },
    {
      icon: <SiInstagram className="w-8 h-8" />,
      label: 'Instagram',
      value: '@_black_velour_',
      link: 'https://instagram.com/_black_velour_',
    },
    {
      icon: <Mail className="w-8 h-8" />,
      label: 'Email',
      value: 'Kumarsinghm070@gmail.com',
      link: 'mailto:Kumarsinghm070@gmail.com',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-zinc-950 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let's <span className="text-gold">Connect</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's create something cinematic together.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-zinc-900 border-2 border-gold/30 rounded-lg p-8 md:p-12 space-y-8 shadow-gold">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gold mb-2">
                Let's Create Something Cinematic
              </h3>
              <p className="text-white/70">Reach out through any of these channels</p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 bg-black border border-gold/20 rounded-lg hover:border-gold transition-all duration-300 hover:shadow-gold group"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-zinc-900 border border-gold/30 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                    {contact.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-white/60 text-sm mb-1">{contact.label}</div>
                    <div className="text-white text-lg md:text-xl font-semibold group-hover:text-gold transition-colors">
                      {contact.value}
                    </div>
                  </div>
                  <Send className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-gold/20">
              <p className="text-center text-white/60 text-sm">
                Available for freelance projects and collaborations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
