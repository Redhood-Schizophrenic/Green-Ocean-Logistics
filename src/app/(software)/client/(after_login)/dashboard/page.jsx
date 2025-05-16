'use client'
import { useEffect } from "react";
import { useSidebar } from "@/contexts/SidebarProvider";

export default function CustomerDashboardPage() {
	const { setTitle } = useSidebar();
	useEffect(() => {
		setTitle('Dashboard')
	}, []);

	return (
		<section className="grid gap-8"></section>
	)
}

