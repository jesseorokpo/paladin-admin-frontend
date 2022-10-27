import {} from "@tabler/icons";
import {
  Heart,
  LockCircle,
  Notification,
  InfoCircle,
  Information,
  User,
  ArchiveBook,
} from "iconsax-react";
import { LinksGroupProps } from "./NavigationLinks";

export const navigationLinks: LinksGroupProps[] = [
  { label: "Overview", icon: User, link: "/account" },
  { label: "Order History", icon: ArchiveBook, link: "/account/history" },
  { label: "Favourites", icon: Heart, link: "/account/favourites" },
  { label: "Lockers", icon: LockCircle, link: "/account/lockers" },
  {
    label: "Notifications",
    icon: Notification,
    link: "/account/notifications",
  },
];
