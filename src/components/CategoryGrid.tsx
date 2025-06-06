
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const CategoryGrid = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "ডাক্তার", icon: "🩺", route: "/category/doctor" },
    { id: 2, name: "হাসপাতাল", icon: "🏥", route: "/category/hospital" },
    { id: 3, name: "ডায়াগনস্টিক", icon: "🔬", route: "/category/diagnostic" },
    { id: 4, name: "রক্ত", icon: "🩸", route: "/category/blood" },
    { id: 5, name: "গাড়ি ভাড়া", icon: "🚗", route: "/category/vehicle-rent" },
    { id: 6, name: "থানা-পুলিশ", icon: "🚔", route: "/category/police" },
    { id: 7, name: "আইনজীবী", icon: "⚖️", route: "/category/lawyer" },
    { id: 8, name: "চাকরি", icon: "💼", route: "/category/jobs" },
    { id: 9, name: "শিক্ষক", icon: "👨‍🏫", route: "/category/teacher" },
    { id: 10, name: "উদ্যোক্তা", icon: "🚀", route: "/category/entrepreneur" },
    { id: 11, name: "প্রশিক্ষণ কেন্দ্র", icon: "🎓", route: "/category/training" },
    { id: 12, name: "আজকের বাজার", icon: "🛒", route: "/category/market" },
    { id: 13, name: "বাসের সময়সূচি", icon: "🚌", route: "/category/bus-schedule" },
    { id: 14, name: "ট্রেনের সময়সূচি", icon: "🚂", route: "/category/train-schedule" },
    { id: 15, name: "বাসা ভাড়া", icon: "🏠", route: "/category/house-rent" },
    { id: 16, name: "হোটেল", icon: "🏨", route: "/category/hotel" },
    { id: 17, name: "স্টুডেন্ট", icon: "🎒", route: "/category/student" },
    { id: 18, name: "দর্শনীয় স্থান", icon: "🏛️", route: "/category/tourist-spots" },
    { id: 19, name: "প্লট ও জমি", icon: "🏞️", route: "/category/land" },
    { id: 20, name: "মিস্ত্রি", icon: "🔧", route: "/category/mechanic" },
    { id: 21, name: "নার্সারি", icon: "🌱", route: "/category/nursery" },
    { id: 22, name: "ক্রয় ও বিক্রয়", icon: "🛍️", route: "/category/buy-sell" },
    { id: 23, name: "বিদ্যুৎ অফিস", icon: "⚡", route: "/category/electric-office" },
    { id: 24, name: "শিক্ষা প্রতিষ্ঠান", icon: "🏫", route: "/category/educational-institute" },
    { id: 25, name: "কুরিয়ার সার্ভিস", icon: "📦", route: "/category/courier" },
    { id: 26, name: "ভিডিও দেখুন", icon: "📺", route: "/category/videos" },
    { id: 27, name: "পার্লার", icon: "💄", route: "/category/parlor" },
    { id: 28, name: "ওয়েবসাইট", icon: "🌐", route: "/category/website" },
    { id: 29, name: "পৌরসভা", icon: "🏛️", route: "/category/municipality" },
    { id: 30, name: "ব্যাংক ও বীমা", icon: "🏦", route: "/category/bank-insurance" },
    { id: 31, name: "গ্যাস স্টেশন", icon: "⛽", route: "/category/gas-station" },
    { id: 32, name: "সংবাদপত্র", icon: "📰", route: "/category/newspaper" },
    { id: 33, name: "সাধার", icon: "🤝", route: "/category/general-help" },
    { id: 34, name: "দিন মজুর", icon: "👷‍♂️", route: "/category/day-laborer" },
    { id: 35, name: "জিকির", icon: "🕌", route: "/category/zikir" }
  ];

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold mb-4 text-center">সেবা ক্যাটাগরি</h2>
      <div className="grid grid-cols-4 gap-3">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
            onClick={() => navigate(category.route)}
          >
            <CardContent className="p-3 text-center">
              <div className="text-2xl mb-2">{category.icon}</div>
              <h3 className="text-xs font-medium leading-tight">{category.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
