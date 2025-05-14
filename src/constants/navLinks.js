import { ArrowDown, Bell, Boxes, CreditCard, FastForward, FileSearch2, FileText, LayoutDashboard, LayoutGrid, MapPinned, Package, Receipt, ReceiptText, Scale, Scan, Truck, UploadIcon, User } from "lucide-react";

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
			{ label: "EIR / COP Request", href: '/customer/cfs/services/eir-cop', icon: FileText, },
			{ label: "Priority Movements Request", href: '/customer/cfs/services/priority', icon: FastForward, },
			{ label: "Weighment Slip Request", href: '/customer/cfs/services/weighment-slip', icon: Scale, },
			{ label: "Special Equipment Request", href: '/customer/cfs/services/special-equipment', icon: LayoutGrid, },
			{ label: "Container Grounding", href: '/customer/cfs/services/container-grounding', icon: ArrowDown, },
			{ label: "Container Staging Request", href: '/customer/cfs/services/container-staging', icon: Boxes, },
			{ label: "Re-Scanning Request", href: '/customer/cfs/services/rescan', icon: Scan, },
			{ label: "Cheque Acceptance", href: '/customer/cfs/services/cheque', icon: CreditCard, },
			{ label: "Tax Invoice Request", href: '/customer/cfs/services/tax-invoice', icon: Receipt, },
			{ label: "Job Order Update Request", href: '/customer/cfs/services/job-order', icon: FileText, },
		]
	},
	{ label: "Notifications & Updates", href: "", icon: Bell },
	{ label: "Profile & Support", href: "/customer/profile", icon: User },
	{ label: "Orders", href: "/customer/orders", icon: Package },
]
