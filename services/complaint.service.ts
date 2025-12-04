import { Complaint } from "@/types/complaint";
import { apiClient } from "./api-client"

class ComplaintService {
  async get(): Promise<any> {
    const response = await apiClient.get("/complaints")
    return response.data
  }

  async create(data: Complaint): Promise<undefined> {
    const response = await apiClient.post("/complaints", data)
    return response.data;
  }

  async delete(id: string) {
    const response = await apiClient.delete(`/complaints/${id}`)
    return response.data;
  }

}

export const complaintService = new ComplaintService();
