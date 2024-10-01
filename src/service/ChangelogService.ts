import api from "./ApiService";

export class ChangelogService {
  getChangeLogList = async (): Promise<any> => {
    const response = await api.get("changelogs");
    return response.data;
  };
}
