import { PropsWithChildren, ReactNode } from 'react'

import { ClassName } from '@/lib/types/types'
import { cn } from '@/lib/utils'

import Container from './container'
import { Icons } from './icons'
import { Badge } from './ui/badge'

export type HeaderTextProps = {
  title?: string
  description?: string
  hideIcon?: boolean
  badge?: string
  icon?: ReactNode
  variant?: 'default' | 'left'
} & ClassName &
  PropsWithChildren

const HeaderText = ({ title, description, icon, children = null, hideIcon = false, badge = '', variant = 'default', className }: HeaderTextProps) => {
  return (
    <div className='py-6'>
      <Container
        className={cn(
          'flex w-full items-center justify-center p-0 md:p-0',
          {
            'justify-start items-start': variant === 'left',
          },
          className
        )}
      >
        <div
          className={cn('flex flex-col space-y-4 items-center justify-center w-full', {
            'items-start': variant === 'left',
          })}
        >
          <div
            className={cn('flex justify-center items-center text-background fill-background bg-foreground rounded-full w-fit p-4', {
              hidden: hideIcon,
            })}
          >
            {icon ?? <Icons.logo className='size-8' />}
          </div>
          <Badge
            className={cn('mx-auto w-fit', {
              'mx-0': variant === 'left',
              hidden: !badge,
            })}
          >
            {badge}
          </Badge>
          <h1 className='m-0 p-0 text-2xl md:text-3xl'>{title ?? null}</h1>
          {description ? <p className='text-lg leading-normal text-muted-foreground'>{description}</p> : null}
          {children}
        </div>
      </Container>
    </div>
  )
}

export default HeaderText
