'use client'

import { useState, useEffect, useRef, type MouseEvent as ReactMouseEvent } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown, Shovel, Home, Shield, Wrench, Images, MessageSquare, CircleDollarSign, Tag, Info, Star, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'

type NavLinkItem = {
  href: string
  label: string
  icon: LucideIcon | null
}

type NavDropdownItem = {
  label: string
  icon: LucideIcon
  dropdown: Array<{
    href: string
    label: string
    icon: LucideIcon
  }>
}

type NavItem = NavLinkItem | NavDropdownItem

// Simplified nav - grouped into 4 main items + dropdown
const navItems: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: Info },
  { href: '/#testimonials', label: 'Reviews', icon: Star },
  { 
    label: 'Services', 
    icon: Wrench,
    dropdown: [
      { href: '/services', label: 'All Services', icon: Shovel },
      { href: '/storm-shelter', label: 'Storm Shelters', icon: Shield },
      { href: '/projects', label: 'Our Work', icon: Images },
    ]
  },
  { href: '/pricing', label: 'Pricing', icon: Tag },
  { href: '/financing', label: 'Financing', icon: CircleDollarSign },
  { href: '/contact', label: 'Contact', icon: MessageSquare },
]

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolledPastHeroThreshold, setScrolledPastHeroThreshold] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMobileMenu = () => {
    setMobileOpen((open) => !open)
  }

  useEffect(() => {
    const handleScroll = () => setScrolledPastHeroThreshold(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: globalThis.MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isHome = pathname === '/'
  const showHeaderLogo = !isHome || scrolledPastHeroThreshold
  const useSolidHeader = !isHome || scrolledPastHeroThreshold

  const handleLogoClick = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    setMobileOpen(false)
    setDropdownOpen(false)

    if (pathname === '/') {
      e.preventDefault()
      const hero = document.getElementById('home-hero')
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  const handleNavItemClick = (e: ReactMouseEvent<HTMLAnchorElement>, href?: string) => {
    if (!href || !href.startsWith('/#')) return

    const targetId = href.split('#')[1]
    if (!targetId) return

    if (pathname !== '/') {
      setMobileOpen(false)
      setDropdownOpen(false)
      return
    }

    e.preventDefault()
    setMobileOpen(false)
    setDropdownOpen(false)
    document.body.style.overflow = ''

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const target = document.getElementById(targetId)
        if (!target) return
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.replaceState(null, '', `/#${targetId}`)
      })
    })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] isolate pt-[env(safe-area-inset-top)] transition-[background-color,backdrop-filter,box-shadow,border-color] duration-500',
        'max-md:bg-soft-coal/96 max-md:backdrop-blur-sm max-md:shadow-lg max-md:shadow-matte-black/30 max-md:border-b max-md:border-bone-linen/10',
        useSolidHeader
          ? 'md:bg-soft-coal/96 md:backdrop-blur-sm md:shadow-lg md:shadow-matte-black/30 md:border-b md:border-bone-linen/10'
          : 'md:bg-gradient-to-b md:from-matte-black/35 md:via-matte-black/15 md:to-transparent md:border-b md:border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[3.5rem] items-center justify-between md:h-[5.75rem] lg:h-[6.75rem]">
          {/* Logo */}
          <Link
            href="/#home-hero"
            onClick={handleLogoClick}
            className={cn(
              'flex min-w-0 items-center py-0.5 pr-3 transition-all duration-500 ease-out md:py-1 md:pr-4 lg:pr-6',
              showHeaderLogo ? 'opacity-100 translate-y-0 scale-100' : 'pointer-events-none -translate-y-1 scale-95 opacity-0'
            )}
            aria-label="HJH Outdoor Operations - Home"
            aria-hidden={!showHeaderLogo}
            tabIndex={showHeaderLogo ? undefined : -1}
          >
            <Logo size="md" showText className="min-w-0 max-md:scale-[0.68] max-md:origin-left" />
          </Link>

          {/* Desktop / tablet nav */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-2" aria-label="Main navigation">
            {navItems.map((item) => (
              'dropdown' in item ? (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={cn(
                      'flex items-center gap-1.5 px-3 py-2.5 text-sm font-semibold tracking-wide uppercase transition-all duration-200 rounded-xl lg:gap-2 lg:px-5 lg:py-3 lg:text-base',
                      dropdownOpen || pathname.startsWith('/services') || pathname.startsWith('/storm-shelter') || pathname.startsWith('/projects')
                        ? 'text-bone-linen bg-storm-blue/35 ring-1 ring-bone-linen/20 shadow-sm shadow-matte-black/25'
                        : 'text-soft-khaki hover:text-bone-linen hover:bg-bone-linen/5'
                    )}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown 
                      size={18} 
                      className={cn('transition-transform duration-200', dropdownOpen && 'rotate-180')} 
                      aria-hidden="true" 
                    />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div
                    className={cn(
                      'absolute top-full left-0 mt-2 w-56 bg-gunmetal border border-bone-linen/10 rounded-2xl shadow-xl shadow-matte-black/40 ring-1 ring-bone-linen/10 overflow-hidden transition-all duration-200 origin-top',
                      dropdownOpen 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    )}
                  >
                    {item.dropdown.map((subItem) => {
                      const Icon = subItem.icon
                      return (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={cn(
                            'flex items-center gap-3 px-5 py-4 text-base font-medium transition-colors border-b border-bone-linen/5 last:border-0',
                            pathname === subItem.href
                              ? 'text-bone-linen bg-storm-blue/35 ring-1 ring-bone-linen/20 shadow-sm shadow-matte-black/25'
                              : 'text-soft-khaki hover:text-bone-linen hover:bg-bone-linen/5'
                          )}
                        >
                          {Icon && <Icon size={20} className="text-equipment-gold" aria-hidden="true" />}
                          {subItem.label}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavItemClick(e, item.href)}
                  className={cn(
                    'px-3 py-2.5 text-sm font-semibold tracking-wide uppercase transition-colors duration-150 rounded-xl lg:px-5 lg:py-3 lg:text-base',
                    pathname === item.href
                      ? 'text-bone-linen bg-storm-blue/35 ring-1 ring-bone-linen/20 shadow-sm shadow-matte-black/25'
                      : 'text-soft-khaki hover:text-bone-linen hover:bg-bone-linen/5'
                  )}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop / tablet CTA */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <a
              href="tel:+14057567304"
              className="flex items-center gap-2 px-3 py-2.5 text-soft-khaki hover:text-bone-linen hover:bg-bone-linen/5 text-sm font-semibold tracking-wide transition-colors rounded-xl lg:px-4 lg:py-3 lg:text-base"
              aria-label="Call us at (405) 756-7304"
            >
              <Phone size={20} aria-hidden="true" />
              <span className="hidden lg:inline">(405) 756-7304</span>
            </a>
            <Link
              href="/contact"
              className="px-4 py-2.5 bg-storm-blue hover:bg-steel-blue text-bone-linen text-sm font-bold tracking-wide uppercase transition-colors duration-150 rounded-xl shadow-lg shadow-storm-blue/30 ring-1 ring-bone-linen/15 hover:shadow-storm-blue/50 lg:px-6 lg:py-3 lg:text-base"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile: phone + menu */}
          <div className="relative z-[110] flex md:hidden shrink-0 items-center gap-2">
            <a
              href="tel:+14057567304"
              className="flex touch-manipulation items-center justify-center w-11 h-11 text-bone-linen hover:bg-bone-linen/10 transition-colors rounded-xl"
              aria-label="Call us at (405) 756-7304"
            >
              <Phone size={24} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="flex touch-manipulation items-center justify-center w-11 h-11 text-bone-linen hover:bg-bone-linen/10 transition-colors rounded-xl"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-[105] bg-matte-black/55 md:hidden"
          aria-label="Close navigation menu"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {mobileOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden fixed left-0 right-0 z-[108] top-[calc(3.5rem+env(safe-area-inset-top))] max-h-[min(80vh,calc(100dvh-3.5rem-env(safe-area-inset-top)))] overflow-y-auto overscroll-contain bg-gunmetal border-t border-bone-linen/10 shadow-xl shadow-matte-black/40"
        >
        <nav className="max-w-7xl mx-auto px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex flex-col gap-0.5" aria-label="Mobile navigation">
          {navItems.map((item) => (
            'dropdown' in item ? (
              <div key={item.label} className="mt-1 flex flex-col gap-0.5">
                <div className="flex items-center gap-2.5 px-4 pb-1 pt-2 text-[11px] font-bold tracking-[0.16em] uppercase text-weathered-stone">
                  <item.icon size={14} className="text-equipment-gold/80 shrink-0" aria-hidden="true" />
                  {item.label}
                </div>
                <div className="ml-[1.45rem] flex flex-col gap-0.5 border-l border-bone-linen/12 pl-2">
                  {item.dropdown.map((subItem) => {
                    const Icon = subItem.icon
                    return (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          'flex min-h-11 items-center gap-3 rounded-lg px-4 py-2.5 text-base font-semibold transition-colors',
                          pathname === subItem.href
                            ? 'text-bone-linen bg-storm-blue/35 ring-1 ring-bone-linen/20'
                            : 'text-soft-khaki hover:text-bone-linen hover:bg-bone-linen/5'
                        )}
                      >
                        <Icon size={18} className="shrink-0 text-equipment-gold" aria-hidden="true" />
                        {subItem.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavItemClick(e, item.href)}
                className={cn(
                  'flex min-h-11 items-center gap-3 rounded-lg px-4 py-2.5 text-base font-semibold transition-colors',
                  pathname === item.href
                    ? 'text-bone-linen bg-storm-blue/35 ring-1 ring-bone-linen/20'
                    : 'text-soft-khaki hover:text-bone-linen hover:bg-bone-linen/5'
                )}
              >
                {item.icon && <item.icon size={18} className="shrink-0 text-equipment-gold" aria-hidden="true" />}
                {item.label}
              </Link>
            )
          ))}

          <div className="mt-3 pt-3 border-t border-bone-linen/10 flex flex-col gap-2.5">
            <a
              href="tel:+14057567304"
              className="flex min-h-12 items-center justify-center gap-2.5 px-4 py-3 border-2 border-soft-khaki/40 text-soft-khaki text-base font-bold tracking-wide uppercase rounded-xl hover:border-bone-linen hover:text-bone-linen transition-colors"
              aria-label="Call us at (405) 756-7304"
            >
              <Phone size={18} aria-hidden="true" />
              (405) 756-7304
            </a>
            <Link
              href="/contact"
              className="flex min-h-12 items-center justify-center px-4 py-3 bg-storm-blue text-bone-linen text-base font-bold tracking-wide uppercase rounded-xl shadow-lg shadow-storm-blue/30 ring-1 ring-bone-linen/15 hover:bg-steel-blue transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </nav>
        </div>
      )}
    </header>
  )
}
