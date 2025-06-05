import React, { ReactNode } from 'react'

export default function Header({children} : {children : ReactNode}) {
  return (
    <div className='bg-gray-100 p-8 dark:bg-gray-800'>{children}</div>
  )
}
