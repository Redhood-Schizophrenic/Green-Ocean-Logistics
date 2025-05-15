import { Select, SelectItem } from '@/components/ui/Select';
import React, { useState } from 'react';
import { orders } from '@/constants/orders';
import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Upload } from 'lucide-react';

export default function Form() {
  const [formData, setFormData] = useState({
    orderId: '',
    chequeNo: '',
    bankName: '',
    chequeAmt: '',
    requiredDate: new Date().toISOString().split('T')[0],
    reason: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
  };

  return (
    <div className="border rounded-lg p-6 mb-4">
      <h2 className="text-xl font-semibold text-green-900 mb-4">Upload Request</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className='flex flex-col gap-2'>
            <Label title={'Order'} />
            <div className="relative">
              <Select value={formData.orderId} onValueChange={handleChange} placeholder='Select an Order'>
                {
                  orders.map((order, index) => (
                    <SelectItem key={index} value={order.id}>{order.id} - {order.cfs.title}</SelectItem>
                  ))
                }
              </Select>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <Label title={'Cheque Number'} />
            <Input
              type="text"
              name="chequeNo"
              value={formData.chequeNo}
              onChange={handleChange}
              placeholder="Enter cheque number"
            />
          </div>

          <div className='flex flex-col gap-2'>
            <Label title={'Bank Name'} />
            <Input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              placeholder="Enter bank name"
            />
          </div>

          <div className='flex flex-col gap-2'>
            <Label title={'Cheque Amount (INR)'} />
            <Input
              type="number"
              name="chequeAmt"
              value={formData.chequeAmt}
              onChange={handleChange}
              placeholder="Enter amount"
            />
          </div>


          <div className='flex flex-col gap-2'>
            <Label title={'Required Date'} />
            <Input
              type="date"
              name="requiredDate"
              value={formData.requiredDate}
              onChange={handleChange}
              placeholder="Select date"
            />
          </div>


          <div className='flex flex-col gap-2'>
            <Label title={'Reason for Submission'} />
            <Input
              value={formData.reason}
              onChange={handleChange}
              placeholder="Enter reason for cheque submission"
            />
          </div>
        </div>


        <div className='flex flex-col gap-2 mt-4'>
          <Label title={'Upload Cheque Image'} />
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
      </form>
    </div>
  );
};
