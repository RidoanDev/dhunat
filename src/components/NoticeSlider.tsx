
import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";

const NoticeSlider = () => {
  const [currentNotice, setCurrentNotice] = useState(0);

  const notices = [
    "🚨 জরুরি: আগামীকাল বিদ্যুৎ বিভ্রাট থাকবে সকাল ৯টা থেকে দুপুর ২টা পর্যন্ত",
    "📢 নতুন বাস সার্ভিস চালু! ধুনট থেকে ঢাকা প্রতিদিন ৬টা ও ৮টায়",
    "🏥 নতুন ডায়াগনস্টিক সেন্টার খোলা হয়েছে বাজার রোডে",
    "🌟 ধুনট.অ্যাপে আপনার ব্যবসার তথ্য যোগ করুন বিনামূল্যে!"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNotice((prev) => (prev + 1) % notices.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [notices.length]);

  return (
    <div className="bg-orange-50 border-l-4 border-orange-400 mx-4 my-3 p-3 rounded-r-lg">
      <div className="flex items-center">
        <AlertCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0" />
        <div className="overflow-hidden flex-1">
          <div 
            className="whitespace-nowrap transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentNotice * 100}%)`,
              width: `${notices.length * 100}%`
            }}
          >
            {notices.map((notice, index) => (
              <span
                key={index}
                className="inline-block text-sm text-orange-800"
                style={{ width: `${100 / notices.length}%` }}
              >
                {notice}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeSlider;
