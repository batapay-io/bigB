'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'always',
  })
}
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function CSPostHogProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith('/studio')) {
      posthog.opt_out_capturing();
    } else {
      posthog.has_opted_out_capturing() && posthog.opt_in_capturing();
    }
  }, [pathname]);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
