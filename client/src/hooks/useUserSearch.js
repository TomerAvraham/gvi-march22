import { useCallback, useState } from "react";

function useUserSearch(users) {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  const searchUsers = useCallback(
    (query) => {
      if (query) {
        const filtered = users.filter(
          (user) =>
            user.firstName.toLowerCase().includes(query.toLowerCase()) ||
            user.lastName.toLowerCase().includes(query.toLowerCase()) ||
            user.email.toLowerCase().includes(query.toLowerCase())
        );
        if (filtered.length > 0) {
          setFilteredUsers(filtered);
          setIsFiltering(true);
        } else {
          setFilteredUsers([]);
          setIsFiltering(true);
        }
      } else {
        setFilteredUsers([]);
        setIsFiltering(false);
      }
    },
    [users]
  );

  return {
    filteredUsers,
    isFiltering,
    searchUsers,
  };
}

export default useUserSearch;
