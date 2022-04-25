
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";

// Vision UI Dashboard React icons
import { IoRocketSharp } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { FiVideo } from "react-icons/fi";
import { BsCreditCardFill } from "react-icons/bs";
import { BsFillFileBarGraphFill,BsGearWideConnected } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import Live from "layouts/live";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <IoHome size="15px" color="inherit" />,
    component: Dashboard,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   route: "/tables",
  //   icon: <IoStatsChart size="15px" color="inherit" />,
  //   component: Tables,
  //   noCollapse: true,
  // },
  {
    type: "collapse",
    name: "Live",
    key: "live",
    route: "/live",
    icon: <FiVideo size="15px" color="inherit" />,
    
    component: Live,
    noCollapse: true,
  },
  // { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "User",
    key: "user",
    route: "/user",
    icon: <BsFillPersonFill size="15px" color="inherit" />,
    component: Profile,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Report",
    key: "report",
    route: "/report",
    icon: <BsFillFileBarGraphFill size="15px" color="inherit" />,
    component: Billing,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "SetUp",
    key: "set-up",
    route: "/set-up",
    icon: <BsGearWideConnected size="15px" color="inherit" />,
    component: Billing,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Sign In",
  //   key: "sign-in",
  //   route: "/sign-in",
  //   icon: <IoIosDocument size="15px" color="inherit" />,
  //   component: SignIn,
  //   noCollapse: true,
  // },
];

export default routes;
