import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { MouseEventHandler } from 'react';

export default function NavLink({ href, children, className, onClick }: { href: string, children: JSX.Element | string, className?: string, onClick?: MouseEventHandler<HTMLAnchorElement> | undefined }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link onClick={onClick} href={href} className={`${isActive ? 'active' : ''} ${className && className}`}>
            {children}
        </Link>
    );
}
