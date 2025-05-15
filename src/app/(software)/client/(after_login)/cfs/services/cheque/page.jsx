'use client';

import { useSidebar } from "@/contexts/SidebarProvider";
import { useEffect } from "react";
import Form from "./components/Form";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileRequestList from "./components/MobileTable";
import RequestList from "./components/Table";

export default function ChequePaymentRequest() {
	const { setTitle } = useSidebar();
	useEffect(() => {
		setTitle('Cheque Acceptance Request')
	}, []);

	return (
		<section className="grid gap-8">
			<Form />
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

