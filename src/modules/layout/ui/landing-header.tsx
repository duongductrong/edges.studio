import { Link } from '@tanstack/react-router'

import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip'
import { COMPANY_NAME } from '@/shared/config/site'
import { NAV_LINKS } from '../lib/nav-links'

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="text-base font-semibold tracking-tight text-foreground">
        {COMPANY_NAME}
      </span>
    </Link>
  )
}

function DesktopNav() {
  return (
    <nav className="hidden items-center gap-6 md:flex mr-3">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.label}
          to={link.to}
          className="text-[14px] font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2.25 4.5H15.75M2.25 9H15.75M2.25 13.5H15.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <nav className="mt-8 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <div className="my-3 h-px bg-border" />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                rounded="full"
                className="justify-center border-none shadow-none"
                disabled
              >
                Login
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              Login is currently unavailable. Please check back later.
            </TooltipContent>
          </Tooltip>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export function LandingHeader() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <div className="flex items-center gap-1">
          <DesktopNav />

          <div className="hidden md:block">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="secondary"
                  rounded="full"
                  className="justify-center border-none shadow-none"
                >
                  Login
                </Button>
              </TooltipTrigger>
              <TooltipContent>Currently unavailable.</TooltipContent>
            </Tooltip>
          </div>

          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
