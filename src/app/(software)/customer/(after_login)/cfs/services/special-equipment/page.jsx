'use client';

import { useSidebar } from "@/contexts/SidebarProvider";
import { useEffect } from "react";
import RequestIdList from "./components/RequestIdList";
import MobileSpecialEquipment from "./components/MobileSpecialEquipment";
import NewSpecialEquipment from "./components/NewSpecialEquipment";
import { useIsMobile } from "@/hooks/use-mobile";

export default function SpecialEquipmentRequestPage() {
	const { setTitle } = useSidebar();
	useEffect(() => {
		setTitle('Special Equipment Request')
	}, []);

	return (
		<section className="grid gap-8">
			{
				useIsMobile() ? (
					<MobileSpecialEquipment />
				) : (
					<RequestIdList />
				)
			}
		</section>
	)
}
