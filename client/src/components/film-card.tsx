import { Link } from "wouter";
import { Eye, Users, Target } from "lucide-react";
import type { Film } from "@/data/films";

interface FilmCardProps {
  film: Film;
  index: number;
}

export function FilmCard({ film, index }: FilmCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const cardClass = `film-card-${(index % 3) + 1}`;

  return (
    <div className={`${cardClass} rounded-xl overflow-hidden shadow-custom hover:shadow-hover hover:transform hover:-translate-y-2 transition-all duration-300 group`}>
      <div className="relative h-80 overflow-hidden">
        <img
          src={film.posterUrl}
          alt={`${film.title} poster`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <Link
              href={`/film/${film.id}`}
              className="flex items-center gap-2 text-white font-semibold hover:text-[var(--kwento-secondary)] transition-colors"
            >
              <Eye size={18} />
              View Details
            </Link>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-heading text-xl font-bold text-[var(--kwento-primary)] leading-tight">
            {film.title}
          </h3>
        </div>
        
        <p className="text-[var(--kwento-neutral-medium)] text-sm mb-4">
          {film.year} • {film.genre}
        </p>
        
        <p className="text-[var(--kwento-text-dark)] mb-6 line-clamp-3 leading-relaxed">
          {film.description}
        </p>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-[var(--kwento-text-dark)]">
              Funding Progress
            </span>
            <span className="text-sm font-bold text-[var(--kwento-success)]">
              {film.progressPercentage}%
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full gradient-success rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${film.progressPercentage}%` }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
          <div>
            <div className="font-bold text-[var(--kwento-primary)] text-sm">
              {formatCurrency(film.raised)}
            </div>
            <div className="text-xs text-[var(--kwento-neutral-medium)] flex items-center justify-center gap-1">
              <Target size={12} />
              Raised
            </div>
          </div>
          <div>
            <div className="font-bold text-[var(--kwento-primary)] text-sm">
              {formatCurrency(film.goal)}
            </div>
            <div className="text-xs text-[var(--kwento-neutral-medium)]">Goal</div>
          </div>
          <div>
            <div className="font-bold text-[var(--kwento-primary)] text-sm">
              {film.backers.toLocaleString()}
            </div>
            <div className="text-xs text-[var(--kwento-neutral-medium)] flex items-center justify-center gap-1">
              <Users size={12} />
              Backers
            </div>
          </div>
        </div>
        
        <Link href={`/film/${film.id}`}>
          <button className="w-full gradient-accent text-white font-semibold py-3 rounded-xl hover:transform hover:-translate-y-1 transition-all duration-300">
            Support This Film
          </button>
        </Link>
      </div>
    </div>
  );
}
