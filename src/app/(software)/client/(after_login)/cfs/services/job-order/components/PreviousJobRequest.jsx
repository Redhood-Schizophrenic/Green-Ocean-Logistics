import React, { useState } from 'react';
import { DataTable } from '@/components/ui/Table';
import Input from '@/components/ui/Input';
import { Select, SelectItem } from '@/components/ui/Select';
import { Search, Eye, Download } from 'lucide-react';

const PreviousJobRequest = () => {
  
  const jobRequests = [
    { 
      id: 'JO001', 
      jobOrderNo: 'JORD-2301', 
      cfsName: 'CFS A', 
      date: '01-May-2025', 
      status: 'Approved' 
    },
    { 
      id: 'JO002', 
      jobOrderNo: 'JORD-2302', 
      cfsName: 'CFS B', 
      date: '03-May-2025', 
      status: 'Pending' 
    },
    { 
      id: 'JO003', 
      jobOrderNo: 'JORD-2310', 
      cfsName: 'CFS A', 
      date: '05-May-2025', 
      status: 'Rejected' 
    }
  ];
  
  const getStatusClass = (status) => {
    switch(status) {
      case 'Approved':
        return 'bg-green-100 text-green-800 border border-green-300';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border border-yellow-300';
      case 'Rejected':
        return 'bg-red-100 text-red-800 border border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-300';
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
      id: 'jobOrderNo',
      accessorKey: 'jobOrderNo',
      header: 'Job Order No.',
      filterable: true,
      cell: ({ row }) => <div>{row.original.jobOrderNo}</div>,
    },
    {
      id: 'cfsName',
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
      cell: ({ row }) => <div>{row.original.date}</div>,
    },
    {
      id: 'status',
      accessorKey: 'status',
      header: 'Status',
      filterable: true,
      cell: ({ row }) => (
        <div className={`px-2 py-1 text-xs rounded-full ${getStatusClass(row.original.status)}`}>
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
        <div className="flex space-x-3">
          <Eye 
            size={18}
            className="cursor-pointer text-[var(--primary)]"
            onClick={() => console.log('View details for', row.original.id)}
          />
          <Download 
            size={18}
            className="cursor-pointer text-[var(--primary)]"
            onClick={() => console.log('Download document for', row.original.id)}
          />
        </div>
      ),
    }
  ];
  
  return (
    <div className="border-2 border-[var(--primary)] p-4 rounded-xl mt-8">
      <h1 className="text-lg font-semibold">Previous Job Order Update Requests</h1>
      
      <DataTable
        columns={columns}
        data={jobRequests}
      />
    </div>
  );
};

export default PreviousJobRequest;
