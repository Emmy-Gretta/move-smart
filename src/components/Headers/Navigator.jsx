import { NavLink } from "react-router-dom";

const Navigator = () => {
   return ( 
      <>
      <section>
         <section className="flex gap-14 items-center">
            <NavLink to="/features">
               <section>
                  <h1 className="text-white text-lg">Features</h1>
               </section>
            </NavLink>
            <NavLink to="/payment">
               <section>
                  <h1 className="text-white text-lg">Payment</h1>
               </section>
            </NavLink>
            <NavLink to="/contact">
               <section>
                  <h1 className="text-white text-lg">Contact</h1>
               </section>
            </NavLink>
            <NavLink to="/features">
               <section>
                  <button className="text-white text-lg border border-1 w-28 rounded-md h-10">Login</button>
               </section>
            </NavLink>
         </section>
      </section>
      </>
    );
}
 
export default Navigator;