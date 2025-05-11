'use client'
import { useEffect } from "react";
import { useSidebar } from "@/contexts/SidebarProvider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

export default function RequestServicesPage() {
	const { setTitle } = useSidebar();

	useEffect(() => {
		setTitle('Request List')
	}, []);

	return (
		<main>
			<div className="w-full p-6">
				<Tabs defaultValue="cfs" className="w-full">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="cfs" className={'w-full'}>CFS</TabsTrigger>
						<TabsTrigger value="soon" className={'w-full'}>Coming Soon</TabsTrigger>
					</TabsList>
					<TabsContent value="cfs" className="p-4 border rounded-lg mt-4 w-full h-screen">
						<h3 className="font-medium text-lg mb-2">Account Settings</h3>
						<p>Manage your account settings and preferences here.</p>
					</TabsContent>
					<TabsContent value="soon" className="p-4 border rounded-lg mt-4">
						<h3 className="font-medium text-lg mb-2">Password</h3>
						<p>Change your password here.</p>
					</TabsContent>
				</Tabs>
			</div>
		</main>
	)
}

