import React, { useState } from "react";
import BookedSuccessfullyModal from "../../Modals/BookedSuccessfullyModal";
import BookedSuccessfully from "./Booked";

const ResultCard = () => {
   const [isModalOpen, setModalOpen] = useState(false);
   const openModal = () => setModalOpen(true);
   const closeModal = () => setModalOpen(false);
   return ( 
      <>
      <section className=" px-10">
         <section>
            <h1 className="text-[#041C32] text-lg font-bold">Searching tickets from Musanze To Rubavu</h1>
            <section className="tick-shadow w-full border border-1 border-black flex flex-col items-center justify-center rounded-lg mt-10 mb-5">
         <section className="py-10">
            <h1 className="text-xl font-bold mb-8 text-[#041C32]">Available Tickets</h1>
            <section className="flex-col flex gap-10">
               <section className="grid grid-cols-2 items-center">
                  <section className="flex gap-10 items-center">
                  <section>
                     <img src="/Dashboard/Ticket.svg" alt="Available tickets" width={60} />
                  </section>
                  <section className="font-semibold flex flex-col  gap-2">
                     <p>Location: Musanze</p>
                     <p>Destination: Rubavu</p>
                     <p>Departure: 10:00 AM</p>
                     <p>Price: 2800FRW</p>
                  </section>
                  </section>
                  <section className="ml-60">
                     <button onClick={openModal} className="bg-[#041C32] text-white h-[40px] w-[130px] rounded-lg font-[400]">
                        Book ticket
                     </button>
                     <BookedSuccessfullyModal isOpen={isModalOpen} onClose={closeModal}>
                     <BookedSuccessfully />
                  </BookedSuccessfullyModal>
                  </section>
               </section>
               <section className="">
                  <img src="/Dashboard/Line.svg" alt="Separating line" width={750} />
               </section>
               <section className="grid grid-cols-2 items-center">
                  <section className="flex gap-10 items-center">
                  <section>
                     <img src="/Dashboard/Ticket.svg" alt="Available tickets" width={60} />
                  </section>
                  <section className="font-semibold flex flex-col  gap-2">
                     <p>Location: Musanze</p>
                     <p>Destination: Rubavu</p>
                     <p>Departure: 10:00 AM</p>
                     <p>Price: 2800FRW</p>
                  </section>
                  </section>
                  <section className="ml-60">
                     <button onClick={openModal} className="bg-[#041C32] text-white h-[40px] w-[130px] rounded-lg font-[400]">
                        Book ticket
                     </button>
                     <BookedSuccessfullyModal isOpen={isModalOpen} onClose={closeModal}>
                     <BookedSuccessfully />
                  </BookedSuccessfullyModal>
                  </section>
               </section>
               <section className="">
               <img src="/Dashboard/Line.svg" alt="Separating line" width={750} />
               </section>
               <section className="grid grid-cols-2 items-center">
                  <section className="flex gap-10 items-center">
                  <section>
                     <img src="/Dashboard/Ticket.svg" alt="Available tickets" width={60} />
                  </section>
                  <section className="font-semibold flex flex-col  gap-2">
                     <p>Location: Musanze</p>
                     <p>Destination: Rubavu</p>
                     <p>Departure: 10:00 AM</p>
                     <p>Price: 2800FRW</p>
                  </section>
                  </section>
                  <section className="ml-60">
                     <button onClick={openModal} className="bg-[#041C32] text-white h-[40px] w-[130px] rounded-lg font-[400]">
                        Book ticket
                     </button>
                     <BookedSuccessfullyModal isOpen={isModalOpen} onClose={closeModal}>
                     <BookedSuccessfully />
                  </BookedSuccessfullyModal>
                  </section>
               </section>
               <section className="">
               <img src="/Dashboard/Line.svg" alt="Separating line" width={750} />
               </section>
               <section className="grid grid-cols-2 items-center">
                  <section className="flex gap-10 items-center">
                  <section>
                     <img src="/Dashboard/Ticket.svg" alt="Available tickets" width={60} />
                  </section>
                  <section className="font-semibold flex flex-col  gap-2">
                     <p>Location: Musanze</p>
                     <p>Destination: Rubavu</p>
                     <p>Departure: 10:00 AM</p>
                     <p>Price: 2800FRW</p>
                  </section>
                  </section>
                  <section className="ml-60">
                     <button onClick={openModal} className="bg-[#041C32] text-white h-[40px] w-[130px] rounded-lg font-[400]">
                        Book ticket
                     </button>
                     <BookedSuccessfullyModal isOpen={isModalOpen} onClose={closeModal}>
                     <BookedSuccessfully />
                  </BookedSuccessfullyModal>
                  </section>
               </section>
               <section className="">
                 <img src="/Dashboard/Line.svg" alt="Separating line" width={750} />
               </section>
               <section className="grid grid-cols-2 items-center">
                  <section className="flex gap-10 items-center">
                  <section>
                     <img src="/Dashboard/Ticket.svg" alt="Available tickets" width={60} />
                  </section>
                  <section className="font-semibold flex flex-col  gap-2">
                     <p>Location: Musanze</p>
                     <p>Destination: Rubavu</p>
                     <p>Departure: 10:00 AM</p>
                     <p>Price: 2800FRW</p>
                  </section>
                  </section>
                  <section className="ml-60">
                     <button onClick={openModal} className="bg-[#041C32] text-white h-[40px] w-[130px] rounded-lg font-[400]">
                        Book ticket
                     </button>
                     <BookedSuccessfullyModal isOpen={isModalOpen} onClose={closeModal}>
                     <BookedSuccessfully />
                  </BookedSuccessfullyModal>
                  </section>
               </section>
               <section className="mb-10">
                 <img src="/Dashboard/Line.svg" alt="Separating line" width={750} />
               </section>
            </section>
         </section>
      </section>
         </section>
      </section>
      </>
    );
}
 
export default ResultCard;