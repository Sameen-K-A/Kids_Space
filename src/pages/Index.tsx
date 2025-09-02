import { AboutUs } from "@/components/AboutUs";
import { WhyPhysicalPlay } from "@/components/WhyPhysicalPlay";
import { Activities } from "@/components/Activities";
import { ParentEducation } from "@/components/ParentEducation";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AboutUs />
      <WhyPhysicalPlay />
      <Activities />
      <ParentEducation />
      <Testimonials />
    </div>
  );
};

export default Index;