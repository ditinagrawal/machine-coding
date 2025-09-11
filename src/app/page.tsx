import { ChipsInput } from "@/components/chips-input";
import { ColorExplorer } from "@/components/color-explorer";
import { Tooltip } from "@/components/tooltip";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-y-12 max-w-3xl mx-auto w-full py-12">
      <ChipsInput />
      <Separator />
      <Tooltip />
      <ColorExplorer />
    </div>
  );
};

export default Home;
