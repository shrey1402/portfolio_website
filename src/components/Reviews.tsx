import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    content: 'The attention to detail and creative solutions provided exceeded our expectations. The team delivered a beautiful, functional website that perfectly represents our brand.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Founder of EcoStore',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    content: 'Outstanding e-commerce development! Our online store has seen a significant increase in conversions since the redesign. Highly recommended for any Shopify project.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    content: 'The UI/UX design work transformed our app completely. User engagement has increased by 200% since the redesign. Incredible attention to user experience.',
    rating: 5
  },
  {
    name: 'David Kim',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    content: 'Exceptional work on our mobile app. The team\'s expertise in React Native delivered a seamless experience across all platforms.',
    rating: 5
  },
  {
    name: 'Lisa Thompson',
    role: 'E-commerce Director',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
    content: 'The Shopify integration was flawless. Our conversion rate improved by 150% within the first month after launch.',
    rating: 5
  }
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-[300px] sm:w-[350px] p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg mx-4"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <Quote className="absolute top-0 right-0 w-8 h-8 text-blue-100 dark:text-gray-700" />
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={review.image}
            alt={review.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-blue-100 dark:border-gray-700"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{review.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{review.role}</p>
          </div>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-300 mb-6 line-clamp-4">{review.content}</p>
        <div className="flex space-x-1">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Reviews = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Client Reviews</h2>
          <p className="text-gray-600 dark:text-gray-300">What our clients say about our work</p>
        </motion.div>

        <div className="relative max-w-[90rem] mx-auto">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent z-10 pointer-events-none" />

          {/* Reviews container */}
          <div 
            className="overflow-x-auto hide-scrollbar"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex py-4 px-4 space-x-6 min-w-max">
              {reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        @media (hover: none) {
          .hide-scrollbar {
            scroll-snap-type: x mandatory;
          }
          .hide-scrollbar > div > div {
            scroll-snap-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Reviews;