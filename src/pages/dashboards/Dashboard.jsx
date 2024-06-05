import AvailableTick from "../../components/Cards/AvailableTick";
import DashCardSearch from "../../components/Cards/DashCard";
import NotificationCard from "../../components/Cards/NotCard";
import DashHeader from "../../components/Headers/DashHeader";
import DashBar from "../../components/sidebars/DashBar";

const Dashboard = () => {
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
          <DashCardSearch />
          <div className="flex">
            <AvailableTick />
            <NotificationCard />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
