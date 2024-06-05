const TicketCard = () => {
   return ( 
      <>
      <section className="ml-10">
         <section>
         <h1 className="text-[#041C32] text-lg font-bold">Your Smart Card</h1>
         <section className="mt-5">
            <section className="grid grid-cols-2">
            <img src="/Card/Front.svg" alt="ROAVA Smart Card" width={400} />
            <img src="/Card/Back.svg" alt="ROAVA Smart Card" width={400} />
            </section>
         </section>
         <h1 className="text-[#041C32] text-lg font-bold mt-5">Your tickets</h1>
         </section>
      </section>
      </>
    );
}
 
export default TicketCard;