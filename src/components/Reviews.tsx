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
  }
];

const ReviewCard = ({ review, index }: { review: typeof reviews[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
    >
      <div className="absolute top-6 right-8">
        <Quote className="w-8 h-8 text-blue-100 dark:text-gray-700" />
      </div>
      
      <div className="flex items-center space-x-4 mb-6">
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, delay: index * 0.1 + 0.2 }}
          src={review.image}
          alt={review.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{review.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{review.role}</p>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-6">{review.content}</p>

      <div className="flex space-x-1">
        {[...Array(review.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + i * 0.1 }}
          >
            <Star className="w-5 h-5 fill-current text-yellow-400" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Reviews = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;