import { useState } from 'react';
import { Search, Eye, Download, } from 'lucide-react';
import Input from '@/components/ui/Input';
import { weightmentRequests } from '@/constants/requests';
import NewRequests from '../../../../components/NewRequests';

export default function MobileRequestList() {
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Accepted':
        return (
          <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
            <span>Accepted</span>
          </div>
        );
      case 'Pending':
        return (
          <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center">
            <span>Pending</span>
          </div>
        );
      case 'Rejected':
        return (
          <div className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full flex items-center">
            <span>Rejected</span>
          </div>
        );
      default:
        return null;
    }
  };

  const filteredRequests = weightmentRequests.filter(request => {
    const matchesSearch = searchQuery === '' ||
      request.order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.containerNo.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="border rounded-xl flex flex-col p-4">
      <div className="flex-1 overflow-y-auto">
        <h2 className="text-xl font-semibold text-green-900 mb-4">Request List</h2>
        <div className="flex items-center justify-end">
          <NewRequests />
        </div>
        <div className="py-8">
          <div className="flex items-center">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search by file name..."
                value={searchQuery}
                className="pl-8 w-full bg-[var(--accent)]"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        {filteredRequests.map((request, index) => (
          <div key={index} className="bg-[var(--accent)] rounded-lg p-3 mb-3 shadow-sm">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium">#{request.id}</span>
              {getStatusBadge(request.status)}
            </div>
            <p className="text-sm text-gray-600 mb-1">Order:- {request.order.id}</p>
            <p className="text-sm text-gray-600 mb-1">Container No:- {request.containerNo}</p>
            <p className="text-sm text-gray-600 mb-1">CFS:- {request.order.cfs.title}</p>

            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600 mb-1">{request.date}</p>
              <div className="flex space-x-2">
                <button className="p-1">
                  <Eye size={18} />
                </button>
                <button className="p-1">
                  <Download size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
