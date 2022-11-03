import {} from "@tabler/icons";
import {
  Notification,
  ArchiveBook,
  People,
  BagHappy,
  Activity,
  Category2,
  Notepad2,
  Additem,
  Profile2User,
} from "iconsax-react";
import { LinksGroupProps } from "./components";

export const navigationLinks: LinksGroupProps[] = [
  { label: "Overview", icon: Activity, link: "/" },
  { label: "Order History", icon: ArchiveBook, link: "/history" },
  { label: "Customers", icon: People, link: "/customers" },
  { label: "Lockers", icon: BagHappy, link: "/lockers" },
  { label: "Platform Agents", icon: Profile2User, link: "/agents" },
  { label: "System users", icon: People, link: "/users" },
  {
    label: "Notifications",
    icon: Notification,
    link: "notifications",
  },
];

export const storeNavigationPathConfig: LinksGroupProps[] = [
  { label: "Overview", icon: Activity, link: "/store" },
  { label: "Products", icon: Notepad2, link: "/store/products" },
  { label: "Categories", icon: Category2, link: "/store/categories" },
  { label: "Add Product", icon: Additem, link: "/store/add-product" },
  { label: "Add Category", icon: Additem, link: "/store/add-product" },
];
