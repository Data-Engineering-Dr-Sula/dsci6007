import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table";

const grading_category = [
    {
        category: "Labs",
        component: "Labs",
        percentage: "40%"
    },
    {
        category: "Platforms",
        component: "AWS Platform",
        percentage: "5%"
    },
    {
        category: "Projects",
        component: "MidTerm Project",
        percentage: "5%"
    },
    {
        category: "",
        component: "Final Project",
        percentage: "10%"
    },
    {
        category: "Exams",
        component: "MidTerm Exam",
        percentage: "5%"
    },
    {
        category: "",
        component: "Final Exam",
        percentage: "10%"
    },
    {
        category: "Quizzes",
        component: "Quizzes",
        percentage: "10%"
    },
    {
        category: "Certifications",
        component: "Certifications",
        percentage: "5%"
    },
    {
        category: "Attendance",
        component: "Class Attendance + TA Labs Attendance",
        percentage: "10%"
    }
]

export default function CourseDescription() {
    return (
        <section id="course_description" className="px-4 py-8">
            <div className="max-w-5xl mx-auto text-left">
                <h2 className="text-3xl font-bold text-blue-600 mb-4">Course Description</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    This course delves into the complex world of 'Big Data' infrastructure and architecture, with a
                    focus on leveraging computing resources and programming environments to develop scalable,
                    high-volume distributed machine learning algorithms...
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                    Throughout the course, students will be immersed in an intensive exploration of distributed and
                    scalable data engineering. Key subjects such as the big data ecosystem, cloud computing, and various
                    data storage and processing methodologies will be covered. There will be a strong emphasis on
                    contemporary data engineering tools and techniques, equipping students with the know-how to navigate
                    and excel in the dynamic landscape of data engineering.
                </p>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Prerequisites</h3>
                <p className="text-gray-700 mb-6">
                    No formal prerequisites; familiarity with probability, linear algebra, calculus, and some
                    object-oriented programming language is recommended.
                </p>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Course Materials</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 px-8">
                    <li><strong>Required:</strong> None. Data Engineering is a new and evolving field with no
                        comprehensive current book. Readings will be video tutorials, book chapters, and blog posts
                        provided on Canvas.
                    </li>
                    <li><strong>Suggested:</strong> Various supplementary books, including "The Data Engineering
                        Cookbook" by Andreas Kretz, "Designing Data-Intensive Applications" by Martin Kleppmann, and
                        more.
                    </li>
                </ul>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Additional Materials</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 px-8">
                    <li>Supplementary readings and online resources, including case studies and current industry
                        reports.
                    </li>
                    <li>A laptop capable of running an Ubuntu 20.04 Virtual Machine on VirtualBox is needed for
                        projects.
                    </li>
                    <li>Cloud-based exercises via Amazon AWS through a free AWS Academy account provided to students.
                    </li>
                    <li>Software requirements: Python, SQL, NoSQL databases, AWS, Microsoft Azure, among others.</li>
                </ul>

                <h3 className="text-xl font-semibold text-blue-600 mb-4">Category Weights & Grading</h3>
                <p className="text-gray-700 mb-4">
                    Grades earned are based on your performance on homework/quizzes, projects, attendance,
                    participation, midterm exams, and the final exam. Due dates for projects and assignments are posted
                    in the syllabus.
                </p>

                <Table className="w-6/12 bg-gray-50 shadow-md rounded-lg overflow-hidden">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Category</TableHead>
                            <TableHead>Component</TableHead>
                            <TableHead>Percentage</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {grading_category.map((category) => (
                            <TableRow key={category.component}>
                                <TableCell className="font-medium">{category.category}</TableCell>
                                <TableCell>{category.component}</TableCell>
                                <TableCell>{category.percentage}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell>100%</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </section>
    );
}
