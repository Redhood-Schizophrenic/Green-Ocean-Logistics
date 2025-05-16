'use client';

import { useSidebar } from "@/contexts/SidebarProvider";
import { useEffect } from "react";

export default function PriorityRequestPage() {
	const { setTitle } = useSidebar();
	useEffect(() => {
		setTitle('Priority Movement')
	}, []);

	return (
		<section className="grid gap-8">
		</section>
	)
}

