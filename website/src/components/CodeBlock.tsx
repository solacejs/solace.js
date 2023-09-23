"use client";
import { useEffect, useRef } from "react"
import MarkdownRenderer from "./MarkdownRenderer";

export default function CodeBlock({ language, children }: { language?: string, children: string }) {

    const ref = useRef<HTMLPreElement>(null);

    return (
        <MarkdownRenderer>
            {`\`\`\`${language!}\n${children}\n\`\`\``}
        </MarkdownRenderer>
    )
}