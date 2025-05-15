'use client';

import { useSidebar } from "@/contexts/SidebarProvider";
import { useEffect } from "react";
import UploadSlip from "./components/UploadSlip";
import RequestList from "./components/RequestList";
import MobileRequestList from "./components/MobileRequestList";
import { useIsMobile } from "@/hooks/use-mobile";

export default function WeighmentSlipRequestPage() {
	const { setTitle } = useSidebar();
	useEffect(() => {
		setTitle('Weighment Slip Request')
	}, []);

	return (
		<section className="grid gap-8">
			{
				useIsMobile() ? (
					<MobileRequestList />
				) : (
					<RequestList />
				)
			}
		</section>
	)
}
