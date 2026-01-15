import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! I\'ll get back to you soon.', {
      description: 'Thank you for reaching out to SpiderWorks.',
    });

    setFormData({ name: '', email: '', projectType: '', message: '' });
    setIsSubmitting(false);
  };

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

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-zinc-900 border border-gold/20 rounded-lg p-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-black border-gold/30 text-white placeholder:text-white/40 focus:border-gold"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-black border-gold/30 text-white placeholder:text-white/40 focus:border-gold"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType" className="text-white">
                  Project Type
                </Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  required
                >
                  <SelectTrigger className="bg-black border-gold/30 text-white focus:border-gold">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-gold/30">
                    <SelectItem value="cinematic">Cinematic Editing</SelectItem>
                    <SelectItem value="reels">Reels Creation</SelectItem>
                    <SelectItem value="brand">Brand Film</SelectItem>
                    <SelectItem value="music">Music Video</SelectItem>
                    <SelectItem value="youtube">YouTube Editing</SelectItem>
                    <SelectItem value="motion">Motion Graphics</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-black border-gold/30 text-white placeholder:text-white/40 focus:border-gold resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold text-black hover:bg-gold/90 transition-all duration-300 py-6 text-lg font-semibold shadow-gold group"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Let's Create Something Cinematic
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
