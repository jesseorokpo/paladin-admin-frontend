import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DashboardScreen } from "@ui/pages/dashboard";
import { LoginScreen } from "@ui/pages/authentication/LoginScreen";

import { PlatformNavigationShell } from "@ui/template/PlatformNavigationShell";
import { AccountNavigationShell } from "@ui/template/AccountNavigationShell";
import { RegisterationScreen } from "@ui/pages/authentication/RegisterationScreen";
import PlatformHomeScreen from "@ui/pages/market/PlatformHome";
import { AboutScreen } from "@ui/pages/public/AboutScreen";
import { ContactScreen } from "@ui/pages/public/ContactScreen";
import NotificationsScreen from "@ui/pages/notifications";
import OrderHistoryScreen from "@ui/pages/orders-history";
import FavouritesScreen from "@ui/pages/favourites";
import LockersScreen from "@ui/pages/lockers";
import LockerScreen from "@ui/pages/locker";
import { ViewProductScreen } from "@ui/pages/public/ViewShopProduct";
import ExploreScreen from "@ui/pages/market/ExploreScreen";

export default function MainAppRoutes() {
  return (
    <Routes>
      <Route path="account" element={<AccountNavigationShell />}>
        <Route path="notifications">
          <Route path="" element={<NotificationsScreen />} />
        </Route>
        <Route path="history">
          <Route path="" element={<OrderHistoryScreen />} />
        </Route>
        <Route path="favourites">
          <Route path="" element={<FavouritesScreen />} />
        </Route>
        <Route path="lockers">
          <Route path=":locker" element={<LockerScreen />} />
          <Route path="" element={<LockersScreen />} />
        </Route>
        <Route path="" element={<DashboardScreen />} />
      </Route>

      <Route path="/" element={<PlatformNavigationShell />}>
        <Route path="about" element={<AboutScreen />} />
        <Route path="products/:product" element={<ViewProductScreen />} />
        <Route path="contact" element={<ContactScreen />} />
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterationScreen />} />
        <Route path="explore" element={<ExploreScreen />} />
        <Route path="" element={<PlatformHomeScreen />} />
      </Route>
    </Routes>
  );
}
