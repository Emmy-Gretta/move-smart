import { NavLink } from "react-router-dom";

const SetNav = () => {
   return ( 
      <>
      <section>
         <section className="flex gap-16">
            <NavLink to="/settings/myprofile"
            className={({ isActive }) =>
               isActive
                 ? "flex gap-3 font-[500] border-b-2 border-[#0537B8] text-[#0537B8] pb-2"
                 : "flex gap-3 font-[500] "
             }
            >
               My Profile
            </NavLink>
            <NavLink to="/settings/password"
            className={({ isActive }) =>
               isActive
                 ? "flex gap-3 font-[500] border-b-2 border-[#0537B8] text-[#0537B8] pb-2"
                 : "flex gap-3 font-[500] "
             }
            >
               Password
            </NavLink>
            <NavLink to="/settings/linkcard"
            className={({ isActive }) =>
               isActive
                 ? "flex gap-3 font-[500] border-b-2 border-[#0537B8] text-[#0537B8] pb-2"
                 : "flex gap-3 font-[500]"
             }
            >
               Link your card
            </NavLink>
         </section>
      </section>
      </>
    );
}
 
export default SetNav;
