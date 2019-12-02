module.exports = {
  title1: `FullStack JavaScript`,
  title2: `Spring 2020`,
  idLocalStorage:"fullstackspring2020",
  classes: [{ value: 'a', label: 'a',backgroundColor:"#295683" },
  // { value: 'b', label: 'bbb',backgroundColor:"darkred" },
  // { value: 'c', label: 'ccc',backgroundColor:"darkgreen" }
  ],
  showWeekInfoForEachDayInWeek : false,
  timeEdit: "https://cloud.timeedit.net/cphbusiness/web/student",
  topMenu: [
    {
      title:"StudyPoints",
      URL: "https://studypoints.info"
    },
    {
      title:"Schedule",
      route: "/full-schedule"
    },
    {
      title:"Goals",
      route: "/all-goals"
    },
    {
      title:"Repos",
      route: "/github-links"
    },
    // {
    //   title:"Exercises",
    //   route: "/all-exercises"
    // },
    // {
    //   title:"Read",
    //   route: "/all-readings"
    // },
    {
      title:"Links",
      //These are the only legal values, Update this if making changes
      // "guidelines","readings","exercises","admin","examprep","studypointex","ca","slides",
      include: ["guidelines","readings","exercises","admin","examprep","studypointex","ca","slides"],
      route: "/links"
    },
    {
      title:"About",
      route: "/"
    },
  ]
}