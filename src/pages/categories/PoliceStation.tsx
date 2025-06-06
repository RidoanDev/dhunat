
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Phone, MapPin, Clock, Shield, AlertTriangle } from "lucide-react";

const PoliceStation = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const policeStations = [
    {
      id: 1,
      name: 'ধুনট থানা',
      phone: '০১৭৩০-৯৯৯১১১',
      emergencyPhone: '৯৯৯',
      location: 'থানা রোড, ধুনট সদর',
      officer: 'ওসি মোহাম্মদ আলী',
      time: '২৪ ঘন্টা সেবা',
      services: 'জিডি, মামলা, পাসপোর্ট ভেরিফিকেশন',
      image: 'https://images.unsplash.com/photo-1575377222312-dd1a63a51638?w=400',
      mapUrl: 'https://maps.google.com/?q=Dhunat+Police+Station'
    },
    {
      id: 2,
      name: 'ট্রাফিক পুলিশ',
      phone: '০১৭৩০-৮৮৮২২২',
      emergencyPhone: '৯৯৯',
      location: 'মেইন রোড, ধুনট',
      officer: 'এসআই করিম উদ্দিন',
      time: 'সকাল ৮টা - রাত ৮টা',
      services: 'ট্রাফিক নিয়ন্ত্রণ, লাইসেন্স যাচাই',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400',
      mapUrl: 'https://maps.google.com/?q=Traffic+Police+Dhunat'
    }
  ];

  const filteredStations = policeStations.filter((station) =>
    station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    station.services.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-6">
          <div className="flex items-center gap-3 mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="text-white hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <h1 className="text-2xl font-bold">থানা-পুলিশ</h1>
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="থানা বা সেবা খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 m-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <p className="text-red-700 font-medium">জরুরি সেবার জন্য: ৯৯৯ নম্বরে কল করুন</p>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {filteredStations.length > 0 ? (
            filteredStations.map((station) => (
              <Card key={station.id} className="hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-3">
                  <div className="flex gap-4">
                    <img
                      src={station.image}
                      alt={station.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg">{station.name}</CardTitle>
                      <p className="text-blue-800 font-medium">{station.officer}</p>
                      <p className="text-sm text-gray-600">{station.services}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-green-600" />
                    <a href={`tel:${station.phone}`} className="text-green-600 font-medium hover:underline">
                      {station.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <a href={`tel:${station.emergencyPhone}`} className="text-red-600 font-medium hover:underline">
                      জরুরি: {station.emergencyPhone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <a href={station.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">
                      {station.location}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{station.time}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" className="flex-1 bg-red-600 hover:bg-red-700">
                      <Phone className="h-4 w-4 mr-1" />
                      জরুরি কল
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      দিকনির্দেশনা
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <div className="text-6xl mb-4">🚔</div>
                <h3 className="text-lg font-medium mb-2">কোন থানা পাওয়া যায়নি</h3>
                <p className="text-muted-foreground">খোঁজার শর্ত পরিবর্তন করে আবার চেষ্টা করুন।</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default PoliceStation;
