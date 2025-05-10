'use client';

import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ClientHomePage() {
	const router = useRouter();
	return (
		<main className="flex w-full h-screen items-center justify-center">
			<Button title={'Go to Dashboard'} icon={<ArrowUpRight />} iconPosition="right" roundness="xl" variant={'outline'} onClick={() => router.push('/customer/dashboard')} />
		</main>
	)
}

