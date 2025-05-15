'use client';

import { useSidebar } from "@/contexts/SidebarProvider";
import { useEffect } from "react";
import NewUpdateRequest from "./components/NewUpdateRequest";
import PreviousJobRequest from "./components/PreviousJobRequest";
import MobileJobOrder from "./components/MobileJobOrder";
import { useIsMobile } from "@/hooks/use-mobile";

export default function JobOrderUpdatePage() {
	const { setTitle } = useSidebar();
	useEffect(() => {
		setTitle('Job Order Update Request')
	}, []);

	return (
		<section className="grid gap-8">
			{
				useIsMobile() ? (
					<MobileJobOrder />
				) : (
					<PreviousJobRequest />
				)
			}
		</section>
	)
}
