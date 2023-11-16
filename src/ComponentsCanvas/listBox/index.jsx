import React from 'react'
import './style.css'


const ListBox = ({title, titleTwo, items, itemsLi}) => {

    return <div className="list-box scene-box">
        <div>
        <h2>{title}</h2>
        {
            items.map((item, index) => <h3 key={index}>{item}</h3>)
        }
        </div>
        <div>
            <h2>{titleTwo}</h2>
            <ul>
              {
                itemsLi.map((itemLi, index) => <li key={index}>{itemLi}</li>)
              }
            </ul>
            
        </div>
    </div>
}

export default ListBox