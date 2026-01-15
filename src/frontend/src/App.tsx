import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import Hero from './components/Hero';
import Intro from './components/Intro';
import MyWork from './components/MyWork';
import Skills from './components/Skills';
import About from './components/About';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Contact from './components/Contact';
import NextSteps from './components/NextSteps';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Hero />
          <Intro />
          <MyWork />
          <Skills />
          <About />
          <Timeline />
          <Services />
          <Contact />
          <NextSteps />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
