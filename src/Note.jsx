import "./css_modules/Note.css"
function Note({title, content, time, onClick}){
    return(
        <div className="Note-component" onClick={onClick}>
            <h2>{title}</h2>
            <p>{time}</p>
        </div>
    );
}

export default Note;