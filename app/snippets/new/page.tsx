import React from "react";
import { db } from "@/db";
import { redirect } from "next/navigation";

export default function SnippetCreatePage() {

    async function createSnippet(formData: FormData) {
        'use server';

        const title = formData.get('title') as string;
        const code = formData.get('code') as string;

        const snippet = await db.snippet.create({
            data: {
                title,
                code
            }
        });

        console.log(snippet);
        redirect('/');
    }

    return <div>
        <form action={createSnippet}>
            <h3 className="font-bold m-3">Create Snippet</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">Title</label>
                    <input type="text" name="title" className="border rounded p-2 w-full"/>
                </div>
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="code">Code</label>
                    <textarea name="code" className="border rounded p-2 w-full"></textarea>
                </div>
                <button type="submit" className="border rounded p-2 bg-blue-200">
                    create
                </button>
            </div>
        </form>
    </div>
}