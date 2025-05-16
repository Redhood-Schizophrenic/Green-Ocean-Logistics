'use client';

import { useSidebar } from "@/contexts/SidebarProvider";
import { useEffect } from "react";

export default function RescanRequestPage() {
	const { setTitle } = useSidebar();
	useEffect(() => {
		setTitle('Re-scanning')
	}, []);

	return (
		<section className="grid gap-8">
		</section>
	)
}
