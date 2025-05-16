'use client';

import { useSidebar } from "@/contexts/SidebarProvider";
import { useEffect } from "react";

export default function JobOrderUpdatePage() {
	const { setTitle } = useSidebar();
	useEffect(() => {
		setTitle('Job Order Update')
	}, []);

	return (
		<section className="grid gap-8">
		</section>
	)
}
