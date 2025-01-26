import { AnimatedList } from "./ui/animated-list";
import { Button } from "./ui/button";
import { NavLink } from "react-router";

export default function ResponsiveMenu() {
  return (
    <div className="absolute z-20 flex flex-col items-center justify-center w-full min-h-full gap-8 bg-white">
      <AnimatedList
        delay={600}
        className="flex flex-col items-center justify-center gap-4"
      >
        <NavLink to="/sobre-mim">
          <Button variant="link" className="w-full">
            Sobre mim
          </Button>
        </NavLink>
        <NavLink to="/">
          <Button variant="link">Dashboard clínico</Button>
        </NavLink>
      </AnimatedList>
    </div>
  );
}
