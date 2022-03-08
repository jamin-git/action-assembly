import * as Cookies from "js-cookie";

export const setUser = (userid, email) => {
  const session = {
    user_id: userid,
    email: email
  };
  Cookies.remove("session");
  Cookies.set("session", session, { expires: 14 });
}

export const removeUser = () => {
  Cookies.remove("session");
  // route to login page
  console.log("killed the session");
}

export const getSession = () => {
  const sessionCookie = Cookies.get("session");
  if (sessionCookie === undefined) {
    return {};
  } else {
    return JSON.parse(sessionCookie);
  }
}

export const getUser = () => {
  const sessionCookie = Cookies.get("session");
  if (sessionCookie === undefined) {
    return {};
  } else {
    return JSON.parse(sessionCookie);
  }
}
