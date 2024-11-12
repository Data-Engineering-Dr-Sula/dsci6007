import React from "react";
import CourseDescription from "@/app/components/courseDescription";
import Schedule from "@/app/components/schedule";
import CourseWork from "@/app/components/coursework";
import OfficeHours from "@/app/components/officeHours";
import Header from "@/app/components/header";

export default function Home() {
  return (
      <main className="min-h-screen bg-gray-100">
        <Header/>

        <div className="pt-20 space-y-4 bg-blue-50">
          <CourseDescription/>
          <Schedule/>
          <CourseWork/>
          <OfficeHours/>
        </div>
      </main>
  );
}
