import React,{useState, useEffect} from "react";
import './NoteForm.css'
import Navbar from '../navbar/Navbar';
import { db } from "../../firebase";

export const NoteForm = (props) =>{
    
    const initialStateValues = {
        title: '',
        text: '',
    };

    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    };

    const handleSubmit = e =>{
        e.preventDefault();
        props.addOrEdit(values);
        setValues({...initialStateValues})
    };

    const getNoteById = async (id) =>{
        const doc = await db.collection('notes').doc(id).get();
        setValues({...doc.data()});
    }

    useEffect(()=> {
        if (props.modifyId === ''){
            setValues({...initialStateValues})
        }else{
            getNoteById(props.modifyId);
        }
    }, [props.modifyId]);

    return(
        <div>
            <Navbar/>    
            <form className="createNote" onSubmit={handleSubmit}>
                <h2>Mis Notas</h2>
                <div className="form-group">
                    <input name="title" className="titleNote" type="text" placeholder="Título" onChange={handleInputChange} value={values.title} />
                </div>
                <div className="form-group">
                    <textarea name="text" rows="5" className="textNote" type="text" placeholder="Texto" onChange={handleInputChange} value={values.text}></textarea>
                </div>
                <button className="saveButton">
                    {props.modifyId === ''? 'Guardar':'Editar'}
                </button>
            </form>
        </div>
    )
};