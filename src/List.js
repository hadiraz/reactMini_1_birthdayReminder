import React from 'react' ;

function List({people}) {
    return (
        <ul className="items-container">
            {
                people.map((value,index) => (
                    
                    <li key={value.id}
className="birthday-item">
                        <img src={value.image} alt={value.name} />
                        <span className="info-box">
                        <p className="name">{value.name}</p>
                        <p className="age">{value.age}</p>
                        </span>
                    </li>
                ))
            }
        </ul>
    )
}

export default List
