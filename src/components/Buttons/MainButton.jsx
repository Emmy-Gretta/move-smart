const MainButton = ({ title }) => {
   return ( 
      <>
      <section className="flex items-center justify-center ">
         <button type="submit" className="w-[170px] h-[45px] rounded-lg bg-[#041C32] text-white border border-white text-lg">
            {title}
         </button>
      </section>
      </>
    );
}
 
export default MainButton;