"use client";
import Link from "next/link";
import {
	Navbar,
	NavbarBrand,
	NavbarCollapse,
	NavbarLink,
	NavbarToggle,
} from "flowbite-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuList } from "./menu";

type MenuItem = {
	name: string;
	path: string;
	active: boolean;
};

export default function NavbarComponent() {
	const pathname = usePathname();
	const [menu, setMenu] = useState<MenuItem[]>(MenuList);



	return (
		<Navbar fluid rounded className="w-ful">
			<NavbarBrand as={Link} href="">
				<img
					src="https://istad.co/resources/img/CSTAD_120.png"
					className="mr-3 h-6 sm:h-9"
					alt=" Logo"
				/>
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					CSTAD
				</span>
			</NavbarBrand>
			<NavbarToggle />
			<NavbarCollapse>
				{menu.map((item, index) => (
					<NavbarLink
					key={index}
						as={Link}
						href={item.path}
						active={item.path === pathname}
					>
						{item.name}
					</NavbarLink>
				))}
			</NavbarCollapse>
		</Navbar>
	);
}
