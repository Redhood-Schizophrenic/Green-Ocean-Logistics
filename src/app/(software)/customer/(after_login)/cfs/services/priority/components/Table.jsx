import { Download } from 'lucide-react';
import { DataTable } from '@/components/ui/Table';
import { priorityMovementRequests } from '@/constants/requests';
import NewRequests from '../../../../components/NewRequests';

export default function RequestList() {
  const columns = [
    {
      id: 'id',
      accessorKey: 'id',
      header: 'Request ID',
      filterable: true,
      cell: ({ row }) => <div>{row.original.id}</div>,
    },
    {
      id: 'order-no',
      accessorKey: 'order.id',
      header: 'Order ID',
      filterable: true,
      cell: ({ row }) => <div>{row.original.order.id}</div>,
    },
    {
      id: 'container-no',
      accessorKey: 'containerNo',
      header: 'Container No.',
      filterable: true,
      cell: ({ row }) => <div>{row.original.containerNo}</div>,
    },
    {
      id: 'requestedDate',
      accessorKey: 'requestedDate',
      header: 'Requested On',
      filterable: true,
      cell: ({ row }) => <div>{row.original.requestedOn}</div>,
    },
    {
      id: 'title',
      accessorKey: 'title',
      header: 'Title',
      filterable: true,
      cell: ({ row }) => <div>{row.original.title}</div>,
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
      cell: ({ row }) => (
        <div className='flex gap-2 items-center'>
          <Download
            className="cursor-pointer text-[var(--primary)]"
            onClick={() => {
              const link = document.createElement('a');
              const url = row.original.filePath
              link.setAttribute('href', url)
              link.setAttribute('download', url)
              link.style.visibility = 'hidden'
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
            }}
          />
        </div>
      ),
    }
  ];

  return (
    <div className="border rounded-lg p-6 mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-green-900 mb-4">Requests List</h2>
        <NewRequests />
      </div>
      <DataTable columns={columns} data={priorityMovementRequests} />
    </div>
  )
};
