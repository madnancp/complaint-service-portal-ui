import { Complaint, ComplaintCreate } from "@/types/complaint";
import { apiClient } from "./api-client"

class ComplaintService {
  async get(): Promise<Complaint[]> {
    const response = await apiClient.get("/complaints")
    return response.data
  }

  async getComplaint(uuid: string): Promise<Complaint> {
    const response = await apiClient.get(`/complaints/${uuid}`)
    console.log(`response is : ${response.data}`)
    return response.data
  }

  async create(data: ComplaintCreate): Promise<Complaint> {
    const response = await apiClient.post("/complaints", data)
    return response.data;
  }

  async delete(id: string): Promise<{ message: string }> {
    const response = await apiClient.delete(`/complaints/${id}`)
    return response.data;
  }

}

export const complaintService = new ComplaintService();
