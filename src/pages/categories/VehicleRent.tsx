
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Phone, MapPin, Car, Users, Fuel } from "lucide-react";

const VehicleRent = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const vehicles = [
    {
      id: 1,
      name: 'রহিম ট্রান্সপোর্ট',
      phone: '০১৭১২-৮৮৮৮৮৮',
      location: 'বাস স্ট্যান্ড, ধুনট',
      vehicleType: 'মাইক্রোবাস',
      capacity: '১২ জন',
      dailyRate: '৩০০০ টাকা',
      features: 'এসি, কুশন সিট',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400',
      mapUrl: 'https://maps.google.com/?q=Bus+Stand+Dhunat'
    },
    {
      id: 2,
      name: 'করিম রেন্ট এ কার',
      phone: '০১৮১২-৯৯৯৯৯৯',
      location: 'স্টেশন রোড, ধুনট',
      vehicleType: 'প্রাইভেট কার',
      capacity: '৪ জন',
      dailyRate: '২০০০ টাকা',
      features: 'এসি, মিউজিক সিস্টেম',
      image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=400',
      mapUrl: 'https://maps.google.com/?q=Station+Road+Dhunat'
    },
    {
      id: 3,
      name: 'ভাই ভাই ট্রাক সার্ভিস',
      phone: '০১৯২৫-১০১০১০',
      location: 'ট্রাক স্ট্যান্ড, ধুনট',
      vehicleType: 'ট্রাক',
      capacity: 'পণ্য পরিবহন',
      dailyRate: '৪০০০ টাকা',
      features: 'কভার্ড, বড় লোড',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400',
      mapUrl: 'https://maps.google.com/?q=Truck+Stand+Dhunat'
    }
  ];

  const filteredVehicles = vehicles.filter((vehicle) =>
    vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.vehicleType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-6">
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
              <Car className="h-6 w-6" />
              <h1 className="text-2xl font-bold">গাড়ি ভাড়া</h1>
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="গাড়ির ধরন বা নাম খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </div>

        <div className="p-4 space-y-4">
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-3">
                  <div className="flex gap-4">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg">{vehicle.name}</CardTitle>
                      <p className="text-orange-600 font-medium">{vehicle.vehicleType}</p>
                      <p className="text-green-600 font-bold">দৈনিক: {vehicle.dailyRate}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span>{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Fuel className="h-4 w-4 text-green-600" />
                      <span>{vehicle.features}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-green-600" />
                    <a href={`tel:${vehicle.phone}`} className="text-green-600 font-medium hover:underline">
                      {vehicle.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <a href={vehicle.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">
                      {vehicle.location}
                    </a>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" className="flex-1">
                      <Phone className="h-4 w-4 mr-1" />
                      বুকিং করুন
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Car className="h-4 w-4 mr-1" />
                      বিস্তারিত
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <div className="text-6xl mb-4">🚗</div>
                <h3 className="text-lg font-medium mb-2">কোন গাড়ি পাওয়া যায়নি</h3>
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

export default VehicleRent;
