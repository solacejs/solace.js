"use client";
import React, { useState } from "react";
import docs from "../../docs.json";
import Sidebar from "./Sidebar";
import CodeBlock from "./CodeBlock";
import Link from "next/link";
import { DevelopmentIcon, DropdownIcon } from "./Icon";
import { Child, Constructor, ConstructorParam, Method, Param, ParametersEntity, Property, SignaturesEntity, SymbolMap } from "@/Documentation";

export default function Main({ name }: { name?: string }) {

    const result = docs.children.find((child) => child.name == name);

    const [showProperties, setShowProperties] = useState(true);
    const [showMethods, setShowMethods] = useState(true);

    let constructor = result?.children.find((child) => child.name == "constructor") as Constructor;
    let signatures: SignaturesEntity[] | undefined | null;
    let symbolMap = docs.symbolIdMap as unknown as SymbolMap[];

    if (constructor) signatures = constructor.signatures;

    let constructorParams: ConstructorParam[] = [];
    const properties: Property[] = [];
    const methods: Method[] = [];

    if (constructor)
        if (signatures![0].parameters) {
            signatures![0].parameters.forEach((param) => {
                switch (param.type.type) {
                    case "reference":
                        constructorParams.push({ name: param.name, type: symbolMap[param.type.target as number].sourceFileName.split("/").pop()?.replace(/\.[^.]+$/, ''), description: param.comment.summary![0].text, href: `/docs/${docs.children.find((child) => child.name == symbolMap[param.type.target as number].sourceFileName.split("/").pop()?.replace(/\.[^.]+$/, ''))!.kind == 128 ? "classes" : "interfaces"}/${symbolMap[param.type.target as number].sourceFileName.split("/").pop()?.replace(/\.[^.]+$/, '')}` })
                        break;
                    case "typeOperator":
                        constructorParams.push({ name: param.name, type: `${param.type.operator} ${symbolMap[(param.type.target as { target: number }).target].sourceFileName.split("/").pop()?.replace(/\.[^.]+$/, '')}`, description: "", href: `/docs/interfaces/${symbolMap[(param.type.target as { target: number }).target].sourceFileName.split("/").pop()?.replace(/\.[^.]+$/, '')}` })
                        break;
                    case "intrinsic":
                        constructorParams.push({ name: param.name, type: param.type.name, description: param.comment.summary![0].text, href: param.type.name == "any" ? `https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any&_blank` : `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/${[param.type.name]}&_blank` });
                        break;
                    case "literal":
                        constructorParams.push({ name: param.name, type: `"${param.type.value}"`, description: param.comment.summary![0].text, href: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string&_blank` });
                        break;
                }
            });
        }

    const iterateOverTypes = (child: Child): string[] => {
        switch (child.type.type) {
            case "union":
                return child.type.types.map((type) => {
                    switch (type.type) {
                        case "intrinsic":
                            return type.name;
                        case "reference":
                            return symbolMap[type.target].sourceFileName.split("/").pop()!.replace(/\.[^.]+$/, '');
                        case "array":
                            return `${symbolMap[type.elementType.target]?.sourceFileName.split("/").pop()?.replace(/\.[^.]+$/, '')}`
                    }
                    return "";
                })
        }
        return [];
    }

    (result?.children as unknown as Child[]).forEach((child) => {
        let href = ""
        if (!child.sources) return;
        if (!child.sources[0].url) return;
        href = child.sources[0].url.replace(/github\.com\/solacejs\/solace.js\/blob\/[a-f0-9]+/, "github.com/solacejs/solace.js/tree/main");
        switch (child.kind) {
            case 1024:
                if (!child.comment) return;
                properties.push({
                    name: child.name, href: child.sources[0].url.replace(/github\.com\/solacejs\/solace.js\/blob\/[a-f0-9]+/, "github.com/solacejs/solace.js/tree/main"), description: child.comment.summary![0].text, types: iterateOverTypes(child)
                });
                break;
            case 2048:
                const parameters: Param[] = [];

                child.signatures[0].parameters?.forEach((param: ParametersEntity) => {
                    switch (param.type.type) {
                        case "reference":
                            if (param.type.target as number < 0) return;
                            parameters.push({ name: symbolMap[param.type.target as number].sourceFileName.split("/").pop()!.replace(/\.[^.]+$/, '') })
                            break;
                        case "array":
                            switch (param.type.elementType.type) {
                                case "reference":
                                    parameters.push({ name: symbolMap[param.type.elementType.target].sourceFileName.split("/").pop()?.replace(/\.[^.]+$/, '') + "[]" })
                                    break;
                            }
                            break;
                    }
                })

                methods.push({ name: child.name, href: href, description: child.signatures[0].comment.summary![0].text, parameters: parameters });
                break;
        }
    });

    if (!result) return <div></div>
    return (
        <main className="w-full h-full flex">
            <Sidebar />
            <div className="z-0 w-full md:w-[calc(100%-18rem)] md:ml-72 h-full py-4 px-8">
                <div className="w-full h-full">
                    <h1>{result.name}</h1>
                    <p>{result.comment?.summary.find((summary) => summary.kind == "text")?.text}</p>
                    {signatures ? signatures[0].comment && (
                        <div>
                            <h2 className="mt-2">Constructor</h2>
                            <CodeBlock language="typescript">
                                {`new ${result.name}(${constructorParams.map((param, index) => index == 0 ? param.name : ` ${param.name}`)});`}
                            </CodeBlock>

                            <table className="bg-code mt-4 w-full xl:min-w-0 rounded-lg text-center">
                                <thead className="bg-accent">
                                    <tr className="!uppercase">
                                        <th className="!p-4 rounded-tl-lg">Parameter</th>
                                        <th className="!p-4">Type</th>
                                        <th className="!p-4 w-full rounded-tr-lg">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {constructorParams.map((param, index) => {
                                        return (
                                            <tr className={index > 0 ? "border-t border-t-nav-border" : ""} key={index}>
                                                <td className="!pl-2.5 !py-5">{param.name}</td>
                                                <td className="!pl-2.5 !py-5"><Link className="link" target={param.href.endsWith("&_blank") ? "_blank" : ""} href={param.href.replace("&_blank", "")}>{param.type}</Link></td>
                                                <td className="!pl-2.5 !py-5">{param.description}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    ) : <div></div>}
                    <div className="grid sm:grid-cols-1 mb-10 md:grid-cols-2 mt-3">
                        {properties.length > 0 && (
                            <div>
                                <button onClick={() => setShowProperties(!showProperties)} className="py-2 text-md font-bold uppercase flex gap-1 items-center">
                                    <DropdownIcon className={showProperties ? "rotate-0" : "rotate-[270deg]"} />
                                    <span>Properties</span>
                                </button>
                                {showProperties && (
                                    <ul className="p-0 !mt-0 pl-2">
                                        {properties.map((property, index) => {
                                            return (
                                                <li key={index} className="mb-1 border-l-4 pl-2 border-l-transparent hover:border-accent">
                                                    <Link className="link" href={`#${property.name}`}>{property.name}</Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )}
                            </div>
                        )}
                        {methods.length > 0 && (
                            <div>
                                <button onClick={() => setShowMethods(!showMethods)} className="py-2 text-md font-bold uppercase flex gap-1 items-center">
                                    <DropdownIcon className={showMethods ? "rotate-0" : "rotate-[270deg]"} />
                                    <span>Methods</span>
                                </button>
                                {showMethods && (
                                    <ul className="p-0 !mt-0 pl-2">
                                        {methods.map((method, index) => {
                                            return (
                                                <li key={index} className="mb-1 border-l-4 pl-2 border-l-transparent hover:border-accent">
                                                    <Link className="link" href={`#${method.name}`}>{method.name}</Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>
                    {properties.length > 0 && (
                        <div>
                            <h2 className="!mt-4">Properties</h2>
                            {properties.map((property, index) => (
                                <div className="my-4 mx-8 bg-code px-2 py-4 rounded-md" id={property.name} key={index}>
                                    <div className="flex items-center justify-between">
                                        <h3 className="inline-block ml-2"><Link className="link" href={`#${property.name}`}>.{property.name}</Link></h3>
                                        {property.href && <Link href={property.href} target="_blank" className="float-right mr-4 text-[var(--syntax-string)]"><DevelopmentIcon /></Link>}
                                    </div>
                                    <div className="grid pl-2.5">
                                        <p className="m-0">{property.description}</p>
                                        <div className="font-semibold mt-3">
                                            Type:
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {methods.length > 0 && (
                        <div>
                            <h2 className="!mt-4">Methods</h2>
                            {methods.map((method, index) => (
                                <div className="my-4 mx-8 bg-code px-2 py-4 rounded-md" id={method.name} key={index}>
                                    <div className="flex items-center justify-between">
                                        <h3 className="inline-block ml-2"><Link className="link" href={`#${method.name}`}>.{method.name}()</Link></h3>
                                        {method.href && <Link href={method.href} target="_blank" className="float-right mr-4 text-[var(--syntax-string)]"><DevelopmentIcon /></Link>}
                                    </div>
                                    <div className="grid pl-2.5">
                                        <p className="m-0">{method.description}</p>
                                        <div className="font-semibold mt-3">
                                            Type:
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}