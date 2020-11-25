import React, { createContext, useEffect, useState } from "react";
import { auth } from "./firebase";

export const UserContext = createContext({ user: null });

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(function (userAuth) {
      if (userAuth) {
        setUser(userAuth);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
}; //nie wiem czy dobrze

//   componentDidMount = () => {
//     auth.onAuthStateChanged(async (userAuth) => {
//       if (userAuth) {
//         // const user = await generateUserDocument(userAuth);
//         // console.log(user);
//         this.setState({ user: userAuth });
//       } else {
//         this.setState({ user: null });
//       }
//     });
//   };

//   render() {
//     const { user } = this.state;

export default UserProvider;
