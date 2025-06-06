
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Bell, Info } from "lucide-react";

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "হোম", icon: Home, path: "/" },
    { name: "আমার অ্যাপ", icon: () => <span className="text-lg">📱</span>, path: "/my-app" },
    { name: "নোটিফিকেশন", icon: Bell, path: "/notifications" },
    { name: "আমাদের সম্পর্কে", icon: Info, path: "/about" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
      <div className="grid grid-cols-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const IconComponent = item.icon;
          
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
              {typeof IconComponent === 'function' ? (
                <IconComponent />
              ) : (
                <IconComponent className="h-5 w-5" />
              )}
              <span className="text-xs mt-1 leading-tight">{item.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
