import { ChevronDownIcon } from "@chakra-ui/icons";

export const NAV_ITEMS = [
  {
    label: "All Articles",
    href: "/blog",
  },

  {
    label: "Personal Development",
    href: "/personal-development",
  },
  {
    label: "Inspiring Stories",
    href: "/inspiring-stories",
  },

  {
    label: "Job Search",
    href: "/Jobs",
  },
  {
    label: "Job Interviews",
    href: "#",
  },
  {
    label: "Career Advice",
    href: "#",
  },
];

export const EnglishDropDown = [
  {
    label: "English",
    icon: ChevronDownIcon,
    children: [
      {
        label: "English (UK)",
        href: "#",
      },
      {
        label: "Français",
        href: "#",
      },
      {
        label: "Português",
        href: "#",
      },
      {
        label: "Español",
        href: "#",
      },
      {
        label: "English (IN)",
        href: "#",
      },
      {
        label: "Italiano",
        href: "#",
      },
    ],
  },
];

export const Login_Buttons = [
  {
    label: "Register",
    // href: '#',
  },
  {
    label: "Login",
    // href: '#',
  },
];
