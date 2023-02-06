import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Typography,
  Grid,
  Button
} from "@mui/material";

import filterDataByArguments from "../../utils/filterDataByArguments";
import classes from "./searchBar.module.css";
import UserCard from "../../components/cards/userCard/UserCard";
import dataDummy from "../../data/data.json";

function SearchBar() {
  const [data, setData] = useState(dataDummy);
  const [search, setSearch] = useState(dataDummy);
  const [input, setInput] = useState([]);
  // const [userDataUrl, setUrl] = useState('http://localhost:9001/user/user/all')
  
  // useEffect(() => {
  //     const fetchData = async () =>{
  //       try {
  //         const {data: response} = await axios.get(userDataUrl);
  //         setData(response);
  //         setSearch(response);
  //       } catch (error) {
  //         console.error(error.message);
  //       }
  //     }
  //     fetchData();
  //   }, [userDataUrl]);

  const [country, setCountry] = useState("");
  const countries = ["Israel", "United States", "Belgium", "Germany"];

  const [industry, setIndustry] = useState("");
  const IndustryList = [
    "Building",
    "Real estate",
    "Construction Worker",
    "Export/Import",
    "Architect",
  ];

  const handleInput = (e) => {
    e.preventDefault();
    // setCountry('');
    // setIndustry('')
    const keyword = e.currentTarget.value;
    setInput(keyword);

    if (input !== 0) {
      setSearch(filterDataByArguments(data, "first_name", keyword));
    }
    if (country !== "") {
      const countryFiltered = filterDataByArguments(data, "country", country);
      const inputFiltered = filterDataByArguments(
        countryFiltered,
        "first_name",
        keyword
      );
      setSearch(inputFiltered);
    }
    if (industry !== "") {
      const industryFiltered = filterDataByArguments(data, "role", industry);
      const inputFiltered = filterDataByArguments(
        industryFiltered,
        "first_name",
        keyword
      );
      setSearch(inputFiltered);
    }
    if (industry && country !== "") {
      const industryFiltered = filterDataByArguments(data, "role", industry);
      const countryFiltered = filterDataByArguments(
        industryFiltered,
        "country",
        country
      );
      const inputFiltered = filterDataByArguments(
        countryFiltered,
        "first_name",
        keyword
      );
      setSearch(inputFiltered);
      console.log(123);
    }
  };

  const handleChangeCountry = async (e) => {
    const keyword = e.target.value;
    setCountry(keyword);
    if (keyword === "Any") {
      const inputFiltered = filterDataByArguments(data, "first_name", input);
      const industryFilter = filterDataByArguments(
        inputFiltered,
        "role",
        industry
      );
      setSearch(industryFilter);
    }
    if (input.length === 0) {
      const results = filterDataByArguments(data, "country", keyword);
      setSearch(results);
    }
    if (input.length !== 0) {
      const inputFiltered = filterDataByArguments(data, "first_name", input);
      const finalResults = filterDataByArguments(
        inputFiltered,
        "country",
        keyword
      );
      setSearch(finalResults);
    }
    if (industry !== "") {
      const inputFiltered = filterDataByArguments(data, "role", industry);
      const finalResults = filterDataByArguments(
        inputFiltered,
        "country",
        keyword
      );
      setSearch(finalResults);
    }
    if (industry && input !== "") {
      const inputFilter = filterDataByArguments(data, "first_name", input);
      const industryFilter = filterDataByArguments(
        inputFilter,
        "role",
        industry
      );

      const countryFilter = filterDataByArguments(
        industryFilter,
        "country",
        keyword
      );
      setSearch(countryFilter);
    }
  };

  const handleChangeIndustry = async (e) => {
    const keyword = e.target.value;
    setIndustry(keyword);
    if (input.length === 0) {
      const results = filterDataByArguments(data, "role", keyword);
      setSearch(results);
    }
    if (keyword === "Any") {
      const inputFiltered = filterDataByArguments(data, "first_name", input);
      const industryFilter = filterDataByArguments(
        inputFiltered,
        "role",
        industry
      );
      setSearch(industryFilter);
    }
    if (input.length !== 0) {
      const inputFiltered = filterDataByArguments(data, "first_name", input);
      const finalResults = filterDataByArguments(
        inputFiltered,
        "role",
        keyword
      );
      setSearch(finalResults);
    }
    if (country !== "") {
      const countryFiltered = filterDataByArguments(data, "country", country);
      const finalResults = filterDataByArguments(
        countryFiltered,
        "role",
        keyword
      );
      setSearch(finalResults);
      console.log(finalResults);
    }
    if (country && input !== "") {
      const inputFilter = filterDataByArguments(data, "first_name", input);
      const countryFilter = filterDataByArguments(
        inputFilter,
        "country",
        country
      );
      const industryFilter = filterDataByArguments(
        countryFilter,
        "role",
        keyword
      );
      setSearch(industryFilter);
    }
  };

  const restFilter = () => {
    setCountry("")
    setIndustry("")
    setInput([])
    setSearch(data)
  }

  return (
    <>
      <Box className={classes.main_body}>
        <Box className={classes.main_form_box} sx={{ boxShadow: 3 }}>
          <Typography sx={{ borderBottom: "2px solid black" }}>
            <h1>Find your Mentor today:</h1>
          </Typography>
          
          <Box>
            <TextField
              className={classes.input_field}
              id="filled-basic"
              label="Type name to search:"
              type="search"
              variant="filled"
              onChange={handleInput}
              value={input}
              InputLabelProps={{
                style: { color: "#000" },
              }}
            />
          </Box>

          <Box className={classes.filter_box}>
            <Typography>
              <h4>Filters:</h4>
            </Typography>

            <FormControl sx={{ width: "150px" }}>
              <InputLabel className={classes.filter_country}>
                country
              </InputLabel>
              <Select
                sx={{
                  color: "#000",
                }}
                value={country}
                label="country"
                onChange={handleChangeCountry}
              >
                {countries.map((country) => (
                  <MenuItem value={country}>{country}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ width: "150px"}}>
              <InputLabel className={classes.filter_industry}>
                Industry
              </InputLabel>
              <Select
                sx={{
                  color: "#000",
                }}
                value={industry}
                label="Industry"
                onChange={handleChangeIndustry}
              >
                {IndustryList.map((Industry) => (
                  <MenuItem value={Industry}>{Industry}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="outlined" onClick={restFilter} sx={{color: '#000'}}>Rest</Button>

          </Box>

        </Box>
        <Grid
          container
          spacing={2}
          columns={{ xs: 4, sm: 8, md: 8 }}
          className={classes.cards}
        >
          {search.map((data) => (
            <Grid item xs={12} sm={4} md={2} className={classes.card}>
              <item>
                <UserCard user={data} />
              </item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default SearchBar;
