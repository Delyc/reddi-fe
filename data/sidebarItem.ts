
export interface SidebarItems{
  id: number,
  title: string,
  subTopics: any,
}

const sidebarItems: SidebarItems[] = [
  {
    id: 1,
    title: "Home",
    subTopics: ["Settings", "Profile", "Logout"],
  },

  {
    id: 2,

    title: "Any",
    subTopics: ["Settings", "Profile", "Logout"],
  },

  {
    id: 3,

    title: "Post",
    subTopics: ["Settings", "Profile", "Logout"],
  },
];

export default sidebarItems;
