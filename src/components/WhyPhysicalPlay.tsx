import { motion, easeOut } from "framer-motion";
import physicalVsScreenImage from "@/assets/images/physical-vs-screen.jpg";

const benefits = [
  { icon: "💪", title: "Physical Health", description: "Builds strength, coordination, and promotes healthy growth" },
  { icon: "🧠", title: "Brain Development", description: "Enhances cognitive function and problem-solving skills" },
  { icon: "👥", title: "Social Skills", description: "Teaches teamwork, sharing, and communication" },
  { icon: "😴", title: "Better Sleep", description: "Physical activity leads to more restful nights" },
  { icon: "🌈", title: "Emotional Well-being", description: "Reduces stress and boosts natural happiness" },
];

const sideEffects = [
  { icon: "📱", title: "Digital Overload", desc: "Too much screen stimulation" },
  { icon: "🏠", title: "Indoor Isolation", desc: "Missing outdoor experiences" },
  { icon: "😫", title: "Physical Strain", desc: "Poor posture and eye strain" },
  { icon: "😞", title: "Social Disconnect", desc: "Reduced face-to-face interaction" }
];

export const WhyPhysicalPlay = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center space-y-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/20 text-foreground px-6 py-3 rounded-full font-fun font-semibold"
            variants={itemVariants}
          >
            🏃‍♂️ Why Physical Play Matters
          </motion.div>

          <motion.h2
            className="font-playful text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Real Play Beats <span className="text-accent"> Screen Time</span>
          </motion.h2>

          <motion.p
            className="font-clean text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Research shows that physical play is crucial for healthy child development. Here's why active play
            creates happier, healthier, and more confident kids.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <img
                src={physicalVsScreenImage}
                alt="Comparison showing happy kids playing vs child with smartphone"
                className="w-full h-auto object-cover"
              />
            </div>

            <motion.div
              className="absolute top-4 left-4 bg-accent text-sm text-accent-foreground px-3 py-2 rounded-lg font-fun font-semibold shadow-soft"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Active & Happy! 😊
            </motion.div>
            <motion.div
              className="absolute top-4 right-4 bg-muted text-sm text-muted-foreground px-3 py-2 rounded-lg font-fun font-semibold shadow-soft"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Isolated & Tired 😔
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h3
              className="font-playful text-2xl text-center lg:text-left font-bold text-foreground mb-8"
              variants={itemVariants}
            >
              Benefits of Physical Play
            </motion.h3>

            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-bounce transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className="text-2xl">{benefit.icon}</div>
                  <div>
                    <h4 className="font-fun text-lg font-semibold text-foreground">{benefit.title}</h4>
                    <p className="font-clean text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="bg-coral/10 rounded-3xl p-4 lg:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="text-center space-y-4" variants={itemVariants}>
            <div className="text-5xl">⚠️</div>
            <h3 className="font-playful text-2xl font-bold text-foreground">Screen Time Side Effects</h3>
            <p className="font-clean text-muted-foreground max-w-2xl mx-auto pb-10">
              Excessive screen time can lead to decreased physical activity, poor posture,
              sleep problems, and reduced social interaction. Let's give our kids a better alternative!
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {sideEffects.map((effect, idx) => (
              <motion.div
                key={idx}
                className="text-center space-y-2"
                variants={itemVariants}
              >
                <div className="text-3xl">{effect.icon}</div>
                <div className="font-fun font-semibold text-coral">{effect.title}</div>
                <div className="font-clean text-sm text-muted-foreground">{effect.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};