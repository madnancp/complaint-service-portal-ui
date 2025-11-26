"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ComplaintForm from "@/components/forms/ComplaintForm";

const ComplaintPage = () => {
  return (
    <div className="pt-10">



      <h2 className="flex items-center justify-center gap-3 text-3xl font-semibold mx-10 mb-8">
        <span className="h-8 w-3 bg-black"></span>
        Complaint Submit Area
      </h2>

      <div className="flex justify-center items-center">
        <Card className="w-xl max-w-lg lg:max-w-2xl">
          <CardHeader>
            <CardTitle>We are sad to see you have complaint!</CardTitle>
            <CardDescription>Fill Out all form fields, we&apos;ll solve it.</CardDescription>
          </CardHeader>

          <CardContent>
            <ComplaintForm onSubmit={() => { console.log("complaint submitted") }} />
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default ComplaintPage;
