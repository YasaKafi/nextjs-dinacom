import instanceAxios from "@/app/lib/services/instance/instance";

export default async function jobDetail(id) {
    try {
      const response = await instanceAxios.get(`/job/detail/${id}`); 
      return response.data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }