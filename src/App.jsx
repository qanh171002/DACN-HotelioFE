import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Bookings from "./pages/Bookings";
import Accounts from "./pages/Accounts";
import Rooms from "./pages/Rooms";
import Properties from "./pages/Properties";
import Settings from "./pages/Settings";
import Invoices from "./pages/Invoices";

function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-auto bg-gray-100">
        <Header />
        <main className="p-8 overflow-scroll no-scrollbar">
          <div className="flex flex-col gap-8 p-8 mx-auto max-w-10xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
