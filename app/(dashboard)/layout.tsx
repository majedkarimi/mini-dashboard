import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      {/* Sidebar */}

      <Sidebar />

      {/* Main area */}
      <div className="flex justify-center items-start w-full">
        <div className="flex flex-col flex-1 max-w-[1200px] p-7">
          <Header />

          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
}
