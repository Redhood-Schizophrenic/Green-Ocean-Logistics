import { tariffs } from "@/constants/orders";
import { DataTable } from "@/components/ui/Table";
import { Download } from "lucide-react";
import Link from "next/link";

const columns = [
	{
		id: 'uploadedOn',
		accessorKey: 'uploadedOn',
		header: 'Uploaded On',
		filterable: true,
		cell: ({ row }) => <div>{row.original.uploadedOn}</div>,
	},
	{
		id: 'order-id',
		accessorKey: 'order.id',
		header: 'Order ID',
		filterable: true,
		cell: ({ row }) => <div>{row.original.order.id}</div>,
	},
	{
		id: 'file',
		accessorKey: 'filePath',
		header: 'File',
		filterable: true,
		cell: ({ row }) => <div>{row.original.filePath}</div>,
	},
	{
		id: 'remarks',
		accessorKey: 'remarks',
		header: 'Remarks',
		filterable: true,
		cell: ({ row }) => <div>{row.original.remarks}</div>,
	},
	{
		id: 'actions',
		accessorKey: 'actions',
		header: 'Actions',
		filterable: false,
		cell: ({ row }) => <Download onClick={() => <Link href={'/logo.png'} download><Download /></Link>} />,
	}
]

export default function Table() {
	return (
		<div className="border-2 border-[var(--primary)] p-4 rounded-xl">
			<h1 className="text-lg font-semibold">Uploaded Tariffs</h1>
			<DataTable
				columns={columns}
				data={tariffs}
			/>
		</div>
	)
}

