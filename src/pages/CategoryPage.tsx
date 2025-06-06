
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Phone, MapPin, Clock } from "lucide-react";

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data - in a real app this would come from an API
  const getCategoryData = (category: string) => {
    const categories: { [key: string]: any } = {
      'doctor': {
        name: 'ডাক্তার',
        services: [
          {
            id: 1,
            name: 'ডা. মোহাম্মদ রহিম',
            phone: '০১৭১২-৩৪৫৬৭৮',
            location: 'ধুনট সদর হাসপাতাল',
            speciality: 'সাধারণ চিকিত্সক',
            time: 'সকাল ৯টা - দুপুর ২টা'
          },
          {
            id: 2,
            name: 'ডা. ফাতেমা খাতুন',
            phone: '০১৮১২-৯৮৭৬৫৪',
            location: 'আধুনিক মেডিকেল সেন্টার',
            speciality: 'শিশু বিশেষজ্ঞ',
            time: 'বিকাল ৪টা - রাত ৮টা'
          }
        ]
      },
      'hospital': {
        name: 'হাসপাতাল',
        services: [
          {
            id: 1,
            name: 'ধুনট সদর হাসপাতাল',
            phone: '০১৭১২-১১১১১১',
            location: 'ধুনট সদর',
            speciality: 'জরুরি সেবা ২৪/৭',
            time: 'সব সময় খোলা'
          }
        ]
      }
    };

    return categories[category] || {
      name: 'সেবা',
      services: []
    };
  };

  const categoryData = getCategoryData(category || '');
  
  const filteredServices = categoryData.services.filter((service: any) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.speciality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        {/* Category Header */}
        <div className="bg-primary text-primary-foreground p-4">
          <div className="flex items-center gap-3 mb-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-xl font-bold">{categoryData.name}</h1>
          </div>
          
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder={`${categoryData.name} খুঁজুন...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </div>

        {/* Services List */}
        <div className="p-4 space-y-4">
          {filteredServices.length > 0 ? (
            filteredServices.map((service: any) => (
              <Card key={service.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <p className="text-sm text-primary">{service.speciality}</p>
                </CardHeader>
                <CardContent className="pt-0 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-green-600" />
                    <a href={`tel:${service.phone}`} className="text-green-600 font-medium">
                      {service.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{service.location}</span>
                  </div>
                  {service.time && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{service.time}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-lg font-medium mb-2">কোন সেবা পাওয়া যায়নি</h3>
                <p className="text-muted-foreground">
                  {searchTerm ? 
                    `"${searchTerm}" এর জন্য কোন ফলাফল পাওয়া যায়নি।` :
                    `এই ক্যাটাগরিতে এখনো কোন সেবা যোগ করা হয়নি।`
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

export default CategoryPage;
