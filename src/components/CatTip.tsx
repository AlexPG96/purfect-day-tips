
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon, Calendar } from "lucide-react";
import { CatTip as CatTipType } from "@/data/catTips";

interface CatTipProps {
  tip: CatTipType;
  onNextTip: () => void;
  onPrevTip: () => void;
}

const CategoryBadge = ({ category }: { category: CatTipType["category"] }) => {
  const categoryColors = {
    nutrition: "bg-green-100 text-green-800",
    grooming: "bg-blue-100 text-blue-800",
    health: "bg-red-100 text-red-800",
    play: "bg-purple-100 text-purple-800",
    behavior: "bg-yellow-100 text-yellow-800"
  };

  const categoryNames = {
    nutrition: "Nutrición",
    grooming: "Aseo",
    health: "Salud",
    play: "Juego",
    behavior: "Comportamiento"
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[category]}`}>
      {categoryNames[category]}
    </span>
  );
};

const CatTip = ({ tip, onNextTip, onPrevTip }: CatTipProps) => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    setCurrentDate(date.toLocaleDateString('es-ES', options));
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-2 border-cat-beige bg-white">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-cat-dark font-cat">{tip.title}</h2>
            <div className="mt-2">
              <CategoryBadge category={tip.category} />
            </div>
          </div>
          <div className="text-4xl">
            {tip.icon}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-cat-gray text-lg font-cat leading-relaxed">{tip.content}</p>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 pt-4">
        <div className="flex justify-between w-full">
          <Button
            variant="outline"
            size="icon"
            onClick={onPrevTip}
            className="rounded-full border-cat-blue hover:bg-cat-blue/10"
          >
            <ArrowLeftIcon className="h-4 w-4" />
          </Button>
          <div className="flex items-center text-sm text-cat-gray">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{currentDate}</span>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={onNextTip}
            className="rounded-full border-cat-blue hover:bg-cat-blue/10"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CatTip;
