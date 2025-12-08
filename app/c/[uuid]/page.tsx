"use client"
import { complaintService } from "@/services/complaint.service";
import { Complaint } from "@/types/complaint";
import { useEffect, useState } from "react";
import ComplaintCard from "./_components/ComplaintCard";
import { LoaderIcon } from "lucide-react";

interface ComplaintViewPageProps {
	params: {
		uuid: string;
	}
}

const ComplaintViewPage: React.FC<ComplaintViewPageProps> = ({ params }) => {
	const [complaint, setComplaint] = useState<Complaint | null>(null)

	useEffect(() => {
		const fetchComplaint = async () => {
			const response = await complaintService.getComplaint(params.uuid);
			setComplaint(response);
		}

		fetchComplaint();
	}, [params.uuid])

	if (!complaint) return <div className="h-screen flex justify-center items-center">
		<LoaderIcon className="animate-spin" size={32} />
	</div>;

	return (
		<div>
			<h1 className="my-10 text-xl font-medium">Complaint</h1>

			<div className="mx-32">
				<ComplaintCard complaint={complaint} />
			</div>
		</div>
	)
}

export default ComplaintViewPage;
