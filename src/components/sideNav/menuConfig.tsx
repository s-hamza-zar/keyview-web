import {
  BellPlus,
  CircleParking,
  Cloudy,
  FilePenLine,
  Home,
  LandPlot,
  Mails,
  TrafficCone,
  Users,
} from "lucide-react";

export const Menu = [
  // { title: "KeyView.Ai", path: "/", isLogo: true },

  {
    title: "Dashboard",
    // path: APP_ROUTES.DASHBOARD,
    icon: <Home className="size-5" />,
    isShow: true,
  },
  //   { title: "SERVICES",
  //     isHeading: true,
  //     // isShow: serviceAccess.length !== 0
  //  },
  {
    title: "Weather",
    // path: APP_ROUTES.WEATHER_INFO,
    icon: <Cloudy className="size-5" />,
    // isShow: serviceAccess.includes("Weather"),
  },
  {
    title: "Traffic",
    // path: APP_ROUTES.TRAFFIC_INFO,
    icon: <TrafficCone className="size-5" />,
    // isShow: serviceAccess.includes("Traffic"),
  },
  {
    title: "Parking",
    // path: APP_ROUTES.PARKING_INFO,
    icon: <CircleParking className="size-5" />,
    // isShow: serviceAccess.includes("Parking"),
  },
  //   {
  //     title: "Garbage",
  //     path: APP_ROUTES.GARBAGE_INFO,
  //     icon: <IoTrashBin />,
  //     // isShow: serviceAccess.includes("Garbage"),
  //   },
  //   {
  //     title: "Lawn",
  //     path: APP_ROUTES.LAWN_INFO,
  //     icon: <MdOutlineGrass />,
  //     // isShow: serviceAccess.includes("Lawn"),
  //   },
  {
    title: "Manage Users",
    // path: APP_ROUTES.MANAGE_USER,
    icon: <Users className="size-5" />,
    // isShow: true,
  },
  {
    title: "Manage Properties",
    // path: APP_ROUTES.MANAGE_PROPERTY,
    icon: <LandPlot className="size-5" />,
    // isShow: true,
  },
  {
    title: "Target Notification",
    // path: APP_ROUTES.SEND_NOTIFICATION,
    icon: <BellPlus className="size-5" />,
    isShow: true,
  },
  {
    title: "Create Report",
    // path: APP_ROUTES.DOWNLOAD_REPORTS,
    icon: <FilePenLine className="size-5" />,
    isShow: true,
  },
  {
    title: "Emails",
    icon: <Mails className="size-5" />,
  },
];
