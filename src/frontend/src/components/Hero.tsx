import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-background.dim_1920x1080.jpg"
          alt="Cinematic Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-white">Crafting Cinematic Stories</span>
            <br />
            <span className="text-gold glow-text">Frame by Frame.</span>
          </h1>
          
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gold tracking-wide glow-text-subtle">
            Your Frame, Our Edit
          </div>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Professional video editing that transforms raw footage into compelling visual narratives.
            Every cut tells a story. Every frame matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection('work')}
              className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 px-8 py-6 text-lg font-semibold group shadow-gold hover:shadow-gold-xl border-glow hover:border-glow-strong"
            >
              View Work
              <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="blue-glow-box-intense animate-pulse-blue-glow-cinematic hover:animate-pulse-blue-glow-ultra">
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-br from-gold via-gold to-[#FFD700] text-black hover:from-[#FFD700] hover:via-gold hover:to-gold transition-all duration-500 px-8 py-6 text-lg font-bold shadow-gold-lg hover:shadow-gold-xl group relative overflow-hidden hire-me-button"
              >
                <span className="relative z-10 text-shadow-white-blue">Hire Me</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2 shadow-gold">
          <div className="w-1 h-3 bg-gold rounded-full animate-scroll shadow-gold"></div>
        </div>
      </div>
    </section>
  );
}
