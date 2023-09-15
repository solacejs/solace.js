import { DarkModeIcon, LightModeIcon, SearchIcon } from "./Icon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";

export default function Navbar() {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null
    }

    return (
        <div className="w-full h-fit fixed border-b border-b-nav-border z-[999]">
            <div className='max-w-7xl mx-auto px-2 sm:px-4 md:flex md:justify-between lg:px-8'>
                <nav className="hidden md:flex md:py-2 md:space-x-4 lg:space-x-8">
                    <NavLink href={"/"} className="nav focus:ring-1 text-accent hover:brightness-110 rounded-md py-2 px-3 inline-flex items-center text-sm font-semibold focus:outline-none">solace.js</NavLink>
                    <NavLink href={"/docs"} className="nav focus:ring-1 text-foreground hover:text-foreground-2 rounded-md py-2 px-3 inline-flex items-center text-sm font-semibold focus:outline-none">Documentation</NavLink>
                    <NavLink href={"/guide"} className="nav focus:ring-1 text-foreground hover:text-foreground-2 rounded-md py-2 px-3 inline-flex items-center text-sm font-semibold focus:outline-none">Guide</NavLink>
                    <NavLink href={"https://github.com/solacejs/solace.js"} onClick={(event) => { event.preventDefault(); window.open("https://github.com/solacejs/solace.js", "_blank") }} className="focus:ring-1 text-foreground hover:text-foreground-2 rounded-md py-2 px-3 inline-flex items-center text-sm font-semibold focus:outline-none">GitHub</NavLink>
                </nav>
                <div className="relative h-16 flex md:max-w-md md:w-full lg:max-w-lg">
                    <div className="relative z-0 flex-1 px-2 flex lg:gap-2 items-center justify-center md:justify-end">
                        <button onClick={() => setTheme(theme == "light" ? "dark" : "light")} className="hidden md:block rounded-md p-2 focus:outline-none focus:ring-1">
                            {theme === "light" ? <DarkModeIcon className="h-6 w-6"/> : <LightModeIcon className="h-6 w-6"/>}
                        </button>
                        <div className="w-full sm:max-w-lg lg:max-w-xs">
                            <label htmlFor="search" className="sr-only">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <SearchIcon className="h-5 w-5 text-foreground" />
                                </div>
                                <input placeholder="Search" type="search" autoComplete="off" autoCapitalize="off" autoCorrect="off" id="search" name="search" className="block w-full bg-input placeholder-foreground border border-transparent rounded-md py-2 pl-10 pr-3 text-base focus:outline-none focus:ring-2 focus:ring-inset lg:focus:ring-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}