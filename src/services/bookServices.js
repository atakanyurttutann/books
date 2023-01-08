import { api } from "./api";

const getBooksFilter = (params) => {
  return api({
    url: `search.json`,
    method: "GET",
    params: params,
  });
};

const adminUsersServices = {
  getBooksFilter,
};

export default adminUsersServices;
