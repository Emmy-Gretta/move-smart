import React from 'react';

const DashHeader = () => {
   return ( 
      <header style={{ position: 'fixed', top: 0, right: 0, padding: '10px', marginRight: '22px' }}>
         <section className="flex items-center gap-2">
            <img src="/Dashboard/Profile.svg" alt="profile" width={40} height={100} />
            <section className="flex items-center gap-2">
               <p className="italic text-[#041C32]">John Doe</p>
               <img src="/Dashboard/Dropdown.svg" alt="See account details" width={15} height={20} />
            </section>
         </section>
      </header>
   );
}

export default DashHeader;
