'use client';

import { useSidebar } from "@/contexts/SidebarProvider";
import { useEffect } from "react";

export default function ContainerGroundingPage() {
	const { setTitle } = useSidebar();
	useEffect(() => {
		setTitle('Container Grounding')
	}, []);

	return (
		<section className="grid gap-8">
		</section>
	)
}

