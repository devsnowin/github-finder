import React from "react";
import UserCards from "../../userCards/UserCards.component";
import { SearchBar } from "../../SearchBar/SearchBar.component";

const Home = () => (
  <>
    <SearchBar />
    <UserCards />
  </>
);

export default Home;
