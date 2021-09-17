import React from 'react'
import axios from 'axios'

const Epic = ({ epic: { title, status, description, dependencies, _id, toolkit }, edit }) => {

    const deleteEpic = async () => {
        console.log(_id);
        try {
            const res = await axios.delete("/epic/delete", { data: { id: _id } })
            console.log(res.data);
            window.location.reload()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h3>{title}</h3>
            <button type="button" id={_id} name={toolkit} onClick={edit}>Edit</button>
            <button type="button" id={_id} onClick={deleteEpic}>Delete</button>
            <p>{description}</p>
            <h4>{status}</h4>
            {dependencies.map(dep => {
                return  <div key={dep.id}>
                            <h4>{dep.title}</h4>
                            <p>{dep.description}</p>
                            <h5>{dep.status}</h5>
                        </div>
            })}
        </div>
    )
}

export default Epic
