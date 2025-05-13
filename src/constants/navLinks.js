import { Bell, FileSearch2, LayoutDashboard, MapPinned, ReceiptText, Truck, UploadIcon, User } from "lucide-react";

export const navLinks = [
	{
		label: "Dashboard",
		href: "/customer/dashboard",
		icon: LayoutDashboard
	},
	{
		label: "Service Request",
		href: "/customer/service-requests",
		icon: ReceiptText
	},
	{
		label: "CFS",
		href: '',
		icon: Truck,
		subItems: [
			{ label: "Services", href: "/customer/cfs/services", icon: FileSearch2 },
			{ label: "Track & Trace", href: "/customer/cfs/track-trace", icon: MapPinned },
			{ label: "Tariff Upload", href: "/customer/cfs/tariff-upload", icon: UploadIcon },
		]
	},
	{ label: "Notifications & Updates", href: "", icon: Bell },
	{ label: "Profile & Support", href: "/customer/profile", icon: User },
]
