const BookedSuccessfully = ({onClose}) => {
   return ( 
      <>
      <section>
         <section className="flex flex-col items-center justify-center gap-6 mt-5">
            <div className="flex gap-3">
               <img src="/Dashboard/Success.svg" alt="Booked sucessfully" width={20} />
               <h1 className="font-semibold text-lg">Ticket booked successfully</h1>
            </div>
            <section className="flex flex-col gap-2">
            <section className="font-semibold flex flex-col  gap-2">
                     <p>Location: Musanze</p>
                     <p>Destination: Rubavu</p>
                     <p>Departure: 10:00 AM</p>
                     <p>Price: 2800FRW</p>
                  </section>
                  <p className="italic text-xs font-[400]">Check your email to approve your booked ticket</p>
            </section>
         </section>
      </section>
      </>
    );
}
 
export default BookedSuccessfully;

