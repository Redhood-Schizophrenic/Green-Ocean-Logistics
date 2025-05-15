'use client';

import { useSidebar } from "@/contexts/SidebarProvider";
import { useEffect } from "react";
import NewGroundingRequest from "./components/NewGroundingRequest";
import OrderListRequest from "./components/OrderListRequest";
import MobileContainerGrounding from "./components/MobileContainerGrounding";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ContainerGroundingPage() {
	const { setTitle } = useSidebar();
	useEffect(() => {
		setTitle('Container Grounding Request')
	}, []);

	return (
		<section className="grid gap-8">
			{
				useIsMobile() ? (
					<MobileContainerGrounding />
				) : (
					<OrderListRequest />
				)
			}
		</section>
	)
}

