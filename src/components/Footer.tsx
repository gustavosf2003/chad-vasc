import { Button } from "./ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex justify-center flex-col items-center border-t text-12 tracking-[-0.24px] p-4 z-50">
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/amanda-vicente1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
        >
          <Button variant="outline" size="icon" className="rounded-full">
            <Linkedin className="w-4 h-4" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </a>
        <a
          href="https://www.instagram.com/amandaavicente?igsh=YWgwOXZvamV2b3Rl"
          target="_blank"
        >
          <Button variant="outline" size="icon" className="rounded-full">
            <Instagram className="w-4 h-4" />
            <span className="sr-only">Instagram</span>
          </Button>
        </a>
        <a
          href="https://www.facebook.com/share/1DREvQRvK6/?mibextid=wwXIfr"
          target="_blank"
        >
          <Button variant="outline" size="icon" className="rounded-full">
            <Facebook className="w-4 h-4" />
            <span className="sr-only">Facebook</span>
          </Button>
        </a>
        {/* <Button variant="outline" size="icon" className="rounded-full">
          <Twitter className="w-4 h-4" />
          <span className="sr-only">Twitter</span>
        </Button> */}
      </div>
      <div className="flex items-center gap-1 mt-4 text-black/70">
        {/* <p>Amanda Vicente</p>
        <p>CRM 91239178</p> */}
        <p>Dra. Amanda de Oliveira Vicente </p>
        <p>- Generalista</p>
      </div>
      <p className="text-black/70">CRM 248230-SP</p>
    </footer>
  );
}
