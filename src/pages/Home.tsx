import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Radio, Tv, Smartphone, PenTool, BarChart, Rss } from 'lucide-react';

import Hero from '../components/Hero';
import NewsCard from '../components/NewsCard';
import ServiceCard from '../components/ServiceCard';
import ClientCard from '../components/ClientCard';
import { fetchNews } from '../utils/newsApi';
import { NewsArticle, Service, Client } from '../utils/types';

const Home: React.FC = () => {
  const [latestNews, setLatestNews] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      try {
        setIsLoading(true);
        const response = await fetchNews({ pageSize: 4, sortBy: 'publishedAt' });
        setLatestNews(response.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getNews();
  }, []);

  // Sample services data
  const services: Service[] = [
    {
      id: 1,
      title: 'Broadcast Solutions',
      description: 'End-to-end broadcasting services with state-of-the-art technology and expert teams.',
      icon: 'Tv',
      benefits: [
        'Wide national reach across multiple markets',
        'HD broadcasting technology',
        'Expert production teams',
      ],
    },
    {
      id: 2,
      title: 'Digital Advertising',
      description: 'Targeted digital advertising solutions across multiple platforms and devices.',
      icon: 'Smartphone',
      benefits: [
        'Hyper-local targeting capabilities',
        'Cross-platform campaigns',
        'Real-time analytics and reporting',
      ],
    },
    {
      id: 3,
      title: 'Content Production',
      description: 'Professional content creation for broadcast, digital, and social media platforms.',
      icon: 'PenTool',
      benefits: [
        'Award-winning production teams',
        'State-of-the-art equipment',
        'Multi-format delivery options',
      ],
    },
  ];

  // Sample clients data
  const clients: Client[] = [
    {
      id: 1,
      name: 'ABC Corporation',
      logo: 'https://images.pexels.com/photos/2566121/pexels-photo-2566121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      industry: 'Retail',
      description: 'Leading national retail chain with over 500 locations across the United States.',
    },
    {
      id: 2,
      name: 'TechFuture Inc.',
      logo: 'https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      industry: 'Technology',
      description: 'Innovative technology company specializing in AI and machine learning solutions.',
    },
    {
      id: 3,
      name: 'Global Finance Group',
      logo: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      industry: 'Finance',
      description: 'International financial services provider with expertise in investment banking and wealth management.',
    },
    {
      id: 4,
      name: 'HealthPlus',
      logo: 'https://images.pexels.com/photos/4021803/pexels-photo-4021803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      industry: 'Healthcare',
      description: 'Leading healthcare network providing quality medical services across multiple states.',
    },
  ];

  return (
    <>
      <Hero
        title="Leading Media Solutions for the Digital Age"
        subtitle="Nexstar Media Group delivers innovative broadcast, digital, and content solutions for businesses of all sizes."
        ctaText="Get Started"
        ctaLink="/contact"
        videoBtnText="Watch Video"
        videoBtnLink="#"
      />

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</p>
              <p className="text-gray-600">TV Stations</p>
            </div>
            <div className="p-6">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">100M+</p>
              <p className="text-gray-600">Viewers Reached</p>
            </div>
            <div className="p-6">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">$6B+</p>
              <p className="text-gray-600">Annual Revenue</p>
            </div>
            <div className="p-6">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Media Services</h2>
            <p className="text-gray-600 text-lg">
              Delivering comprehensive media solutions across broadcast, digital, and content production to help businesses reach their target audiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About/CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">America's Leading Local Media Company</h2>
              <p className="text-white/90 mb-6 text-lg">
                Nexstar Media Group is America's largest local television and media company with 200 owned or partner stations in 116 markets reaching 212 million people.
              </p>
              <p className="text-white/90 mb-8">
                Our local-to-national digital media infrastructure delivers news, information, and video across multiple platforms. We are committed to helping businesses of all sizes reach their target audiences through innovative and effective media solutions.
              </p>
              <Link to="/about" className="btn bg-white text-primary hover:bg-gray-100">
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Nexstar Media Team"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-secondary rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="mb-4">Latest Media News</h2>
              <p className="text-gray-600 text-lg max-w-2xl">
                Stay updated with the latest news and developments in the media industry.
              </p>
            </div>
            <Link 
              to="/news" 
              className="inline-flex items-center text-primary font-medium hover:underline mt-4 md:mt-0"
            >
              View All News
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-4 text-gray-600">Loading latest news...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestNews.map((article, index) => (
                <NewsCard key={index} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Clients Section */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Clients</h2>
            <p className="text-gray-600 text-lg">
              We're proud to work with leading businesses across various industries, helping them achieve their media and marketing goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-gray-900 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Ready to Transform Your Media Strategy?</h2>
            <p className="text-white/80 text-lg mb-8">
              Get in touch with our team of media experts to discuss how Nexstar Media Group can help your business reach new heights.
            </p>
            <Link to="/contact" className="btn bg-accent hover:bg-accent-dark text-white">
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;