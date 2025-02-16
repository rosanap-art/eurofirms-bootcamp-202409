import { Listbox, ListboxLabel, ListboxOption } from '../components/listbox'
import { useState } from 'react'

function ItemTypesListBox() {
    const [formData, setFormData] = useState({ type: 'Clothing' })

    const handleChange = (selectedValue) => {
        // Update the state with the new type
        setFormData((prevState) => ({
            ...prevState,
            type: selectedValue,
        }))
    }

    return (

        <Listbox as="div" name="type" defaultValue="clothing"
            id="type"
            value={formData.type}
            onChange={handleChange}>
            <ListboxOption value="accesories">
                <ListboxLabel>Fashion Accesories</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="toys">
                <ListboxLabel>Toys</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="art">
                <ListboxLabel>Art</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="books">
                <ListboxLabel>Books</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="entertainment">
                <ListboxLabel>Gaming & Entertainment</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="media">
                <ListboxLabel>Media Devices</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="tech">
                <ListboxLabel>Electronic Devices</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="collectables">
                <ListboxLabel>Collectables</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="sports">
                <ListboxLabel>Sports & Leisure</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="social">
                <ListboxLabel>Social & Companionship</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="homeAssistance">
                <ListboxLabel>Home Assistance</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="lessons">
                <ListboxLabel>Education & Lessons</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="homeSupport">
                <ListboxLabel>Free Home Support</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="furniture">
                <ListboxLabel>Home Furniture</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="appliances">
                <ListboxLabel>Electrical Appliances</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="gardening">
                <ListboxLabel>Gardening</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="farming">
                <ListboxLabel>Farming & Horticulture</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="finance">
                <ListboxLabel>Free Finance Support</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="business">
                <ListboxLabel>Business Equipment & Furniture</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="construction">
                <ListboxLabel>Construction Materials & Tools</ListboxLabel>
            </ListboxOption>
        </Listbox>
    )
}

export default ItemTypesListBox