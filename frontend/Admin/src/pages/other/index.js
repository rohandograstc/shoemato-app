import React, { Suspense } from "react";
import { addUser } from "@/Redux/Features/user/userSlice";
import { wrapper } from "../../Redux/store";
import { increment } from "@/Redux/Features/counter/coutersSlice";
import Page from "@/Roles/Example/Page";
import { fetchUsers } from "../../Redux/Features/user/userSliceApi";
import Loading from "./loading";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    console.log("Triggred getServerSideProps");
    await store.dispatch(fetchUsers());
    store.dispatch(increment());
    return { props: {} };
  }
);

const Other = (props) => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Page title="Other Page" linkTo="/" />
      </Suspense>
    </>
  );
};

export default Other;
