import { Footer } from "../Footer";
import { HeroContainer } from "../HeroContainer";
import { VideoTipsSection } from "../VideoTipsSection";
import { StarringContainer } from "../Components/Starring";

export const Home = () => {
  return (
    <>
      <HeroContainer />
      <StarringContainer />
      <VideoTipsSection />
      <Footer />
    </>
  );
};
