import React, { useState } from 'react';
import { orders } from '@/constants/orders';
import { Select, SelectItem } from '@/components/ui/Select';
import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const NewSpecialEquipment = () => {
  const [formData, setFormData] = useState({
    orderId: '',
    containerNumber: '',
    equipmentType: '',
    equipmentCapacity: '',
    requiredDate: new Date().toISOString().split('T')[0],
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
    <div className="border rounded-lg p-6 mb-4 shadow-sm">
      <h2 className="text-lg font-medium mb-4">New Special Equipments</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className='flex flex-col gap-2'>
            <Label title={'Order'} />
            <Select value={formData.orderId} onValueChange={handleInputChange} placeholder='Select an Order'>
              {
                orders.map((order, index) => (
                  <SelectItem key={index} value={order.id}>{order.id} - {order.cfs.title}</SelectItem>
                ))
              }
            </Select>
          </div>

          <div className='flex flex-col gap-2'>
            <Label title={'Container Number'} />
            <Input
              type="text"
              name="containerNumber"
              value={formData.containerNumber}
              onChange={handleInputChange}
              placeholder="Enter container number"
            />
          </div>

          <div className='flex flex-col gap-2'>
            <Label title={'Equipment Type'} />
            <Select value={formData.equipmentType} onValueChange={handleInputChange} placeholder='Select Equipment'>
              <SelectItem value={'forklift'}>Forklift</SelectItem>
              <SelectItem value={'crane'}>Crane</SelectItem>
              <SelectItem value={'lowbed'}>Lowbed</SelectItem>
            </Select>
          </div>


          <div className='flex flex-col gap-2'>
            <Label title={'Equipment Type'} />
            <Input
              type="text"
              name="equipmentCapacity"
              value={formData.equipmentCapacity}
              onChange={handleInputChange}
              placeholder="Enter capacity in tons"
            />
          </div>


          <div className='flex flex-col gap-2'>
            <Label title={'Required Date'} />
            <Input
              type="date"
              name="requiredDate"
              value={formData.requiredDate}
              onChange={handleInputChange}
              placeholder="Select date"
            />
          </div>


          <div className='flex flex-col gap-2'>
            <Label title={'Time Slot'} />
            <Select
              placeholder='Select a TimeSlot'
              value={formData.timeSlot}
              onChange={handleInputChange}
            >
              <SelectItem value={'morning'}>08:00 - 12:00</SelectItem>
              <SelectItem value={'afternoon'}>13:00 - 17:00</SelectItem>
              <SelectItem value={'evening'}>18:00 - 22:00</SelectItem>
            </Select>
          </div>

          <div className='flex flex-col gap-2'>
            <Label title={'Remarks (Optional)'} />
            <Input
              type="text"
              value={formData.remarks}
              onChange={handleInputChange}
              placeholder="Add any additional remarks or requirements..."
            />
          </div>


          <div className='flex flex-col gap-2'>
            <Label title={'Upload Documents'} />
            <div className="flex items-center gap-2">
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
              <span className="text-sm text-gray-500 break-all max-w-full">
                {formData.file ? formData.file.name : "No file chosen"}
              </span>
            </div>
          </div>
        </div>


        <div className="flex justify-start mt-4">
          <Button
            title={'Submit Request'}
            className='rounded-lg'
          />
        </div>
      </form>
    </div>
  );
};

export default NewSpecialEquipment;
