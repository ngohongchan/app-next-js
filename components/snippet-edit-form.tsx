'use client';
import { Editor } from "@monaco-editor/react";

import type { Snippet } from "@prisma/client/edge";
import { useState } from "react";

import * as actions from "@/actions";

interface SnippetEditFormProps {
   snippet: Snippet
}


export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.code);

    const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

    const handleEditorChange = (value: string = '') => {
        setCode(value);
    }

    return <div className="px-2">
       <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        value={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
       />

       <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded">
            Save
        </button>
       </form>
    </div>
};