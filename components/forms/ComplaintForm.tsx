import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { FieldGroup, Field, FieldLabel, FieldError } from "../ui/field";
import { useForm, Controller } from "react-hook-form";
import { type CompliantFormValues, complaintFormSchema } from "@/schemas/complaintForm.schemas";
import { zodResolver } from '@hookform/resolvers/zod';

interface ComplaintFormProps {
	onSubmit: () => void;
}

const ComplaintForm: React.FC<ComplaintFormProps> = ({ onSubmit }) => {
	const { handleSubmit, control } = useForm<CompliantFormValues>({
		resolver: zodResolver(complaintFormSchema),
		defaultValues: {
			message: "",
		}
	})

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
					<Button type="submit">Submit</Button>
				</Field>
			</FieldGroup>
		</form>
	)
}

export default ComplaintForm;
