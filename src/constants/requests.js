export const weightmentRequests = [
	{
		id: 'WSR-001',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'MSCU1234567',
		date: '10 January 2024',
		status: 'Accepted',
		filePath: '/weighment.pdf',
	},
	{
		id: 'WSR-002',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'TGHU1234567',
		date: '10 January 2024',
		status: 'Rejected',
	},
];

export const specialEquipmentsRequest = [
	{
		id: 'SER-001',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'TGHU234567',
		equipment: 'Forklift',
		date: '2024-02-14',
		status: 'Accepted',
	},
	{
		id: 'SER-002',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'MSCU789456',
		equipment: 'Crane',
		date: '2024-02-15',
		status: 'Pending',
	},
	{
		id: 'SER-003',
		order: {
			id: 'ORD-002',
			cfs: {
				id: 'mumbai-central-terminal',
				title: 'Mumbai CFS Terminal',
				location: "Nhava Sheva, Mumbai, Maharashtra",
			},
		},
		containerNo: 'CMAU654321',
		equipment: 'Lowbed',
		date: '2024-02-13',
		status: 'Rejected',
	},
	{
		id: 'SER-004',
		order: {
			id: 'ORD-002',
			cfs: {
				id: 'mumbai-central-terminal',
				title: 'Mumbai CFS Terminal',
				location: "Nhava Sheva, Mumbai, Maharashtra",
			},
		},
		containerNo: 'TGHU234567',
		equipment: 'Forklift',
		date: '2024-02-15',
		status: 'Accepted',
	},
];

export const chequeRequests = [
	{
		id: 'CAR-001',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'MSCU1234567',
		amount: 25000,
		date: '10 January 2024',
		status: 'Accepted',
		reason: 'Nothing',
		filePath: '/logo.png',
	},
	{
		id: 'CAR-002',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		amount: 18000,
		containerNo: 'TGHU1234567',
		date: '10 January 2024',
		filePath: '/logo.png',
		reason: 'Nothing',
		status: 'Rejected',
	},
];

export const rescanRequests = [
	{
		id: 'RSR-001',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'MSCU1234567',
		previousDate: '10 January 2024',
		requestedDate: '15 January 2024',
		status: 'Accepted',
		reason: 'Nothing',
		filePath: '',
	},
	{
		id: 'RSR-002',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'TGHU1234567',
		previousDate: '10 January 2024',
		requestedDate: '15 January 2024',
		filePath: '',
		reason: 'Nothing',
		status: 'Rejected',
	},
];

export const taxInvoiceRequests = [
	{
		id: 'TIR-001',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'MSCU1234567',
		from: '10 January 2024',
		to: '21 January 2024',
		status: 'Accepted',
		invoiceNo: 'INV-001',
		gstin: 'INSN20232930',
		note: '',
		filePath: '',
	},
	{
		id: 'TIR-002',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'TGHU1234567',
		from: '10 January 2024',
		to: '21 January 2024',
		status: 'Rejected',
		invoiceNo: 'INV-001',
		gstin: 'INSN20232930',
		note: '',
		filePath: '',
	},
];

export const eirRequests = [
	{
		id: 'EIR-001',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'MSCU1234567',
		requestedOn: '10 January 2024',
		status: 'Accepted',
		filePath: '',
	},
	{
		id: 'EIR-002',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'TGHU1234567',
		requestedOn: '10 January 2024',
		status: 'Rejected',
		filePath: '',
	}
];

export const priorityMovementRequests = [
	{
		id: 'PMR-001',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'MSCU1234567',
		requestedOn: '10 January 2024',
		title: 'Arrived',
		remarks: 'Arrived',
		filePath: '',
	},
	{
		id: 'PMR-002',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'MSCU1234567',
		requestedOn: '10 January 2024',
		title: 'Custom Processes',
		remarks: 'Custom Processes',
		filePath: '',
	},
	{
		id: 'PMR-003',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'MSCU1234567',
		requestedOn: '12 January 2024',
		title: 'Custom Cleared',
		remarks: 'Custom Cleared',
		filePath: '',
	},
	{
		id: 'PMR-004',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'MSCU1234567',
		requestedOn: '15 January 2024',
		title: 'Departed',
		remarks: 'Departed',
		filePath: '',
	},
	{
		id: 'PMR-005',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'MSCU1234567',
		requestedOn: '21 January 2024',
		title: 'Delivered',
		remarks: 'Delivered',
		filePath: '',
	},
];

