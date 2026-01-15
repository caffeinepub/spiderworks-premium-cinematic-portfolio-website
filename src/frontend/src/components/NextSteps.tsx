import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function NextSteps() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Ready to elevate <br />
            <span className="text-gold glow-text">your visuals?</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Let's collaborate and bring your creative vision to life with cinematic excellence.
          </p>

          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gold text-black hover:bg-gold/90 transition-all duration-300 px-10 py-7 text-xl font-semibold shadow-gold group"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
