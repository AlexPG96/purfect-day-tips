
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-12 pb-6 text-center text-cat-gray">
      <div className="flex items-center justify-center gap-1">
        <span>Hecho con</span>
        <Heart className="h-4 w-4 text-cat-orange fill-cat-orange" />
        <span>para cuidadores de gatos</span>
      </div>
      <p className="mt-1 text-sm">© {new Date().getFullYear()} Purrfect Day Tips</p>
    </footer>
  );
};

export default Footer;
