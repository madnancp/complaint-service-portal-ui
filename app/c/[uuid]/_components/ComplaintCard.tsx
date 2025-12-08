import { ClockIcon, UserIcon } from "lucide-react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Complaint } from "@/types/complaint";


const ComplaintCard = ({ complaint }: { complaint: Complaint }) => {
	return (
		<Card>
			<CardTitle className="mx-6 text-sm font-normal text-muted-foreground">
				<span className="flex justify-end gap-2">
					<ClockIcon size={16} />
					{complaint.created_at}
				</span>
			</CardTitle>
			<CardContent>
				<div className="flex gap-4">
					<div className="flex flex-col items-center">
						<div className="flex flex-col items-center bg-primary text-primary-foreground p-2 rounded-md">
							<UserIcon size={16} />
						</div>
					</div>

					<div>{complaint.message}</div>

				</div>
			</CardContent>
		</Card>
	)
}

export default ComplaintCard;
