
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Home } from "lucide-react";

const HouseRent = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white p-6">
          <div className="flex items-center gap-3 mb-4">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="text-white hover:bg-white/20">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <Home className="h-6 w-6" />
              <h1 className="text-2xl font-bold">বাসা ভাড়া</h1>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="বাড়ি খুঁজুন..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 bg-white" />
          </div>
        </div>
        <div className="p-4">
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-lg font-medium mb-2">বাসা ভাড়ার তালিকা আপডেট হচ্ছে</h3>
              <p className="text-muted-foreground">ভাড়া বাড়ির তথ্য শীঘ্রই যোগ করা হবে।</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default HouseRent;
