
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const AdBannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      title: "ধুনটে আপনার সেবা পেতে আজই যোগ দিন!",
      subtitle: "দ্রুত ও নির্ভরযোগ্য সেবা",
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "জরুরি সেবা ২৪/৭ উপলব্ধ",
      subtitle: "চিকিৎসা ও নিরাপত্তা সেবা",
      color: "from-green-500 to-green-700"
    },
    {
      id: 3,
      title: "স্থানীয় ব্যবসায়ীদের সাথে যোগাযোগ করুন",
      subtitle: "বিশ্বস্ত ও সাশ্রয়ী সেবা",
      color: "from-purple-500 to-purple-700"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="relative h-40 mx-4 my-4 overflow-hidden rounded-xl">
      {banners.map((banner, index) => (
        <Card
          key={banner.id}
          className={`absolute inset-0 bg-gradient-to-r ${banner.color} text-white flex items-center justify-center transition-transform duration-500 ease-in-out border-0`}
          style={{
            transform: `translateX(${(index - currentSlide) * 100}%)`,
          }}
        >
          <div className="text-center px-6">
            <h2 className="text-lg font-bold mb-2">{banner.title}</h2>
            <p className="text-sm opacity-90">{banner.subtitle}</p>
          </div>
        </Card>
      ))}
      
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AdBannerSlider;
