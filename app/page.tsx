import { db } from "@/db";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  interface Snippet {
    id: number;
    title: string;
  }

  const renderedSnippets = snippets.map((snippet: Snippet) => {
    return (
      <Link href={`snippets/${snippet.id}`} key={snippet.id} className="flex justify-between items-center p-2 border rounded">
        <div>{snippet.title}</div>
        <div>view</div>
      </Link>
    );
  });

  return (
  <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 border-rounded">New</Link>
      </div>
     <div className="flex flex-col gap-2 pt-2">
      {renderedSnippets}
      </div>
  </div>
  );
}
