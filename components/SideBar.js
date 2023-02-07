import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon, UsersIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
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
    <div ref={ref} className="fixed w-56 bg-gray-700 shadow-sm h-full overflow-y-auto">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img
            className="w-40 h-auto"
            src="/assets/logo-realtaHotel-white.png"
            alt="logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link href="/admin">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/admin/dashboard"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Dashboard</p>
            </div>
          </div>
        </Link>
        <Link href="/admin/master">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/admin/master"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <DonutSmallIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Master</p>
            </div>
          </div>
        </Link>
        <Link href="/admin/booking">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/admin/booking"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <CollectionsBookmarkIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Booking</p>
            </div>
          </div>
        </Link>
        <div className="w-full px-4 mb-3">
          <div className="mx-auto w-full max-w-md rounded-lg bg-white p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75 shadow-lg">
                    <div className="mr-2">
                      <UsersIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p>Users</p>
                    </div>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-orange-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-2 w-full">
                    <Link href="/admin/users">
                      <div
                        className={`shadow-2lg pl-3 px-4 py-2 mx-auto rounded text-left text-sm font-medium cursor-pointer flex items-center transition-colors ${router.pathname == "/admin/users"
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
                </>
              )}
            </Disclosure>
          </div>
        </div>
        <Link href="/admin/hotel">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/admin/hotel"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <LocationCityIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Hotel</p>
            </div>
          </div>
        </Link>
        <Link href="/admin/humanResources">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/admin/humanResources"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <Groups3Icon className="h-5 w-5" />
            </div>
            <div>
              <p>HR</p>
            </div>
          </div>
        </Link>
        <Link href="/admin/payment">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/admin/payment"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <PaymentIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Payment</p>
            </div>
          </div>
        </Link>
        <Link href="/admin/purchasing">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/admin/purchasing"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <ShoppingCartIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Purchase</p>
            </div>
          </div>
        </Link>
        <Link href="/admin/resto">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/admin/resto"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <LocalDiningIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Resto</p>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;


