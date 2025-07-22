import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FilmCard } from "@/components/film-card";
import { Footer } from "@/components/footer";
import { films } from "@/data/films";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    const filmCards = document.querySelectorAll('.film-card');
    filmCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      
      {/* Featured Films Section */}
      <section id="films" className="py-20 bg-[var(--kwento-neutral-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--kwento-primary)] mb-4">
              Featured Film Projects
            </h2>
            <p className="text-lg text-[var(--kwento-text-dark)]/80 max-w-3xl mx-auto leading-relaxed">
              Support these exceptional Filipino films and help bring authentic stories to audiences worldwide. 
              Each project represents the passion and creativity of Filipino filmmakers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {films.map((film, index) => (
              <div key={film.id} className="film-card">
                <FilmCard film={film} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 gradient-primary text-[var(--kwento-text-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Empowering Filipino Storytellers
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                Kwento bridges the gap between passionate Filipino filmmakers and supporters who believe in authentic storytelling. 
                Our platform provides the tools and community needed to bring compelling Filipino narratives to life.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Every film tells a story that matters. Every story deserves an audience. Through crowdfunding, 
                we democratize film production and ensure that diverse Filipino voices are heard on the global stage.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Join our community of film enthusiasts, creative supporters, and storytelling champions as we celebrate 
                the rich tradition of Philippine cinema.
              </p>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-hover">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Filipino filmmaker at work"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
