import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import officeHours from "./data/officeHours.json";

export default function OfficeHours() {
    const { title, professor, ta } = officeHours;

    const renderSchedule = (schedule) =>
        schedule.map((slot, index) => (
            <TableRow key={index}>
                <TableCell>{slot.day}</TableCell>
                <TableCell>{slot.time}</TableCell>
                <TableCell>{slot.type}</TableCell>
                <TableCell>
                    {typeof slot.location === "string" ? (
                        slot.location
                    ) : (
                        <a href={slot.location.url} className="text-blue-500 hover:underline">
                            {slot.location.text}
                        </a>
                    )}
                </TableCell>
            </TableRow>
        ));

    return (
        <section id="office_hours" className="px-4 py-8 bg-blue-100">
            <div className="max-w-5xl mx-auto text-left">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">{title}</h2>

                {/* Professor */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Professor: {professor.name}</h3>
                    <Table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Day</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Location</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>{renderSchedule(professor.schedule)}</TableBody>
                    </Table>
                    <p className="mt-4 text-gray-700">
                        For appointments, contact{" "}
                        <a href={`mailto:${professor.appointmentsEmail}`} className="text-blue-500 hover:underline">
                            {professor.appointmentsEmail}
                        </a>
                        . <br />
                        Location (In-person): {professor.inPersonLocation}
                    </p>
                </div>

                {/* TA */}
                <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Teaching Assistant: {ta.name}</h3>
                    <Table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Day</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Location</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>{renderSchedule(ta.schedule)}</TableBody>
                    </Table>
                    <p className="mt-4 text-gray-700">
                        For appointments, contact{" "}
                        <a href={`mailto:${ta.appointmentsEmail}`} className="text-blue-500 hover:underline">
                            {ta.appointmentsEmail}
                        </a>
                        . <br />
                        Location (In-person): {ta.inPersonLocation}
                    </p>
                </div>
            </div>
        </section>
    );
}
