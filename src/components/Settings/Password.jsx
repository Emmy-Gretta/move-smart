import SetCard from "../Cards/SetCard";
import SetPassword from "../Cards/SetPassword";
import DashHeader from "../Headers/DashHeader";
import DashBar from "../sidebars/DashBar";

const Password = () => {
   return (
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-1/5 bg-[#041C32] fixed h-full">
         <DashBar />
        </aside>
        {/* Main content */}
        <main className="w-4/5 ml-[20%] overflow-y-auto">
          <section className="flex w-full">
            <DashHeader />
          </section>
          <section className="mt-5 p-4">
           <SetPassword />
          </section>
        </main>
      </div>
   );
}
 
export default Password;