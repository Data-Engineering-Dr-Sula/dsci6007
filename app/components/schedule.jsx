import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const contents = [
  {
    date: "Week 1",
    description: "Introduction to Data Engineering and Distributed Systems",
    material: [
      "Overview of data engineering's role in data science",
      "Introduction to data engineering tools and technologies",
      "Introduction to Data Engineering Pipeline",
    ],
  },
  {
    date: "Week 2",
    description: "Data Engineering Pipeline: Data Ingestion",
    material: ["Gathering and importing data from various sources."],
  },
  {
    date: "Week 3",
    description: "Data Storage and Retrieval",
    material: [
      "Relational databases and SQL",
      "NoSQL databases",
      "Data warehousing and data marts",
      "Data lake and data hub architecture",
    ],
  },
  {
    date: "Week 4",
    description: "Data Processing and Analyses",
    material: [
      "Batch processing using Apache Hadoop and Apache Spark",
      "Stream processing using Apache Kafka and Apache Storm",
      "Data integration and ETL processes",
      "Data quality and data validation",
    ],
  },
  {
    date: "Week 5",
    description: "Data Pipeline Management",
    material: [
      "Data pipeline design and architecture",
      "Data pipeline automation using Apache Airflow or other tools.",
      "MlOps-Monitoring and troubleshooting data pipelines.",
      "Performance tuning and optimization",
    ],
  },
  {
    date: "Week 6",
    description: "Midterm Exam/Midterm Project",
    material: [
      "Week 1: Introduction to Data Engineering and Big Data",
      "Week 2: Data Storage and Retrieval",
      "Week 3: Data Processing and Computation",
      "Week 4: Data Pipeline Management",
    ],
  },
  {
    date: "Week 7",
    description: "AWS- Cloud Data Engineering",
    material: ["Introduction to AWS", "AWS Labs"],
  },
  {
    date: "Week 8",
    description: "Microsoft Azure| Data Bricks",
    material: ["Microsoft Azure|DataBricks"],
  },
  {
    date: "Week 9",
    description: "Data Consistency and Data Integrity",
    material: [
      "Distributed data processing using Apache Hadoop and Apache Spark",
      "Real-time data processing using Apache Kafka and Apache Storm",
      "Data warehousing and data lake on big data platforms like Apache Hadoop and Apache Spark",
    ],
  },
  {
    date: "Week 10",
    description: "Data Governance and Data Lineage",
    material: [
      "Cloud-based data storage and processing using services like Amazon S3, Amazon Redshift, Amazon EMR, and Google BigQuery",
      "Cloud-based data pipeline management using services like AWS Glue and Google Cloud Dataflow",
    ],
  },
  {
    date: "Week 11",
    description: "MlOps",
    material: ["MlOps"],
  },
  {
    date: "Week 12",
    description: "Projects and Case studies",
    material: [
      "Students will work on real-world data engineering projects and case studies",
    ],
  },

  {
    date: "Week 13",
    description: "Final Exams",
    material: [
      "Week 7: AWS- Cloud Data Engineering",
      "Week 8: Microsoft Azure| Data Bricks",
      "Week 9: Data Consistency and Data Integrity",
      "Week 10: Data Governance and Data Lineage",
      "Week 11: MlOps",
    ],
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="px-4 py-8 bg-blue-100">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Schedule</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Class slides (and instructor’s notes if given) do not replace class.
          If they are provided it is with the intention of freeing up your time
          to take additional notes, not to allow you to minimize effort.
          Mathematical topics are difficult to teach via slides, so often
          specific topics will be demonstrated or derived on the board,
          requiring notetaking. This is a contrast with programming topics which
          often work better via slides. Those with a computer science background
          may need to relearn note taking habits.
        </p>

        <h3 className="text-xl font-semibold text-blue-600 mb-2">
          COURSE STRUCTURE/COURSE FORMAT/COURSE OBJECTIVES:
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 px-8">
          <li>
            The course combines lectures, hands-on lab projects (individual and
            group), and active learning activities.
          </li>
          <li>
            Understand the fundamentals of distributed systems and scalable data
            processing.
          </li>
          <li>
            Gain proficiency in big data technologies and cloud-based data
            engineering solutions.
          </li>
          <li>
            Develop skills in designing, implementing, and managing large-scale
            data pipelines.
          </li>
          <li>
            Learn best practices in data governance, integrity, and ethical
            considerations.
          </li>
          <li>
            Active learning, including peer-based and project-based activities,
            will constitute a significant portion of class time, emphasizing
            attendance and participation.
          </li>
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
                  <ul className="list-disc list-inside text-gray-700">
                    {content.material.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
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
