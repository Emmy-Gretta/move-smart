const MomoScene = () => {
   return (
      <>
        <section>
        <section className="flex items-center justify-center flex-col my-10 gap-5">
               <h1 className="font-[500] text-3xl mb-3">Pay with <span className="text-[#005F8A]">MOMO</span> Pay</h1>
               <p className="text-lg text-center w-[470px]">
               MoveSmart is here to ease the payment process for buying a ticket, 
              our Smart Cards will be integrated 
              with your MoMo account to easily pay for your journey using
              your unique QR code, 
              in a comfortable, safe and quick outing.
               </p>
            </section>
            <section className="flex items-center justify-center">
            <section className="">
               <img src="/landin/Momo.svg" alt="Pay with MOMO" width={660} height={12} />
            </section>
            </section>
        </section>
      </>
     );
}
 
export default MomoScene;