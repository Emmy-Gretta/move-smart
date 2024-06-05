import SetNav from "../Headers/SetNav";
import SetInputs from "../Inputs/Inputs";
import SetInput from "../Inputs/SetInputs";
import SetInputt from "../Inputs/LargeInputs";
import UploadPhoto from "../Inputs/Upload";

const SetCard = () => {
   return ( 
      <>
      <section className="mx-4">
         <section>
         <h1 className="text-[#041C32] text-lg font-bold mb-5">Settings</h1>
         <section>
            <section className="bg-[#D9D9D980] w-full h-[800px] rounded-lg pt-10 pl-5">
               <section className="">
                  <SetNav />
               </section>
               <section>
                  <img src="/Dashboard/Hrs.svg" alt="LIne separator" width={880} />
               </section>
               <section className="grid grid-cols-2 items-center justify-center my-10">
                  <section>
                     <p className="font-bold mb-3">Personal Info</p>
                     <p className="text-[] text-sm">Update your photo and personal details here</p>
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
                  <SetInput placeHolder="John" label="Name" />
                  <SetInputs placeHolder="Doe" />
               </section>
               <section>
                  <img src="/Dashboard/Hrs.svg" alt="LIne separator" width={880} />
               </section>
               <section className="flex gap-10 my-10">
                  <SetInputt inputType="email" placeHolder="Johndoe123@gmail.com" label="Email" />
               </section>
               <section>
                  <img src="/Dashboard/Hrs.svg" alt="LIne separator" width={880} />
               </section>
               <section className="grid grid-cols-2 items-center justify-center my-10">
                  <section>
                     <p className="font-bold mb-3">Your Photo</p>
                     <p className="text-[] text-sm">This photo will be displayed on your profile</p>
                  </section>
                  <section className="ml-[50px] items-center flex gap-5">
                    <img src="/Dashboard/Profile.svg" alt="Profile Photo" />
                     <UploadPhoto />
                  </section>
               </section>
               <section>
                  <img src="/Dashboard/Hrs.svg" alt="LIne separator" width={880} />
               </section>
               <section className="flex gap-10 my-10">
                  <SetInputt inputType="text" placeHolder="Rwanda" label="Country" />
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
 
export default SetCard;