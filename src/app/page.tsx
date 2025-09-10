import { ChipsInput } from "@/components/chips-input";
import { Tooltip } from "@/components/tooltip";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-y-12 max-w-3xl mx-auto w-full py-12">
      <ChipsInput />
      <Separator />
      <Tooltip />
    </div>
  );
};

export default Home;
