import SideBar from "@/Components/Sidebar";


export default function MainLayout({ children }) {
    return (
        <>
            <div className="flex">
                <SideBar />
                <div className="flex-1">
                    <main className="bg-bg h-full pl-48">{children}</main>
                </div>
            </div>
        </>
    );
}