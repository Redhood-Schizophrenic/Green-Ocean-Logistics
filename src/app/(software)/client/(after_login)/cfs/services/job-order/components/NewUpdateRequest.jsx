import React, { useState } from 'react';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import Button from '@/components/ui/Button';
import { Select, SelectItem } from '@/components/ui/Select';
import { Upload } from 'lucide-react';

const NewUpdateRequest = () => {
  const [formData, setFormData] = useState({
    orderId: '',
    selectedCFS: '',
    jobOrderNumber: '',
    updateDetails: '',
    updateReason: '',
    file: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      selectedCFS: value
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="border-2 border-[var(--primary)] p-4 rounded-xl">
      <h1 className="text-lg font-semibold">Job Update Request</h1>

      <form className="pt-4 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label title="CFS Name" />
            <Select
              value={formData.selectedCFS}
              onValueChange={handleSelectChange}
              placeholder="Select CFS"
            >
              <SelectItem value="cfs-a">CFS A</SelectItem>
              <SelectItem value="cfs-b">CFS B</SelectItem>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label title="Job Order Number" />
            <Input
              type="text"
              name="jobOrderNumber"
              placeholder="Enter job order number"
              value={formData.jobOrderNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label title="Requested Update Details" />
          <textarea
            name="updateDetails"
            placeholder="Enter update details"
            value={formData.updateDetails}
            onChange={handleInputChange}
            rows={4}
            className="w-full border border-input rounded-md p-2 bg-transparent text-[var(--foreground)] shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label title="Reason for Update" />
          <textarea
            name="updateReason"
            placeholder="Enter reason for update"
            value={formData.updateReason}
            onChange={handleInputChange}
            rows={3}
            className="w-full border border-input rounded-md p-2 bg-transparent text-[var(--foreground)] shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label title="Upload Supporting Document" />
          <div className="flex items-center gap-2">
            <label className="flex items-center cursor-pointer border rounded-xl px-4 py-2">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
              </svg>
              <span className="text-sm">Choose File</span>
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.png"
              />
            </label>
            <span className="text-sm text-gray-500">
              {formData.file ? formData.file.name : 'No file chosen'}
            </span>
          </div>
          <p className="text-xs text-gray-500">
            Supported file types: PDF, JPG, PNG (max size: 5MB)
          </p>
        </div>

        <div>
          <Button
            title="Submit Update Request"
            icon={<Upload />}
            onClick={handleSubmit}
            className="rounded-xl"
          />
        </div>
      </form>
    </div>
  );
};

export default NewUpdateRequest;
