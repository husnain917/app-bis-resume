import { ChevronDownIcon } from "@chakra-ui/icons";

export const NAV_ITEMS1 = [
  {
    label: "Resume Templates",
    href: "#",
  },
  {
    label: "CV Templates",
    href: "#",
  },
  {
    label: "Cover Letters",
    href: "#",
  },
  {
    label: "Career Blog",
    icon: ChevronDownIcon,
    children: [
      {
        label: "All Articles",
        subLabel: "Use our builder to create a resume in 5 minutes.",
        href: "/resume-build",
      },
      {
        label: "Resume & CV Writing",
        subLabel: "Find the perfect resume template.",
        href: "/templates",
      },
      {
        label: "Cover letter Writing",
        subLabel: "See perfect resume examples that get you jobs.",
        href: "/resume-examples",
      },
      {
        label: "Resume Format",
        subLabel: "Choose the right resume format for your needs.",
        href: "/blog/resume-formats",
      },
      {
        label: "Examples",
        subLabel: "Learn how to write a resume that lands you jobs.",
        href: "/write-resume",
      },
      {
        label: "Personal Development",
        subLabel: "Use our expert guides to improve your resume writing.",
        href: "/help/resume-help",
      },
      {
        label: "Inspiring Stories",
        href: "#",
      },
      {
        label: "Interviews & Find A Job",
        href: "#",
      },
    ],
  },
  {
    label: "Pricing",
    href: "#",
  },
  {
    label: "About",
    href: "/about-us",
  },
];

export const EnglishDropDown1 = [
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

export const Login_Buttons1 = [
  {
    label: "Register",
    // href: '#',
  },
  {
    label: "Login",
    // href: '#',
  },
];
