import React from 'react'
import './NewCollections.css'
import newCollection from '../Assets/new_collections'
import Items from '../Items/Items'
const NewCollections = () => {
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className="collections">
                {newCollection.map((item,i) => {
                    return <Items key={i} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default NewCollections
