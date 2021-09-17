import React from 'react'
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Epic = ({ epic: { title, status, description, dependencies, _id, toolkit }, edit }) => {

    const deleteEpic = async () => {
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
            <button type="button" id={_id} name={toolkit} onClick={edit} className="action"><EditIcon/></button>
            <button type="button" id={_id} onClick={deleteEpic} className="action"><DeleteIcon/></button>
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
