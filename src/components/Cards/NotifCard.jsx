import React, { useState } from "react";
import BookedSuccessfullyModal from "../../Modals/BookedSuccessfullyModal";
import BookedSuccessfully from "./Booked";

const NotifCard = () => {
   const [isModalOpen, setModalOpen] = useState(false);
   const openModal = () => setModalOpen(true);
   const closeModal = () => setModalOpen(false);
   return ( 
      <>
      <section className=" px-10">
         <section>
            <h1 className="text-[#041C32] text-lg font-bold">New Notifications</h1>
            <section className="tick-shadow w-full border border-1 border-black flex flex-col items-center justify-center rounded-lg mt-10 mb-5">
         <section className="py-10">
            <section className="flex-col flex gap-10">
               <section className="flex items-center pl-10 bg-[#041C32CC] text-white h-32 w-[750px] rounded-lg">
                  <section className="flex gap-10 items-center">
                  <section>
                     <img src="/Dashboard/Cancel.svg" alt="Available tickets" width={25} />
                  </section>
                  <section className="flex flex-col gap-2 text-lg">
                     <p className="font-bold">Pending ticket approval</p>
                     <p className="font-light">Check your email to approve your recent booked ticket or cancel it</p>
                  </section>
                  </section>
               </section>
               <section className="flex items-center pl-10 bg-[#041C32CC] text-white h-32 w-[750px] rounded-lg">
                  <section className="flex gap-10 items-center">
                  <section>
                     <img src="/Dashboard/Succed.svg" alt="Available tickets" width={25} />
                  </section>
                  <section className="flex flex-col gap-2 text-lg">
                     <p className="font-bold">Payment successful</p>
                     <p className="font-light">You’ve successfully paid for the ticket used on 21/May.</p>
                  </section>
                  </section>
               </section>
               <section className="flex items-center pl-10 bg-[#041C32CC] text-white h-32 w-[750px] rounded-lg">
                  <section className="flex gap-10 items-center">
                  <section>
                     <img src="/Dashboard/Cancel.svg" alt="Available tickets" width={25} />
                  </section>
                  <section className="flex flex-col gap-2 text-lg">
                     <p className="font-bold">Pending ticket approval</p>
                     <p className="font-light">Unpaid ticket used on 24/June, login to your card system and pay using MoMo.</p>
                  </section>
                  </section>
               </section>
            </section>
         </section>
      </section>
         </section>
      </section>
      </>
    );
}
 
export default NotifCard;