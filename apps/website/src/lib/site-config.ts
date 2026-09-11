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
  // "Partner your institute" form on /institutes. Empty = the built-in
  // client-side form is shown instead. Set to a Google Form's embed URL
  // (open the form -> Send -> <> -> copy the src from the <iframe>, or take
  // the normal form URL and swap /viewform for /viewform?embedded=true) to
  // switch that section over to the embedded form.
  partnerFormUrl: "",
  nav: [
    { href: "/#courses", label: "Courses" },
    { href: "/#platform", label: "Platform" },
    { href: "/#lessons", label: "Sample lessons" },
    { href: "/contact", label: "Contact" },
  ],
} as const;
