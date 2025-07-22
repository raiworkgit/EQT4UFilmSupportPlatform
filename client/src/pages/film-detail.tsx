import { useRoute } from "wouter";
import { ArrowLeft, Users, Target, Calendar, User, Edit3, Camera } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getFilmById } from "@/data/films";
import { useEffect, useState } from "react";

export default function FilmDetail() {
  const [, params] = useRoute("/film/:id");
  const [imageIndex, setImageIndex] = useState(0);
  const film = params?.id ? getFilmById(params.id) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!film) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-muted-foreground mb-4">Film Not Found</h1>
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={film.galleryImages[imageIndex]}
            alt={film.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Home
              </Link>
              
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
                {film.title}
              </h1>
              <div className="flex items-center gap-4 text-white/90 text-lg">
                <span className="flex items-center gap-2">
                  <Calendar size={18} />
                  {film.year}
                </span>
                <span>•</span>
                <span>{film.genre}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Synopsis */}
              <section>
                <h2 className="font-heading text-2xl font-bold text-[var(--kwento-primary)] mb-4">
                  Synopsis
                </h2>
                <p className="text-[var(--kwento-text-dark)] leading-relaxed mb-4">
                  {film.synopsis}
                </p>
                <p className="text-[var(--kwento-text-dark)] leading-relaxed">
                  {film.fullDescription}
                </p>
              </section>

              {/* Cast & Crew */}
              <section>
                <h2 className="font-heading text-2xl font-bold text-[var(--kwento-primary)] mb-4">
                  Cast & Crew
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold text-[var(--kwento-text-dark)] mb-3">
                      <Camera size={18} />
                      Director
                    </h3>
                    <p className="text-[var(--kwento-text-dark)]/80">{film.director}</p>
                  </div>
                  
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold text-[var(--kwento-text-dark)] mb-3">
                      <Edit3 size={18} />
                      Writer
                    </h3>
                    <p className="text-[var(--kwento-text-dark)]/80">{film.writer}</p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h3 className="flex items-center gap-2 font-semibold text-[var(--kwento-text-dark)] mb-3">
                      <User size={18} />
                      Main Cast
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {film.cast.map((actor, index) => (
                        <span key={index} className="text-[var(--kwento-text-dark)]/80">
                          {actor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Gallery */}
              <section>
                <h2 className="font-heading text-2xl font-bold text-[var(--kwento-primary)] mb-4">
                  Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {film.galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setImageIndex(index)}
                      className={`relative rounded-lg overflow-hidden aspect-video hover:opacity-80 transition-opacity ${
                        imageIndex === index ? 'ring-4 ring-[var(--kwento-secondary)]' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${film.title} scene ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Funding Progress */}
              <div className="bg-white rounded-xl p-6 shadow-custom">
                <h3 className="font-heading text-xl font-bold text-[var(--kwento-primary)] mb-4">
                  Funding Progress
                </h3>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-[var(--kwento-text-dark)]">
                      Progress
                    </span>
                    <span className="text-sm font-bold text-[var(--kwento-success)]">
                      {film.progressPercentage}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full gradient-success rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${film.progressPercentage}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Target size={16} className="text-[var(--kwento-success)]" />
                      <span className="text-sm text-[var(--kwento-text-dark)]">Raised</span>
                    </div>
                    <span className="font-bold text-[var(--kwento-primary)]">
                      {formatCurrency(film.raised)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--kwento-text-dark)]">Goal</span>
                    <span className="font-bold text-[var(--kwento-text-dark)]">
                      {formatCurrency(film.goal)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-[var(--kwento-accent)]" />
                      <span className="text-sm text-[var(--kwento-text-dark)]">Backers</span>
                    </div>
                    <span className="font-bold text-[var(--kwento-primary)]">
                      {film.backers.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button className="w-full gradient-accent text-white font-semibold py-4 rounded-xl hover:transform hover:-translate-y-1 transition-all duration-300">
                  Support This Film
                </button>
              </div>

              {/* Film Details */}
              <div className="bg-white rounded-xl p-6 shadow-custom">
                <h3 className="font-heading text-xl font-bold text-[var(--kwento-primary)] mb-4">
                  Film Details
                </h3>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-semibold text-[var(--kwento-text-dark)]">Release Year:</span>
                    <p className="text-[var(--kwento-text-dark)]/80">{film.year}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-[var(--kwento-text-dark)]">Genre:</span>
                    <p className="text-[var(--kwento-text-dark)]/80">{film.genre}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-[var(--kwento-text-dark)]">Director:</span>
                    <p className="text-[var(--kwento-text-dark)]/80">{film.director}</p>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="bg-white rounded-xl p-6 shadow-custom">
                <h3 className="font-heading text-xl font-bold text-[var(--kwento-primary)] mb-4">
                  Share This Film
                </h3>
                <p className="text-sm text-[var(--kwento-text-dark)]/80 mb-4">
                  Help spread the word about this amazing Filipino film project.
                </p>
                <button className="w-full border-2 border-[var(--kwento-primary)] text-[var(--kwento-primary)] font-semibold py-3 rounded-xl hover:bg-[var(--kwento-primary)] hover:text-white transition-all duration-300">
                  Share Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
