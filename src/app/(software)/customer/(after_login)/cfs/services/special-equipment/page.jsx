'use client';

import { useSidebar } from "@/contexts/SidebarProvider";
import { useEffect } from "react";

export default function SpecialEquipmentRequestPage() {
	const { setTitle } = useSidebar();
	useEffect(() => {
		setTitle('Special Equipment')
	}, []);

	return (
		<section className="grid gap-8">
		</section>
	)
}
