import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../services/user.service";

const User = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = useParams();

  const fetchData = useCallback(async () => {
    try {
      const data = await getUserById(userId);
      setUser({ ...data });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      fetchData();
    }

    return () => {
      setUser({});
    };
  }, [fetchData, userId]);

  if (!userId) {
    return null;
  }

  return (
    <section>
      <br />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <p>User first name: {user.firstName}</p>
          <p>User last name: {user.lastName}</p>
          <p>email: {user.email}</p>
          <p>role: {user.role}</p>
        </div>
      )}
    </section>
  );
};

export default User;
