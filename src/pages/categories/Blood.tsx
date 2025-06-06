
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Phone, MapPin, Clock, Heart, User } from "lucide-react";

const Blood = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const bloodDonors = [
    {
      id: 1,
      name: 'মোহাম্মদ রফিক',
      phone: '০১৭১২-৫৫৫৫৫৫',
      location: 'ধুনট সদর',
      bloodGroup: 'A+',
      availability: 'উপলব্ধ',
      lastDonation: '৩ মাস আগে',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300'
    },
    {
      id: 2,
      name: 'ফারুক হোসেন',
      phone: '০১৮১২-৬৬৬৬৬৬',
      location: 'বাজার রোড',
      bloodGroup: 'O+',
      availability: 'উপলব্ধ',
      lastDonation: '৪ মাস আগে',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300'
    },
    {
      id: 3,
      name: 'রক্ত ব্যাংক - ধুনট',
      phone: '০১৯২৫-৭৭৭৭১১',
      location: 'সদর হাসপাতাল',
      bloodGroup: 'সব গ্রুপ',
      availability: '২৪/৭ উপলব্ধ',
      lastDonation: 'ব্যাংক সেবা',
      image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=300'
    }
  ];

  const filteredDonors = bloodDonors.filter((donor) =>
    donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donor.bloodGroup.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
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
              <Heart className="h-6 w-6" />
              <h1 className="text-2xl font-bold">রক্তদান সেবা</h1>
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="রক্তের গ্রুপ বা দাতার নাম খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </div>

        {/* Blood Groups Quick Access */}
        <div className="p-4">
          <h3 className="font-bold mb-3">রক্তের গ্রুপ অনুযায়ী খুঁজুন:</h3>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {bloodGroups.map((group) => (
              <Button
                key={group}
                variant="outline"
                size="sm"
                onClick={() => setSearchTerm(group)}
                className="h-12 font-bold text-red-600"
              >
                {group}
              </Button>
            ))}
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 mx-4 mb-4">
          <p className="text-red-700 font-medium">জরুরি রক্তের প্রয়োজনে: ১০৬ নম্বরে কল করুন</p>
        </div>

        <div className="p-4 space-y-4">
          {filteredDonors.length > 0 ? (
            filteredDonors.map((donor) => (
              <Card key={donor.id} className="hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <img
                      src={donor.image}
                      alt={donor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg">{donor.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {donor.bloodGroup}
                        </span>
                        <span className={`text-sm px-2 py-1 rounded ${
                          donor.availability === 'উপলব্ধ' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {donor.availability}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-green-600" />
                    <a href={`tel:${donor.phone}`} className="text-green-600 font-medium hover:underline">
                      {donor.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{donor.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>শেষ রক্তদান: {donor.lastDonation}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" className="flex-1 bg-red-600 hover:bg-red-700">
                      <Phone className="h-4 w-4 mr-1" />
                      যোগাযোগ করুন
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Heart className="h-4 w-4 mr-1" />
                      অনুরোধ পাঠান
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <div className="text-6xl mb-4">🩸</div>
                <h3 className="text-lg font-medium mb-2">কোন রক্তদাতা পাওয়া যায়নি</h3>
                <p className="text-muted-foreground">অন্য রক্তের গ্রুপ খুঁজে দেখুন বা নতুন অনুরোধ করুন।</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Blood;
