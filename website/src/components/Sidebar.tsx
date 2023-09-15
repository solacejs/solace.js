"use client";
import { useEffect, useState } from "react";
import docs from "../../docs.json";
import { DropdownIcon } from "./Icon";
import Link from "next/link";

const settings = {
    "settings": true,
    "classes": true,
    "interfaces": false
}

export default function Sidebar() {

    const [classes, setClasses] = useState<any>([]);
    const [interfaces, setInterfaces] = useState<any>([]);

    const [showSettings, setShowSettings] = useState<boolean | null>(null)
    const [showClasses, setShowClasses] = useState<boolean | null>(null);
    const [showInterfaces, setShowInterfaces] = useState<boolean | null>(null);

    useEffect(() => {

        if (localStorage.getItem("settings") == null) localStorage.setItem("settings", JSON.stringify(settings));

        if (showSettings == null || showClasses == null || showInterfaces == null) {
            try {
                const data = JSON.parse(localStorage.getItem("settings")!);
                setShowSettings(data.settings);
                setShowClasses(data.classes);
                setShowInterfaces(data.interfaces);
            } catch (err) {
                localStorage.setItem("settings", JSON.stringify(settings));
                setShowSettings(settings.settings);
                setShowClasses(settings.classes);
                setShowInterfaces(settings.interfaces);
            }
        }

        docs.children.forEach((child) => {
            switch (child.kind) {
                case 128:
                    setClasses((prevClasses: any) => [...prevClasses, child]);
                    break;
                case 256:
                    setInterfaces((prevInterfaces: any) => [...prevInterfaces, child]);
                    break;
            }
        });

        return () => {
            setClasses([]);
            setInterfaces([]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("settings", JSON.stringify({ settings: showSettings, classes: showClasses, interfaces: showInterfaces }));
    }, [showSettings, showClasses, showInterfaces]);

    return (
        <div className="w-72 h-full bg-sidebar flex flex-col py-2 px-4 overflow-y-auto select-none">
            <button onClick={() => setShowSettings(!showSettings)} className="py-2 text-md font-bold uppercase flex gap-1 items-center">
                {<DropdownIcon className={`${showSettings ? "rotate-0" : "rotate-[270deg]"}`} />}
                <span>Settings</span>
            </button>

            <button onClick={() => setShowClasses(!showClasses)} className="py-2 text-md font-bold uppercase flex gap-1 items-center">
                {<DropdownIcon className={`${showClasses ? "rotate-0" : "rotate-[270deg]"}`} />}
                <span>Classes</span>
            </button>
            {showClasses && <ul className="w-full">
                {classes.map((CLASS: any, index: number) => {
                    return <li className="w-full p-1" key={index}><Link className="w-full border-l-4 border-transparent hover:border-accent px-2" href={`/docs/classes/${CLASS.name}`}>{CLASS.name}</Link></li>
                })}
            </ul>}

            <button onClick={() => setShowInterfaces(!showInterfaces)} className="py-2 text-md font-bold uppercase flex gap-1 items-center">
                {<DropdownIcon className={`${showInterfaces ? "rotate-0" : "rotate-[270deg]"}`} />}
                <span>Interfaces</span>
            </button>
            {showInterfaces && <ul className="w-full">
                {interfaces.map((INTERFACE: any, index: number) => {
                    return <li className="w-full p-1" key={index}><Link className="w-full border-l-4 border-transparent hover:border-accent px-2" href={`/docs/interfaces/${INTERFACE.name}`}>{INTERFACE.name}</Link></li>
                })}
            </ul>}
        </div>
    )
}