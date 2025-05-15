import { useState } from "react";
import { FileText, Upload, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { orders } from "@/constants/orders";

export default function NewRequests() {
	const [formData, setFormData] = useState({
		orderId: '',
		orderInfo: '',
	});
	const [showOrders, setShowOrders] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const handleChange = (e) => {
		const { value } = e.target;
		setFormData((prev) => ({
			...prev,
			orderInfo: value,
			orderId: '', // optional: clear previous selection
		}));
		setShowOrders(value.trim() !== '');
	};

	const handleSelectOrder = ({ info }) => {
		setFormData({
			orderInfo: `${info.id} - ${info.cfs.title}`,
			orderId: info.id,
		});
		setShowOrders(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsOpen(false);
		console.log('Form submitted:', formData);
	};

	return (
		<Dialog
			open={isOpen}
			onOpenChange={setIsOpen}
			trigger={<Button title="New Request" icon={<FileText />} className="rounded-lg" textSize="text-sm" />}
			title="New Request"
			className='w-[200px]'
		>
			<div className="grid gap-4 min-w-[40dvw]">
				<div className="flex flex-col gap-2 relative">
					<Label title="Order ID" />
					<Input
						type="text"
						name="orderInfo"
						value={formData.orderInfo}
						onChange={handleChange}
						placeholder="Enter an Order Id"
						autoComplete="off"
					/>

					{showOrders && (
						<div className="absolute top-[7dvh] z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
							{orders
								.filter(order =>
									(`${order.id} - ${order.cfs.title}`)
										.toLowerCase()
										.includes(formData.orderInfo.toLowerCase())
								)
								.map(order => (
									<div
										key={order.id}
										className="flex items-center justify-between p-2 hover:bg-[var(--accent)] cursor-pointer"
										onClick={() => handleSelectOrder({ info: order })}
									>
										<h1>{order.id} - {order.cfs.title}</h1>
										{formData.orderId === order.id && (
											<Check className="h-4 w-4 text-[var(--primary)]" />
										)}
									</div>
								))}
						</div>
					)}
				</div>

				<div className="mt-6">
					<Button onClick={handleSubmit} title="Request" icon={<Upload />} iconPosition="right" className="rounded-xl" />
				</div>
			</div>
		</Dialog>
	);
}
