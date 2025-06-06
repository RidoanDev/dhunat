
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "হোম", href: "/" },
    { name: "আমার অ্যাপ", href: "/my-app" },
    { name: "নোটিফিকেশন", href: "/notifications" },
    { name: "আমাদের সম্পর্কে", href: "/about" },
  ];

  return (
    <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg">ধ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Dhunat.App</h1>
              <p className="text-xs opacity-90">স্থানীয় সেবা নির্দেশিকা</p>
            </div>
          </div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="text-primary-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="py-6">
                <h2 className="text-lg font-semibold mb-6">মেনু</h2>
                <nav className="space-y-4">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
