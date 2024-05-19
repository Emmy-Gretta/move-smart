import { NavLink } from "react-router-dom";
import MainButton from "../../components/Buttons/MainButton";
import AuthInput from "../../components/Inputs/AuthInputs";

const Signup = () => {
   return ( 
      <>
      <section className="bg-login">
          <section className="absolute flex"> 
              <button> <img src="/Signup/AZ.svg" alt="AZ" width={30} className="relative left-[1175px] top-5" /></button>
            </section>
         <section className="flex items-center justify-center gap-24 mr-32">
          <section className="bg-[#041C32] w-[480px] h-[540px] flex flex-col items-center justify-center gap-5 my-10 rounded-lg">
            <h1 className="text-white text-2xl font-semibold mb-5">LOGIN</h1>
            <AuthInput placeHolder="Email" inputType="email" />
            <AuthInput placeHolder="Password" inputType="password" />
            <MainButton title="Login" />
            <p className="text-sm flex text-white">
               Don't have an account?
               <NavLink to="/auth/signup">
                  <h1 className="text-[#5B8FB9] ml-1"> Sign up</h1>
               </NavLink>
            </p>
          </section>
          <section className="text-white flex flex-col">
            <p className="text-[58px]">Welcome back <br /> to your account,</p>
            <p className="text-[58px]">
               <span className="text-[#57A2DE] italic">John Doe</span></p>
            <p className="italic text-lg">Want to book a ticket, login to your account and use <br /> different services.</p>
          </section>
         </section>
      </section>
      </>
    );
}
 
export default Signup;