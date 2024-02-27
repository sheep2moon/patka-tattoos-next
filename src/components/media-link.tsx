export function MediaLink({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <a target="_blank" className="text-5xl hover:scale-105 duration-200 text-gold" href={href}>
            {children}
        </a>
    );
}
