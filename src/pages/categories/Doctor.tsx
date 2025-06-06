
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Phone, MapPin, Clock, Star, Stethoscope } from "lucide-react";

const Doctor = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const doctors = [
    {
      id: 1,
      name: 'ডা. মোহাম্মদ রহিম',
      phone: '০১৭১২-৩৪৫৬৭৮',
      location: 'ধুনট সদর হাসপাতাল',
      speciality: 'সাধারণ চিকিত্সক',
      time: 'সকাল ৯টা - দুপুর ২টা',
      rating: 4.5,
      experience: '১৫ বছর',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300',
      mapUrl: 'https://maps.google.com/?q=Dhunat+Hospital'
    },
    {
      id: 2,
      name: 'ডা. ফাতেমা খাতুন',
      phone: '০১৮১২-৯৮৭৬৫৪',
      location: 'আধুনিক মেডিকেল সেন্টার',
      speciality: 'শিশু বিশেষজ্ঞ',
      time: 'বিকাল ৪টা - রাত ৮টা',
      rating: 4.8,
      experience: '১২ বছর',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300',
      mapUrl: 'https://maps.google.com/?q=Modern+Medical+Center+Dhunat'
    },
    {
      id: 3,
      name: 'ডা. আব্দুল করিম',
      phone: '০১৯২৫-১১২২৩৩',
      location: 'জেলা হাসপাতাল',
      speciality: 'হৃদরোগ বিশেষজ্ঞ',
      time: 'সকাল ১০টা - দুপুর ১টা',
      rating: 4.7,
      experience: '২০ বছর',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300',
      mapUrl: 'https://maps.google.com/?q=District+Hospital+Dhunat'
    }
  ];

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        {/* Category Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6">
          <div className="flex items-center gap-3 mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <Stethoscope className="h-6 w-6" />
              <h1 className="text-2xl font-bold">ডাক্তার</h1>
            </div>
          </div>
          
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="ডাক্তার বা বিশেষত্ব খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 m-4">
          <p className="text-red-700 font-medium">জরুরি সেবার জন্য: ৯৯৯ নম্বরে কল করুন</p>
        </div>

        {/* Doctors List */}
        <div className="p-4 space-y-4">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <Card key={doctor.id} className="hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg">{doctor.name}</CardTitle>
                      <p className="text-primary font-medium">{doctor.speciality}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{doctor.rating} • {doctor.experience} অভিজ্ঞতা</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-green-600" />
                    <a href={`tel:${doctor.phone}`} className="text-green-600 font-medium hover:underline">
                      {doctor.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <a 
                      href={doctor.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary hover:underline"
                    >
                      {doctor.location}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{doctor.time}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" className="flex-1">
                      <Phone className="h-4 w-4 mr-1" />
                      কল করুন
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
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-lg font-medium mb-2">কোন ডাক্তার পাওয়া যায়নি</h3>
                <p className="text-muted-foreground">
                  {searchTerm ? 
                    `"${searchTerm}" এর জন্য কোন ফলাফল পাওয়া যায়নি।` :
                    `এই এলাকায় এখনো কোন ডাক্তার যোগ করা হয়নি।`
                  }
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Doctor;
