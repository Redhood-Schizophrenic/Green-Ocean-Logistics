'use client';

import { useSidebar } from "@/contexts/SidebarProvider";
import { useEffect } from "react";

export default function WeighmentSlipRequestPage() {
	const { setTitle } = useSidebar();
	useEffect(() => {
		setTitle('Weighment Slip')
	}, []);

	return (
		<section className="grid gap-8">
		</section>
	)
}
