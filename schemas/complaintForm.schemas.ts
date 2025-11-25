import z from "zod";


export const complaintFormSchema = z.object({
  message: z.string().min(1, "Please write your complaint"),
});

export type CompliantFormValues = z.infer<typeof complaintFormSchema>
