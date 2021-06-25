import GenericService from "./GenericService";
class MatchService extends GenericService {
  constructor() {
    super();
  }
  addMatch = (data) => this.post("Match", data);
  deleteMatch = (_id) => this.delete("Match/" + _id);
  updateMatch = (_id, data) => this.put("Match/" + _id, data);
  getMatch = (page = 1, perPage = 10) =>
    this.get("Match?page=" + page + "&perPage=" + perPage);
  getSingleMatch = (id) => this.get("Match/" + id);
}

let MatchService = new MatchService();
export default MatchService;
