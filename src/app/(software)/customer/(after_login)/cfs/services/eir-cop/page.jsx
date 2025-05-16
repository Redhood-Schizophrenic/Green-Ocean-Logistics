'use client';

import { useSidebar } from "@/contexts/SidebarProvider";
import { useEffect } from "react";

export default function EIRRequestPage() {
	const { setTitle } = useSidebar();
	useEffect(() => {
		setTitle('EIR / COP');
	}, []);

	return (
		<section className="grid gap-8">
		</section>
	)
}

