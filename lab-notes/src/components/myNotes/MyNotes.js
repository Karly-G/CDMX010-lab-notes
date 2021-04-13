import React, {useState} from 'react';
import '../myNotes/MyNotes.css';

export const MyNotes =({handleSetNote})=>{
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    
    
    return(
        <div className='myNotes'>
            <div className='allNotes'>
                <h2>
                    Mis Notas
                </h2>
                <input className="titleNote" type="text" placeholder="Título" value={title} onChange={e=>setTitle(e.target.value)} required />
                <br></br>
                <input className="textNote" type="text" placeholder="Texto" value={text} onChange={e=>setText(e.target.value)} required />
                <br></br>
                <button className="saveButton" type="button" onClick={()=>{handleSetNote(title,text)}}>
                    Guardar
                </button>
                <h4>
                    Todas mis Notas
                </h4>
            </div>
        </div>
    )
}
