import { AboutUs } from "@/components/AboutUs";
import { WhyPhysicalPlay } from "@/components/WhyPhysicalPlay";
import { Activities } from "@/components/Activities";
import { ParentEducation } from "@/components/ParentEducation";
import { Testimonials } from "@/components/Testimonials";
import CartoonLion from "@/components/CartoonLion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">

      <div className="fixed right-2 -bottom-2 z-50">
        <CartoonLion />
      </div>

      <AboutUs />
      <WhyPhysicalPlay />
      <Activities />
      <ParentEducation />
      <Testimonials />
    </div>
  );
};

export default Index;