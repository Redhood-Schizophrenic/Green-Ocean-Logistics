'use client';

import { useSidebar } from "@/contexts/SidebarProvider";
import { useEffect } from "react";
import NewStagingRequest from "./components/NewStagingRequest";
import OrderIdList from "./components/OrderIdList";
import MobileStagingRequest from "./components/MobileStagingRequest";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ContainerStagingPage() {
	const { setTitle } = useSidebar();
	useEffect(() => {
		setTitle('Container Staging Request')
	}, []);

	return (
		<section className="grid gap-8">
			{
				useIsMobile() ? (
					<MobileStagingRequest />
				) : (
					<OrderIdList />
				)
			}
		</section>
	)
}

