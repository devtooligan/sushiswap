import { Menu as HeadlessMenu } from '@headlessui/react'
import { FC, forwardRef } from 'react'

import { classNames } from '../index'
import { ExtractProps } from '../types'

export type MenuItems = ExtractProps<typeof HeadlessMenu.Items> & {
  className?: string
}

export const MenuItems: FC<MenuItems> = forwardRef(({ className, ...props }, ref) => {
  return (
    <HeadlessMenu.Items
      {...props}
      ref={ref}
      className={classNames(
        className,
        'z-10 bg-slate-800 absolute right-0 mt-2 min-w-[224px] w-[fit-content] w-full origin-top-right rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-slate-800 shadow-sm shadow-slate-1000'
      )}
    />
  )
})
