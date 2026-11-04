import TextRotator from "./TextRotator";
import { portfolioConfig } from "@/config/portfolio.config";

const HeroTexts = () => {
  // Get the name parts
  return (
    <>
      <h3 className="font-poppins text-2xl max-sm:text-xl">My Name is</h3>
      <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl ">
        {portfolioConfig.name} .
      </h1>
    </>
  );
};
export default HeroTexts;
