import { HardHat, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "./cn";
import { LIVE_PATH, PROJECT_NUMBER } from "./types";
import { SampleBadge } from "./ui";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/seats", label: "Seats" },
  { to: "/trainee", label: "Trainee file" },
  { to: "/employer", label: "Employer sheet" },
  { to: "/training", label: "Training rule" },
  { to: "/bench", label: "Gulf bench" },
  { to: "/about", label: "About" },
] as const;

export function DeskShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const printMode = pathname.endsWith("/employer");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="desk-root flex min-h-dvh flex-col bg-ink text-paper">
      <div className="desk-edge" aria-hidden="true" />
      <div className="side-label hidden 2xl:block" aria-hidden="true">
        GROUND CREW SOUTH / BRIK {PROJECT_NUMBER} / SAMPLE
      </div>

      <a
        href="#main"
        className="sr-only no-print focus:not-sr-only focus:absolute focus:top-3 focus:left-6 focus:z-[70] focus:bg-yellow focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>

      <header className="no-print sticky top-0 z-40 border-b border-line bg-ink/95 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-3 px-4 py-3 pl-6 sm:px-8">
          <Link to="/" className="flex min-h-11 items-center gap-3">
            <span className="grid size-9 place-items-center bg-signal text-paper">
              <HardHat className="size-4" strokeWidth={2.4} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-mono text-[10px] tracking-[0.28em] text-grey uppercase">
                BRIK {PROJECT_NUMBER}
              </span>
              <span className="font-display text-lg tracking-wide uppercase sm:text-xl">
                GCS
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "min-h-11 px-2.5 py-2 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors",
                    isActive ? "text-yellow" : "text-grey hover:text-paper",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <SampleBadge />
            <button
              type="button"
              className="grid size-11 place-items-center border border-line lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
        <div className="hazard-tape-thin" aria-hidden="true" />
      </header>

      {open ? (
        <div
          id="mobile-menu"
          className="no-print fixed inset-0 z-50 overflow-y-auto bg-ink px-6 pt-24 pb-10 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "flex min-h-14 items-center border-b border-line font-display text-3xl tracking-wide uppercase",
                    isActive ? "text-yellow" : "text-paper",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}

      <main
        id="main"
        className={cn(
          "flex-1",
          printMode ? "px-0 py-0" : "px-4 py-8 pl-6 sm:px-8 sm:py-10",
        )}
      >
        {children}
      </main>

      <footer className="no-print mt-auto border-t border-line px-4 py-4 pl-6 sm:px-8">
        <p className="font-mono text-[10px] tracking-[0.18em] text-grey uppercase">
          GROUND CREW SOUTH &nbsp;|&nbsp; BRIK CREATIVE &nbsp;|&nbsp; SAMPLE
          &nbsp;|&nbsp; {LIVE_PATH.replace("https://", "").replace(/\/$/, "")}
        </p>
      </footer>
    </div>
  );
}
