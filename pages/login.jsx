import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <p> You Signed in as {session.user.email}</p> <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  } else {
    return (
      <>
        <p> Sorry Your are Not signed in </p> <br />
        <button
          style={{
            backgroundColor: "lightcoral",
            borderWidth: "1px",
          }}
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </>
    );
  }
};

export default Login;

// const Login = () => {
//   return <div> LOGIN </div>;
// };

// export default Login;
