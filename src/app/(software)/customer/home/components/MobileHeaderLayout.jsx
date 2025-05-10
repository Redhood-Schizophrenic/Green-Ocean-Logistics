import Button, { ButtonCard } from "@/components/ui/Button";
import { CompanyName } from "@/constants/CompanyName";
import { servicesList } from "@/constants/services";
import { ArrowUpRight, LogInIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MobileHeaderLayout({ currentService, setCurrentService }) {
	const [isLogin, setIsLogin] = useState(false);
	const [displayLogin, setDisplayLogin] = useState(false);
	const router = useRouter();

	return (
		<header className="flex flex-col gap-8 w-full p-4 border-b">
			{/* Upper Portion */}
			<div className="flex items-center justify-center w-full">
				<div className="flex flex-col items-center  gap-3 w-[80%]">
					<div className="flex items-center gap-3">
						<div className="flex items-center gap-3 rounded-xl overflow-hidden w-10 h-10">
							<Image src={'/logo.png'} width={1500} height={1500} alt="Logo" />
						</div>
						<h1 className="font-bold">{CompanyName}</h1>
					</div>
					<div className="flex items-center gap-3">
						<Button
							title={'Dashboard'} icon={<ArrowUpRight />} iconPosition="right" variant={'outline'}
							onClick={() => {
								if (isLogin) {
									router.push('/customer/dashboard');
								} else {
									setDisplayLogin(true);
								}
							}}
							className="rounded-md text-sm"
						/>
						<Button title={'Login'} icon={<LogInIcon />} iconPosition="right" className="rounded-md text-sm" onClick={() => router.push('/login')} />
					</div>
				</div>
			</div>

			{/* Services List */}
			<div className="grid grid-cols-2 p-4 gap-2 rounded-xl">
				{servicesList.map((service) => (
					<ButtonCard
						key={service.id}
						title={service.label}
						icon={<service.icon className={`h-6 w-6`} />}
						iconPosition="top"
						className={`max-w-xl bg-[var(--accent)] p-6 rounded-xl border-2 border-[var(--accent)] shadow-lg
							${currentService === service.id ? 'border-[var(--primary)] text-[var(--primary)] font-bold' : 'shadow-[var(--accent)]'} `}
						variant={'none'}
						onClick={() => setCurrentService(service.id)}
					/>
				))}
			</div>
		</header>
	)
}
