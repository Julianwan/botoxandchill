import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Contact Now</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to transform into the most beautiful version of yourself? Our exclusive team is waiting to serve your beauty needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-background p-8 rounded-lg luxury-border">
              <h3 className="text-2xl font-serif text-primary mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-2xl">📞</div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary">Phone</h4>
                    <p className="text-gray-300">(555) 123-4567</p>
                    <p className="text-sm text-gray-400 mt-1">Available Mon-Fri, 9AM-7PM</p>
                    <p className="text-sm text-gray-400">Please leave a voicemail if we don't answer</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-2xl">✉️</div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary">Email</h4>
                    <p className="text-gray-300">info@botoxandchill.com</p>
                    <p className="text-sm text-gray-400 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-2xl">📍</div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary">Location</h4>
                    <p className="text-gray-300">Luxury Lane, Maui, Hawaii</p>
                    <p className="text-sm text-gray-400 mt-1">By appointment only</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-2xl">🕒</div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary">Hours</h4>
                    <p className="text-gray-300">Monday - Friday: 9AM - 7PM</p>
                    <p className="text-gray-300">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-background p-8 rounded-lg luxury-border">
              <h3 className="text-2xl font-serif text-primary mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-secondary border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-secondary border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-secondary border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us what service you're interested in..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-luxury px-6 py-3 rounded-md text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
