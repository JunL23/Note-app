import Note from "./Note";
import "./css_modules/Noteholder.css"
function Notebar({lists = [], displayNote}){
    const newitem = lists;
    return (
        <>
            <div className="note-container">
                <h2 className="container-title">Note List</h2>
                <ul>
                    {newitem.map(t => <li key = {t.id}><Note title = {t.title} content = {t.content} time = {t.time} onClick = {() => {displayNote(t)}}></Note></li>)}
                </ul>
            </div>
        </>
        )
}

export default Notebar;