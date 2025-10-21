// /utils/aboutApi.ts

export const getMissionData = async () => {
  return [
    {
      id: 1,
      title: "Our Mission",
      content:
        "Connecting generosity with impact — giveaways that inspire giving and joy.",
    },
    {
      id: 2,
      title: "Our Vision",
      content:
        "To be Africa’s leading social rewards and charity-engagement platform.",
    },
  ];
};

export const getTeamData = async () => {
  return [
    {
      id: 1,
      name: "Admin",
      role: "Platform Manager",
      image: "/images/team/admin.png",
    },
    {
      id: 2,
      name: "Support",
      role: "Community Outreach",
      image: "/images/team/support.png",
    },
  ];
};
