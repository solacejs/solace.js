"use client";
import { useContext, useEffect, useRef, useState } from "react";
import docs from "../../docs.json";
import { DropdownIcon } from "./Icon";
import Link from "next/link";
import { Class, Interface } from "@/Documentation";
import { SidebarContext } from "./SidebarContext";

const settings = {
    "settings": true,
    "classes": true,
    "interfaces": false
}

export default function Sidebar() {

    const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

    const ref = useRef<HTMLDivElement>(null);

    const [classes, setClasses] = useState<Class[]>([]);
    const [interfaces, setInterfaces] = useState<Interface[]>([]);

    const [showSettings, setShowSettings] = useState<boolean | null>(null)
    const [showClasses, setShowClasses] = useState<boolean | null>(null);
    const [showInterfaces, setShowInterfaces] = useState<boolean | null>(null);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setIsSidebarOpen(true);
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

        if (classes.length < 1 || interfaces.length < 1) {
            docs.children.forEach((child) => {
                switch (child.kind) {
                    case 128:
                        setClasses((prevClasses) => [...prevClasses, child]);
                        break;
                    case 256:
                        setInterfaces((prevInterfaces) => [...prevInterfaces, child]);
                        break;
                }
            });
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
        }

        document.addEventListener("mousedown", (event) => handleClickOutside(event));

        return () => {
            document.removeEventListener("mousedown", (event) => handleClickOutside(event));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("settings", JSON.stringify({ settings: showSettings, classes: showClasses, interfaces: showInterfaces }));
    }, [showSettings, showClasses, showInterfaces]);

    return (
        <div ref={ref} className="h-full z-10 fixed ${isSidebarOpen ? 'open' : 'closed'}">
            <button className={`${open ? "hidden" : "block"} absolute md:hidden p-2 bg-accent -rotate-90 rounded-b-lg mt-4`} onClick={() => setOpen(true)}><DropdownIcon></DropdownIcon></button>
            <div className={`${open ? "fixed" : "hidden"} md:fixed w-60 md:w-72 md:flex h-full bg-sidebar flex-col pt-2 px-4 overflow-y-auto select-none`}>
                <button onClick={() => setShowSettings(!showSettings)} className="py-2 text-md font-bold uppercase flex gap-1 items-center">
                    {<DropdownIcon className={`${showSettings ? "rotate-0" : "rotate-[270deg]"}`} />}
                    <span>Settings</span>
                </button>

                <button onClick={() => setShowClasses(!showClasses)} className="py-2 text-md font-bold uppercase flex gap-1 items-center">
                    {<DropdownIcon className={`${showClasses ? "rotate-0" : "rotate-[270deg]"}`} />}
                    <span>Classes</span>
                </button>
                {showClasses && <ul className="w-full">
                    {classes.map((CLASS, index: number) => {
                        return <li className="w-full p-1" id={`sidebar-${CLASS.name}`} key={index}><Link className="w-full border-l-4 border-transparent hover:border-accent px-2" href={`/docs/classes/${CLASS.name}`}>{CLASS.name}</Link></li>
                    })}
                </ul>}

                <button onClick={() => setShowInterfaces(!showInterfaces)} className="py-2 text-md font-bold uppercase flex gap-1 items-center">
                    {<DropdownIcon className={`${showInterfaces ? "rotate-0" : "rotate-[270deg]"}`} />}
                    <span>Interfaces</span>
                </button>
                {showInterfaces && <ul className="w-full">
                    {interfaces.map((INTERFACE, index: number) => {
                        return <li className="w-full p-1" key={index}><Link className="w-full border-l-4 border-transparent hover:border-accent px-2" href={`/docs/interfaces/${INTERFACE.name}`}>{INTERFACE.name}</Link></li>
                    })}
                </ul>}
            </div>
        </div>
    )
}