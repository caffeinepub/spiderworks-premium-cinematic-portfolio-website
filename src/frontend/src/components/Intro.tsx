export default function Intro() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase border border-gold/30 px-4 py-2 rounded-full">
              About SpiderWorks
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Where <span className="text-gold">Storytelling</span> Meets Precision
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            SpiderWorks is more than just video editing—it's about crafting cinematic experiences 
            that resonate with audiences. With a keen eye for detail and a passion for storytelling, 
            I transform raw footage into compelling visual narratives that captivate, inspire, and leave 
            a lasting impact. Every project is an opportunity to push creative boundaries and deliver 
            excellence frame by frame.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gold">500+</div>
              <div className="text-white/60">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gold">50+</div>
              <div className="text-white/60">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gold">4+</div>
              <div className="text-white/60">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
