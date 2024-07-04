import { Calendar, CalendarDays, Grid2X2, Inbox, LinkIcon } from "lucide-react";

export const primaryNavItems = [
  {
    id: "primary",
    name: "Inbox",
    link: "/loggedin",
    icon: <Inbox className="w-4 h-4" />,
  },
  {
    name: "Today",
    link: "/loggedin/today",
    icon: <Calendar className="w-4 h-4" />,
  },
  {
    name: "Upcoming",
    link: "/loggedin/upcoming",
    icon: <CalendarDays className="w-4 h-4" />,
  },
  {
    id: "filters",
    name: "Filters & Labels",
    link: "/loggedin/filter-labels",
    icon: <Grid2X2 className="w-4 h-4" />,
  },
];
export const secondaryNavItems = [
  {
    id: "primary",
    name: "Portfolio",
    link: "/loggedin",
    icon: <LinkIcon className="w-4 h-4" />,
  },
  {
    name: "Blog",
    link: "/loggedin/today",
    icon: <LinkIcon className="w-4 h-4" />,
  },
  {
    name: "Recent Projects",
    link: "/loggedin/upcoming",
    icon: <LinkIcon className="w-4 h-4" />,
  },
  {
    name: "GitHub repositories",
    link: "/loggedin/upcoming",
    icon: <LinkIcon className="w-4 h-4" />,
  },
];

export const GET_STARTED_PROJECT_ID = "k97fs8npdxzkr39y5vjcp9kq1d6tycm1";