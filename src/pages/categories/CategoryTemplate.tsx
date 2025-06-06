
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search } from "lucide-react";

interface CategoryTemplateProps {
  title: string;
  icon: string;
  color: string;
  message: string;
  description: string;
}

const CategoryTemplate = ({ title, icon, color, message, description }: CategoryTemplateProps) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <div className={`bg-gradient-to-r ${color} text-white p-6`}>
          <div className="flex items-center gap-3 mb-4">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="text-white hover:bg-white/20">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder={`${title} খুঁজুন...`} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 bg-white" />
          </div>
        </div>
        <div className="p-4">
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-6xl mb-4">{icon}</div>
              <h3 className="text-lg font-medium mb-2">{message}</h3>
              <p className="text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default CategoryTemplate;
