import { CircleX, Clock, Verified } from "lucide-react";
import { useEffect, useState } from "react"

export default function Stats({ requests }) {

	const [Stats, setStats] = useState({
		pending: 0,
		approved: 0,
		rejected: 0,
	});

	useEffect(() => {
		let pending = 0, approved = 0, rejected = 0;

		requests.map((request) => {
			console.log(request);
			request.status === 'Accepted' ? approved += 1 : (
				request.status === 'Rejected' ? rejected += 1 : (
					request.status === 'Pending' ? pending += 1 : pending
				)
			)
		});

		setStats({
			pending,
			approved,
			rejected
		})
	}, [requests]);

	return (
		<div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
			<div className="border-2 rounded-lg p-6 grid gap-2">
				<div className="flex items-center justify-between">
					<h4 className="text-sm">Pending Requests</h4>
					<Clock className="bg-yellow-100 text-yellow-500 w-10 h-10 rounded-md p-1.5" />
				</div>
				<h1 className="text-3xl font-semibold">{Stats.pending}</h1>
			</div>

			<div className="border-2 rounded-lg p-6 grid gap-2">
				<div className="flex items-center justify-between">
					<h4 className="text-sm">Approved EIRs</h4>
					<Verified className="bg-green-100 text-green-500 w-10 h-10 rounded-md p-1.5" />
				</div>
				<h1 className="text-3xl font-semibold">{Stats.approved}</h1>
			</div>

			<div className="border-2 rounded-lg p-6 grid gap-2">
				<div className="flex items-center justify-between">
					<h4 className="text-sm">Rejected Requests</h4>
					<CircleX className="bg-red-100 text-red-500 w-10 h-10 rounded-md p-1.5" />
				</div>
				<h1 className="text-3xl font-semibold">{Stats.rejected}</h1>
			</div>

		</div>
	)
}
