import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

import {
  Bars3Icon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  XMarkIcon,
  AcademicCapIcon,
  MusicalNoteIcon,
  TrophyIcon ,
} from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import Logo from "../assets/logo_PSM.png";

const programs = [
  {
    name: "Concert",
    description: "A Grand Concert for A Competition",
    href: "/programs/concert",
    icon: MusicalNoteIcon,
  },
  {
    name: "CHA",
    description: "Choir Humanity Action for People",
    href: "/programs/choir humanity action",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "NCC",
    description: "Newcomers Concert for new member",
    href: "/programs/newcomers concert",
    icon: FingerPrintIcon,
  },
  {
    name: "Goes To School",
    description: "A Visit to A Senior High School",
    href: "/programs/goes to school",
    icon: AcademicCapIcon,
  },
  {
    name: "Competition",
    description: "A Competition for Reaching Top",
    href: "/programs/competition",
    icon: TrophyIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-800/50 hover:bg-blue-800/100 absolute z-10 w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center  justify-between lg:pb-6 pb-3"
        aria-label="Global"
      >
        <div className="flex items-center justify-center lg:pt-6 pt-3">
          
          <a href="/" className="flex items-center m-1.5 p-1.5">
            <img
              className="lg:h-8 h-6 w-auto rounded-full bg-white"
              src={Logo}
            />
            <label className="ps-2 text-white font-black lg:text-xl md:text-base text-sm">
              GDN Official
            </label>
          </a>
        </div>
        <div className="flex lg:hidden text-white">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md md:mt-6 mt-3 p-1.5 md:me-6 me-3 hover:bg-white  hover:text-black"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-6 w-6 flex items-center"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden lg:block">
          <div className="flex lg:flex-1 lg:justify-end">
            <div
              className="text-sm font-semibold leading-6 text-amber-50 rounded hover:bg-white hover:text-blue-900 my-3"
            >
            </div>
          </div>

          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <a
              href="/"
              className="hover:animate-bigger text-sm font-semibold leading-6 text-amber-50 px-2 rounded hover:bg-white"
            >
              Home
            </a>
            <Popover className="relative">
              <Popover.Button className="hover:animate-bigger flex items-center px-2 rounded gap-x-1 text-sm font-semibold leading-6 text-amber-50 hover:bg-white hover:text-blue-700">
                Our Program
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-blue-900 shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {programs.map((item) => (
                      <a href={item.href}>
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-white"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-blue-900">
                            <item.icon
                              className="h-6 w-6 text-blue-900 group-hover:text-gray-50"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto text-gray-50 hover:text-blue-900">
                            <a href={item.href} className="block font-semibold">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1">{item.description}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                  
                </Popover.Panel>
              </Transition>
            </Popover>

            <a
              href="/news"
              className="hover:animate-bigger text-sm font-semibold leading-6 text-amber-50 px-2 rounded hover:bg-white"
            >
              News
            </a>
            <a
              href="/organization"
              className="hover:animate-bigger text-sm font-semibold leading-6 text-amber-50 px-2 rounded hover:bg-white"
            >
              Organization
            </a>
            <a
              href="/about us"
              className="hover:animate-bigger text-sm font-semibold leading-6 text-amber-50 px-2 rounded hover:bg-white"
            >
              About Us
            </a>
          </Popover.Group>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blue-700/90 text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 text-white">
              <img className="h-8 w-auto bg-white rounded-full" src={Logo} />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 ">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-amber-50 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-amber-50 hover:bg-gray-50 hover:text-blue-700">
                        Our Program
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {programs.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            onClick={() => setMobileMenuOpen(false)}
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-amber-50 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/news"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-amber-50 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  News
                </a>
                <a
                  href="/organization"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-amber-50 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Organization
                </a>
                <a
                  href="/about us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-amber-50 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </a>
              </div>
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
