import React from 'react';
import categories from '../../utils'

import Navbar from '../navbar/Navbar';
import Categorie from  './Categorie';

import '../categories/Categories.css';


export const Categories = () => {

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>¡Hola Karly!</h1>
                <div className="categories">
                    {categories.map(categorie => <Categorie src={categorie.src} text={categorie.text} />)}
                </div>
            </div>
    </div>
    );
}

export default Categories;