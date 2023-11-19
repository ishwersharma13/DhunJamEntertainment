import axios from "axios";

export const noAuth = async ({ method, url, data = {}, options = {} }) => {
  try {
    const headers = options?.headers || {};
    delete options["headers"];
    const res = await axios({
      method,
      url: url,
      data,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      ...options,
    });
    if (!res?.data?.status === 200) {
      throw new Error(res?.data?.server_err_msg);
    }
    return res.data;
  } catch (err) {
    console.log(
      err?.response?.data?.message || err?.message || "Something went wrong!"
    );
  }
};