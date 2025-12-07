"use client"
import { complaintService } from "@/services/complaint.service";
import { Complaint } from "@/types/complaint";
import { useEffect, useState } from "react";

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

	if (!complaint) return <p>Loading...</p>;

	return (
		<div>
			<p>YOUR COMPLAINT IS : {complaint?.message}</p>
			<p>COMPLAINT CREATED AT: {complaint?.created_at}</p>
		</div>
	)
}

export default ComplaintViewPage;
