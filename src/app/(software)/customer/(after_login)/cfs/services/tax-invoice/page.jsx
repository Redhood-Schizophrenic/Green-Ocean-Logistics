'use client';

import { useSidebar } from "@/contexts/SidebarProvider";
import { useEffect } from "react";

export default function TaxInvoiceRequestPage() {
	const { setTitle } = useSidebar();
	useEffect(() => {
		setTitle('Tax Invoice')
	}, []);

	return (
		<section className="grid gap-8">
		</section>
	)
}
