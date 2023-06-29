import { getAllCourses } from "@/prisma/courseController";
import CoursesPage from "./courses";
import HeroSection from "@/components/HeroSection";

function HomePage({ courses }) {
  return (
    <div>
      <HeroSection />
      <CoursesPage courses={courses} />
    </div>
  );
}

export default HomePage;

// get data using controller
export const getServerSideProps = async () => {
  const courses = await getAllCourses();

  // convert time to string
  const updatedCourses = courses.map((course) => ({
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  }));

  return {
    props: {
      courses: updatedCourses,
    },
  };
};
