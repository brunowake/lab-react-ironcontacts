import "./App.css";
import Contacts from "./components/Contacts";
import contacts from "./contacts.json";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const first5Contacts = contacts.slice(0, 5);

function App() {
  const [remainingContacts, setRemainingContacts] = useState(
    contacts.slice(5, contacts.length)
  );

  const [renderList, setRenderList] = useState([...first5Contacts]);

  function handleRandomContactClick(arr) {
    const randomNumber = Math.floor(Math.random() * arr.length);

    setRenderList([...renderList, arr[randomNumber]]);

    const auxArr = [...remainingContacts];
    auxArr.splice(randomNumber, 1);

    setRemainingContacts(auxArr);
  }

  function handlePopularitySortClick(arr) {
    const sortedArr = [...arr].sort((a, b) => b.popularity - a.popularity);

    setRenderList(sortedArr);
  }

  function handleNameSortClick(arr) {
    const sortedArr = [...arr].sort((a, b) => a.name.localeCompare(b.name));

    setRenderList(sortedArr);
  }

  function handleDeleteClick(arr, index) {
    const auxArr = [...arr];
    auxArr.splice(index, 1);
    setRenderList(auxArr);
  }
  return (
    <div className="App">
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        marginTop="20px"
      >
        <Button
          variant="contained"
          onClick={(_) => handleRandomContactClick(remainingContacts)}
        >
          Add Random Contact
        </Button>
        <Button
          variant="contained"
          onClick={(_) => handlePopularitySortClick(renderList)}
        >
          Sort by popularity
        </Button>
        <Button
          variant="contained"
          onClick={(_) => handleNameSortClick(renderList)}
        >
          Sort by name
        </Button>
      </Stack>

      <Contacts list={renderList} deleteCB={handleDeleteClick} />
    </div>
  );
}

export default App;
