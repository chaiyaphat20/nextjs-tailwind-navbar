import React from 'react'

export default function NavLink() {
  const links = [{ name: 'Men' }, { name: 'Woman' }, { name: "Kid's" }]
  return (
    <React.Fragment>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer ">
            <h1 className="py-7">{link.name}</h1>
          </div>
        </div>
      ))}
    </React.Fragment>
  )
}
