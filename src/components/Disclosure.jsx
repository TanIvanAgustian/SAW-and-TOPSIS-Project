import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function DisclosureItems({items}){
    return (
        <div>
            {items.map((item) => (
                <Disclosure as="div" className="mt-2 w-full">
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                        <span>{item.title}</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                        {item.content}
                    </Disclosure.Panel>
                    </>
                )}
                </Disclosure>
            ))}
        </div>
    )
}