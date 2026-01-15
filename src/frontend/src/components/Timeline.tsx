const milestones = [
  {
    year: '2024',
    title: 'The Beginning',
    description: 'Started professional video editing journey with SpiderWorks, focusing on cinematic storytelling and creative excellence.',
  },
  {
    year: 'Q2',
    title: 'Building Expertise',
    description: 'Mastered advanced editing techniques, color grading, and motion graphics while working on diverse projects.',
  },
  {
    year: 'Q3',
    title: 'Growing Portfolio',
    description: 'Expanded into music videos, brand commercials, and social media content, building a strong client base.',
  },
  {
    year: '2025',
    title: 'Professional Recognition',
    description: 'Established reputation for cinematic quality and precision, delivering premium video editing services.',
  },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-950 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-gold glow-text-subtle">Journey</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            1 Years Experience - A timeline of rapid growth and creative mastery
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line with Enhanced Glow */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-transparent shadow-gold"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Year Badge with Enhanced Glow */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-black border-2 border-gold rounded-full flex items-center justify-center z-10 shadow-gold-lg hover:shadow-gold-xl transition-all duration-300 border-glow-strong">
                    <span className="text-gold font-bold text-sm glow-text-subtle">{milestone.year}</span>
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-[calc(50%-4rem)] ${
                      index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'
                    } pl-20 md:pl-0`}
                  >
                    <div className="bg-zinc-900 border border-gold/20 rounded-lg p-6 hover:border-gold transition-all duration-300 hover:shadow-gold-lg hover:border-glow">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{milestone.title}</h3>
                      <p className="text-white/60 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
