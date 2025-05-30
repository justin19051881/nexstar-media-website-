import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "John Smith",
    position: "CEO, TechCorp",
    company: "TechCorp Inc.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    quote: "Nexstar Media Group has transformed our digital presence. Their innovative solutions and expert team delivered exceptional results.",
  },
  {
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "Retail Giants",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
    quote: "The ROI we've seen from our partnership with Nexstar has exceeded our expectations. Their targeted advertising solutions are unmatched.",
  },
  {
    name: "Michael Chen",
    position: "COO",
    company: "Global Solutions",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    quote: "Working with Nexstar has been a game-changer for our brand. Their comprehensive media solutions have helped us reach new audiences.",
  },
];

const TestimonialSlider: React.FC = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="testimonial-slider"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <blockquote className="text-gray-600 text-lg italic mb-6">
              "{testimonial.quote}"
            </blockquote>
            <div className="font-bold text-lg">{testimonial.name}</div>
            <div className="text-gray-500">{testimonial.position}</div>
            <div className="text-primary">{testimonial.company}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;