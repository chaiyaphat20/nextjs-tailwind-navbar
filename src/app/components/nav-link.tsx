import Link from 'next/link'
import React, { useState } from 'react'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
import { links } from './my-links'
export default function NavLink() {
  const [heading, setHeading] = useState('')
  const [subHeading, setSubHeading] = useState('')
  return (
    <React.Fragment>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group ">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading('')
                setSubHeading('')
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                {heading === link.name ? <IoChevronUp /> : <IoChevronDown />}
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                {heading === link.name ? <IoChevronUp /> : <IoChevronDown />}
              </span>
            </h1>
            {link.subLinks && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link.subLinks.map((mySubLinks) => (
                      <div>
                        <h1 className="text-lg font-semibold ">
                          {mySubLinks.head}
                        </h1>
                        {mySubLinks.subLink.map((slink) => (
                          <li className="text-sm text-gray-600 my-2.5">
                            <Link
                              href={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                {/* mobile menus */}
                <div
                  className={`${heading === link.name ? 'md:hidden' : 'hidden'}`}
                >
                  {link.subLinks.map((slink) => (
                    <div>
                      <div>
                        <h1
                          className="py-4 pl-7 font-semibold  flex justify-between items-center md:pr-0 pr-5"
                          onClick={() =>
                            subHeading !== slink.head
                              ? setSubHeading(slink.head)
                              : setSubHeading('')
                          }
                        >
                          {slink.head}
                          <span className="text-xl md:mt-1 md:ml-2 inline ">
                            {subHeading === slink.head ? (
                              <IoChevronUp />
                            ) : (
                              <IoChevronDown />
                            )}
                          </span>
                        </h1>
                        <div
                          className={`${subHeading === slink.head ? 'md:hidden' : 'hidden'}`}
                        >
                          {slink.subLink.map((slink) => (
                            <li className="py-3 pl-14">
                              <Link
                                href={slink.link}
                                className="hover:text-primary"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </React.Fragment>
  )
}
