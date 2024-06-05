const NotificationCard = () => {
   return ( 
      <>
      <section className="bg-search h-[430px] w-[300px] mt-10 rounded-lg flex items-center justify-center">
         <section className="mb-5">
            <h1 className="text-lg font-bold text-white mb-5">Available Routes</h1>
         <section className="flex flex-col gap-4 mr-5 text-sm">
         <section className="flex items-center justify-center">
            <img src="/Dashboard/Routes.svg" alt="Notifications" width={60} />
            <section className="text-white">
               <p>Nyabugogo to Musanze</p>
               <p>12:10 PM - 17:00 PM</p>
            </section>
         </section>
         <section className="flex items-center">
            <img src="/Dashboard/Routes.svg" alt="Notifications" width={60} />
            <section className="text-white flex flex-col">
               <p>Nyabugogo to Musanze</p>
               <p>12:10 PM - 17:00 PM</p>
            </section>
         </section>
         <section className="flex items-center">
            <img src="/Dashboard/Routes.svg" alt="Notifications" width={60} />
            <section className="text-white flex flex-col">
               <p>Nyabugogo to Musanze</p>
               <p>12:10 PM - 17:00 PM</p>
            </section>
         </section>
         <section className="flex items-center">
            <img src="/Dashboard/Routes.svg" alt="Notifications" width={60} />
            <section className="text-white flex flex-col">
               <p>Nyabugogo to Musanze</p>
               <p>12:10 PM - 17:00 PM</p>
            </section>
         </section>
         </section>
         </section>
      </section>
      </>
    );
}
 
export default NotificationCard;