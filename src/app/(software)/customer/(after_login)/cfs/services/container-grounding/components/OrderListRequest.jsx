import React, { useState, useEffect } from 'react';
import { Eye, Download } from 'lucide-react';
import { DataTable } from '@/components/ui/Table';

const OrderListRequest = () => {

  const initialOrders = [
    {
      id: "GRD001",
      containerNo: "TGHU1234567",
      cfsName: "CFS A",
      date: "2024-02-15",
      status: "Ready"
    },
    {
      id: "GRD002",
      containerNo: "MSCU7894561",
      cfsName: "CFS B",
      date: "2024-02-14",
      status: "Pending"
    },
    {
      id: "GRD003",
      containerNo: "CMAU6543210",
      cfsName: "CFS C",
      date: "2024-02-13",
      status: "Rejected"
    },
    {
      id: "GRD003",
      containerNo: "CMAU6543210",
      cfsName: "CFS C",
      date: "2024-02-13",
      status: "Rejected"
    }
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [selectedCFS, setSelectedCFS] = useState('');

  const filterOrders = () => {
    let filtered = [...initialOrders];

    if (selectedCFS) {
      filtered = filtered.filter(order => order.cfsName === selectedCFS);
    }

    setOrders(filtered);
  };

  useEffect(() => {
    filterOrders();
  }, [selectedCFS]);


  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'ready':
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
      header: 'Order ID',
      filterable: true,
      cell: ({ row }) => <div>{row.original.id}</div>,
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
      cell: ({ row }) => <div>{row.original.cfsName}</div>,
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
        <div className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusBadgeClass(row.original.status)}`}>
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
        <div className="flex space-x-2">
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
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Order List Request</h2>
      <DataTable columns={columns} data={orders} />
    </div>
  );
};

export default OrderListRequest;
