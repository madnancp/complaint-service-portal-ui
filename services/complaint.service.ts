import { Complaint } from "@/types/complaint";
import { apiClient } from "./api-client"

class ComplaintService {
  async get(): Promise<any> {
    const response = await apiClient.get("/complaint")
    return response.data
  }

  async create(data: Complaint): Promise<undefined> {
    const response = await apiClient.post("/complaint", data)
    return response.data;
  }
}

export const complaintService = new ComplaintService();
