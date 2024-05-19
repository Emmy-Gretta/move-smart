import { NavLink } from "react-router-dom";
import MainButton from "../../components/Buttons/MainButton";
import AuthInput from "../../components/Inputs/AuthInputs";

const Signup = () => {
   return ( 
      <>
      <section className="bg-signup">
          <section className="absolute"> 
              <button> <img src="/Signup/AZ.svg" alt="AZ" width={30} className="relative top-5 left-5" /></button>
            </section>
         <section className="flex items-center justify-center gap-24 ml-28">
          <section className="text-white flex flex-col items-center">
            <p className="text-[78px]">Welcome to</p>
            <p className="text-[58px]"><span>Move</span>
               <span className="text-[#E59D39]">Smart</span></p>
            <p className="italic text-lg">Book your next journey with us.</p>
          </section>
          <section className="bg-[#041C32] w-[500px] h-[580px] flex flex-col items-center justify-center gap-2 my-5 rounded-lg">
            <h1 className="text-white text-2xl font-semibold mb-3">SIGN UP</h1>
            <AuthInput placeHolder="First Name" inputType="text" />
            <AuthInput placeHolder="Last Name" inputType="text" />
            <AuthInput placeHolder="Email" inputType="email" />
            <AuthInput placeHolder="Password" inputType="password" />
            <AuthInput placeHolder="Phone Number" inputType="text" />
            <AuthInput placeHolder="Card Number" inputType="text" />
            <MainButton title="Signup" />
            <p className="text-sm flex text-white">
               Have an account?
               <NavLink to="/auth/login">
                  <h1 className="text-[#5B8FB9] ml-1"> Login</h1>
               </NavLink>
            </p>
          </section>
         </section>
      </section>
      </>
    );
}
 
export default Signup;