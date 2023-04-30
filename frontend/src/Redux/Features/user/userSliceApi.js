import axios from "axios";
import { addUser } from "./userSlice";

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://reqres.in/api/users/${Math.floor(Math.random() * 10 + 1)}`
    );
    console.log({ data: response.data });
    dispatch(
      addUser(
        `${response.data.data.first_name} ${response.data.data.last_name}`
      )
    );
  } catch (error) {
    // dispatch(fetchTodosFailure(error.message));
    console.log(error);
  }
};
