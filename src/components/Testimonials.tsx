import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { motion, easeOut } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Michelle",
    avatar: "👩‍🦰",
    content: "Tumber Town Kids has been a game-changer for our family! My kids actually ask to put their tablets away so we can come here. The staff is amazing and the activities keep them engaged for hours.",
    rating: 5,
  },
  {
    name: "David Chen",
    avatar: "👨‍💼",
    content: "As a working parent, I love that this is a safe place where my children can be active and social. They've made so many friends and gained confidence I never expected to see.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    avatar: "👩‍🏫",
    content: "The age-appropriate activities are perfect for my 4-year-old twins. They're learning teamwork, taking turns, and most importantly - having genuine fun without any screens!",
    rating: 5,
  },
  {
    name: "James Wilson",
    avatar: "👨‍🎓",
    content: "Finding quality activities for my daughter was challenging until we discovered Tumber Town Kids. She's more active, sleeping better, and her social skills have improved dramatically.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    avatar: "👩‍⚕️",
    content: "My son was getting too attached to his phone, but now he's excited about physical activities. The transformation has been incredible - he's happier and more energetic!",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    avatar: "👨‍🔬",
    content: "The educational approach to play here is outstanding. My kids are learning while having fun, and I can see their problem-solving skills developing through the activities.",
    rating: 5,
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center space-y-6 mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 bg-coral/20 text-foreground px-6 py-3 rounded-full font-fun font-semibold">
            💬 Happy Families
          </div>

          <h2 className="font-playful text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
            What Parents <span className="text-coral"> Are Saying</span>
          </h2>

          <p className="font-clean text-muted-foreground max-w-2xl mx-auto">
            Real stories from real families who've discovered the joy of screen-free play at Tumber Town Kids.
          </p>
        </motion.div>

        <div className="relative w-full mx-auto mb-10 overflow-hidden rounded-3xl">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="w-full flex-shrink-0 px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className="card-playful bg-card border-coral/20">
                  <CardContent className="p-8 lg:p-12 text-center space-y-6 px-4">
                    <div className="text-6xl mb-4">{testimonial.avatar}</div>

                    <div className="flex justify-center gap-1 text-2xl">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-secondary">⭐</span>
                      ))}
                    </div>

                    <blockquote className="font-clean text-foreground leading-relaxed italic max-w-2xl mx-auto">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="font-fun text-xl font-semibold text-foreground">{testimonial.name}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? "bg-coral scale-125"
                : "bg-coral/30 hover:bg-coral/60"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};