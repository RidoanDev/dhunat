
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Train } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TrainSchedule = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const trainSchedules = [
    { train: 'পদ্মা এক্সপ্রেস', route: 'ধুনট - ঢাকা', departure: '৬:৪৫ AM', arrival: '১১:৩০ AM', fare: '৩৫০ টাকা' },
    { train: 'রংপুর এক্সপ্রেস', route: 'ধুনট - রংপুর', departure: '৩:১৫ PM', arrival: '৬:৪৫ PM', fare: '২৮০ টাকা' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-6">
          <div className="flex items-center gap-3 mb-4">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="text-white hover:bg-white/20">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <Train className="h-6 w-6" />
              <h1 className="text-2xl font-bold">ট্রেনের সময়সূচি</h1>
            </div>
          </div>
        </div>
        <div className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>ট্রেনের সময়সূচি</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ট্রেনের নাম</TableHead>
                    <TableHead>রুট</TableHead>
                    <TableHead>ছাড়ার সময়</TableHead>
                    <TableHead>ভাড়া</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trainSchedules.map((schedule, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{schedule.train}</TableCell>
                      <TableCell>{schedule.route}</TableCell>
                      <TableCell>{schedule.departure}</TableCell>
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

export default TrainSchedule;
