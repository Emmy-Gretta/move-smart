const AvailableTick = () => {
   return ( 
      <>
      <section className="dtick-shadow mx-10 h-[430px] w-[580px] border border-1 border-black flex flex-col items-center justify-center rounded-lg mt-10 mb-5">
         <section>
            <h1 className="text-xl font-bold mb-5">Available Tickets</h1>
            <section className="flex-col flex gap-10">
               <section className="flex gap-40 items-center">
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
                  <section>
                     <button className="bg-[#D9D9D9] h-[40px] w-[130px] rounded-lg font-semibold">
                        Book ticket
                     </button>
                  </section>
               </section>
               <section className="ml-4">
                  <img src="/Dashboard/Line.svg" alt="Separating line" width={520} />
               </section>
               <section className="flex gap-40 items-center">
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
                  <section>
                     <button className="bg-[#D9D9D9] h-[40px] w-[130px] rounded-lg font-semibold">
                        Book ticket
                     </button>
                  </section>
               </section>
            </section>
         </section>
      </section>
      </>
    );
}
 
export default AvailableTick;