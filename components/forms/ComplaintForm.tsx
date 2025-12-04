import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { FieldGroup, Field, FieldLabel, FieldError } from "../ui/field";
import { useForm, Controller } from "react-hook-form";
import { type CompliantFormValues, complaintFormSchema } from "@/schemas/complaintForm.schemas";
import { zodResolver } from '@hookform/resolvers/zod';
import { complaintService } from "@/services/complaint.service";
import { Complaint } from "@/types/complaint";
import { useState } from "react";
import { LoaderIcon } from "lucide-react";

interface ComplaintFormProps {
	onSuccess: () => void;
}

const ComplaintForm: React.FC<ComplaintFormProps> = ({ onSuccess }) => {
	const [isLoading, setIsLoading] = useState(false)
	const { handleSubmit, control } = useForm<CompliantFormValues>({
		resolver: zodResolver(complaintFormSchema),
		defaultValues: {
			message: "",
		}
	})

	const onSubmit = async (data: Complaint) => {
		setIsLoading(true)
		const response = await complaintService.create(data)
		setIsLoading(false)
		console.log(`response from api is : ${response}`)
		onSuccess()
	}



	return (
		<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
			<FieldGroup>

				<Controller
					name="message"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="message">Your Complaint</FieldLabel>
							<Textarea
								{...field}
								placeholder="Explian what you are facing."
								id="message"
								className="max-h-52 min-h-24"
								aria-invalid={fieldState.invalid}
							/>
							{fieldState.invalid && (
								<FieldError errors={[fieldState.error]} />
							)}
						</Field>

					)}
				/>

				<Field>
					<Button type="submit" disabled={isLoading}>
						{isLoading ? (
							<span className="flex items-center gap-2 justify-center">
								<LoaderIcon className="animate-spin" />
								Submitting
							</span>
						) : (
							<span>
								Submit
							</span>
						)}
					</Button>
				</Field>
			</FieldGroup>
		</form>
	)
}

export default ComplaintForm;
