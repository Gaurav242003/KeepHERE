import React, { useState } from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const [note,setnote]=useState({title:"",content:""});
  const [flex,setflex]=useState(false);
  function update(event) {
      const {name,value}=event.target;

      setnote(prevval => {
        return {...prevval,[name]:value}; 
      })
    }

    function submit(event)
    {
        props.onadd(note);
        event.preventDefault();
        setnote({title:"",content:""});
        props.onclick();

    }
  
    function expand()
    {
        setflex(true);
    }


  return (
    <div>
      <form className="create-note">
      {flex && <input onChange={update} name="title" placeholder="Title"  value={note.title} /> }
        <textarea onClick={expand} onChange={update} name="content" placeholder="Take a note..." value={note.content} rows={flex?"3":"1"}  />
      { flex && <Zoom in={true}><Fab color="secondary" onClick={submit} ><NoteAddIcon /></Fab></Zoom> }
      </form> 
    </div>
  );
}

export default CreateArea;