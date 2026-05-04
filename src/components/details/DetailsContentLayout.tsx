import React from "react";

interface DetailsContentLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

export default function DetailsContentLayout({ leftContent, rightContent }: DetailsContentLayoutProps) {
  return (
    <section className="bg-white pb-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12 -mt-16 sm:-mt-24 relative z-30">
        
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          
          {/* Main Left Content Column (approx 70%) */}
          <div className="w-full lg:w-[68%] xl:w-[72%] space-y-24 bg-white p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-sm">
            {leftContent}
          </div>

          {/* Sticky Right Sidebar Column (approx 30%) */}
          <div className="w-full lg:w-[32%] xl:w-[28%] pl-0 lg:pl-4">
            <div className="sticky top-24 pt-4 lg:pt-0">
              {rightContent}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
