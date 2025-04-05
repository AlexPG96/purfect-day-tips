
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import CatTip from "@/components/CatTip";
import Footer from "@/components/Footer";
import { catTips } from "@/data/catTips";

const Index = () => {
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    // Get the day of the year to determine which tip to show
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    // Use the day of year to determine the tip index (will cycle through the tips)
    setTipIndex(dayOfYear % catTips.length);
  }, []);

  const handleNextTip = () => {
    setTipIndex((prevIndex) => (prevIndex + 1) % catTips.length);
  };

  const handlePrevTip = () => {
    setTipIndex((prevIndex) => (prevIndex - 1 + catTips.length) % catTips.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cat-light to-cat-beige/30 flex flex-col">
      <div className="container px-4 flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 flex flex-col items-center justify-center py-8">
          {catTips.length > 0 && (
            <div className="w-full max-w-md animate-float">
              <CatTip 
                tip={catTips[tipIndex]} 
                onNextTip={handleNextTip} 
                onPrevTip={handlePrevTip}
              />
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
