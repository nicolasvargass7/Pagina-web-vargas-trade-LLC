import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-[0_1px_2px_rgba(11,45,92,0.06)] hover:bg-hover hover:shadow-md",
  secondary:
    "border border-border bg-transparent text-text hover:border-primary hover:bg-bg-alt",
  ghost: "text-text hover:text-primary",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
};

type LinkButtonProps = CommonProps & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "className" | "children"
  >;

type NativeButtonProps = CommonProps & { href?: undefined } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "children"
  >;

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, variant = "primary", className, showArrow = true, ...rest } = props;

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight
          className="size-4 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={cn(base, variants[variant], className)} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(base, variants[variant], className)} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
