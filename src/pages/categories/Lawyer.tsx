
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Phone, MapPin, Clock, Scale, Star, Briefcase } from "lucide-react";

const Lawyer = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const lawyers = [
    {
      id: 1,
      name: 'আ.ন.ম করিম',
      phone: '০১৭১২-৪৪৪৪৪৪',
      location: 'কোর্ট রোড, ধুনট',
      speciality: 'ফৌজদারি আইন',
      experience: '২০ বছর',
      education: 'এলএলবি, ঢাকা বিশ্ববিদ্যালয়',
      time: 'সকাল ৯টা - সন্ধ্যা ৬টা',
      rating: 4.8,
      fee: '৫০০০-১৫০০০ টাকা',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300',
      mapUrl: 'https://maps.google.com/?q=Court+Road+Dhunat'
    },
    {
      id: 2,
      name: 'ব্যারিস্টার ফাতেমা',
      phone: '০১৮১২-৫৫৫৫৫৫',
      location: 'ব্যার অ্যাসোসিয়েশন, ধুনট',
      speciality: 'পারিবারিক আইন',
      experience: '১৫ বছর',
      education: 'ব্যারিস্টার অ্যাট ল, লিংকন ইন',
      time: 'সকাল ১০টা - বিকাল ৫টা',
      rating: 4.9,
      fee: '৮০০০-২০০০০ টাকা',
      image: 'https://images.unsplash.com/photo-1594736797933-d0403ba0ee65?w=300',
      mapUrl: 'https://maps.google.com/?q=Bar+Association+Dhunat'
    }
  ];

  const filteredLawyers = lawyers.filter((lawyer) =>
    lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lawyer.speciality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-6">
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
              <Scale className="h-6 w-6" />
              <h1 className="text-2xl font-bold">আইনজীবী</h1>
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="আইনজীবী বা বিশেষত্ব খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </div>

        <div className="p-4 space-y-4">
          {filteredLawyers.length > 0 ? (
            filteredLawyers.map((lawyer) => (
              <Card key={lawyer.id} className="hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <img
                      src={lawyer.image}
                      alt={lawyer.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg">{lawyer.name}</CardTitle>
                      <p className="text-amber-600 font-medium">{lawyer.speciality}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{lawyer.rating} • {lawyer.experience} অভিজ্ঞতা</span>
                      </div>
                      <p className="text-green-600 font-bold text-sm">ফি: {lawyer.fee}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-600">{lawyer.education}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-green-600" />
                    <a href={`tel:${lawyer.phone}`} className="text-green-600 font-medium hover:underline">
                      {lawyer.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <a href={lawyer.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">
                      {lawyer.location}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{lawyer.time}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" className="flex-1">
                      <Phone className="h-4 w-4 mr-1" />
                      পরামর্শ নিন
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Briefcase className="h-4 w-4 mr-1" />
                      অ্যাপয়েন্টমেন্ট
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <div className="text-6xl mb-4">⚖️</div>
                <h3 className="text-lg font-medium mb-2">কোন আইনজীবী পাওয়া যায়নি</h3>
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

export default Lawyer;
