'use client'
import SideBarComponent from "@/components/sidebar/SideBarComponent";
import "@/app/globals.css";
import { MenuIcon } from "@/components/icons/FontAwsome";

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body className="flex">
				<MenuIcon classname="h-8 w-8"/>
				<aside className=" h-screen hidden lg:block">
					<SideBarComponent />
				</aside>
				<main className="flex-1">{children}</main>
			</body>
		</html>
	);
}
