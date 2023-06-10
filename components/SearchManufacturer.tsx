"use client"


import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'


const SearchManufacturer = ( { manufacturer, setManufacturer }: SearchManufacturerProps) => {
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full'>
                <Combobox.Button className="abosolute top-[14px]">
                    <Image src="/car-logo.svg" alt ="car logo" width={20} height={20} className='ml-4' />                    
                </Combobox.Button>
                <Combobox.Input classname="search-manufaturer__input" placeholder='Volkswagen' displayValue={(manufacturer) => manufacturer}/>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer