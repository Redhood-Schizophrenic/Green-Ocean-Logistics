import { Download, FileText } from 'lucide-react';
import { DataTable } from '@/components/ui/Table';
import { eirRequests } from '@/constants/requests';
import { Dialog } from '@/components/ui/Dialog';
import Button from '@/components/ui/Button';
import Label from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
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
      id: 'requestedOn',
      accessorKey: 'requestedOn',
      header: 'Requested On',
      filterable: true,
      cell: ({ row }) => <div>{row.original.requestedOn} </div>,
    },
    {
      id: 'status',
      accessorKey: 'status',
      header: 'Status',
      filterable: true,
      cell: ({ row }) => <div className={`${getStatusColor(row.original.status)} rounded-xl px-4 py-2 text-center`}>{row.original.status}</div>,
    },
    {
      id: 'actions',
      accessorKey: 'actions',
      header: 'Actions',
      filterable: false,
      cell: ({ row }) => (
        <div className='flex gap-2 items-center'>
          {
            row.original.status === 'Accepted' ? (
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
            ) : '---'
          }
        </div>
      ),
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Accepted':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="border rounded-lg p-6 mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-green-900 mb-4">Requests List</h2>
        <NewRequests />
      </div>
      <DataTable columns={columns} data={eirRequests} />
    </div>
  )
};
