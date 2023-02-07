import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon, UsersIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Groups3Icon from '@mui/icons-material/Groups3';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { useRouter } from "next/router";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { GridMenuIcon } from "@mui/x-data-grid";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 bg-white shadow-sm h-full overflow-y-auto">
      <div className="flex justify-center mt-6 mb-5">
        <picture>
          <img
            className="w-40 h-auto"
            src="/assets/logo-realtaHotel.png"
            alt="logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <div className="w-full px-4 mb-3">
          <div className="mx-auto w-full max-w-md rounded-md bg-white p-1">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="items-center flex w-full justify-between rounded-md bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75 shadow-lg">
                    <div className="mr-2">
                      <DonutSmallIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p>Dashboard</p>
                    </div>
                    <ChevronRightIcon
                      className={`${open ? 'rotate-90 transform' : ''
                        } h-4 w-4 text-orange-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="/admin">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "/admin"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>All</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Master</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>HR</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Master</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Users</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Booking</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Hotel</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Resto</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Payment</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Purchasing</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className="w-full px-4 mb-3">
          <div className="mx-auto w-full max-w-md rounded-md bg-white p-1">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="items-center flex w-full justify-between rounded-md bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75 shadow-lg">
                    <div className="mr-2">
                      <AccountTreeIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p>Master</p>
                    </div>
                    <ChevronRightIcon
                      className={`${open ? 'rotate-90 transform' : ''
                        } h-4 w-4 text-orange-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="/admin/master">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "/admin/master"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Members</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Regions</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Country</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Provinces</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Address</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Policy</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Category Group</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Price Items</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Service Task</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className="w-full px-4 mb-3">
          <div className="mx-auto w-full max-w-md rounded-md bg-white p-1">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="items-center flex w-full justify-between rounded-md bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75 shadow-lg">
                    <div className="mr-2">
                      <Groups3Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p>HR</p>
                    </div>
                    <ChevronRightIcon
                      className={`${open ? 'rotate-90 transform' : ''
                        } h-4 w-4 text-orange-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="/admin/humanResources">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "/admin/humanResources"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Human Resources</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Employee</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Department</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Shift</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Work Orders</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Job Role</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className="w-full px-4 mb-3">
          <div className="mx-auto w-full max-w-md rounded-md bg-white p-1">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="items-center flex w-full justify-between rounded-md bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75 shadow-lg">
                    <div className="mr-2">
                      <UsersIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p>Users</p>
                    </div>
                    <ChevronRightIcon
                      className={`${open ? 'rotate-90 transform' : ''
                        } h-4 w-4 text-orange-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="/admin/users">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "/admin/users"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Users</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Roles</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className="w-full px-4 mb-3">
          <div className="mx-auto w-full max-w-md rounded-md bg-white p-1">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="items-center flex w-full justify-between rounded-md bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75 shadow-lg">
                    <div className="mr-2">
                      <CollectionsBookmarkIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p>Booking</p>
                    </div>
                    <ChevronRightIcon
                      className={`${open ? 'rotate-90 transform' : ''
                        } h-4 w-4 text-orange-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="/admin/booking">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "/admin/booking"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Booking Order</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Special Offers</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>User Breakfast</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className="w-full px-4 mb-3">
          <div className="mx-auto w-full max-w-md rounded-md bg-white p-1">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="items-center flex w-full justify-between rounded-md bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75 shadow-lg">
                    <div className="mr-2">
                      <LocationCityIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p>Hotel</p>
                    </div>
                    <ChevronRightIcon
                      className={`${open ? 'rotate-90 transform' : ''
                        } h-4 w-4 text-orange-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="/admin/hotel">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "/admin/hotel"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Hotel</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Facilities</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Reviews</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className="w-full px-4 mb-3">
          <div className="mx-auto w-full max-w-md rounded-md bg-white p-1">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="items-center flex w-full justify-between rounded-md bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75 shadow-lg">
                    <div className="mr-2">
                      <LocalDiningIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p>Resto</p>
                    </div>
                    <ChevronRightIcon
                      className={`${open ? 'rotate-90 transform' : ''
                        } h-4 w-4 text-orange-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="/admin/resto">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "/admin/resto"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Menus</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Menu Photos</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Order Menu</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Order Detail</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className="w-full px-4 mb-3">
          <div className="mx-auto w-full max-w-md rounded-md bg-white p-1">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="items-center flex w-full justify-between rounded-md bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75 shadow-lg">
                    <div className="mr-2">
                      <PaymentIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p>Payment</p>
                    </div>
                    <ChevronRightIcon
                      className={`${open ? 'rotate-90 transform' : ''
                        } h-4 w-4 text-orange-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="/admin/payment">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "/admin/humanResources"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Transaction</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Gateway</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>User Account</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Bank</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Entity</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className="w-full px-4 mb-3">
          <div className="mx-auto w-full max-w-md rounded-md bg-white p-1">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="items-center flex w-full justify-between rounded-md bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75 shadow-lg">
                    <div className="mr-2">
                      <ShoppingCartIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p>Purchasing</p>
                    </div>
                    <ChevronRightIcon
                      className={`${open ? 'rotate-90 transform' : ''
                        } h-4 w-4 text-orange-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="/admin/purchasing">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded-md text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "/admin/humanResources"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Purchase Order</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Vendor</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="#">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "#"
                          ? "bg-orange-100 text-orange-500"
                          : "text-orange-900 hover:bg-orange-100 hover:text-orange-500"
                          }`}
                      >
                        <ChevronUpIcon
                          className={`${open ? 'rotate-90 transform' : ''
                            } h-5 w-5 text-orange-500`}
                        />
                        <div>
                          <p>Stocks</p>
                        </div>
                      </div>
                    </Link>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;


