import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Notes from '../components/notes/Notes';
import { prettyDOM } from '@testing-library/react';

test('renders content',() => {
    const createNotes= {
        content:'Component testing is done with react-testing-library',
    }
    const component = render(
        <Notes createNotes={createNotes}/>
    )
    expect(component.container).toBeInTheDocument(
        'Component testing is done with react-testing-library'
    )
});

//Se puede confirmar que un elemento esta en el texto del documento o no.
test('renders content',() => {
    const setUpdate= {
        content:'Component testing is done with react-testing-library',
    }
    const component = render(
        <Notes setUpdate={setUpdate}/>
    )
    expect(component.container).toBeInTheDocument(
        'Component testing is done with react-testing-library'
    )
});

//encontrar el elemento HTML donde se imprime la nota, y pedir que la muestre en la consola.
    test('renders content', () => {
    const createNotes = {
        content: 'Component testing is done with react-testing-library',
    }
    const component = render(
        <Notes createNotes ={createNotes} />
    )
    const inputNote = component.container.querySelector('.inputNote')

    console.log(prettyDOM(inputNote))
});

    test('renders content', () => {
    const createNotes = {
        content: 'Component testing is done with react-testing-library',
    }
    const component = render(
        <Notes createNotes ={createNotes} />
    )
    const printedNote = component.container.querySelector('.printedNote')
    console.log(prettyDOM(printedNote))
});




// test('renders content', () => {
//     const note = {
//         content: 'This is a test',
//         important: true
//     }
//     const component = render(<Notes />)
//     //console.log(component);
//     component.getByText('This is a test')

//     component.getByAltText('27 de septiembre')
// })