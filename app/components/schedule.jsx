import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import courseContent from "./data/courseObjective.json";
import contents from "./data/courseSchedule.json";

export default function Schedule() {
    return (
        <section id="schedule" className="px-4 py-8 bg-blue-100">
            <div className="max-w-5xl mx-auto text-left">
                <h2 className="text-3xl font-bold text-blue-600 mb-4">{courseContent.schedule.title}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    {courseContent.schedule.description}
                </p>

                <h3 className="text-xl font-semibold text-blue-600 mb-2">{courseContent.schedule.courseStructureTitle}</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 px-8">
                    {courseContent.schedule.courseStructurePoints.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>

                <Table className="w-full bg-gray-50 shadow-md rounded-lg overflow-hidden">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Course Materials</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {contents.map((content) => (
                            <TableRow key={content.date}>
                                <TableCell className="font-medium">{content.date}</TableCell>
                                <TableCell>{content.description}</TableCell>
                                <TableCell>
                                    <ul className="list-disc list-inside text-gray-700 ">
                                        {content.material.map(item => <li>{item}</li>)}
                                    </ul>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </section>
    );
}
