import physicalVsScreenImage from "@/assets/images/physical-vs-screen.jpg";

export const WhyPhysicalPlay = () => {

  const benefits = [
    {
      icon: "💪",
      title: "Physical Health",
      description: "Builds strength, coordination, and promotes healthy growth",
    },
    {
      icon: "🧠",
      title: "Brain Development",
      description: "Enhances cognitive function and problem-solving skills",
    },
    {
      icon: "👥",
      title: "Social Skills",
      description: "Teaches teamwork, sharing, and communication",
    },
    {
      icon: "😴",
      title: "Better Sleep",
      description: "Physical activity leads to more restful nights",
    },
    {
      icon: "🌈",
      title: "Emotional Well-being",
      description: "Reduces stress and boosts natural happiness",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-foreground px-6 py-3 rounded-full font-fun font-semibold">
            🏃‍♂️ Why Physical Play Matters
          </div>
          <h2 className="font-playful text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
            Real Play Beats
            <span className="text-accent"> Screen Time</span>
          </h2>
          <p className="font-clean text-muted-foreground max-w-2xl mx-auto">
            Research shows that physical play is crucial for healthy child development. Here's why active play
            creates happier, healthier, and more confident kids.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <img
                src={physicalVsScreenImage}
                alt="Comparison showing happy kids playing vs child with smartphone"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute top-4 left-4 bg-accent text-sm text-accent-foreground px-3 py-2 rounded-lg font-fun font-semibold shadow-soft">
              Active & Happy! 😊
            </div>
            <div className="absolute top-4 right-4 bg-muted text-sm text-muted-foreground px-3 py-2 rounded-lg font-fun font-semibold shadow-soft">
              Isolated & Tired 😔
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-playful text-2xl text-center lg:text-left font-bold text-foreground mb-8">
              Benefits of Physical Play
            </h3>

            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-bounce transition-all duration-300">
                  <div className="text-2xl">{benefit.icon}</div>
                  <div>
                    <h4 className="font-fun text-lg font-semibold text-foreground">{benefit.title}</h4>
                    <p className="font-clean text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-coral/10 rounded-3xl p-4 lg:p-8">
          <div className="text-center space-y-4">
            <div className="text-5xl">⚠️</div>
            <h3 className="font-playful text-2xl font-bold text-foreground">
              Screen Time Side Effects
            </h3>
            <p className="font-clean text-muted-foreground max-w-2xl mx-auto pb-10">
              Excessive screen time can lead to decreased physical activity, poor posture,
              sleep problems, and reduced social interaction. Let's give our kids a better alternative!
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <div className="text-3xl">📱</div>
                <div className="font-fun font-semibold text-coral">Digital Overload</div>
                <div className="font-clean text-sm text-muted-foreground">Too much screen stimulation</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl">🏠</div>
                <div className="font-fun font-semibold text-coral">Indoor Isolation</div>
                <div className="font-clean text-sm text-muted-foreground">Missing outdoor experiences</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl">😫</div>
                <div className="font-fun font-semibold text-coral">Physical Strain</div>
                <div className="font-clean text-sm text-muted-foreground">Poor posture and eye strain</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl">😞</div>
                <div className="font-fun font-semibold text-coral">Social Disconnect</div>
                <div className="font-clean text-sm text-muted-foreground">Reduced face-to-face interaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};