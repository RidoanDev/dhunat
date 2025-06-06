
import { useState } from "react";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, User, Phone, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MyApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "ত্রুটি",
        description: "দয়া করে সব ক্ষেত্র পূরণ করুন।",
        variant: "destructive"
      });
      return;
    }

    const emailBody = `নাম: ${formData.name}%0D%0Aফোন: ${formData.phone}%0D%0A%0D%0Aবার্তা:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:admin@dhunat.app?subject=ধুনট.অ্যাপ থেকে যোগাযোগ&body=${emailBody}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "সফল!",
      description: "আপনার ইমেইল অ্যাপ খোলা হয়েছে। দয়া করে ইমেইল পাঠান।",
    });

    // Reset form
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <MessageCircle className="h-6 w-6" />
                আমাদের সাথে যোগাযোগ
              </CardTitle>
              <p className="text-muted-foreground">
                আপনার মতামত, প্রশ্ন বা সহযোগিতার জন্য আমাদের সাথে যোগাযোগ করুন
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    আপনার নাম *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="আপনার পূর্ণ নাম লিখুন"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    ফোন নাম্বার *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="০১৭১২-৩৪৫৬৭৮"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    আপনার বার্তা *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="আপনার মতামত, প্রশ্ন বা পরামর্শ লিখুন..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  ইমেইল পাঠান
                </Button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium mb-2">📧 কী ঘটবে এরপর?</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• আপনার ইমেইল অ্যাপ খুলে যাবে</li>
                  <li>• একটি প্রি-ফিল্ড ইমেইল তৈরি হবে</li>
                  <li>• পাঠান বাটনে ক্লিক করুন</li>
                  <li>• আমরা ২৪ ঘন্টার মধ্যে উত্তর দেব</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="pt-6">
              <h3 className="font-medium mb-3">অন্যান্য যোগাযোগ মাধ্যম</h3>
              <div className="space-y-2 text-sm">
                <p><strong>ফোন:</strong> +৮৮০১৭১২-৩৪৫৬৭৮</p>
                <p><strong>ইমেইল:</strong> admin@dhunat.app</p>
                <p><strong>ঠিকানা:</strong> ধুনট, বগুড়া, বাংলাদেশ</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default MyApp;
