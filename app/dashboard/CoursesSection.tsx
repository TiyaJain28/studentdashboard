import { fetchCourses, MOCK_COURSES } from '@/lib/supabase';
import { CourseCard } from '@/components/CourseCard';

export async function CoursesSection() {
  let courses;
  try {
    courses = await fetchCourses();
    if (courses.length === 0) courses = MOCK_COURSES;
  } catch {
    courses = MOCK_COURSES;
  }

  return (
    <>
      {courses.map((course, i) => (
        <CourseCard key={course.id} course={course} index={i + 2} />
      ))}
    </>
  );
}