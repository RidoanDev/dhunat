
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, AlertCircle, Info, CheckCircle } from "lucide-react";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "বিদ্যুৎ বিভ্রাটের নোটিশ",
      description: "আগামীকাল সকাল ৯টা থেকে দুপুর ২টা পর্যন্ত বিদ্যুৎ বিভ্রাট থাকবে রক্ষণাবেক্ষণের কাজের জন্য।",
      date: "২৫ ডিসেম্বর, ২০২৪",
      type: "urgent",
      icon: AlertCircle
    },
    {
      id: 2,
      title: "নতুন বাস সার্ভিস",
      description: "ধুনট থেকে ঢাকা নতুন বাস সার্ভিস চালু হয়েছে। প্রতিদিন সকাল ৬টা ও ৮টায় বাস ছাড়বে।",
      date: "২৪ ডিসেম্বর, ২০২৪",
      type: "info",
      icon: Info
    },
    {
      id: 3,
      title: "নতুন ডায়াগনস্টিক সেন্টার",
      description: "বাজার রোডে একটি নতুন ডায়াগনস্টিক সেন্টার খোলা হয়েছে। সব ধরনের পরীক্ষা উপলব্ধ।",
      date: "২৩ ডিসেম্বর, ২০২৪",
      type: "success",
      icon: CheckCircle
    },
    {
      id: 4,
      title: "অ্যাপ আপডেট",
      description: "ধুনট.অ্যাপে নতুন ফিচার যোগ করা হয়েছে। এখন আরও সহজভাবে সেবা খুঁজে পাবেন।",
      date: "২২ ডিসেম্বর, ২০২৪",
      type: "info",
      icon: Info
    },
    {
      id: 5,
      title: "জরুরি নাম্বার আপডেট",
      description: "কিছু জরুরি সেবার ফোন নাম্বার পরিবর্তন হয়েছে। নতুন নাম্বারগুলো অ্যাপে আপডেট করা হয়েছে।",
      date: "২১ ডিসেম্বর, ২০২৪",
      type: "urgent",
      icon: AlertCircle
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "urgent":
        return "bg-red-100 text-red-800 border-red-200";
      case "success":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "urgent":
        return "জরুরি";
      case "success":
        return "নতুন";
      default:
        return "তথ্য";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-center">নোটিফিকেশন</h1>
          
          <div className="space-y-4">
            {notifications.map((notification) => {
              const IconComponent = notification.icon;
              return (
                <Card key={notification.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <IconComponent className={`h-5 w-5 ${
                          notification.type === 'urgent' ? 'text-red-600' :
                          notification.type === 'success' ? 'text-green-600' : 'text-blue-600'
                        }`} />
                        <CardTitle className="text-lg">{notification.title}</CardTitle>
                      </div>
                      <Badge className={getTypeColor(notification.type)}>
                        {getTypeLabel(notification.type)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-700 mb-3">{notification.description}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{notification.date}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {notifications.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <Bell className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">কোন নোটিফিকেশন নেই</h3>
                <p className="text-muted-foreground">এখনো কোন নতুন বিজ্ঞপ্তি পাওয়া যায়নি।</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Notifications;
