import React from 'react';
import { Eye, Download } from 'lucide-react';
import { DataTable } from '@/components/ui/Table';
import { ContainerGroundingRequest } from '@/constants/requests';
import NewRequests from '../../../../components/NewRequests';

const OrderListRequest = () => {
  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const columns = [
    {
      id: 'id',
      accessorKey: 'id',
      header: 'Request ID',
      filterable: true,
      cell: ({ row }) => <div>{row.original.id}</div>,
    },
    {
      id: 'orderId',
      accessorKey: 'orderId',
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
      id: 'cfs-name',
      accessorKey: 'cfsName',
      header: 'CFS Name',
      filterable: true,
      cell: ({ row }) => <div>{row.original.order.cfs.title}</div>,
    },
    {
      id: 'date',
      accessorKey: 'date',
      header: 'Date',
      filterable: true,
      cell: ({ row }) => (
        <div>
          {new Date(row.original.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          })}
        </div>
      ),
    },
    {
      id: 'status',
      accessorKey: 'status',
      header: 'Status',
      filterable: true,
      cell: ({ row }) => (
        <div className={`rounded-full px-2.5 py-0.5 text-xs font-medium text-center ${getStatusBadgeClass(row.original.status)}`}>
          {row.original.status}
        </div>
      ),
    },
    {
      id: 'actions',
      accessorKey: 'actions',
      header: 'Actions',
      filterable: false,
      cell: ({ row }) => (
        <div className="flex items-center justify-center gap-2">
          <Eye
            size={16}
            className="cursor-pointer text-gray-600 hover:text-gray-900"
            onClick={() => console.log('View details for', row.original.id)}
          />
          <Download
            size={16}
            className="cursor-pointer text-gray-600 hover:text-gray-900"
            onClick={() => console.log('Download document for', row.original.id)}
          />
        </div>
      ),
    }
  ];

  return (
    <div className="border rounded-lg p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-green-900 mb-4">Requests List</h2>
        <NewRequests />
      </div>
      <DataTable columns={columns} data={ContainerGroundingRequest} />
    </div>
  );
};

export default OrderListRequest;
