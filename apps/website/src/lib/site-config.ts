// Central place for brand name, copy and nav links used across the site.
// Rename the brand once, here — nothing else in the codebase hardcodes it.
export const siteConfig = {
  name: "EduPlus",
  legalName: "EduPlus Learning",
  tagline: "Video lessons, live quizzes and AI-analysed tests for Classes 9–12",
  description:
    "EduPlus partners with schools and colleges on a commission agreement to give their students " +
    "structured video lessons, live quizzes, proctored tests and AI-analysed results for Classes 9 through 12.",
  url: "https://www.eduplus.example",
  contactEmail: "hello@eduplus.example",
  nav: [
    { href: "/#courses", label: "Courses" },
    { href: "/#platform", label: "Platform" },
    { href: "/#lessons", label: "Sample lessons" },
    { href: "/contact", label: "Contact" },
  ],
} as const;
