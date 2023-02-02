import { ChevronDownIcon } from "@chakra-ui/icons";

export const NAV_ITEMS = [
  {
    label: "Resume",
    icon: ChevronDownIcon,
    children: [
      {
        label: "Resume Builder",
        subLabel: "Use our builder to create a resume in seconds.",
        href: "/resume-build",
      },
      {
        label: "Resume Templates",
        subLabel: "Find the perfect resume template.",
        href: "/templates",
      },
      {
        label: "Resume Examples",
        subLabel: "See perfect resume examples that get you jobs.",
        href: "/resume-examples",
      },

      {
        label: "How to Write a Resume",
        subLabel: "Learn how to write a resume that lands you jobs.",
        href: "/write-resume",
      },
    ],
  },
  {
    label: "Resume Help",
    subLabel: "Use our expert guides to improve your resume writing.",
    href: "/help/resume-help",
  },
  {
    label: "Resume Format",
    subLabel: "Choose the right resume format for your needs.",
    href: "/resume-formats",
  },
  {
    label: "Blogs",
    href: "/blog",
  },

  {
    label: "About",
    href: "/about-us",
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
