import Navigator from "./Navigator";

const LandingHeader = () => {
   return ( 
      <>
     <section className="flex items-center justify-center flex-col">
     <section className="grid grid-cols-2 items-center gap-24 mt-4">
         <section>
            <img src="/landin/logo.png" alt="MoveSmart" />
         </section>
         <Navigator />
      </section>
     </section>
      </>
    );
}
 
export default LandingHeader;