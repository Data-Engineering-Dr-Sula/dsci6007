import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import grading_category from "./data/gradingCategories.json"
import course from "./data/Course.json"
import teamMembers from "./data/team.json"

export default function CourseDescription() {

    const TeamMemberCard = ({ member, role }) => (
        <div className="flex flex-col items-center text-center">
            <img src={member.imageUrl} alt={member.name} className="w-24 h-24 rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-blue-600">{member.name}</h3>
            <p className="text-gray-700">{role}</p>
            <p className="text-gray-500">{member.major}</p>
            <a href={`mailto:${member.email}`} className="text-blue-500 mt-2">{member.email}</a>
        </div>
    );

    return (
        <section id="course_description" className="px-4 py-8">
            <div className="max-w-5xl mx-auto text-left">
                <h2 className="text-3xl font-bold text-blue-600 mb-4">{course.title}</h2>

                {course.description.map((para, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed mb-6">{para}</p>
                ))}
                <h2 className="text-xl font-semibold text-blue-600 mb-2">Meet the Team</h2>

                <div className="max-w-5xl mx-auto text-center py-8">

                    <div className="flex justify-around gap-8">
                        <div>
                            <TeamMemberCard member={teamMembers.professor} role={teamMembers.professor.designation}/>
                        </div>

                        <div>
                            {/*<h4 className="text-xl font-semibold text-gray-800 mb-4">{teamMembers.teachingAssistants.title}</h4>*/}
                            <div className="flex flex-col gap-4">
                                {teamMembers.teachingAssistants.assistants.map((ta, index) => (
                                    <TeamMemberCard key={index} member={ta} role="TA"/>
                                ))}
                            </div>
                        </div>

                        <div>
                            {/*<h4 className="text-xl font-semibold text-gray-800 mb-4">{teamMembers.volunteerTAs.title}</h4>*/}
                            <div className="flex flex-col gap-4">
                                {teamMembers.volunteerTAs.assistants.map((vta, index) => (
                                    <TeamMemberCard key={index} member={vta} role="Volunteer TA"/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <h3 className="text-xl font-semibold text-blue-600 mb-2">Prerequisites</h3>
                <p className="text-gray-700 mb-6">{course.prerequisites}</p>

                <h3 className="text-xl font-semibold text-blue-600 mb-2">Course Materials</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 px-8">
                    <li><strong>Required:</strong> {course.courseMaterials.required}</li>
                    <li><strong>Suggested:</strong> {course.courseMaterials.suggested}</li>
                </ul>

                <h3 className="text-xl font-semibold text-blue-600 mb-2">Additional Materials</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 px-8">
                    {course.additionalMaterials.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

                <h3 className="text-xl font-semibold text-blue-600 mb-4">Category Weights & Grading</h3>
                <p className="text-gray-700 mb-4">{course.grading}</p>

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
