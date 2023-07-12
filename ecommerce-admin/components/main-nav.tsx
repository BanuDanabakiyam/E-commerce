"use client";

import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

export function MainNav (
    {
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>)
 {

    const pathname = usePathname(); // for next navigation
    const params = useParams();  // for next navigation
    const routes = [
        {
            href: `/${params.storedId}/settings`,
            label: 'Settings',
            active: pathname === `/${params.storeId}/settings`
        },
    ];

    return(
        <nav
        // received a classname as a prop from navbar.tsx AND we merge two className
        className={cn("flex items-center space-x-4 lg:space-x-6",className)}
        >
            {routes.map((route) => (
                <Link
                key={route.href}
                href={route.href}
                className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    route.active ? "text-black dark:text-white" : "text-muted-foreground"
                )}
                >
                    {route.label}
                </Link>
            ))}

        </nav>
    );

};