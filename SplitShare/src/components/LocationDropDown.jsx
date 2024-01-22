import React, { useState, useContext } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const LocationDropDown = () => {
  const { location, setLocation, locations } = useContext(HouseContext);
  useContext(HouseContext);
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiMapPinLine className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{location}</div>
          <div className='text-[13px]'>Select Your Location</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu bg-black'>
        {isOpen &&
          locations.map((item, index) => (
            <Menu.Item
              key={index}
              onClick={() => setLocation(item)}
              className='cursor-pointer hover:text-orange-600 transition'
              as='li'
            >
              {item}
            </Menu.Item>
          ))}
      </Menu.Items>
    </Menu>
  );
};

export default LocationDropDown;