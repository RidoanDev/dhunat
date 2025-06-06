
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <Card>
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-2xl">ধ</span>
              </div>
              <CardTitle className="text-2xl">Dhunat.App</CardTitle>
              <p className="text-muted-foreground">স্থানীয় সেবা নির্দেশিকা</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center text-gray-700">
                ধুনট.অ্যাপ হল আমাদের স্থানীয় এলাকার জন্য একটি সেবা নির্দেশিকা অ্যাপ্লিকেশন। 
                এখানে আপনি দ্রুত ও সহজভাবে প্রয়োজনীয় সব ধরনের সেবা খুঁজে পাবেন।
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                আমাদের উদ্দেশ্য
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• স্থানীয় সেবাদানকারীদের সাথে মানুষের সহজ যোগাযোগ</li>
                <li>• জরুরি সেবায় দ্রুত প্রবেশাধিকার</li>
                <li>• স্থানীয় ব্যবসার প্রসার</li>
                <li>• ডিজিটাল বাংলাদেশ গড়ার অংশীদারিত্ব</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>যোগাযোগ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+৮৮০১৭১২-৩৪৫৬৭৮</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@dhunat.app</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>ধুনট, বগুড়া, বাংলাদেশ</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-sm text-muted-foreground">
                © ২০২৪ Dhunat.App - সকল অধিকার সংরক্ষিত
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default About;
