
import { useState, useEffect } from "react";
import { Megaphone } from "lucide-react";

const NoticeSlider = () => {
  const notices = [
    "🚨 জরুরি: আগামীকাল বিদ্যুৎ বিভ্রাট থাকবে সকাল ৯টা থেকে দুপুর ২টা পর্যন্ত",
    "📢 নতুন বাস সার্ভিস চালু! ধুনট থেকে ঢাকা প্রতিদিন ৬টা ও ৮টায়",
    "🏥 নতুন ডায়াগনস্টিক সেন্টার খোলা হয়েছে বাজার রোডে",
    "🌟 ধুনট.অ্যাপে আপনার ব্যবসার তথ্য যোগ করুন বিনামূল্যে!"
  ];

  return (
    <div className="bg-orange-50 border-l-4 border-orange-400 mx-4 my-3 p-3 rounded-r-lg">
      <div className="flex items-center">
        <div className="bg-orange-500 rounded-full p-2 mr-3 flex-shrink-0">
          <Megaphone className="h-4 w-4 text-white" />
        </div>
        <div className="overflow-hidden flex-1">
          <div className="whitespace-nowrap animate-marquee">
            {notices.map((notice, index) => (
              <span
                key={index}
                className="inline-block text-sm text-orange-800 mr-8"
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
