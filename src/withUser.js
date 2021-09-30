import axios from "axios";
import { useEffect, useState } from "react";

const withUser = (Component) => {
  const NewComponent = ({ userId, ...props }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(({ data }) => {
          setUser(data);
        });
    }, []);

    if (!user.name) return "Loading...";

    return <Component user={user} {...props} />;
  };

  return NewComponent;
};

export default withUser;
