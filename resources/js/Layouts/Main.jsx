import SideBar from "@/Components/Sidebar";
import DetailBar from "@/Components/DetailBar";

export default function MainLayout({ children }) {
    return (
        <>
            <div className="flex h-screen justify-between">
                <SideBar />
                <main className="bg-bg grow overflow-y-auto p-6 scrollbar-hide">{children}</main>
                <DetailBar />
            </div>
        </>
    );
}