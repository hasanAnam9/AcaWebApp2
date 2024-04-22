import SideBarMenu from "@/components/dashboard-components/SiderBarMenu/SideBarMenu";
import "../globals.css";
import DashboardTopBar from "@/components/dashboard-components/DashboardTopBar/DashboardTopBar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen">
        <div className="bg-white flex gap-4 p-4">
          <div className="w-3/12 shadow-2xl p-4 min-h-[95vh] rounded-lg ">
            <SideBarMenu />
          </div>
          <div className="w-9/12 ">
            <div className="shadow-lg px-4 py-2 rounded-lg">
              <DashboardTopBar />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
