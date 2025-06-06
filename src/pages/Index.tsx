
import { useState } from "react";
import Header from "@/components/Header";
import AdBannerSlider from "@/components/AdBannerSlider";
import NoticeSlider from "@/components/NoticeSlider";
import CategoryGrid from "@/components/CategoryGrid";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <AdBannerSlider />
        <NoticeSlider />
        <CategoryGrid />
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Index;
