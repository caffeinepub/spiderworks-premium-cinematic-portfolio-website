export default function About() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Portrait */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gold/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative overflow-hidden rounded-lg border-2 border-gold/30 group-hover:border-gold transition-all duration-300">
                <img
                  src="/assets/generated/editor-portrait.dim_400x500.jpg"
                  alt="SpiderWorks Editor"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <div>
                <span className="text-gold text-sm font-semibold tracking-widest uppercase border border-gold/30 px-4 py-2 rounded-full inline-block mb-4">
                  About Me
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                  Crafting Stories with <span className="text-gold">Precision</span>
                </h2>
              </div>

              <div className="h-1 w-24 bg-gradient-to-r from-gold to-transparent"></div>

              <div className="space-y-4 text-white/70 text-lg leading-relaxed">
                <p>
                  I'm a professional video editor with a passion for cinematic storytelling. 
                  My journey began with a simple fascination for how moving images could evoke 
                  emotions and tell powerful stories.
                </p>
                <p>
                  Over the years, I've honed my craft across various genres—from high-energy 
                  music videos to emotional short films, from viral social media content to 
                  premium brand commercials. Every project is an opportunity to push creative 
                  boundaries and deliver excellence.
                </p>
                <p>
                  My approach combines technical expertise with artistic vision. I believe that 
                  great editing is invisible—it serves the story, enhances the emotion, and 
                  keeps the audience engaged from the first frame to the last.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-gold/10 border border-gold/30 rounded-lg px-6 py-3">
                  <div className="text-gold font-semibold">Specialty</div>
                  <div className="text-white text-sm">Cinematic Storytelling</div>
                </div>
                <div className="bg-gold/10 border border-gold/30 rounded-lg px-6 py-3">
                  <div className="text-gold font-semibold">Focus</div>
                  <div className="text-white text-sm">Attention to Detail</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
