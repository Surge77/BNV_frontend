export interface NavLink {
    name: string;
    href: string;
}

export interface SocialLink {
    name: string;
    icon: React.ElementType;
    href: string;
}

export interface ServiceItem {
    title: string;
    variant: "light" | "lime" | "dark";
    image?: string;
}

export interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

export interface TestimonialItem {
    quote: string;
    author: string;
    role: string;
}
