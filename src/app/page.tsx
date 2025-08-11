import { inngest } from "@/inngest/client";

const triggerInngestEvent = async () => {
  "use server"
  await inngest.send({
    name: 'test/hello.world',
    data: {
      message: 'Hello From Next.js'
    }
  });
}

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     <form action={triggerInngestEvent}>
      <button className="bg-blue-500">Trigger Inngest Event</button>
     </form>
    </div>
  );
}