"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ComplaintForm from "@/components/forms/ComplaintForm";

const ComplaintPage = () => {
  return (
    <div className="p-20">
      <Card>
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
  )
}

export default ComplaintPage;
