import { API_URL } from "@env";

const securityDataRepository = {
  getSecurityData: async (code: string) => {
    try {
      const httpCall = await fetch(`${API_URL}/security?code=${code}`);
      const response = await httpCall.json();
      return response.map((obj: any) => {
        const newObj: any = {};
        for (let key in obj) {
          const newKey = key.replace(/\./g, "_");
          newObj[newKey] = obj[key];
        }
        return newObj;
      });
    } catch (error) {
      return { error: "Error: " + error };
    }
  },
};

export default securityDataRepository;
