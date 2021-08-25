import axios from "axios";
import { toast } from "react-toastify";
import { getList } from "../components/body/util";
import { baseURL } from "./util";

export const getDefaultTask = async () => {
  if (getList().length > 0) {
    return getList();
  }

  if (localStorage.getItem("not_first_time")) return [];

  try {
    const response = await axios.get(baseURL);

    if (response.status === 200) {
      return response.data;
    } else {
      toast.warning("Falha ao carregar os dados, Tente novamente!");
      console.warn("falha ao carregar os dados", response);
      return [];
    }
  } catch (e) {
    toast.error("Erro ao carregar os dados!");
    console.error("Ocorreu um erro!", e);
    return [];
  }
};
