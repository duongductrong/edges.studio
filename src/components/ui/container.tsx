import * as React from 'react'
import { Slot } from 'radix-ui'

import { cn } from '#/lib/utils.ts'

export interface ContainerProps extends React.ComponentProps<'div'> {
  asChild?: boolean
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : 'div'
    return (
      <Comp
        ref={ref}
        className={cn('mx-auto max-w-5xl px-6 w-full', className)}
        {...props}
      />
    )
  },
)

Container.displayName = 'Container'

export { Container }
