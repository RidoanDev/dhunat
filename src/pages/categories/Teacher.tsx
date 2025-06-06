
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Phone, MapPin, GraduationCap } from "lucide-react";

const Teacher = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const teachers = [
    {
      id: 1,
      name: 'মোঃ আব্দুর রহমান',
      phone: '০১৭১২-১২৩৪৫৬',
      subject: 'গণিত (এসএসসি/এইচএসসি)',
      location: 'ধুনট সদর',
      fee: '৩০০০ টাকা/মাস',
      experience: '১০ বছর',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
          <div className="flex items-center gap-3 mb-4">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="text-white hover:bg-white/20">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              <h1 className="text-2xl font-bold">শিক্ষক</h1>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="শিক্ষক বা বিষয় খুঁজুন..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 bg-white" />
          </div>
        </div>
        <div className="p-4 space-y-4">
          {teachers.map((teacher) => (
            <Card key={teacher.id} className="hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <img src={teacher.image} alt={teacher.name} className="w-16 h-16 rounded-full object-cover" />
                  <div className="flex-1">
                    <CardTitle className="text-lg">{teacher.name}</CardTitle>
                    <p className="text-green-600 font-medium">{teacher.subject}</p>
                    <p className="text-blue-600 font-bold text-sm">ফি: {teacher.fee}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-green-600" />
                  <a href={`tel:${teacher.phone}`} className="text-green-600 font-medium hover:underline">{teacher.phone}</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{teacher.location}</span>
                </div>
                <Button size="sm" className="w-full"><Phone className="h-4 w-4 mr-1" />যোগাযোগ করুন</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Teacher;
