"use client";

import DashboardCard from "../components/DashboardCard";
import { QuickAccessData } from "../data/quick-access";

const DashboardPage = () => {
  return (
    <main className="bg-background">
      {/*     Quick Access */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-medium text-gray-700 mb-2">
            دسترسی سریع
          </h1>
          <p className="text-gray-400 text-sm">
            مدیریت سریع و آسان کسب‌وکار قصابی شما
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-5 ">
          {QuickAccessData.map((section, index) => (
            <DashboardCard
              key={index}
              title={section.title}
              image={section.image}
              href={section.href}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
export default DashboardPage;
