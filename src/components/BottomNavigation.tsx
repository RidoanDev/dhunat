
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Bell, Info, Smartphone } from "lucide-react";

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { 
      name: "হোম", 
      Icon: Home, 
      path: "/"
    },
    { 
      name: "আমার অ্যাপ", 
      Icon: Smartphone, 
      path: "/my-app"
    },
    { 
      name: "নোটিফিকেশন", 
      Icon: Bell, 
      path: "/notifications"
    },
    { 
      name: "আমাদের সম্পর্কে", 
      Icon: Info, 
      path: "/about"
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
      <div className="grid grid-cols-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const IconComponent = item.Icon;
          
          return (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center py-2 px-1 transition-colors ${
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              <IconComponent className="h-6 w-6" />
              <span className="text-xs mt-1 leading-tight">{item.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
