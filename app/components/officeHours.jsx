import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

export default function OfficeHours() {
    return (
        <section id="office_hours" className="px-4 py-8 bg-blue-100">
            <div className="max-w-5xl mx-auto text-left">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">Office Hours</h2>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Professor: Dr. Ardiana Sula</h3>
                    <Table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Day</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Location</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Tuesdays</TableCell>
                                <TableCell>10:00 AM - 11:30 AM</TableCell>
                                <TableCell>Online</TableCell>
                                <TableCell><a href="https://unewhaven.zoom.us/j/9927253081"
                                              className="text-blue-500 hover:underline">Zoom Link</a></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Thursdays</TableCell>
                                <TableCell>10:00 AM - 11:30 AM</TableCell>
                                <TableCell>Online</TableCell>
                                <TableCell><a href="https://unewhaven.zoom.us/j/9927253081"
                                              className="text-blue-500 hover:underline">Zoom Link</a></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <p className="mt-4 text-gray-700">
                        For appointments, contact <a href="mailto:asula@newhaven.edu"
                                                     className="text-blue-500 hover:underline">asula@newhaven.edu</a>. <br/>
                        Location (In-person): Maxy Hall 120 A
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Teaching Assistant: Akash Thakkar</h3>
                    <Table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Day</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Location</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Monday</TableCell>
                                <TableCell>12:30 PM - 1:30 PM</TableCell>
                                <TableCell>In-person</TableCell>
                                <TableCell>BCKM Hall, Room 232</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Wednesday</TableCell>
                                <TableCell>12:30 PM - 1:30 PM</TableCell>
                                <TableCell>In-person</TableCell>
                                <TableCell>BCKM Hall, Room 232</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Thursday</TableCell>
                                <TableCell>7:00 PM - 8:00 PM</TableCell>
                                <TableCell>Online</TableCell>
                                <TableCell><a href="https://unewhaven.zoom.us/j/zoomlink"
                                              className="text-blue-500 hover:underline">Zoom Link</a></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <p className="mt-4 text-gray-700">
                        For appointments, contact <a href="mailto:athak13@unh.newhaven.edu"
                                                     className="text-blue-500 hover:underline">athak13@unh.newhaven.edu</a>. <br/>
                        Location (In-person): BCKM Hall, Room 232
                    </p>
                </div>
            </div>
        </section>
    );
}
