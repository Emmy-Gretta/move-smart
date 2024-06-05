import SetNav from "../Headers/SetNav";
import SetInputs from "../Inputs/Inputs";
import SetInput from "../Inputs/SetInputs";
import SetInputt from "../Inputs/LargeInputs";

const SetLinkCard = () => {
   return ( 
      <>
      <section className="mx-4">
         <section>
         <h1 className="text-[#041C32] text-lg font-bold mb-5">Settings</h1>
         <section>
            <section className="bg-[#D9D9D980] w-full h-[550px] rounded-lg pt-10 pl-5">
               <section className="">
                  <SetNav />
               </section>
               <section>
                  <img src="/Dashboard/Hrs.svg" alt="LIne separator" width={880} />
               </section>
               <section className="grid grid-cols-2 items-center justify-center my-10">
                  <section>
                     <p className="font-bold mb-3">Link your card</p>
                     <p className="text-[] text-sm">Link your phone number to your card here</p>
                  </section>
                  <section className="ml-40 items-center flex gap-5">
                     <button className="text-sm h-[35px] w-[100px] border border-1 border-black rounded-lg text-[#0537B8]">Cancel</button>
                     <button className="text-sm h-[35px] w-[120px] border border-1 rounded-lg bg-[#0537B8] text-white">Save changes</button>
                  </section>
               </section>
               <section>
                  <img src="/Dashboard/Hrs.svg" alt="LIne separator" width={880} />
               </section>
               <section className="flex gap-10 my-10">
                  <SetInputt inputType="text" placeHolder="AC4F5-*****************" label="Card Number" />
               </section>
               <section>
                  <img src="/Dashboard/Hrs.svg" alt="LIne separator" width={880} />
               </section>
               <section className="flex gap-10 my-10">
                  <SetInputt inputType="text" placeHolder="+250-********************" label="Phone Number" />
               </section>
               <section className="mb-5">
                  <img src="/Dashboard/Hrs.svg" alt="LIne separator" width={880} />
               </section>
            </section>
         </section>
         </section>
      </section>
      </>
    );
}
 
export default SetLinkCard;