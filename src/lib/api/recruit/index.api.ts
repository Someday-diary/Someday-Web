import { instance } from "src/lib/Axios";

export const handleGetRecruitList = async () => {
  const url: string = '/recruit';
  const { data } = await instance.get(url);

  return data;
}