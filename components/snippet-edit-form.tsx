'use client';
import { Editor } from "@monaco-editor/react";

import type { Snippet } from "@prisma/client/edge";
import { useState } from "react";

import * as actions from "@/actions";

interface SnippetEditFormProps {
   snippet: Snippet
}


// # Environment variables declared in this file are automatically made available to Prisma.
// # See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

// # Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
// # See the documentation for all the connection string options: https://pris.ly/d/connection-strings

// DATABASE_URL="file:./dev.db"

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