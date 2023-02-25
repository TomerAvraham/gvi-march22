import { useCallback, useEffect, useState } from "react";

function useUserCountrySelect(users) {
  const [isFilteringByCountry, setIsFilteringByCountry] = useState(false);
  const [filteredByCountry, setFilteredByCountry] = useState([]);
  const [country, setCountry] = useState("");

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const filterUsersByCountry = useCallback(
    (country) => {
      return users.filter((user) => {
        return user.location?.country === country;
      });
    },
    [users]
  );

  useEffect(() => {
    if (country) {
      setIsFilteringByCountry(true);
      setFilteredByCountry(filterUsersByCountry(country));
    } else {
      setIsFilteringByCountry(false);
      setFilteredByCountry([]);
    }
  }, [country, filterUsersByCountry]);

  return {
    filteredByCountry,
    isFilteringByCountry,
    handleCountryChange,
    country,
  };
}
export default useUserCountrySelect;
