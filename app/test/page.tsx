import { Footer } from "../page/Footer";
import { Metadata } from "next";
import { Spotlight } from "../../components/ui/Spotlight";
import { cn } from "../../utils/cn";

export const metadata: Metadata = {
  title: "Linux History",
  description: "Linux History: The Linux History writed by @squach90",
};

/* eslint-disable @next/next/no-img-element */
const Tools: React.FC = () => {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-100 md:left-10 md:-top-20"
        fill="white"
      />
    </div>
  );
};

export default Tools;
