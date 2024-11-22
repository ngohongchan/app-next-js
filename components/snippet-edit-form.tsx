'use client';
import { Editor } from "@monaco-editor/react";

import type { Snippet } from "@prisma/client/edge";
import { log } from "console";
import { useState } from "react";

interface SnippetEditFormProps {
   snippet: Snippet
}

export default async function SnippetEditForm({ snippet }: SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.code);

    const handleEditorChange = (value: string = '') => {
        setCode(value);
    }

    async function editSnippet() {
        'use server';
    }

    return <div className="px-2">
       <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
       />
    </div>
};