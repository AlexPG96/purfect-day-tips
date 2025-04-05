
import { Cat } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full pt-6 pb-4">
      <div className="flex items-center justify-center gap-3">
        <Cat className="h-8 w-8 text-cat-orange animate-tail-wag" />
        <h1 className="text-3xl md:text-4xl font-bold text-cat-dark font-cat">Purrfect Day Tips</h1>
        <Cat className="h-8 w-8 text-cat-orange animate-tail-wag" strokeWidth={1.5} />
      </div>
      <p className="text-center text-cat-gray mt-2 font-cat">Consejos diarios para cuidar mejor a tu felino</p>
    </header>
  );
};

export default Header;
