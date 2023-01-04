import react, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note"
import EventNoteIcon from '@mui/icons-material/EventNote';
import { width } from "@mui/system";





function App() {
    const [notesarr, setnotesarr] = useState([]);
    const [chk, setchk] = useState(true);
    function addnote(noteitem) {

        setnotesarr(pre => {
            return [...pre, noteitem];
        })
    }

    function delnote(id) {
        setnotesarr(pre => {
            return (
                pre.filter((noteitem, index) => {
                    return id !== index;
                })
            );
        })
    }
    function update() {
       
      setchk(false);
        
    }
  

    return (

        <div>
            <Header />
            <CreateArea onadd={addnote} onclick={update} />
            {notesarr.map((item, index) => {
                return (<Note
                    key={index}
                    id={index}
                    title={item.title}
                    content={item.content}
                    del={delnote}
                    
                />)
            })}
            {chk &&

(<div><h1 style={{ color: "#b0b2b5", position: "relative", textAlign: "center", marginTop: "200px" }}><EventNoteIcon
    style={{ fontSize: 90 }}
/></h1>
    <h3 style={{ color: "#5f6368", position: "relative", textAlign: "center" }}>Notes you add appear here </h3></div>)
}
            <Footer />
        </div>
    )
}



export default App;