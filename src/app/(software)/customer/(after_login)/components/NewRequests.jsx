import Button from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import Label from "@/components/ui/Label";
import { Select, SelectItem } from "@/components/ui/Select";
import { orders } from "@/constants/orders";
import { FileText, Upload } from "lucide-react";
import { useState } from "react";

export default function NewRequests() {
	const [formData, setFormData] = useState({
		orderId: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
	};

	return (
		<Dialog
			trigger={<Button title={'New Request'} icon={<FileText />} className="rounded-lg" textSize='text-sm' />}
			title={'New EIR Request'}
		>
			<div className='grid gap-4'>
				<div className="flex flex-col gap-2">
					<Label title={'Order ID'} />
					<Select value={formData.orderId} onValueChange={handleChange} placeholder='Select an Order'>
						{
							orders.map((order, index) => (
								<SelectItem key={index} value={order.id}>{order.id} - {order.cfs.title}</SelectItem>
							))
						}
					</Select>
				</div>

				<div className="mt-6">
					<Button onClick={handleSubmit} title={'Request'} icon={<Upload />} iconPosition='right' className='rounded-xl' />
				</div>
			</div>
		</Dialog>
	);
}

