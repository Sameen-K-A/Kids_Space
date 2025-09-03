import kidsActivitiesImage from "@/assets/images/kids-activities.jpg";

export const AboutUs = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative bounce-in">
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <img
                src={kidsActivitiesImage}
                alt="Happy children engaged in various physical activities"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent/20 rounded-full float"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-coral/20 rounded-full float animation-delay-1000"></div>
          </div>

          <div className="space-y-8 bounce-in animation-delay-300">
            <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start space-y-4 text-center lg:text-left h-full">
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-foreground px-4 py-2 rounded-full font-fun font-semibold">
                ✨ About PlayWorld Kids
              </div>

              <h2 className="font-playful text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Where Children
                <span className="text-primary"> Thrive & Play</span>
              </h2>

              <p className="font-clean text-muted-foreground leading-relaxed">
                At PlayWorld Kids, we believe every child deserves to experience the pure joy of physical play.
                Our mission is simple: create a safe, engaging environment where kids can build confidence,
                make friends, and develop healthy habits that will serve them for life.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="card-playful bg-primary/5">
                <div className="text-primary text-3xl mb-3">🛡️</div>
                <h3 className="font-fun text-xl font-semibold text-foreground mb-2">Safe Environment</h3>
                <p className="font-clean text-sm text-muted-foreground">Professional supervision and sanitized equipment ensure your child's safety at all times.</p>
              </div>

              <div className="card-playful bg-accent/5">
                <div className="text-accent text-3xl mb-3">🌟</div>
                <h3 className="font-fun text-xl font-semibold text-foreground mb-2">Expert Staff</h3>
                <p className="font-clean text-sm text-muted-foreground">Trained professionals who understand child development and make every moment magical.</p>
              </div>

              <div className="card-playful bg-secondary/10">
                <div className="text-secondary-foreground text-3xl mb-3">🎯</div>
                <h3 className="font-fun text-xl font-semibold text-foreground mb-2">Age-Appropriate</h3>
                <p className="font-clean text-sm text-muted-foreground">Activities designed specifically for different age groups to ensure optimal engagement.</p>
              </div>

              <div className="card-playful bg-coral/5">
                <div className="text-coral text-3xl mb-3">❤️</div>
                <h3 className="font-fun text-xl font-semibold text-foreground mb-2">Community Focus</h3>
                <p className="font-clean text-sm text-muted-foreground">Building lasting friendships and strong community connections through play.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-2xl">
              <div className="text-4xl">💫</div>
              <div>
                <h4 className="font-fun text-lg font-semibold text-foreground">Our Promise</h4>
                <p className="font-clean text-sm text-muted-foreground">Every child leaves with a smile, new friends, and excitement for their next visit!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};