'use client';

import { useSidebar } from "@/contexts/SidebarProvider";
import { useEffect } from "react";
import Stats from "./components/Stats";
import { eirRequests } from "@/constants/requests";
import RequestList from "./components/Table";
import MobileRequestList from "./components/MobileTable";
import { useIsMobile } from "@/hooks/use-mobile";

export default function EIRRequestPage() {
	const { setTitle } = useSidebar();
	useEffect(() => {
		setTitle('EIR / COP Request');
	}, []);

	return (
		<section className="grid gap-8">
			<Stats requests={eirRequests} />
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

