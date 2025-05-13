import React, { useState } from 'react';
import { Search, Upload, Download, Filter, X } from 'lucide-react';

const MobileSpecialEquipment = () => {
  
  const [selectedOS, setSelectedOS] = useState('');
  const [containerNumber, setContainerNumber] = useState('');
  const [equipmentType, setEquipmentType] = useState('');
  const [equipmentCapacity, setEquipmentCapacity] = useState('');
  const [requiredDate, setRequiredDate] = useState('');
  const [remarks, setRemarks] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [statusFilter, setStatusFilter] = useState('');
  const [equipmentFilter, setEquipmentFilter] = useState('');

  
  const requestList = [
    {
      id: 'SER001',
      containerNumber: 'YNCU6825462',
      equipmentType: 'Forklift',
      date: '2024-10-07',
      status: 'Ready'
    },
    {
      id: 'SER002',
      containerNumber: 'YNCU9874561',
      equipmentType: 'Crane',
      date: '2024-10-09',
      status: 'Pending'
    },
    {
      id: 'SER003',
      containerNumber: 'FASB9453XCO',
      equipmentType: 'Crane',
      date: '2024-10-11',
      status: 'Rejected'
    }
  ];

  const handleFileChange = (e) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({
      selectedOS,
      containerNumber,
      equipmentType,
      equipmentCapacity,
      requiredDate,
      remarks,
      selectedFile
    });
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const applyFilters = () => {
    setShowFilter(false);
  };

  const clearFilters = () => {
    setStatusFilter('');
    setEquipmentFilter('');
    setShowFilter(false);
  };
  
  const filteredRequests = requestList.filter(request => {
  
    const matchesSearch = 
      request.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.containerNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.equipmentType.toLowerCase().includes(searchQuery.toLowerCase());
  
    const matchesStatus = statusFilter === '' || request.status === statusFilter;
    
    
    const matchesEquipment = equipmentFilter === '' || request.equipmentType === equipmentFilter;
    
    return matchesSearch && matchesStatus && matchesEquipment;
  });

  
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Ready':
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
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <div className="flex-1 overflow-y-auto">
        <div className="bg-white rounded-md shadow-sm">
          <div className="p-4 font-medium">
            Request Id List
          </div>
          
        
          <div className="px-4 pb-4 flex items-center justify-between">
            <div className="relative flex-1 mr-2">
              <input
                type="text"
                placeholder="Search by Request ID"
                className="w-full border border-gray-300 rounded p-2 pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button 
              className={`${showFilter ? 'bg-green-100' : 'bg-gray-100'} p-2 rounded`}
              onClick={toggleFilter}
            >
              <Filter size={16} />
            </button>
          </div>
          
          {showFilter && (
            <div className="px-4 pb-4 border-t border-gray-200 pt-3">
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">All Statuses</option>
                  <option value="Ready">Ready</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Equipment Type</label>
                <select
                  value={equipmentFilter}
                  onChange={(e) => setEquipmentFilter(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">All Equipment Types</option>
                  <option value="Forklift">Forklift</option>
                  <option value="Crane">Crane</option>
                </select>
              </div>
              
              <div className="flex justify-between">
                <button 
                  onClick={clearFilters}
                  className="text-sm text-gray-600 border border-gray-300 px-3 py-1 rounded"
                >
                  Clear
                </button>
                <button 
                  onClick={applyFilters}
                  className="text-sm bg-[var(--primary)] text-white px-3 py-1 rounded"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
    
          <div className="px-4 pb-4">
            {filteredRequests.map((request) => (
              <div key={request.id} className="border border-gray-200 rounded mb-2 p-3">
                <div className="flex justify-between items-start mb-1">
                  <div className="font-medium">{request.id}</div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadgeClass(request.status)}`}>
                    {request.status}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mb-1">Container: {request.containerNumber}</div>
                <div className="text-sm text-gray-600 mb-1">Equipment Type: {request.equipmentType}</div>
                <div className="text-sm text-gray-600">Date: {request.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSpecialEquipment;
