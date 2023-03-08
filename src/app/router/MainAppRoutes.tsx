import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DashboardScreen } from "@ui/pages/dashboard";
import { LoginScreen } from "@ui/pages/authentication/LoginScreen";
import { AccountNavigationShell } from "@ui/template/AccountNavigationShell";
import { RegisterationScreen } from "@ui/pages/authentication/RegisterationScreen";
import NotificationsScreen from "@ui/pages/payouts";
import { StoreNavigationShell } from "@ui/template/StoreNavigationShell";
import { StoreDashboardScreen } from "@ui/pages/store/dashboard";

import { Suspense, useEffect } from "react";
import { useUtilsLoader } from "../../hooks/loader";
import React from "react";
import { LoadingOverlay } from "@mantine/core";

const ProductsScreen = React.lazy(() => import("@ui/pages/store/products"));
const CategoriesScreen = React.lazy(() => import("@ui/pages/store/categories"));
const PayoutsScreen = React.lazy(() => import("@ui/pages/payouts"));
const AgentScreen = React.lazy(() => import("@ui/pages/agent"));

const SystemUsersScreen = React.lazy(() => import("@ui/pages/system-users"));
const SystemAgentsScreen = React.lazy(() => import("@ui/pages/system-agents"));

const CustomersScreen = React.lazy(() => import("@ui/pages/customers"));
const LockerScreen = React.lazy(() => import("@ui/pages/locker"));
const LockersScreen = React.lazy(() => import("@ui/pages/lockers"));

const OrderHistoryScreen = React.lazy(() => import("@ui/pages/orders-history"));

export default function MainAppRoutes() {
  let { load } = useUtilsLoader();

  useEffect(() => {}, []);

  return (
    <Suspense fallback={<LoadingOverlay visible/>}>
      <Routes>
        <Route path="" element={<AccountNavigationShell />}>
          <Route path="payouts">
            <Route path="" element={<PayoutsScreen />} />
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
          <Route path="products" element={<ProductsScreen />}></Route>
          <Route path="history">
            <Route path="" element={<OrderHistoryScreen />} />
          </Route>
          <Route path="categories" element={<CategoriesScreen />}></Route>
          <Route path="" element={<StoreDashboardScreen />} />
        </Route>

        <Route path="/" element={<div></div>}>
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterationScreen />} />
          <Route path="" element={<div />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
