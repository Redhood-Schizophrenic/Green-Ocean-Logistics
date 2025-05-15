import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import Button from '@/components/ui/Button';
import { Select, SelectItem } from '@/components/ui/Select';

const NewStagingRequest = () => {

  const [formData, setFormData] = useState({
    cfsName: '',
    containerNumber: '',
    containerSize: '',
    cargoType: '',
    stagingFromDate: '',
    expectedGateOut: '',
    specialInstructions: '',
    documents: null
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSelectChange = (name) => (value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      documents: e.target.files[0]
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

  };

  return (
    <div className="border rounded-lg p-6 mb-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload New Staging Request</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="flex flex-col gap-2">
            <Label title="CFS Name" />
            <Select
              value={formData.cfsName}
              onValueChange={handleSelectChange('cfsName')}
              placeholder="Select CFS"
            >
              <SelectItem value="cfs1">CFS 1</SelectItem>
              <SelectItem value="cfs2">CFS 2</SelectItem>
              <SelectItem value="cfs3">CFS 3</SelectItem>
            </Select>
          </div>


          <div className="flex flex-col gap-2">
            <Label title="Container Number" />
            <Input
              type="text"
              name="containerNumber"
              placeholder="Enter container number"
              value={formData.containerNumber}
              onChange={handleInputChange}
            />
          </div>


          <div className="flex flex-col gap-2">
            <Label title="Container Size" />
            <Select
              value={formData.containerSize}
              onValueChange={handleSelectChange('containerSize')}
              placeholder="Select size"
            >
              <SelectItem value="20ft">20ft</SelectItem>
              <SelectItem value="40ft">40ft</SelectItem>
              <SelectItem value="45ft">45ft</SelectItem>
            </Select>
          </div>


          <div className="flex flex-col gap-2">
            <Label title="Cargo Type" />
            <Select
              value={formData.cargoType}
              onValueChange={handleSelectChange('cargoType')}
              placeholder="Select type"
            >
              <SelectItem value="dry">Dry</SelectItem>
              <SelectItem value="reefer">Reefer</SelectItem>
              <SelectItem value="hazardous">Hazardous</SelectItem>
            </Select>
          </div>


          <div className="flex flex-col gap-2">
            <Label title="Staging From Date" />
            <div className="relative">
              <Input
                type="date"
                name="stagingFromDate"
                value={formData.stagingFromDate}
                onChange={handleInputChange}
                className="pr-8"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>


          <div className="flex flex-col gap-2">
            <Label title="Expected Gate-Out" />
            <div className="relative">
              <Input
                type="date"
                name="expectedGateOut"
                value={formData.expectedGateOut}
                onChange={handleInputChange}
                className="pr-8"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>
        </div>


        <div className="mt-4 flex flex-col gap-2">
          <Label title="Special Instructions" />
          <textarea
            name="specialInstructions"
            placeholder="Add any special handling instructions..."
            value={formData.specialInstructions}
            onChange={handleInputChange}
            rows={4}
            className="w-full border border-input rounded-md p-2 bg-transparent text-[var(--foreground)] shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>


        <div className="mt-4 flex flex-col gap-2">
          <Label title="Upload Documents" />
          <div className="flex items-center gap-2">
            <label className="flex items-center cursor-pointer border rounded-xl px-4 py-2">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
              </svg>
              <span className="text-sm">Choose File</span>
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            <span className="text-sm text-gray-500">
              {formData.documents ? formData.documents.name : 'No file chosen'}
            </span>
          </div>
        </div>


      
        <div className="mt-6 flex justify-start">
          <Button
            title="Submit Request"
            className="rounded-xl"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default NewStagingRequest;