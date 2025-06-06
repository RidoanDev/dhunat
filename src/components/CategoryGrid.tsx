
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Stethoscope, 
  Building2, 
  TestTube, 
  Heart, 
  Car, 
  Shield, 
  Scale, 
  Briefcase, 
  GraduationCap, 
  TrendingUp, 
  BookOpen, 
  ShoppingCart, 
  Bus, 
  Train, 
  Home, 
  Hotel, 
  User, 
  Camera, 
  MapPin, 
  Wrench, 
  Flower, 
  ShoppingBag, 
  Zap, 
  School, 
  Package, 
  Play, 
  Scissors, 
  Globe, 
  Building, 
  CreditCard, 
  Fuel, 
  Newspaper, 
  HelpCircle, 
  Users, 
  Book
} from "lucide-react";

const CategoryGrid = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "ডাক্তার", Icon: Stethoscope, route: "/category/doctor", color: "bg-blue-500" },
    { id: 2, name: "হাসপাতাল", Icon: Building2, route: "/category/hospital", color: "bg-red-500" },
    { id: 3, name: "ডায়াগনস্টিক", Icon: TestTube, route: "/category/diagnostic", color: "bg-purple-500" },
    { id: 4, name: "রক্ত", Icon: Heart, route: "/category/blood", color: "bg-red-600" },
    { id: 5, name: "গাড়ি ভাড়া", Icon: Car, route: "/category/vehicle-rent", color: "bg-orange-500" },
    { id: 6, name: "থানা-পুলিশ", Icon: Shield, route: "/category/police", color: "bg-blue-600" },
    { id: 7, name: "আইনজীবী", Icon: Scale, route: "/category/lawyer", color: "bg-gray-600" },
    { id: 8, name: "চাকরি", Icon: Briefcase, route: "/category/jobs", color: "bg-green-600" },
    { id: 9, name: "শিক্ষক", Icon: GraduationCap, route: "/category/teacher", color: "bg-teal-500" },
    { id: 10, name: "উদ্যোক্তা", Icon: TrendingUp, route: "/category/entrepreneur", color: "bg-orange-600" },
    { id: 11, name: "প্রশিক্ষণ কেন্দ্র", Icon: BookOpen, route: "/category/training", color: "bg-purple-600" },
    { id: 12, name: "আজকের বাজার", Icon: ShoppingCart, route: "/category/market", color: "bg-blue-500" },
    { id: 13, name: "বাসের সময়সূচি", Icon: Bus, route: "/category/bus-schedule", color: "bg-green-500" },
    { id: 14, name: "ট্রেনের সময়সূচি", Icon: Train, route: "/category/train-schedule", color: "bg-gray-700" },
    { id: 15, name: "বাসা ভাড়া", Icon: Home, route: "/category/house-rent", color: "bg-blue-600" },
    { id: 16, name: "হোটেল", Icon: Hotel, route: "/category/hotel", color: "bg-pink-500" },
    { id: 17, name: "স্টুডেন্ট", Icon: User, route: "/category/student", color: "bg-indigo-500" },
    { id: 18, name: "দর্শনীয় স্থান", Icon: Camera, route: "/category/tourist-spots", color: "bg-teal-600" },
    { id: 19, name: "প্লট ও জমি", Icon: MapPin, route: "/category/land", color: "bg-green-600" },
    { id: 20, name: "মিস্ত্রি", Icon: Wrench, route: "/category/mechanic", color: "bg-orange-600" },
    { id: 21, name: "নার্সারি", Icon: Flower, route: "/category/nursery", color: "bg-lime-500" },
    { id: 22, name: "ক্রয় ও বিক্রয়", Icon: ShoppingBag, route: "/category/buy-sell", color: "bg-purple-600" },
    { id: 23, name: "বিদ্যুৎ অফিস", Icon: Zap, route: "/category/electric-office", color: "bg-yellow-500" },
    { id: 24, name: "শিক্ষা প্রতিষ্ঠান", Icon: School, route: "/category/educational-institute", color: "bg-blue-600" },
    { id: 25, name: "কুরিয়ার সার্ভিস", Icon: Package, route: "/category/courier", color: "bg-red-600" },
    { id: 26, name: "ভিডিও দেখুন", Icon: Play, route: "/category/videos", color: "bg-gray-600" },
    { id: 27, name: "পার্লার", Icon: Scissors, route: "/category/parlor", color: "bg-pink-600" },
    { id: 28, name: "ওয়েবসাইট", Icon: Globe, route: "/category/website", color: "bg-indigo-600" },
    { id: 29, name: "পৌরসভা", Icon: Building, route: "/category/municipality", color: "bg-slate-600" },
    { id: 30, name: "ব্যাংক ও বীমা", Icon: CreditCard, route: "/category/bank-insurance", color: "bg-emerald-600" },
    { id: 31, name: "গ্যাস স্টেশন", Icon: Fuel, route: "/category/gas-station", color: "bg-orange-600" },
    { id: 32, name: "সংবাদপত্র", Icon: Newspaper, route: "/category/newspaper", color: "bg-gray-600" },
    { id: 33, name: "সাধার", Icon: HelpCircle, route: "/category/general-help", color: "bg-teal-600" },
    { id: 34, name: "দিন মজুর", Icon: Users, route: "/category/day-laborer", color: "bg-amber-600" },
    { id: 35, name: "জিকির", Icon: Book, route: "/category/zikir", color: "bg-green-600" }
  ];

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold mb-4 text-center">সেবা ক্যাটাগরি</h2>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => {
          const IconComponent = category.Icon;
          return (
            <Card
              key={category.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-0 shadow-sm"
              onClick={() => navigate(category.route)}
            >
              <CardContent className="p-4 text-center">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-sm font-medium leading-tight text-gray-700">{category.name}</h3>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryGrid;