export const ContainerGroundingRequest = [
	{
		id: 'GRD-001',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'TGHU234567',
		size: '20',
		date: '2024-02-14',
		status: 'Accepted',
	},
	{
		id: 'GRD-002',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'MSCU789456',
		size: '40',
		date: '2024-02-15',
		status: 'Pending',
	},
	{
		id: 'GRD-003',
		order: {
			id: 'ORD-002',
			cfs: {
				id: 'mumbai-central-terminal',
				title: 'Mumbai CFS Terminal',
				location: "Nhava Sheva, Mumbai, Maharashtra",
			},
		},
		containerNo: 'CMAU654321',
		size: '20',
		date: '2024-02-13',
		status: 'Rejected',
	},
	{
		id: 'GRD-004',
		order: {
			id: 'ORD-002',
			cfs: {
				id: 'mumbai-central-terminal',
				title: 'Mumbai CFS Terminal',
				location: "Nhava Sheva, Mumbai, Maharashtra",
			},
		},
		containerNo: 'TGHU234567',
		size: '40',
		date: '2024-02-15',
		status: 'Accepted',
	},

];

export const ContainerStagingRequest = [
	{
		id: 'STG-001',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'TGHU234567',
		size: '20',
		date: '2024-02-14',
		status: 'Accepted',
	},
	{
		id: 'STG-002',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'MSCU789456',
		size: '40',
		date: '2024-02-15',
		status: 'Pending',
	},
	{
		id: 'STG-003',
		order: {
			id: 'ORD-002',
			cfs: {
				id: 'mumbai-central-terminal',
				title: 'Mumbai CFS Terminal',
				location: "Nhava Sheva, Mumbai, Maharashtra",
			},
		},
		containerNo: 'CMAU654321',
		size: '20',
		date: '2024-02-13',
		status: 'Rejected',
	},
	{
		id: 'STG-004',
		order: {
			id: 'ORD-002',
			cfs: {
				id: 'mumbai-central-terminal',
				title: 'Mumbai CFS Terminal',
				location: "Nhava Sheva, Mumbai, Maharashtra",
			},
		},
		containerNo: 'TGHU234567',
		size: '40',
		date: '2024-02-15',
		status: 'Accepted',
	},
];

export const JobUpdateRequest = [
	{
		id: 'JUR-001',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'TGHU234567',
		size: '20',
		date: '2024-02-14',
		status: 'Accepted',
	},
	{
		id: 'JUR-002',
		order: {
			id: 'ORD-001',
			cfs: {
				id: 'chennai-cfs',
				title: "Chennai Port CFS",
				location: "Chennai Port, Tamil Nadu",
			},
		},
		containerNo: 'MSCU789456',
		size: '40',
		date: '2024-02-15',
		status: 'Pending',
	},
	{
		id: 'JUR-003',
		order: {
			id: 'ORD-002',
			cfs: {
				id: 'mumbai-central-terminal',
				title: 'Mumbai CFS Terminal',
				location: "Nhava Sheva, Mumbai, Maharashtra",
			},
		},
		containerNo: 'CMAU654321',
		size: '20',
		date: '2024-02-13',
		status: 'Rejected',
	},
	{
		id: 'JUR-004',
		order: {
			id: 'ORD-002',
			cfs: {
				id: 'mumbai-central-terminal',
				title: 'Mumbai CFS Terminal',
				location: "Nhava Sheva, Mumbai, Maharashtra",
			},
		},
		containerNo: 'TGHU234567',
		size: '40',
		date: '2024-02-15',
		status: 'Accepted',
	},
];
