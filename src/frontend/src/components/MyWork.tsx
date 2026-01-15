import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  software: string[];
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Epic Cinematic Reel',
    category: 'Cinematic Reels',
    description: 'A breathtaking showcase of cinematic storytelling with dynamic transitions and color grading.',
    software: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    image: '/assets/generated/cinematic-reel-thumb.dim_300x200.jpg',
  },
  {
    id: '2',
    title: 'Midnight Dreams',
    category: 'Short Films',
    description: 'An emotional short film exploring themes of hope and resilience through visual poetry.',
    software: ['Premiere Pro', 'DaVinci Resolve'],
    image: '/assets/generated/short-film-thumb.dim_300x200.jpg',
  },
  {
    id: '3',
    title: 'Rhythm & Soul',
    category: 'Music Videos',
    description: 'High-energy music video with synchronized cuts and stunning visual effects.',
    software: ['After Effects', 'Premiere Pro'],
    image: '/assets/generated/music-video-thumb.dim_300x200.jpg',
  },
  {
    id: '4',
    title: 'Viral Social Campaign',
    category: 'Social Media Edits',
    description: 'Fast-paced, attention-grabbing content optimized for social media platforms.',
    software: ['Premiere Pro', 'After Effects'],
    image: '/assets/generated/social-media-thumb.dim_300x200.jpg',
  },
  {
    id: '5',
    title: 'Luxury Brand Film',
    category: 'Commercials',
    description: 'Premium commercial showcasing elegance and sophistication through cinematic visuals.',
    software: ['DaVinci Resolve', 'Premiere Pro'],
    image: '/assets/generated/commercial-thumb.dim_300x200.jpg',
  },
];

const categories = ['All', 'Cinematic Reels', 'Short Films', 'Music Videos', 'Social Media Edits', 'Commercials'];

export default function MyWork() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="work" className="py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-gold glow-text-subtle">Work</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A curated collection of cinematic projects that showcase storytelling excellence
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gold text-black shadow-gold-lg border-glow-strong'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-gold border border-gold/20 hover:border-gold hover:shadow-gold hover:border-glow'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="bg-zinc-900 border-gold/20 overflow-hidden group cursor-pointer hover:border-gold transition-all duration-300 hover:shadow-gold-xl hover:border-glow-strong"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-gold text-lg font-semibold glow-text">
                    Watch the Story Unfold
                  </span>
                </div>
              </div>
              <CardContent className="p-6 space-y-3">
                <div className="text-gold text-sm font-medium glow-text-subtle">{item.category}</div>
                <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.software.map((soft) => (
                    <span
                      key={soft}
                      className="text-xs px-3 py-1 bg-gold/10 text-gold border border-gold/30 rounded-full hover:border-gold hover:shadow-gold transition-all duration-300"
                    >
                      {soft}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
