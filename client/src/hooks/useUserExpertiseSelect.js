import { useCallback, useEffect, useState } from "react";

function useUserCountrySelect(users) {
  const [isFilteringByExpertise, setIsFilteringByExpertise] = useState(false);
  const [filteredByExpertise, setFilteredByExpertise] = useState([]);
  const [expertise, setExpertise] = useState("");

  const handleExpertiseChange = (event) => {
    setExpertise(event.target.value);
  };

  const filterUsersByExpertise = useCallback(
    (expertise) => {
      return users.filter((user) => {
        return user.expertise.includes(expertise);
      });
    },
    [users]
  );

  useEffect(() => {
    if (expertise) {
      if (expertise !== "") {
        setIsFilteringByExpertise(true);
        setFilteredByExpertise(filterUsersByExpertise(expertise));
      }
    } else {
      setIsFilteringByExpertise(false);
      setFilteredByExpertise([]);
    }
  }, [expertise, filterUsersByExpertise]);

  return {
    isFilteringByExpertise,
    filteredByExpertise,
    handleExpertiseChange,
    expertise,
  };
}
export default useUserCountrySelect;
