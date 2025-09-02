const activities = [
  {
    title: "Adventure Playground",
    description: "Climbing walls, slides, and obstacle courses designed for safe exploration and physical challenge.",
    icon: "🏰",
    color: "primary",
  },
  {
    title: "Creative Arts & Crafts",
    description: "Hands-on artistic activities that spark imagination while developing fine motor skills.",
    icon: "🎨",
    color: "secondary",
  },
  {
    title: "Sports & Games",
    description: "Mini basketball, soccer, and team games that teach cooperation and healthy competition.",
    icon: "⚽",
    color: "accent",
  },
  {
    title: "Dance & Movement",
    description: "Fun dance sessions and yoga classes that improve coordination and self-expression.",
    icon: "💃",
    color: "coral",
  },
  {
    title: "Music & Rhythm",
    description: "Interactive music sessions with instruments and singing that develop auditory skills.",
    icon: "🎵",
    color: "primary",
  },
  {
    title: "Sensory Play",
    description: "Textured play areas and sensory bins designed for cognitive development and exploration.",
    icon: "🌈",
    color: "accent",
  },
  {
    title: "Building & Construction",
    description: "Large building blocks and construction zones that enhance spatial reasoning and creativity.",
    icon: "🧱",
    color: "secondary",
  },
  {
    title: "Nature Exploration",
    description: "Indoor garden areas and nature-themed activities connecting kids with the natural world.",
    icon: "🌿",
    color: "accent",
  }
];

export const Activities = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center text-foreground gap-2 bg-primary/20 px-6 py-3 rounded-full font-fun font-semibold">
            🎪 Our Amazing Activities
          </div>

          <h2 className="font-playful text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
            Endless Fun
            <span className="text-primary"> Adventures</span>
          </h2>

          <p className="font-clean text-muted-foreground max-w-2xl mx-auto">
            From climbing adventures to creative crafts, our diverse programs are designed to engage,
            challenge, and delight children of all ages and interests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {activities.map((activity) => (
            <div key={activity.title} className={`card-playful bg-${activity.color}/5 border border-${activity.color}/20`}>
              <div className="text-center space-y-2">
                <div className="text-4xl pb-3">{activity.icon}</div>
                <h3 className="font-fun text-xl font-semibold text-foreground">{activity.title}</h3>
                <p className="font-clean text-sm text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};