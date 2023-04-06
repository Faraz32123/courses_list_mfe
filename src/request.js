import axios from "axios";

export const getRequest = (url) => {
    return axios
      .get(url)
      .then(
        resp => {
          return resp.data;
        },
        err => {
          throw err;
        },
      );
  };