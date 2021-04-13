import React from 'react';
import '../notes/Notes.css';
import favorite from '../../assets/favorite.png';
import edit from '../../assets/edit.png';
// import delete from '../../assets/delete.png';

export const Notes =()=>{
    return(
        <div className='notes'>
            <div className='note'>
            <p>
                Title
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis, rem illo ut sunt, odit itaque incidunt perferendis exercitationem ad assumenda. Aliquid voluptatem natus voluptatum at ea delectus optio nulla!
            </p>
            <img src={favorite} className="favorite" alt="favorite" />
            <img src={edit} className="edit" alt="edit" />
            {/* <img src={delete} className="delete" alt="delete" /> */}
        </div>
        </div>
    )
}