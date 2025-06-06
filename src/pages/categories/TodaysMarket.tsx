
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, ShoppingCart, TrendingUp, TrendingDown } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TodaysMarket = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const marketPrices = [
    { item: 'চাল (মিনিকেট)', unit: 'কেজি', price: '৫৮ টাকা', change: '+২', trend: 'up' },
    { item: 'ডাল (মসুর)', unit: 'কেজি', price: '১৩০ টাকা', change: '-৫', trend: 'down' },
    { item: 'পেঁয়াজ', unit: 'কেজি', price: '৪৫ টাকা', change: '+৩', trend: 'up' },
    { item: 'আলু', unit: 'কেজি', price: '৩৫ টাকা', change: '০', trend: 'stable' },
    { item: 'গরুর মাংস', unit: 'কেজি', price: '৭৫০ টাকা', change: '+১০', trend: 'up' },
    { item: 'মুরগির মাংস', unit: 'কেজি', price: '১৮০ টাকা', change: '-৫', trend: 'down' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6">
          <div className="flex items-center gap-3 mb-4">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="text-white hover:bg-white/20">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-6 w-6" />
              <h1 className="text-2xl font-bold">আজকের বাজার</h1>
            </div>
          </div>
          <p className="text-emerald-100">আজকের তারিখ: {new Date().toLocaleDateString('bn-BD')}</p>
        </div>

        <div className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>আজকের বাজার দর</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>পণ্য</TableHead>
                    <TableHead>একক</TableHead>
                    <TableHead>দাম</TableHead>
                    <TableHead>পরিবর্তন</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {marketPrices.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.item}</TableCell>
                      <TableCell>{item.unit}</TableCell>
                      <TableCell className="font-bold">{item.price}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          {item.trend === 'up' && <TrendingUp className="h-4 w-4 text-red-500" />}
                          {item.trend === 'down' && <TrendingDown className="h-4 w-4 text-green-500" />}
                          <span className={`text-sm ${
                            item.trend === 'up' ? 'text-red-500' : 
                            item.trend === 'down' ? 'text-green-500' : 'text-gray-500'
                          }`}>
                            {item.change}
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="mt-4 text-sm text-gray-600 bg-yellow-50 p-3 rounded">
            <p><strong>নোট:</strong> দামগুলো আনুমানিক এবং বিভিন্ন দোকানে ভিন্ন হতে পারে। সর্বশেষ আপডেট: আজ সকাল ১০টা</p>
          </div>
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default TodaysMarket;
