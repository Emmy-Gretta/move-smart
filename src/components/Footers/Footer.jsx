import { NavLink } from "react-router-dom";

const Footer = () => {
   return ( 
      <>
      <section className="mt-16 bg-[#021628] h-[280px] p-4 text-white">
         <section>
            <section className="flex gap-24 items-center justify-center mt-5">
               <section className="flex items-center flex-col gap-3">
                  <img src="/landin/logo.png" alt="Move smart" width={80} />
                  <section>
                     <p className="font-[500] italic text-center">
                     “Transportation should be a convenient,  <br />
                     stress-free experience for everyone.”
                     </p>
                  </section>
               </section>
               <section className="flex flex-col gap-2 mt-6">
                  <h1 className="text-xl text-[#ECB365] font-bold">MoveSmart</h1>
                  <section className="flex flex-col gap-2">
                  <NavLink to="/features">
               <section>
                  <h1 className="text-white text-sm">Features</h1>
               </section>
            </NavLink>
            <NavLink to="/payment">
               <section>
                  <h1 className="text-white text-sm">Payment</h1>
               </section>
            </NavLink>
            <NavLink to="/contact">
               <section>
                  <h1 className="text-white text-sm">Contact</h1>
               </section>
            </NavLink>
                  </section>
               </section>
               <section className="flex flex-col gap-2">
                  <h1 className="text-xl text-[#ECB365] font-bold">Account</h1>
                  <section className="flex flex-col gap-2">
                  <NavLink to="/auth/signup">
               <section>
                  <h1 className="text-white text-sm">Sign up</h1>
               </section>
            </NavLink>
            <NavLink to="/forgot password">
               <section>
                  <h1 className="text-white text-sm">Forgot password</h1>
               </section>
            </NavLink>
                  </section>
               </section>
               <section className="flex gap-10 items-center">
                  <img src="/landin/Arrow.svg" alt="Arrow" className="h-20 mt-4" />
                  <section className="flex flex-col gap-4">
                     <section className="flex gap-5">
                        <button>
                           <img src="/landin/Facebook.svg" alt="With facebook" width={30} height={20} />
                        </button>
                        <button>
                           <img src="/landin/In.svg" alt="Visit our Linkedin page" width={30} height={20} />
                        </button>
                        <button>
                          <img src="/landin/Slack.svg" alt="Join slack" width={30} height={20} />
                        </button>
                     </section>
                     <section className="gap-4 flex flex-col">
                        <button className="bg-white rounded-md flex text-black px-3 items-center justify-center font-[500] w-40 h-8 gap-1">
                           <img src="/landin/Store.svg" alt="Google play" width={35} />
                           <h1>Google Play</h1>
                        </button>
                        <button className="bg-white rounded-md flex text-black px-3 items-center justify-center gap-4 font-[500] w-40 h-8">
                           <img src="/landin/App.svg" alt="Google play" width={30} />
                           <h1>App Store</h1>
                        </button>
                     </section>
                  </section>
               </section>
            </section>
         </section>
         <section>
           <section className="flex items-center justify-center mt-10">
              <img src="/landin/BarLine.svg" alt="Bar line" width={1110} />
           </section>
           <section className="flex gap-2 items-center justify-center mt-5">
            <p className="text-sm">Terms and Privacy policy</p>
            <img src="/landin/CopyRight.svg" alt="Copy right" width={20} />
            <p className="text-sm">MoveSmart 2024. All rights reserved</p>
           </section>
         </section>
      </section>
      </>
    );
}
 
export default Footer;