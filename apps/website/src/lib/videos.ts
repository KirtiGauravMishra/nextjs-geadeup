export type SampleVideo = {
  id: string;
  title: string;
  subject: string;
  grade: string;
  duration: string;
  description: string;
  src: string;
};

/**
 * Six fixed placeholder lesson clips, one per subject.
 *
 * These point at Google's public sample-video bucket purely as stand-ins so
 * the "watch a sample lesson" flow is real and clickable before the actual
 * catalogue is recorded. `<VideoCard>` only cares about `src` being a playable
 * URL — swap these for signed Bunny.net Stream playback URLs (see FR-VID-02 in
 * the requirements doc) once real lessons exist, no component changes needed.
 */
export const sampleVideos: SampleVideo[] = [
  {
    id: "algebra-quadratics",
    title: "Quadratic Equations — Factorisation Method",
    subject: "Mathematics",
    grade: "Class 10",
    duration: "6:07",
    description: "Solving quadratics by splitting the middle term, with three worked examples.",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "physics-motion",
    title: "Laws of Motion — Newton's Second Law",
    subject: "Physics",
    grade: "Class 11",
    duration: "8:42",
    description: "Deriving F = ma from first principles and applying it to real problems.",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: "chemistry-bonding",
    title: "Chemical Bonding — Ionic vs Covalent",
    subject: "Chemistry",
    grade: "Class 9",
    duration: "5:55",
    description: "Why atoms bond the way they do, with periodic-table shortcuts for exams.",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: "biology-cell",
    title: "Cell Structure — Plant vs Animal Cells",
    subject: "Biology",
    grade: "Class 9",
    duration: "7:14",
    description: "A labelled walkthrough of organelles and the differences that show up in exams.",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "english-grammar",
    title: "Active & Passive Voice — Rules and Traps",
    subject: "English",
    grade: "Class 12",
    duration: "4:38",
    description: "The transformation rules examiners test most, with common mistakes flagged.",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
  {
    id: "cs-data-structures",
    title: "Data Structures — Arrays vs Linked Lists",
    subject: "Computer Science",
    grade: "Class 11",
    duration: "9:21",
    description: "Choosing the right structure for the job, with time-complexity comparisons.",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  },
];
