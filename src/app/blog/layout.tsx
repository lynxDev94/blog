import Container from '@/components/ui/Container'
import MainNav from '@/components/ui/main-nav'
import React, { ReactNode } from 'react'

function Layout({children}:  {children: ReactNode}) {
  return (
    <>
    <div className='bg-gray-100 dark:bg-gray-800'>
        <Container>
            <MainNav/>
        </Container>
    </div>
    {children}
    </>
  )
}

export default Layout