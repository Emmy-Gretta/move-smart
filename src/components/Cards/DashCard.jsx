import { NavLink } from "react-router-dom";
import DashInput from "../Inputs/DashIn";
import Date from "../Inputs/Date";
import Calendara from "../Inputs/DatePicker";
import Dropdown from "../Inputs/Select";
import SelectPassengers from "../Inputs/Select";

const DashCardSearch = () => {
   return ( 
      <>
     <section>
     <section className="px-10">
      <h1 className="text-2xl font-bold mb-5">Book and Search for a ticket</h1>
         <section className="flex">
         <section className="book-shadow bg-search h-[300px] w-[580px] flex items-center justify-center rounded-lg ">
            <section className="flex flex-col justify-center pl-7">
            <section className="grid grid-cols-2">
               <DashInput placeHolder="Location" label="From:" />
               <DashInput placeHolder="Destination" label="To:" />
            </section>
            <section className="grid grid-cols-3">
              <Date />
              <Dropdown placeholder="Passengers" label="Passengers" />
              <Dropdown placeholder="Luggage" label="Luggage" />
            </section>
            <section className="flex items-center justify-center mt-10">
            <NavLink to="/searchresults">
            <button className="text-sm text-white font-semibold h-[40px] w-[150px] bg-[#041C32] rounded-md">
               Search Ticket
            </button>
            </NavLink>
         </section>
            </section>
         </section>
         <section className="border border-1 border-black w-[300px] h-[300px] rounded-lg flex items-center justify-center  ml-10">
               <img src="/Dashboard/InPart.svg" alt="" width={270} />
            </section>
         </section>
     </section>
      </section>
      </>
    );
}
 
export  default DashCardSearch