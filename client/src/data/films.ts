export interface Film {
  id: string;
  title: string;
  year: number;
  genre: string;
  description: string;
  posterUrl: string;
  raised: number;
  goal: number;
  backers: number;
  progressPercentage: number;
  fullDescription: string;
  cast: string[];
  director: string;
  writer: string;
  synopsis: string;
  galleryImages: string[];
}

export const films: Film[] = [
  {
    id: 'shes-dating-the-gangster',
    title: "She's Dating the Gangster",
    year: 2014,
    genre: 'Romance/Drama',
    description: 'A heartwarming tale of young love that transcends time, following Athena and Kenji\'s journey from teenage romance to adult responsibilities. Based on the bestselling novel that captured the hearts of millions.',
    posterUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    raised: 2340000,
    goal: 3000000,
    backers: 1247,
    progressPercentage: 78,
    fullDescription: 'She\'s Dating the Gangster tells the story of 17-year-old Athena Dizon who unwittingly plays a trick on resident heartthrob and bad boy, gangster, Kenji de los Reyes. All of a sudden, she finds herself pretending to be his girlfriend to make an ex jealous; and he, pretending to be her boyfriend to make her ex-boyfriend jealous. The simple game turns into something more when Athena and Kenji find themselves falling in love with each other. But their love story is far from perfect, as they deal with the harsh realities of life and the consequences of their choices.',
    cast: ['Kathryn Bernardo', 'Daniel Padilla', 'Richard Gomez', 'Dawn Zulueta'],
    director: 'Cathy Garcia-Sampana',
    writer: 'Carmi Raymundo',
    synopsis: 'Based on the popular Wattpad novel by Bianca Bernardino, this film explores themes of young love, sacrifice, and the bittersweet nature of relationships that define our youth.',
    galleryImages: [
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ]
  },
  {
    id: 'seven-sundays',
    title: 'Seven Sundays',
    year: 2017,
    genre: 'Family/Drama',
    description: 'A powerful story about a Filipino family reuniting to care for their ailing father, discovering that healing relationships takes more than just good intentions. A touching exploration of family bonds.',
    posterUrl: 'https://images.unsplash.com/photo-1577003833619-76bbd7f82948?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    raised: 4140000,
    goal: 4500000,
    backers: 2089,
    progressPercentage: 92,
    fullDescription: 'Seven Sundays follows the Bonifacio siblings who are forced to reunite for their father\'s birthday celebration. What starts as a simple gathering becomes a journey of rediscovering family bonds, confronting old grudges, and learning to forgive. The film explores the complexities of Filipino family dynamics with both humor and heart.',
    cast: ['Aga Muhlach', 'Dingdong Dantes', 'Enrique Gil', 'Cristine Reyes'],
    director: 'Cathy Garcia-Sampana',
    writer: 'Noreen Capili',
    synopsis: 'A heartfelt comedy-drama that celebrates the imperfect but enduring bonds of Filipino families, showing how love can heal even the deepest wounds.',
    galleryImages: [
      'https://images.unsplash.com/photo-1577003833619-76bbd7f82948?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ]
  },
  {
    id: '100-tula-para-kay-stella',
    title: '100 Tula Para Kay Stella',
    year: 2017,
    genre: 'Romance/Poetry',
    description: 'An intimate portrait of unrequited love told through poetry, following Fidel as he pours his heart into 100 poems for Stella. A beautiful meditation on love, art, and the courage to express oneself.',
    posterUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    raised: 1625000,
    goal: 2500000,
    backers: 892,
    progressPercentage: 65,
    fullDescription: '100 Tula Para Kay Stella is a coming-of-age romantic drama that follows Fidel, a shy college student who expresses his feelings for his college crush Stella through poetry. The film beautifully captures the awkwardness of young love and the power of words to convey emotions that are too difficult to speak aloud.',
    cast: ['JC Santos', 'Bela Padilla', 'Nico Antonio', 'Arci Muñoz'],
    director: 'Jason Paul Laxamana',
    writer: 'Jason Paul Laxamana',
    synopsis: 'A tender and authentic portrayal of Filipino millennial romance, exploring themes of unrequited love, artistic expression, and the journey to self-discovery.',
    galleryImages: [
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ]
  }
];

export const getFilmById = (id: string): Film | undefined => {
  return films.find(film => film.id === id);
};
