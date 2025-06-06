
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Phone, MapPin, Clock, Bed, Ambulance } from "lucide-react";

const Hospital = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const hospitals = [
    {
      id: 1,
      name: 'ধুনট সদর হাসপাতাল',
      phone: '০১৭১২-১১১১১১',
      location: 'ধুনট সদর',
      services: 'জরুরি সেবা ২৪/৭, সাধারণ চিকিৎসা',
      time: 'সব সময় খোলা',
      beds: '৫০ শয্যা',
      ambulance: 'উপলব্ধ',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400',
      mapUrl: 'https://maps.google.com/?q=Dhunat+Sadar+Hospital'
    },
    {
      id: 2,
      name: 'আধুনিক মেডিকেল সেন্টার',
      phone: '০১৮১২-২২২২২২',
      location: 'বাজার রোড, ধুনট',
      services: 'ডায়াগনস্টিক, স্পেশালিস্ট ডাক্তার',
      time: 'সকাল ৮টা - রাত ১০টা',
      beds: '২০ শয্যা',
      ambulance: 'উপলব্ধ',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400',
      mapUrl: 'https://maps.google.com/?q=Modern+Medical+Center+Dhunat'
    }
  ];

  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.services.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
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
              <Bed className="h-6 w-6" />
              <h1 className="text-2xl font-bold">হাসপাতাল</h1>
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="হাসপাতাল বা সেবা খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 m-4">
          <p className="text-red-700 font-medium">জরুরি সেবার জন্য: ৯৯৯ নম্বরে কল করুন</p>
        </div>

        <div className="p-4 space-y-4">
          {filteredHospitals.length > 0 ? (
            filteredHospitals.map((hospital) => (
              <Card key={hospital.id} className="hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-3">
                  <div className="flex gap-4">
                    <img
                      src={hospital.image}
                      alt={hospital.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg">{hospital.name}</CardTitle>
                      <p className="text-blue-600 font-medium">{hospital.services}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Bed className="h-4 w-4 text-blue-600" />
                      <span>{hospital.beds}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ambulance className="h-4 w-4 text-red-600" />
                      <span>{hospital.ambulance}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-green-600" />
                    <a href={`tel:${hospital.phone}`} className="text-green-600 font-medium hover:underline">
                      {hospital.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <a href={hospital.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">
                      {hospital.location}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{hospital.time}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" className="flex-1">
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
                <div className="text-6xl mb-4">🏥</div>
                <h3 className="text-lg font-medium mb-2">কোন হাসপাতাল পাওয়া যায়নি</h3>
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

export default Hospital;
