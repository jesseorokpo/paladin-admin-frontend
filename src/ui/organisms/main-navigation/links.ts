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
  Bill,
  ArrowLeft,
  ArrowCircleLeft,
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
    label: "Payouts",
    icon: Bill,
    link: "payouts",
  },
];

export const storeNavigationPathConfig: LinksGroupProps[] = [
  { label: "Go back", icon: ArrowCircleLeft, link: "/" },
  { label: "Order History", icon: ArchiveBook, link: "/store/history" },
  { label: "Overview", icon: Activity, link: "/store" },
  { label: "Products", icon: Notepad2, link: "/store/products" },
  { label: "Categories", icon: Category2, link: "/store/categories" },
];
