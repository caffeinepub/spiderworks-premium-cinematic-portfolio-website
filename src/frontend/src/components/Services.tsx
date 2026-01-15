import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Film, Video, Sparkles, Music, Youtube, Wand2 } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: 'Cinematic Editing',
    description: 'Transform your footage into cinematic masterpieces with professional color grading, dynamic transitions, and storytelling excellence.',
  },
  {
    icon: Video,
    title: 'Reels Creation',
    description: 'Engaging short-form content optimized for Instagram Reels, TikTok, and YouTube Shorts that captures attention and drives engagement.',
  },
  {
    icon: Sparkles,
    title: 'Brand Films',
    description: 'Premium brand storytelling that showcases your products and services with elegance, sophistication, and visual impact.',
  },
  {
    icon: Music,
    title: 'Music Videos',
    description: 'High-energy music video production with synchronized cuts, creative effects, and visual storytelling that amplifies your sound.',
  },
  {
    icon: Youtube,
    title: 'YouTube Editing',
    description: 'Professional YouTube video editing with engaging pacing, graphics, and optimization for maximum viewer retention.',
  },
  {
    icon: Wand2,
    title: 'Motion Graphics',
    description: 'Eye-catching motion graphics, titles, and visual effects that add polish and professionalism to your videos.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-gold">Services</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Comprehensive video editing solutions tailored to your creative vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="bg-zinc-900 border-2 border-gold/20 hover:border-gold transition-all duration-300 hover:shadow-gold group"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
