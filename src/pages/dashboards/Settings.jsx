import SetCard from "../../components/Cards/SetCard";
import DashHeader from "../../components/Headers/DashHeader";
import DashBar from "../../components/sidebars/DashBar";

const Settings = () => {
   return (
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-1/5 bg-[#041C32] fixed h-full">
         <DashBar />
        </aside>
        {/* Main content */}
        <main className="w-4/5 ml-[20%] overflow-y-auto">
          <section className="flex w-full mb-16">
            <DashHeader />
          </section>
          <section className="mt-5 p-4">
           <SetCard />
          </section>
        </main>
      </div>
    );
}
 
export default Settings;