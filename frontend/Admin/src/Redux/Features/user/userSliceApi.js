import axios from "axios";
import { addUser } from "./userSlice";

export const fetchUsers = () => async (dispatch) => {
  try {
    const headers = {
      "Cache-Control": "s-maxage=1, stale-while-revalidate",
    };
    const response = await axios.get(
      `https://reqres.in/api/users/${Math.floor(Math.random() * 10 + 1)}`,
      { headers }
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
