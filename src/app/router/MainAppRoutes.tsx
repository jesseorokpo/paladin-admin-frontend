import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DashboardScreen } from "@ui/pages/dashboard";
import { LoginScreen } from "@ui/pages/authentication/LoginScreen";
import { AccountNavigationShell } from "@ui/template/AccountNavigationShell";
import { RegisterationScreen } from "@ui/pages/authentication/RegisterationScreen";
import NotificationsScreen from "@ui/pages/notifications";
import OrderHistoryScreen from "@ui/pages/orders-history";
import LockersScreen from "@ui/pages/lockers";
import LockerScreen from "@ui/pages/locker";
import { StoreNavigationShell } from "@ui/template/StoreNavigationShell";
import { StoreDashboardScreen } from "@ui/pages/store/dashboard";
import CustomersScreen from "@ui/pages/customers";
import SystemUsersScreen from "@ui/pages/system-users";
import SystemAgentsScreen from "@ui/pages/system-agents";
import AgentScreen from "@ui/pages/agent";

export default function MainAppRoutes() {
  return (
    <Routes>
      <Route path="" element={<AccountNavigationShell />}>
        <Route path="notifications">
          <Route path="" element={<NotificationsScreen />} />
        </Route>
        <Route path="history">
          <Route path="" element={<OrderHistoryScreen />} />
        </Route>
        <Route path="customers">
          <Route path="" element={<CustomersScreen />} />
        </Route>
        <Route path="users">
          <Route path="" element={<SystemUsersScreen />} />
        </Route>
        <Route path="agents">
          <Route path=":agent" element={<AgentScreen />} />
          <Route path="" element={<SystemAgentsScreen />} />
        </Route>
        <Route path="lockers">
          <Route path=":locker" element={<LockerScreen />} />
          <Route path="" element={<LockersScreen />} />
        </Route>
        <Route path="" element={<DashboardScreen />} />
      </Route>

      <Route path="/store" element={<StoreNavigationShell />}>
        <Route path="products"></Route>
        <Route path="categories"></Route>
        <Route path="add-product"></Route>
        <Route path="add-category"></Route>
        <Route path="" element={<StoreDashboardScreen />} />
      </Route>

      <Route path="/" element={<div></div>}>
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterationScreen />} />
        <Route path="" element={<div />} />
      </Route>
    </Routes>
  );
}
