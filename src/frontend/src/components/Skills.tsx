const skills = [
  {
    name: 'Cinematic Editing',
    icon: '/assets/generated/camera-icon-gold.dim_64x64.png',
    level: 95,
  },
  {
    name: 'Color Grading',
    icon: '/assets/generated/color-wheel-icon-gold.dim_64x64.png',
    level: 90,
  },
  {
    name: 'Sound Design',
    icon: '/assets/generated/sound-wave-icon-gold.dim_64x64.png',
    level: 85,
  },
  {
    name: 'Motion Graphics',
    icon: '/assets/generated/motion-graphics-icon-gold.dim_64x64.png',
    level: 88,
  },
  {
    name: 'Reels & Shorts',
    icon: '/assets/generated/play-button-icon-gold.dim_64x64.png',
    level: 92,
  },
  {
    name: 'Story-Driven Cuts',
    icon: '/assets/generated/scissors-icon-gold.dim_64x64.png',
    level: 96,
  },
];

export default function Skills() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Core <span className="text-gold">Skills</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Mastering the art and craft of cinematic video editing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-black/50 border border-gold/20 rounded-lg p-6 hover:border-gold transition-all duration-300 hover:shadow-gold group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{skill.name}</h3>
                  <div className="text-gold text-sm font-semibold">{skill.level}%</div>
                </div>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-gold to-yellow-600 h-full rounded-full transition-all duration-1000 shadow-gold"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
