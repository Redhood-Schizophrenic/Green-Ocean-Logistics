'use client';

import { useSidebar } from "@/contexts/SidebarProvider";
import { useEffect } from "react";

export default function ContainerStagingPage() {
	const { setTitle } = useSidebar();
	useEffect(() => {
		setTitle('Container Staging')
	}, []);

	return (
		<section className="grid gap-8">
		</section>
	)
}

