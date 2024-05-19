import LandingHeader from "../../components/Headers/landinHeader";

const HeaderScene = () => {
   return ( 
      <>
      <section className="bg-div flex flex-col items-center justify-center">
         <LandingHeader />
         <section className="flex mt-32 ">
         <section className="mr-16">
            <h1 className="font-[500] text-white text-3xl mb-3">A SEAMLESS BOOKING <br />EXPERIENCE</h1>
            <p className="text-white text-lg font-light mb-5">
            Welcome to MoveSmart, a trusted interface to  <br />
            easily book tickets for your journey through  <br />
            the use of technology.
            </p>
            <button className="bg-[#041C32] text-white rounded-md w-32 h-10 ">Get started</button>
         </section>
         <section>
            <img src="/landin/header.png" alt="Book ticket"  width={630} height={100}/>
         </section>
      </section>
      </section>
      </>
    );
}
 
export default HeaderScene;