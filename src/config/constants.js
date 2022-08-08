import rewardsLogo from "./../assets/the-rewards-co.png";

const palette = {
  primary: "#F1D29E",
  text: "#121848",
  textLight: "#141B49",
  borderColor: "rgba(18, 24, 72, 0.15)",
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
};

const textTemplates = {
  projectName: "Rewards",
};

const nav = {
  height: "72px",
  paddingHorizontal: "96px",
};

const constants = {
  routes,
  theme,
  assets,
  textTemplates,
  templates: {
    nav,
  },
};

export default constants;
