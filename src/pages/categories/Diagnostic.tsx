
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Phone, MapPin, Clock, TestTube, Calendar } from "lucide-react";

const Diagnostic = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const diagnostics = [
    {
      id: 1,
      name: 'পপুলার ডায়াগনস্টিক সেন্টার',
      phone: '০১৭১২-৩৩৩৩৩৩',
      location: 'স্টেশন রোড, ধুনট',
      services: 'এক্স-রে, ইসিজি, আল্ট্রাসনোগ্রাম, ব্লাড টেস্ট',
      time: 'সকাল ৮টা - রাত ৮টা',
      price: '৫০০-৩০০০ টাকা',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
      mapUrl: 'https://maps.google.com/?q=Popular+Diagnostic+Dhunat'
    },
    {
      id: 2,
      name: 'মডার্ন ল্যাব',
      phone: '০১৮১২-৪৪৪৪৪৪',
      location: 'বাজার চত্বর, ধুনট',
      services: 'প্যাথলজি, মাইক্রোবায়োলজি, হরমোন টেস্ট',
      time: 'সকাল ৭টা - সন্ধ্যা ৭টা',
      price: '৩০০-২৫০০ টাকা',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400',
      mapUrl: 'https://maps.google.com/?q=Modern+Lab+Dhunat'
    }
  ];

  const filteredDiagnostics = diagnostics.filter((diagnostic) =>
    diagnostic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    diagnostic.services.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
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
              <TestTube className="h-6 w-6" />
              <h1 className="text-2xl font-bold">ডায়াগনস্টিক সেন্টার</h1>
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="ডায়াগনস্টিক সেন্টার বা টেস্ট খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </div>

        <div className="p-4 space-y-4">
          {filteredDiagnostics.length > 0 ? (
            filteredDiagnostics.map((diagnostic) => (
              <Card key={diagnostic.id} className="hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-3">
                  <div className="flex gap-4">
                    <img
                      src={diagnostic.image}
                      alt={diagnostic.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg">{diagnostic.name}</CardTitle>
                      <p className="text-purple-600 font-medium text-sm">{diagnostic.services}</p>
                      <p className="text-green-600 font-bold text-sm mt-1">মূল্য: {diagnostic.price}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-green-600" />
                    <a href={`tel:${diagnostic.phone}`} className="text-green-600 font-medium hover:underline">
                      {diagnostic.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <a href={diagnostic.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">
                      {diagnostic.location}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{diagnostic.time}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" className="flex-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      অ্যাপয়েন্টমেন্ট
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Phone className="h-4 w-4 mr-1" />
                      কল করুন
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <div className="text-6xl mb-4">🔬</div>
                <h3 className="text-lg font-medium mb-2">কোন ডায়াগনস্টিক সেন্টার পাওয়া যায়নি</h3>
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

export default Diagnostic;
