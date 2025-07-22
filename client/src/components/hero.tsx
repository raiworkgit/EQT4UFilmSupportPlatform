import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToFilms = () => {
    const filmsSection = document.getElementById('films');
    if (filmsSection) {
      filmsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen hero-bg flex items-center justify-center text-center px-4 pt-16">
      <div className="max-w-4xl mx-auto fade-in">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-[var(--kwento-text-light)] mb-6 leading-tight">
          Authentic Filipino Stories Deserve to be Told
        </h1>
        <p className="text-lg md:text-xl text-[var(--kwento-text-light)]/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Support independent Filipino filmmakers and help bring compelling stories to life through crowdfunding. 
          Discover, fund, and celebrate the rich tapestry of Philippine cinema.
        </p>
        <button
          onClick={scrollToFilms}
          className="inline-flex items-center gap-2 gradient-secondary text-[var(--kwento-primary)] px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wide hover:transform hover:-translate-y-1 hover:shadow-hover transition-all duration-300"
        >
          Explore Films
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
}
