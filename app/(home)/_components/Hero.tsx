import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { SparklesText } from "@/components/magicui/sparkles-text";

const Hero = () => {
  return (
    <div className="flex justify-center items-center min-h-screen backdrop-blur-xs">
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center">
          <SparklesText className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-center px-4">
            Complaint Service Portal
          </SparklesText>
          <p className="text-primary">NLP based Automatic complaint service app for authoritise</p>
        </div>
        <InteractiveHoverButton>Try it</InteractiveHoverButton>
      </div>
    </div>
  )
}

export default Hero;
