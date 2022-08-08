import rewardsLogo from "./../assets/the-rewards-co.png";
import navIcon from "./../assets/nav-icon.png";
import Search from "../assets/icons/Search";

const setup = {
  global: {
    logo: rewardsLogo,
    navIcon,
    companyName: "Rewards",
  },

  nav: {
    height: "72px",
    horizontalPadding: "6.6%",
    hasSearch: true,
    SearchIcon: <Search />,
    links: [
      { label: "Browse Catalogue", id: "browse-catalogue" },
      { label: "About Us", id: "about-us" },
      { label: "Partners", id: "partners" },
    ],
    gapBetweenLogoAndList: "7.7%",
  },

  colors: {
    primary: "#F1D29E",
    text: "#121848",
    borderColor: "rgba(18, 24, 72, 0.15)",
    textLight: "#141B49",
  },
};

const palette = {
  ...setup.colors,
};

const routes = [
  {
    label: "Dashboard",
    route: "dashboard",
  },
  {
    label: "Edit Listing",
    route: "edit-listing",
  },
  {
    label: "Project Info",
    route: "project-info",
  },
  {
    label: "Purchases",
    route: "purchases",
  },
  {
    label: "Scheduled Viewings",
    route: "scheduled-viewings",
  },
];

const theme = {
  palette,
};

const assets = {
  rewardsLogo,
  navIcon,
};

const textTemplates = {
  projectName: setup.global.companyName,
};

const nav = {
  height: setup.nav.height,
  paddingHorizontal: setup.nav.horizontalPadding,
};

const constants = {
  routes,
  theme,
  assets,
  textTemplates,
  templates: {
    nav,
  },
  setup,
};

export default constants;
