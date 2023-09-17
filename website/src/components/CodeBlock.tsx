"use client";
import { useEffect, useRef } from "react"

export default function CodeBlock({ language, children }: { language?: string, children: string }) {

    const ref = useRef<HTMLPreElement>(null);

    useEffect(() => {
        switch (language) {
            case "bash":
                // eslint-disable-next-line react-hooks/exhaustive-deps
                children = children.replace(/\$/g, `<span class="text-green-600">$</span>`);
                break;
            case "typescript":
                children = children
                    .replace(/\bimport|export|default|class|constructor|extends|from|const|let|new|public|async\b/g, `<span class='syntax-keyword'>$&</span>`)
                    .replace(/\btrue|false\b/g, `<span class='syntax-constant'>$&</span>`)
                    .replace(/"([^"]+)"/g, `<span class='syntax-string'>"$1"</span>`)
                    .replace(/\/\*\*([\s\S]*?)\*\//g, `<span class='syntax-comment'>$&</span>`)
                    .replace(/\.\w+(?![\w(])/g, `<span class='syntax-constant'>$&</span>`)
                    .replace(/(\w+)\(/g, `<span class='syntax-entity'>$1</span>(`)
                    .replace(/^[a-z].*\($/, `<span>test</span>`)
                    .replace(/\b\w+:/g, `<span class='syntax-constant'>$&</span>`)
                    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, `<a href='$2'>$1</a>`)
                break;
        }

        if (ref.current) ref.current.innerHTML = children;
    }, []);

    return (
        <pre ref={ref} className="w-fit h-fit break-word max-w-full bg-code p-4 rounded-md font-mono overflow-auto"/>
    )
}