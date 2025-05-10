'use client'
import { useEffect } from "react";
import { useSidebar } from "@/contexts/SidebarProvider";

export default function CustomerDashboardPage() {
	const { setTitle } = useSidebar();
	useEffect(() => {
		setTitle('Dashboard')
	}, []);

	return (
		<div></div>
	)
}

