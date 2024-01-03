import instanceAxios from "@/app/lib/services/instanceAxios";

export default async function jobDetail() {
    try {
      const response = await instanceAxios.get('/job/detail/1'); 
      return response.data; 
    } catch (error) {
      console.error(error);
      throw error;
    }
  }