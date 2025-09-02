import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 bounce-in">
        <div className="text-8xl mb-4">🏰</div>
        <h1 className="font-playful text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="font-fun text-2xl text-muted-foreground mb-4">
          Oops! This playground doesn't exist yet!
        </p>
        <p className="font-clean text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Don't worry! Let's get you back to the fun activities where kids can play and explore safely.
        </p>
        <Button className="btn-hero">
          Back to PlayWorld! 🎈
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
