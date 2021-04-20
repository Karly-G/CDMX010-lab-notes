import React, {useEffect, useState} from 'react';
import './Notes.css';
import { NoteForm } from '../noteForm/NoteForm';

import favorite from '../../assets/favorite.png';
import edit from '../../assets/edit.png';
import remove from '../../assets/remove.png';


import {db} from '../../firebase'

export const Notes = () =>{

    const [notes,setNotes]= useState([]);
    const [modifyId, setModifyId]= useState('');

    const addOrEdit = async (noteObject) => {
        if(modifyId === ''){
            await db.collection('notes').doc().set(noteObject);
        }else{
            await db.collection('notes').doc(modifyId).update(noteObject);
            alert('Nota editada exitosamente');
            setModifyId('');
        }
    };

    const onDelete = async(id) =>{
        if(window.confirm('¿Estás segura de que quieres eliminar la nota?')){
            await db.collection('notes').doc(id).delete();
            alert('Nota eliminada exitosamente');
        }
    }

    const getNotes = async() =>{
        db.collection('notes').onSnapshot((querySnapshot) =>{
            const docs = [];
            querySnapshot.forEach((doc) =>{
                docs.push({...doc.data(), id:doc.id});
            });
            setNotes(docs);
        });
    };

    useEffect(() => {
        getNotes();
    }, []);

    return(
        <div>
            <NoteForm {...{addOrEdit, modifyId, notes}} /> 
            <h2>Todas mis Notas</h2>
            <div className='note'>
                {notes.map(note => (
                    <div key={note.id}>
                        <div className='one-note'>
                            <h4>{note.title}</h4>
                            <p>{note.text}</p>
                            <div className='icons'>
                                <img src={favorite} className="favorite" alt="favorite"/>
                                <img src={edit} className="edit" alt="edit" onClick={()=> setModifyId(note.id)} />
                                <img src={remove} className="remove" alt="remove" onClick={()=> onDelete(note.id)}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
