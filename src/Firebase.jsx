import React, { useEffect, useState } from "react";
import Auth from "./components/auth";
import { db, auth, store } from "./config/Config";
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

const Firebase = () => {

  const [movieList, setMovieList] = useState([]);
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(true);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [fileUpload, setFileUpload] = useState(null);
  const movieCollectionRef = collection(db, "movies");


  //when a user clicks on submit movie button, movie details should display on screen 
  const onSubmitMovie = async () => {
    try {
      console.log(auth);  
      await addDoc(movieCollectionRef, { title: newMovieTitle, ReleaseDate: newReleaseDate, receivedAnOscar: isNewMovieOscar, userID: auth?.currentUser?.uid });

    } catch (error) { 
       console.error(error); 
      }
  };


  //delete a movie
  const deleteMovie = async (id) => {
    const movieDoc = doc(db, "movies", id);
    await deleteDoc(movieDoc);
  };


  //update movie title
  const updateMovieTitle = async (id) =>{
    try {
      const movieDoc = doc(db,"movies",id)
      await updateDoc(movieDoc, {title: updatedTitle});
    } catch (error) {
      console.error(error);
    }
  }


  //fetching data
  useEffect(() => {
    const getMovieList = async () => {
      try {
        //read the data from database and set movie list
        const data = await getDocs(movieCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setMovieList(filteredData);
        // console.log(filteredData);
      } catch (error) {
        console.error(error);
      }
    };  

    getMovieList();
  }, [onSubmitMovie]);

  const uploadFile = async () =>{
    if(!fileUpload) return;
    const folderRef = ref(store, `projectFiles/${fileUpload.name}`);
    try {
      await uploadBytes(folderRef, fileUpload);
    } catch (error) {
      console.error(error);      
    }
  }

  return (
    <div>
      <h1>Firebase Tutorial</h1>

      <Auth />


      {/* Creating a new movie */}
      <div>
        <input type="text"     placeholder="Movie Title"  onChange={(e) => setNewMovieTitle(e.target.value)}/>

        <input type="number"   placeholder="Release Date" onChange={(e) => setNewReleaseDate(Number(e.target.value))}/>

        <input type="checkbox" checked={isNewMovieOscar}  onChange={(e) => setIsNewMovieOscar(e.target.checked)}/>
        <label htmlFor="">Received An Oscar</label>

        <button onClick={onSubmitMovie}>Submit Movie</button>
      </div>


      <div>
        {movieList.map((movie) => (
          <div key={movie.id}>
            <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}> {movie.title} </h1>

            <p>Date: {movie.ReleaseDate}</p>

            <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>

            <input  onChange={(e) => setUpdatedTitle(e.target.value)} placeholder="new title"/>

            <button onClick={()=> updateMovieTitle(movie.id)}>Update Title</button>
          </div>
        ))}
      </div>
        

      <div>
        <input type="file"  onChange={(e)=> setFileUpload(e.target.files[0])}/>

        <button onClick={uploadFile}>Uplaod File</button>
      </div>
    </div>
  );
};

export default Firebase;
