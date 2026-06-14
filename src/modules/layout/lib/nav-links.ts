export const NAV_LINKS = [
  { label: 'Privacy Policy', to: '/privacy' as const },
  { label: 'Terms of Service', to: '/terms' as const },
] as const

export const FOOTER_LINKS = {
  legal: [
    { label: 'Privacy Policy', to: '/privacy' as const },
    { label: 'Terms of Service', to: '/terms' as const },
  ],
  social: [
    { label: 'Twitter', href: 'https://twitter.com/edgesstudio' },
    { label: 'GitHub', href: 'https://github.com/edgesstudio' },
  ],
}
