import logo from './logo.svg';

import {BellIcon, CheckIcon, PersonIcon, TrashIcon, ZapIcon} from '@primer/octicons-react'
import {Menu, Transition} from '@headlessui/react'
import {Fragment} from 'react'
import {ChevronDownIcon} from '@heroicons/react/20/solid';
import rwanda from './assets/flags/rwanda.png';
import usa from './assets/flags/usa.png';
import belgium from './assets/flags/begium.png';
import france from './assets/flags/france.png';

function App() {
    return (
        <div className="flex">
            <aside className="w-64 min-h-screen p-10 border-r border-gray-200 hidden md:block">
                <img src={logo} alt="BAG"/>
                <ul className="mt-8">
                    <li>
                        <a href="" className="uppercase font-normal text-sm py-2 block">
                            My List
                        </a>
                    </li>
                    <li>
                        <a href="" className="uppercase font-normal text-sm py-2 block">
                            Visited
                        </a>
                    </li>
                    <li>
                        <a href="" className="uppercase font-normal text-sm py-2 block">
                            To Visit
                        </a>
                    </li>
                </ul>
            </aside>
            <div className="w-full">
                <header className="flex justify-between items-center px-8 py-6">
                    <div className="uppercase text-lg font-normal">My List</div>
                    <ul className="flex items-center space-x-4 text-xs">
                        <li>
                            <a href="" className="flex items-center space-x-1 uppercase">
                                <span> Dark Mode</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     className="bi bi-toggle-on h-6" viewBox="0 0 16 16">
                                    <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="" className="h-6 w-10 px-2 py-2 bg-gray-200 rounded-full"> <BellIcon/></a>
                        </li>
                        <li>
                            <a href="" className="flex items-center space-x-1">
                                <span className="text-gray-500">Hey,</span>
                                <span>Jane</span>
                                <PersonIcon/>
                            </a>
                        </li>
                    </ul>
                </header>

                <div className="p-8">
                    <div className="flex flex-col md:flex-row justify-between space-y-3">
                        <div
                            className="flex items-center md:rounded-lg bg-white shadow md:shadow-none md:bg-gray-100 px-2 py-2 md:py-1 w-full md:w-80">
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6 text-gray-400 md:text-gray-800">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                            </svg>

                            <input type="text"
                                   className="flex-1  ml-2 outline-0 placeholder:md:text-gray-800  bg-transparent"
                                   placeholder="Search For a Country ..."/>

                        </div>
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button
                                    className="inline-flex w-64 justify-center md:rounded-md shadow md:shadow-none r bg-white md:bg-gray-200 px-4 py-2.5 md:py-2 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                    Filter by region
                                    <ChevronDownIcon
                                        className="ml-2 -mr-1 h-5 w-5 text-black"
                                        aria-hidden="true"/>
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95">
                                <Menu.Items
                                    className="absolute right-0 mt-2 w-full md:w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="px-3 py-1 ">
                                        <Menu.Item>
                                            <button
                                                className='text-gray-900  flex w-full items-center rounded-md px-2 py-2 text-sm'>Africa
                                            </button>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <button
                                                className='text-gray-900  flex w-full items-center rounded-md px-2 py-2 text-sm'>America
                                            </button>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <button
                                                className='text-gray-900  flex w-full items-center rounded-md px-2 py-2 text-sm'>Asia
                                            </button>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <button
                                                className='text-gray-900  flex w-full items-center rounded-md px-2 py-2 text-sm'>Europe
                                            </button>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <button
                                                className='text-gray-900  flex w-full items-center rounded-md px-2 py-2 text-sm'>Oceania
                                            </button>
                                        </Menu.Item>

                                    </div>

                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>

                    <div className="grid md:grid-cols-4 mt-10 gap-8">
                        <div className="bg-gray-100 rounded-xl">
                            <img src={rwanda} alt="Rwanda Flag" className="rounded-lg w-full"/>
                            <div className="p-8">
                                <h4 className="font-bold text-lg">Rwanda</h4>
                                <div className="text-sm space-y-1 mt-3">
                                    <p>Population:12.9 Million</p>
                                    <p>Capital:Kigali</p>
                                    <p>Currency:RWF</p>
                                </div>
                                <div className="flex items-center justify-end space-x-2">
                                    <div className="text-white cursor-pointer bg-gray-200 px-2 py-1 rounded-full">
                                        <TrashIcon/>
                                    </div>
                                    <div className="text-white cursor-pointer bg-[#14C704] px-2 py-1 rounded-full">
                                        <CheckIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-xl">
                            <img src={usa} alt="Rwanda Flag" className="rounded-lg w-full"/>
                            <div className="p-8">
                                <h4 className="font-bold text-lg">United States Of America</h4>
                                <div className="text-sm space-y-1 mt-3">
                                    <p>Population: 329.5 Million</p>
                                    <p>Capital:Washington,D.C.</p>
                                    <p>Currency:USD</p>
                                </div>
                                <div className="flex items-center justify-end space-x-2">
                                    <div className="text-white cursor-pointer bg-gray-200 px-2 py-1 rounded-full">
                                        <TrashIcon/>
                                    </div>
                                    <div className="text-white cursor-pointer bg-[#14C704] px-2 py-1 rounded-full">
                                        <CheckIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-xl">
                            <img src={france} alt="Rwanda Flag" className="rounded-lg w-full"/>
                            <div className="p-8">
                                <h4 className="font-bold text-lg">France</h4>
                                <div className="text-sm space-y-1 mt-3">
                                    <p>Population:67.39 Million</p>
                                    <p>Capital:Paris</p>
                                    <p>Currency:EUR</p>
                                </div>
                                <div className="flex items-center justify-end space-x-2">
                                    <div className="text-white cursor-pointer bg-gray-200 px-2 py-1 rounded-full">
                                        <TrashIcon/>
                                    </div>
                                    <div className="text-white cursor-pointer bg-[#14C704] px-2 py-1 rounded-full">
                                        <CheckIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-xl">
                            <img src={belgium} alt="Rwanda Flag" className="rounded-lg w-full"/>
                            <div className="p-8">
                                <h4 className="font-bold text-lg">Beligium</h4>
                                <div className="text-sm space-y-1 mt-3">
                                    <p>Population:12.9 Million</p>
                                    <p>Capital:Bruxelle</p>
                                    <p>Currency:EUR</p>
                                </div>
                                <div className="flex items-center justify-end space-x-2">
                                    <div className="text-white cursor-pointer bg-gray-200 px-2 py-1 rounded-full">
                                        <TrashIcon/>
                                    </div>
                                    <div className="text-white cursor-pointer bg-[#14C704] px-2 py-1 rounded-full">
                                        <CheckIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
