
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Bus, Clock, MapPin } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const BusSchedule = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const busSchedules = [
    { route: 'ধুনট - ঢাকা', company: 'শ্যামলী পরিবহন', departure: '৬:০০ AM', arrival: '১২:০০ PM', fare: '৪৫০ টাকা' },
    { route: 'ধুনট - রাজশাহী', company: 'গ্রিনলাইন', departure: '৭:৩০ AM', arrival: '১০:৩০ AM', fare: '২০০ টাকা' },
    { route: 'ধুনট - বগুড়া', company: 'হানিফ এন্টারপ্রাইজ', departure: '৮:০০ AM', arrival: '৯:০০ AM', fare: '৮০ টাকা' },
    { route: 'ধুনট - ঢাকা', company: 'এনা পরিবহন', departure: '২:০০ PM', arrival: '৮:০০ PM', fare: '৪০০ টাকা' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
          <div className="flex items-center gap-3 mb-4">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="text-white hover:bg-white/20">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <Bus className="h-6 w-6" />
              <h1 className="text-2xl font-bold">বাসের সময়সূচি</h1>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="গন্তব্য খুঁজুন..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 bg-white" />
          </div>
        </div>

        <div className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>আজকের বাস সময়সূচি</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>রুট</TableHead>
                    <TableHead>কোম্পানি</TableHead>
                    <TableHead>ছাড়ার সময়</TableHead>
                    <TableHead>ভাড়া</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {busSchedules.map((schedule, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{schedule.route}</TableCell>
                      <TableCell>{schedule.company}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {schedule.departure}
                        </div>
                      </TableCell>
                      <TableCell className="font-bold text-green-600">{schedule.fare}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default BusSchedule;
