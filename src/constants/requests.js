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
