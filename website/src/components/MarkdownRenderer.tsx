'use client';
import { remark } from 'remark';
import html from 'remark-html';
import { useEffect, useRef } from "react"
import React from "react";

export default function MarkdownRenderer({ children, className }: { children: string, className?: string }) {


    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ast = remark().use(html as any).parse(children);
        if (ref.current) ref.current!.innerHTML = ast.children.map((node) => {
            switch (node.type) {
                case "heading":
                    const level = node.depth;
                    const headerText = node.children.map((child) => {
                        if (child.type == "text") return child.value;
                    }).join('');
                    return `<h${level}>${headerText}</h${level}>`
                case "paragraph":
                    const paragraphText = node.children.map((child) => {
                        if (child.type == "text") return child.value;
                        if(child.type == "inlineCode") return `<span class='bg-code w-fit h-fit p-1 rounded-md'>${child.value}</span>`;
                    }).join('');
                    return `<p>${paragraphText}</p>`
                case "code":
                    let value = "";
                    switch (node.lang) {
                        case "ts":
                            value = node.value.replace(/\bimport|export|default|class|constructor|extends|from|const|let|new|public|async\b/g, `<span class='syntax-keyword'>$&</span>`)
                                .replace(/\btrue|false\b/g, `<span class='syntax-constant'>$&</span>`)
                                .replace(/"([^"]+)"/g, `<span class='syntax-string'>"$1"</span>`)
                                .replace(/\/\*\*([\s\S]*?)\*\//g, `<span class='syntax-comment'>$&</span>`)
                                .replace(/\.\w+(?![\w(])/g, `<span class='syntax-constant'>$&</span>`)
                                .replace(/(\w+)\(/g, `<span class='syntax-entity'>$1</span>(`)
                                .replace(/^[a-z].*\($/, `<span>test</span>`)
                                .replace(/\b\w+:/g, `<span class='syntax-constant'>$&</span>`)
                                .replace(/\[([^\]]+)\]\(([^)]+)\)/g, `<a href='$2'>$1</a>`)
                            return `<pre class='my-4 w-fit h-fit break-word max-w-full bg-code p-4 rounded-md font-mono overflow-auto'>${value}</pre>`
                        default:
                            value = node.value.replace(/\$/g, `<span class="text-green-600">$</span>`);
                            return `<pre class='my-4 w-fit h-fit break-word max-w-full bg-code p-4 rounded-md font-mono overflow-auto'>${value}</pre>`
                    }
                default:
                    return "pog"
            }
        }).join('')
    }, []);

    return (
        <div className={className} ref={ref}></div>
    )
}