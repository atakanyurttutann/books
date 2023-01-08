import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { api } from "../services/api";

const ApiProvider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    api.interceptors.request.use(
      (request) => {
        document.getElementById("loading").classList.remove("hidden");
        document.getElementById("loading").classList.add("flex");
        return request;
      },
      (err) => {
        return Promise.reject(err);
      },
    );

    api.interceptors.response.use(
      (response) => {
        document.getElementById("loading").classList.add("hidden");
        document.getElementById("loading").classList.remove("flex");
        return response;
      },
      (err) => {
        return Promise.reject(err);
      },
    );
  }, [dispatch]);
  return <></>;
};

export default ApiProvider;
