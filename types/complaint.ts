export interface Complaint {
  id: number;
  uuid: string;
  message: string;
  created_at: string;
  updated_at: string;
}

export type ComplaintCreate = Pick<Complaint, "message">;
