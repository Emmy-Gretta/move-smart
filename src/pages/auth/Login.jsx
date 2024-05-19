const Login = () => {
   return ( 
      <>
      <section className="bg-login flex px-10 py-10 ">
         <section>
          <section className="bg-[#041C32] w-[450px] h-[550px] rounded-xl"></section>
         </section>
         <section className="text-white flex items-center justify-center flex-col">
         <h1 className="font-[500] text-3xl mb-3">Welcome back <br /> to your account; <br /> <span className="text-[#005F8A] italic">John Doe</span> </h1>
         <p>
         Want to book a ticket, login to your account and use br different services.
         </p>
         </section>
      </section>
      </>
    );
}
 
export default Login;