'use client';

import Button from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex w-full h-screen items-center justify-center">
      <Button title={'Go to Home'} icon={<ArrowUpRight />} iconPosition="right" roundness="xl" variant={'outline'} onClick={() => router.push('/customer/home')} />

      <Dialog
        trigger={<button className="px-4 py-2 bg-blue-500 text-white rounded">Open Dialog</button>}
        title="Welcome"
        description="This is a custom dialog component."
      >
        <p>Put any content here, like forms or text.</p>
        <button
          onClick={() => console.log('Action')}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </Dialog>
    </main>
  );
}
