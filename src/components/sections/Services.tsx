import React from 'react';
import Image, { StaticImageData } from 'next/image';
import GoldFacial from "../../app/images/GoldFace.png"
import BillBot from "../../app/images/BillBot.png"
import RedCarpet from "../../app/images/RedCarpet.png"
import NetFill from "../../app/images/NetFill.png"
const ServiceCard = ({ title, description, imagePlaceholder, price }: { 
  title: string; 
  description: string; 
  imagePlaceholder: StaticImageData;
  price: string;
}) => {
  return (
    <div className="bg-secondary rounded-lg overflow-hidden luxury-shadow transition-transform duration-300 hover:transform hover:-translate-y-2">
      <div className="relative h-64 w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        <div className="w-full h-full relative">
          <Image src={imagePlaceholder} alt="serviceImage" layout='fill' objectFit='cover'/>
          
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-serif">{title}</h3>
          <span className="text-primary font-bold">{price}</span>
        </div>
        <p className="text-gray-300">{description}</p>
        <button className="mt-6 btn-luxury-outline px-6 py-2 rounded-full text-sm w-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "The Billionaire Botox",
      description: "Our signature treatment that promises to freeze not just your wrinkles, but your bank account too. Clients report looking so good, their credit scores improved by 50 points.",
      imagePlaceholder: BillBot,
      price: "$2,999"
    },
    {
      title: "Golden Facial",
      description: "Infused with real 24K gold flakes, this facial doesn't just make you look rich—it literally puts your money on your face. Side effects include glowing skin and occasional blinding of nearby pedestrians.",
      imagePlaceholder: GoldFacial,
      price: "$1,899"
    },
    {
      title: "Red Carpet Ready",
      description: "Our comprehensive package designed to make paparazzi fight over your photos. We can't guarantee you'll be famous, but we can guarantee you'll look like you should be.",
      imagePlaceholder: RedCarpet,
      price: "$4,500"
    },
    {
      title: "The Netflix & Fill",
      description: "Perfect for those who subscribe to the premium tier. This filler treatment is so luxurious, it buffers less than your streaming service. No more waiting—for content or compliments.",
      imagePlaceholder: NetFill,
      price: "$3,299"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Our Exclusive Services</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            At Botox & Chill, we offer treatments so exclusive, they make regular luxury spas look like fast food chains.
            Our services are designed for those who demand the extraordinary.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              imagePlaceholder={service.imagePlaceholder}
              price={service.price}
            />
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-secondary rounded-lg luxury-border">
          <h3 className="text-2xl font-serif text-primary mb-4 text-center">Our Success Stories</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-background p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary text-2xl">👑</span>
                </div>
                <div>
                  <h4 className="text-xl font-serif text-primary">Yacht Club Transformation</h4>
                  <p className="text-sm text-gray-400">Former yacht owner, now yacht model</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;After my Golden Facial at Botox & Chill, I was invited to model on the very yacht I used to own! 
                The irony isn&apos;t lost on me, but neither is my newfound career as a &apos;mature&apos; model.&quot;
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary text-2xl">💎</span>
                </div>
                <div>
                  <h4 className="text-xl font-serif text-primary">The Dating App Miracle</h4>
                  <p className="text-sm text-gray-400">From zero matches to exclusive dating app invite</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;I went from being rejected on regular dating apps to being headhunted by an app so exclusive 
                it doesn&apos;t even have a name. My Billionaire Botox didn&apos;t just remove wrinkles—it removed my dating woes!&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
