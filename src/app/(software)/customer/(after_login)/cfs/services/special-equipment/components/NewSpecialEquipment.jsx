import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const NewSpecialEquipment = () => {
  const [formData, setFormData] = useState({
    cfsName: '',
    containerNumber: '',
    equipmentType: '',
    equipmentCapacity: '',
    requiredDate: '',
    timeSlot: '',
    remarks: '',
    file: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    
  };

  return (
    <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
      <h2 className="text-lg font-medium mb-4">New Special Equipments</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
        
          <div>
            <label className="block text-sm font-medium mb-1">CFS Name</label>
            <div className="relative">
              <select 
                name="cfsName"
                value={formData.cfsName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded bg-white text-gray-500"
              >
                <option value="">Select CFS</option>
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

          
          <div>
            <label className="block text-sm font-medium mb-1">Container Number</label>
            <input
              type="text"
              name="containerNumber"
              value={formData.containerNumber}
              onChange={handleInputChange}
              placeholder="Enter container number"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

        
          <div>
            <label className="block text-sm font-medium mb-1">Equipment Type</label>
            <div className="relative">
              <select
                name="equipmentType"
                value={formData.equipmentType}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded bg-white text-gray-500"
              >
                <option value="">Select equipment type</option>
                <option value="forklift">Forklift</option>
                <option value="crane">Crane</option>
                <option value="lowbed">Lowbed</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

        
          <div>
            <label className="block text-sm font-medium mb-1">Equipment Capacity</label>
            <input
              type="text"
              name="equipmentCapacity"
              value={formData.equipmentCapacity}
              onChange={handleInputChange}
              placeholder="Enter capacity in tons"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium mb-1">Required Date</label>
            <div className="relative">
              <input
                type="date"
                name="requiredDate"
                value={formData.requiredDate}
                onChange={handleInputChange}
                placeholder="Select date"
                className="w-full p-2 border border-gray-300 rounded pr-10"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Calendar className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          
          <div>
            <label className="block text-sm font-medium mb-1">Time Slot</label>
            <div className="relative">
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded bg-white text-gray-500"
              >
                <option value="">Select time slot</option>
                <option value="morning">08:00 - 12:00</option>
                <option value="afternoon">13:00 - 17:00</option>
                <option value="evening">18:00 - 22:00</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Remarks (Optional)</label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleInputChange}
            placeholder="Add any additional remarks or requirements..."
            className="w-full p-2 border border-gray-300 rounded h-24"
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Upload Documents</label>
          <div className="flex flex-wrap items-center">
            <label className="mr-3 mb-2 cursor-pointer bg-white border border-gray-300 rounded px-3 py-1 text-sm text-gray-700">
              Choose File
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            <span className="text-sm text-gray-500 break-all max-w-full">
              {formData.file ? formData.file.name : "No file chosen"}
            </span>
          </div>
        </div>

        
        <div className="flex justify-start">
          <button
            type="submit"
            className="bg-[var(--primary)] hover:bg-green-800 text-white py-2 px-4 rounded text-sm"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewSpecialEquipment;
