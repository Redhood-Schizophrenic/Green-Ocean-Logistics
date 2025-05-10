import { Bell, FileSearch2, LayoutDashboard, MapPinned, ReceiptText, Truck, UploadIcon, User } from "lucide-react";

export const navLinks = [
	{
		label: "Dashboard",
		href: "/customer/dashboard",
		icon: LayoutDashboard
	},
	{
		label: "Service Request",
		href: "",
		icon: ReceiptText
	},
	{
		label: "CFS",
		href: '',
		icon: Truck,
		subItems: [
			{ label: "Services", href: "", icon: FileSearch2 },
			{ label: "Track & Trace", href: "", icon: MapPinned },
			{ label: "Tariff Upload", href: "", icon: UploadIcon },
		]
	},
	{ label: "Notifications & Updates", href: "", icon: Bell },
	{ label: "Profile & Support", href: "", icon: User },
]
