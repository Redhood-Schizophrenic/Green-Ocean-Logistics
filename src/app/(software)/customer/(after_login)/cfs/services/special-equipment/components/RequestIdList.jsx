import React, { useState } from 'react';
import { Download } from 'lucide-react';

const RequestIdList = () => {
  
  const [requests, setRequests] = useState([
    {
      id: 'SER001',
      containerNo: 'TGHU234567',
      equipment: 'Forklift',
      date: '2024-02-14',
      status: 'Ready',
    },
    {
      id: 'SER002',
      containerNo: 'MSCU789456',
      equipment: 'Crane',
      date: '2024-02-15',
      status: 'Pending',
    },
    {
      id: 'SER003',
      containerNo: 'CMAU654321',
      equipment: 'Lowbed',
      date: '2024-02-13',
      status: 'Rejected',
    },
    {
      id: 'SER001',
      containerNo: 'TGHU234567',
      equipment: 'Forklift',
      date: '2024-02-15',
      status: 'Ready',
    },
  ]);

  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCFS, setFilterCFS] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterCFS(e.target.value);
  };

  
  const filteredRequests = requests.filter(request => {
    return request.id.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleDownload = (requestId) => {
    console.log('Downloading details for request:', requestId);
    
  };

  
  const StatusBadge = ({ status }) => {
    let badgeClass = 'text-white text-xs px-3 py-1 rounded-full';
    
    switch (status.toLowerCase()) {
      case 'ready':
        badgeClass += ' bg-green-500';
        break;
      case 'pending':
        badgeClass += ' bg-yellow-500';
        break;
      case 'rejected':
        badgeClass += ' bg-red-500';
        break;
      default:
        badgeClass += ' bg-gray-500';
    }
    
    return (
      <span className={badgeClass}>
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-medium mb-4">Request Id List</h2>
      
    
      <div className="flex items-center justify-between mb-4">
        <div className="relative w-64">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by Request ID..."
            className="w-full p-2 pl-8 border border-gray-300 rounded"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <div className="relative w-48">
          <select
            value={filterCFS}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded appearance-none"
          >
            <option value="">Filter by CFS</option>
            <option value="cfs1">CFS 1</option>
            <option value="cfs2">CFS 2</option>
            <option value="cfs3">CFS 3</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      
    
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Request ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Container No.
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Equipment
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRequests.map((request, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {request.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {request.containerNo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {request.equipment}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {request.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={request.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => handleDownload(request.id)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <Download className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestIdList;