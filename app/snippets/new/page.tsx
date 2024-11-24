'use client';
import React from "react";
import { db } from "@/db";
import { redirect } from "next/navigation";
import * as actions from "@/actions";
import { useActionState } from "react";

export default function SnippetCreatePage() {
   const [formState, action] =  useActionState(actions.createSnippet, { message: '' });

    return <div>
        <form action={action}>
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
                <div>
                    {formState.message ? <div className="my-2 p-2 bg-red-200 border rounded border-red-400">{formState.message}</div> : null}
                </div>
                <button type="submit" className="border rounded p-2 bg-blue-200">
                    create
                </button>
            </div>
        </form>
    </div>
}