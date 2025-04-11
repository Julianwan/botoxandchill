import Image from 'next/image';
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Veronica Wellington-Smythe",
      title: "Yacht Club Socialite",
      quote: "After my treatments at Botox & Chill, my husband's friends stopped asking if I was his mother. Now they ask if I'm his daughter's friend. Worth every penny of his money!",
      avatar: "https://placehold.co/100x100/1a1a1a/d4af37?text=VW"
    },
    {
      name: "Theodore Richmont III",
      title: "Hedge Fund Manager",
      quote: "I used to close million-dollar deals with a frown. Now I close billion-dollar deals with a smile that doesn't move. That's what I call return on investment.",
      avatar: "https://placehold.co/100x100/1a1a1a/d4af37?text=TR"
    },
    {
      name: "Penelope Luxington",
      title: "Reality TV Personality",
      quote: "My followers quadrupled after my Golden Facial! The camera crew for my show now spends 50% less time on post-production editing. My glow is literally saving the network money.",
      avatar: "https://placehold.co/100x100/1a1a1a/d4af37?text=PL"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">What Our Elite Clients Say</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from our distinguished clientele who wouldn&apos;t trust their faces to anyone else.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary p-8 rounded-lg luxury-border">
              <div className="flex items-center mb-6">
                <Image 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mr-4 border-2 border-primary"
                />
                <div>
                  <h4 className="text-xl font-serif text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">&quot;{testimonial.quote}&quot;</p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
