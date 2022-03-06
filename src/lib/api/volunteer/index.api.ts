import { instance } from "src/lib/Axios";
import { IPostVolunteer } from "src/types/volunteer";

export const handlePostVolunteer = async (req: IPostVolunteer) => {
  const url: string = '/volunteer';
  const { data } = await instance.post(url, req);

  return data;
}

export const handleDuplicateCheckVolunteer = async (req: string) => {
  const url: string = `/volunteer?student_id=${req}`;
  const { data } = await instance.get(url);

  return data;
}