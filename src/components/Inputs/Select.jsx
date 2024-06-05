import React, { useState } from 'react';

const Dropdown = ({placeholder,label}) => {
    const [selected, setSelected] = useState(placeholder);
    const [isOpen, setIsOpen] = useState(false);

    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block w-64 text-[#8E8E8E]">
          <div className='mb-2'>
        <label htmlFor="in" className="text-sm text-white">{label}</label>
      </div>
            <div
                 className="flex gap-10 w-[150px] pl-4 pr-4 py-2 bg-[#fff] h-[40px] border-[1px] text-sm items-center border-[#E0E0E0] rounded-[5px] outline-none  placeholder:text-[#8E8E8E] placeholder:text-sm placeholder:italic" 
                onClick={() => setIsOpen(!isOpen)}
            >
                {selected}
                <img src="/Dashboard/DropDown.svg" alt="Select" className='flex items-center' />
            </div>
            {isOpen && (
                <div className="absolute mt-1 w-[150px] bg-white shadow-lg">
                    {options.map((option) => (
                        <div
                            key={option}
                            onClick={() => handleSelect(option)}
                            className={`py-2 px-4 cursor-pointer hover:bg-gray-200 ${option === selected ? 'bg-[#041C32] text-white' : ''}`}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
