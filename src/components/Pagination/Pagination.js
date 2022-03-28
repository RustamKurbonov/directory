import React from 'react'

const Pagination = props => {

    const numder = []

    for(let i = 1; i <= Math.ceil(props.total / props.count); i++){
        numder.push(i)
    }

    return (
        <div className='pagination'>
            <ul className='pagination__list'>
                {
                    numder.map(i => (
                        <li onClick={() => props.paginationFunction(i)} className='pagination__link' key={i}>
                            <span>{i}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination