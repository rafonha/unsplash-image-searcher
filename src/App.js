import { useState } from "react";
import { axiosAPI } from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

function App() {

  const [images, setimages] = useState([]);

  let handleClick = async (param) => {
    let searchResult = await axiosAPI(param);

    setimages(searchResult);
  }

  return (
    <>
      <SearchBar 
        onSubmit={handleClick}
      />
      <ImageList 
        images={images}
      />
    </>
  );
}

export default App;
