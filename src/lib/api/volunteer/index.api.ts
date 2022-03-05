import { request } from "src/lib/Axios";
import { IPostVolunteer } from "src/types/volunteer";

export const handlePostVolunteer = async (req: IPostVolunteer) => {
  const url: string = '/volunteer';
  const { data } = await request.post(url, req);

  return data;
}