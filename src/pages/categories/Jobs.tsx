
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Phone, MapPin, Clock, Briefcase, DollarSign, Calendar } from "lucide-react";

const Jobs = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const jobs = [
    {
      id: 1,
      title: 'সেলস এক্সিকিউটিভ',
      company: 'আল-আমিন ট্রেডার্স',
      phone: '০১৭১২-৬৬৬৬৬০',
      location: 'বাজার রোড, ধুনট',
      salary: '১৫,০০০-২৫,০০০ টাকা',
      type: 'ফুল টাইম',
      experience: '১-৩ বছর',
      posted: '২ দিন আগে',
      requirements: 'এইচএসসি পাস, কম্পিউটার জ্ঞান',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400',
      mapUrl: 'https://maps.google.com/?q=Bazar+Road+Dhunat'
    },
    {
      id: 2,
      title: 'অ্যাকাউন্ট্যান্ট',
      company: 'ধুনট এগ্রো লিমিটেড',
      phone: '০১৮১২-৭৭৭৭৭৭',
      location: 'ইন্ডাস্ট্রিয়াল এরিয়া',
      salary: '২০,০০০-৩৫,০০০ টাকা',
      type: 'ফুল টাইম',
      experience: '২-৫ বছর',
      posted: '৪ দিন আগে',
      requirements: 'বিকম পাস, এক্সেল জ্ঞান',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400',
      mapUrl: 'https://maps.google.com/?q=Industrial+Area+Dhunat'
    },
    {
      id: 3,
      title: 'শিক্ষক (ইংরেজি)',
      company: 'আদর্শ স্কুল অ্যান্ড কলেজ',
      phone: '০১৯২৫-৮৮৮৮৮৮',
      location: 'স্কুল রোড, ধুনট',
      salary: '১৮,০০০-৩০,০০০ টাকা',
      type: 'ফুল টাইম',
      experience: '১-৪ বছর',
      posted: '১ সপ্তাহ আগে',
      requirements: 'বিএ/এমএ ইংরেজি',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
      mapUrl: 'https://maps.google.com/?q=School+Road+Dhunat'
    }
  ];

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-6">
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
              <Briefcase className="h-6 w-6" />
              <h1 className="text-2xl font-bold">চাকরি</h1>
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="চাকরির নাম বা কোম্পানি খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </div>

        <div className="p-4 space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-3">
                  <div className="flex gap-4">
                    <img
                      src={job.image}
                      alt={job.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      <p className="text-indigo-600 font-medium">{job.company}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                          {job.type}
                        </span>
                        <span className="text-sm text-gray-600">{job.experience}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-medium">{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <a href={`tel:${job.phone}`} className="text-blue-600 font-medium hover:underline">
                      {job.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <a href={job.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">
                      {job.location}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>পোস্ট: {job.posted}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>যোগ্যতা:</strong> {job.requirements}
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" className="flex-1">
                      <Phone className="h-4 w-4 mr-1" />
                      আবেদন করুন
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Briefcase className="h-4 w-4 mr-1" />
                      বিস্তারিত
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <div className="text-6xl mb-4">💼</div>
                <h3 className="text-lg font-medium mb-2">কোন চাকরি পাওয়া যায়নি</h3>
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

export default Jobs;
