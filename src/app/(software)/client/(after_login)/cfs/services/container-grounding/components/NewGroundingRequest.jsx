import React, { useState } from 'react';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import Button from '@/components/ui/Button';
import { Select, SelectItem } from '@/components/ui/Select';
import { Calendar, Upload } from 'lucide-react';
import { orders } from '@/constants/orders';

const NewGroundingRequest = () => {
  const [formData, setFormData] = useState({
    orderId: '',
    containerNumber: '',
    containerSize: '',
    groundingDate: new Date().toISOString().split('T')[0],
    timeSlot: '',
    reason: '',
    file: null
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
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        file: e.target.files[0]
      });
    }
  };

  const handleSubmit = () => {

    console.log('Submitting grounding request:', formData);
  };

  return (
    <div className="border rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">New Grounding Request</h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
        <div className='flex flex-col gap-2'>
          <Label title={'Order'} />
          <div className="relative">
            <Select value={formData.orderId} onValueChange={handleInputChange} placeholder='Select an Order'>
              {
                orders.map((order, index) => (
                  <SelectItem key={index} value={order.id}>{order.id} - {order.cfs.title}</SelectItem>
                ))
              }
            </Select>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <Label title="Container Number" />
          <Input
            type="text"
            name="containerNumber"
            placeholder="Enter container number"
            value={formData.containerNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <Label title="Container Size" />
          <Select
            value={formData.containerSize}
            onValueChange={handleSelectChange('containerSize')}
            placeholder="Select size"
          >
            <SelectItem value="20">20ft</SelectItem>
            <SelectItem value="40">40ft</SelectItem>
            <SelectItem value="45">45ft</SelectItem>
          </Select>
        </div>

        <div className='flex flex-col gap-2'>
          <Label title="Grounding Date" />
          <Input
            type="date"
            name="groundingDate"
            value={formData.groundingDate}
            onChange={handleInputChange}
            placeholder="Select date"
            className="pr-8"
          />
        </div>

        <div className='flex flex-col gap-2'>
          <Label title="Time Slot" />
          <Select
            value={formData.timeSlot}
            onValueChange={handleSelectChange('timeSlot')}
            placeholder="Select time slot"
          >
            <SelectItem value="morning">08:00 - 12:00</SelectItem>
            <SelectItem value="afternoon">13:00 - 17:00</SelectItem>
            <SelectItem value="evening">18:00 - 22:00</SelectItem>
          </Select>
        </div>

        <div className='flex flex-col gap-2'>
          <Label title="Reason for Grounding" />
          <Input
            name="reason"
            placeholder="Enter reason for grounding request..."
            value={formData.reason}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className='flex flex-col gap-2 mt-4'>
        <Label title={'Upload Documents'} />
        <div className="flex items-center gap-2 mt-2">
          <label className="flex items-center cursor-pointer border rounded-xl px-4 py-2">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
            </svg>
            <span className='text-sm'>Choose File</span>
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          <span className="ml-2 text-sm text-gray-500">
            {formData.file ? formData.file.name : 'No file chosen'}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <Button title={'Upload Request'} icon={<Upload />} iconPosition='right' className='rounded-xl' />
      </div>
    </div>
  );
};

export default NewGroundingRequest;
