import NAV_LINKS from '@/constants/NAV_LINKS';
import Link from 'next/link';
import React from 'react'

export default function NavLink({className=''}) {
  return (
    <div className={className||'flex gap-4 px-2'}>
         {/* nav link */}
         {NAV_LINKS.map((nav) => {
          const { id, title, path } = nav;
          return (
            <Link key={id} href={path}>
              {title}
            </Link>
          );
        })}
    </div>
  )
}
