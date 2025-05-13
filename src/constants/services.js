import { ArrowDown, Boxes, Container, CreditCard, FastForward, FileText, Forklift, LayoutGrid, Receipt, Scale, Scan, Truck } from "lucide-react";

export const servicesList = [
	{
		id: 'cfs',
		label: "CFS",
		icon: Container
	},
	{
		id: 'transport',
		label: "Transport",
		icon: Truck
	},
	{
		id: '3pl',
		label: "3PL",
		icon: Forklift
	},
	{
		id: 'warehouse',
		label: "Warehouse",
		icon: Container
	},
];

export const cfsServices = [
	{
		title: 'EIR / COP Request',
		description: 'Request Equipment Interchange Receipt or Container Operational Permit',
		href: '/customer/cfs/services/eir-cop',
		icon: FileText,
	},
	{
		title: 'Priority Movements Request',
		description: 'Request priority handling for urgent container movements',
		href: '/customer/cfs/services/priority',
		icon: FastForward,
	},
	{
		title: 'Weighment Slip Request',
		description: 'Generate container weight measurement slips',
		href: '/customer/cfs/services/weighment-slip',
		icon: Scale,
	},
	{
		title: 'Special Equipment Request',
		description: 'Request specialized container handling equipment',
		href: '/customer/cfs/services/special-equipment',
		icon: LayoutGrid,
	},
	{
		title: 'Container Grounding',
		description: 'Request container grounding services',
		href: '/customer/cfs/services/container-grounding',
		icon: ArrowDown,
	},
	{
		title: 'Container Staging Request',
		description: 'Schedule container staging operations',
		href: '/customer/cfs/services/container-staging',
		icon: Boxes,
	},
	{
		title: 'Re-Scanning Request',
		description: 'Request container re-scanning services',
		href: '/customer/cfs/services/rescan',
		icon: Scan,
	},
	{
		title: 'Cheque Acceptance',
		description: 'Submit cheque payments requests',
		href: '/customer/cfs/services/cheque',
		icon: CreditCard,
	},
	{
		title: 'Tax Invoice Request',
		description: 'Generate tax invoice for services',
		href: '/customer/cfs/services/tax-invoice',
		icon: Receipt,
	},
	{
		title: 'Job Order Update Request',
		description: 'Modify existing job orders',
		href: '/customer/cfs/services/job-order',
		icon: FileText,
	},
];

export const ServiceProviders = [
	{
		id: 'gfs',
		serviceId: 'cfs',
		images: [
			{
				src: '/CFS/global-freight-logistics/1.jpg',
				alt: 'Main',
			}, {
				src: '/CFS/global-freight-logistics/2.jpg',
				alt: 'Main 2',
			}, {
				src: '/CFS/global-freight-logistics/3.jpg',
				alt: 'Main 3',
			}, {
				src: '/CFS/global-freight-logistics/4.jpg',
				alt: 'Main 4',
			}, {
				src: '/CFS/global-freight-logistics/5.jpg',
				alt: 'Main 5',
			},
		],
		title: 'Global Freight Logistics Limited',
		location: 'Mumbai Port, India',
		rating: 4.8,
		tags: ['Packing', 'Storage', 'Customs'],
		description: 'Global Freight Logistics Limited is a privately owned independent freight forwarder.  Trading since 2016, we provide customer led international logistics solutions for an ever growing global client base.'
	},
	{
		id: 'mumbai-central-terminal',
		serviceId: 'cfs',
		images: [
			{
				src: '/CFS/mumbai-central-terminal/1.jpg',
				alt: 'Main',
			}, {
				src: '/CFS/mumbai-central-terminal/2.jpg',
				alt: 'Main 2',
			}, {
				src: '/CFS/mumbai-central-terminal/3.jpg',
				alt: 'Main 3',
			}, {
				src: '/CFS/mumbai-central-terminal/4.jpg',
				alt: 'Main 4',
			}, {
				src: '/CFS/mumbai-central-terminal/5.jpg',
				alt: 'Main 5',
			},
		],
		title: 'Mumbai CFS Terminal',
		location: "Nhava Sheva, Mumbai, Maharashtra",
		rating: 4.5,
		tags: ['Packing', 'Storage', 'Customs'],
		description: "State-of-the-art Container Freight Station with modern facilities and efficient clearance process.",
	},
	{
		id: 'chennai-cfs',
		serviceId: 'cfs',
		images: [
			{
				src: '/CFS/chennai-cfs/1.jpg',
				alt: 'Main',
			}, {
				src: '/CFS/chennai-cfs/2.jpg',
				alt: 'Main 2',
			}, {
				src: '/CFS/chennai-cfs/3.jpg',
				alt: 'Main 3',
			}, {
				src: '/CFS/chennai-cfs/4.jpg',
				alt: 'Main 4',
			}, {
				src: '/CFS/chennai-cfs/5.jpg',
				alt: 'Main 5',
			},
		],
		title: "Chennai Port CFS",
		location: "Chennai Port, Tamil Nadu",
		rating: 4.2,
		tags: ['Packing', 'Storage', 'Customs'],
		description: "Well-connected CFS with extensive storage space and specialized handling equipment.",
	}
];
