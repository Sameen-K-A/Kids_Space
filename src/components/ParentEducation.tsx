import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "The Science Behind Physical Play",
    description: "Research-backed insights on how active play supports brain development and emotional growth.",
    category: "Research",
    readTime: "5 min read",
    icon: "🧠",
    color: "primary"
  },
  {
    title: "Screen Time Guidelines by Age",
    description: "Expert recommendations for healthy screen time limits and alternatives for different age groups.",
    category: "Guidelines",
    readTime: "3 min read",
    icon: "📱",
    color: "coral"
  },
  {
    title: "Building Confidence Through Play",
    description: "How physical activities help children develop self-esteem and overcome challenges.",
    category: "Development",
    readTime: "4 min read",
    icon: "💪",
    color: "accent"
  },
  {
    title: "Creating Active Families",
    description: "Tips for incorporating physical activity into your family's daily routine at home.",
    category: "Family Tips",
    readTime: "6 min read",
    icon: "👨‍👩‍👧‍👦",
    color: "secondary"
  }
];

const podcasts = [
  {
    title: "Raising Active Kids in a Digital World",
    host: "Dr. Sarah Johnson",
    duration: "25 min",
    icon: "🎧"
  },
  {
    title: "The Power of Unstructured Play",
    host: "Child Development Expert",
    duration: "18 min",
    icon: "🎙️"
  }
];

export const ParentEducation = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-foreground px-6 py-3 rounded-full font-fun font-semibold">
            📚 Parent Education Hub
          </div>

          <h2 className="font-playful text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
            Knowledge for
            <span className="text-secondary"> Smart Parents</span>
          </h2>

          <p className="font-clean text-muted-foreground max-w-2xl mx-auto">
            Stay informed with expert insights, research-backed articles, and practical tips
            to support your child's healthy development.
          </p>
        </div>

        <div className="max-w-xl mx-auto gap-12 mb-16">
          <div className="bounce-in animation-delay-600">
            <h3 className="font-playful text-2xl font-bold text-foreground mb-6 text-center">
              🎧 Parent Podcasts
            </h3>
            <div className="space-y-4">
              {podcasts.map((podcast) => (
                <div key={podcast.title} className="card-playful bg-primary/5 border-primary/20 flex items-center gap-4 hover:scale-101 cursor-pointer">
                  <div className="text-2xl">{podcast.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-fun font-semibold text-foreground">{podcast.title}</h4>
                    <p className="font-clean text-sm text-muted-foreground">{podcast.host} • {podcast.duration}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="shrink-0">
                    Play ▶️
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="font-playful text-3xl font-bold text-foreground mb-8 text-center bounce-in animation-delay-300">
            Latest Articles
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {articles.map((article) => (
              <Card key={article.title} className={`card-playful bg-${article.color}/5 border-${article.color}/20 bounce-in hover:scale-101 cursor-pointer`}>
                <CardHeader className="text-center p-4">
                  <div className="text-3xl mb-2">{article.icon}</div>
                  <CardTitle className="font-fun text-lg text-foreground">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="font-clean text-sm text-muted-foreground">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3 p-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className={`bg-${article.color}/20 text-foreground px-2 py-1 rounded-full font-fun font-semibold`}>
                      {article.category}
                    </span>
                    <span className="text-muted-foreground font-clean">{article.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 lg:p-12 bounce-in animation-delay-1000">
          <div className="text-center space-y-6">
            <div className="text-5xl">💡</div>
            <h3 className="font-playful text-3xl font-bold text-foreground">
              Quick Parent Tips
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center space-y-3">
                <div className="text-3xl">🕐</div>
                <h4 className="font-fun font-semibold text-foreground">Set Screen Limits</h4>
                <p className="font-clean text-sm text-muted-foreground">
                  Create device-free times and zones in your home
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl">🏃‍♀️</div>
                <h4 className="font-fun font-semibold text-foreground">Lead by Example</h4>
                <p className="font-clean text-sm text-muted-foreground">
                  Show kids that physical activity is fun and important
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl">🎉</div>
                <h4 className="font-fun font-semibold text-foreground">Celebrate Progress</h4>
                <p className="font-clean text-sm text-muted-foreground">
                  Acknowledge efforts and improvements, not just results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};