import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/portfolio-service";
import { Sticker } from "@/components/ui/Sticker";

interface DemoPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="grid min-h-screen place-items-center overflow-hidden bg-[#111] p-6 text-white">
      <div className="relative w-full max-w-4xl border-4 border-white bg-[#f6d9df] p-5 text-ink shadow-[8px_8px_0_#ff5b8a]">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h1 className="font-display text-4xl font-bold uppercase leading-none">{project.title}</h1>
          <Sticker color="bg-banana">{project.type}</Sticker>
        </div>
        <div className="grid min-h-[360px] place-items-center border-4 border-ink bg-white bg-dots [background-size:18px_18px]">
          <div className="relative aspect-square w-56 rounded-full border-4 border-ink bg-candy shadow-retro">
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 border-4 border-ink bg-banana" />
            <div className="absolute left-10 top-12 h-8 w-8 border-4 border-ink bg-mint" />
            <div className="absolute bottom-12 right-9 h-10 w-10 border-4 border-ink bg-violet" />
          </div>
        </div>
        <p className="mt-5 font-mono text-sm font-bold uppercase">{project.shortDescription}</p>
      </div>
    </main>
  );
}
