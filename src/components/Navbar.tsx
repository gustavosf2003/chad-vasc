import { HamburgerButton } from "@/HambugerButton";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-20 border-b text-12 tracking-[-0.24px] opacity-50 px-4">
      <img className="h-[80px] w-[96px]" src="/av.png" />
      <div className="absolute right-4">
        <HamburgerButton />
      </div>
    </div>
  );
}
