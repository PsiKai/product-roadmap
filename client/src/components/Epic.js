import React, { useState } from 'react'
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Epic = ({ epic: { title, status, description, dependencies, _id, toolkit }, edit }) => {
    const [focus, setFocus] = useState(false)

    const deleteEpic = async () => {
        try {
            const res = await axios.delete("/epic/delete", { data: { id: _id } })
            console.log(res.data);
            window.location.reload()
        } catch (error) {
            console.error(error)
        }
    }

    const direction = focus ? "grow" : "shrink"
    const height = {animation: `${direction} 400ms ease forwards`}

    return (
        <div className="epic__card" onClick={() => setFocus(!focus)}>
            <h3>{title}</h3>
            <div className="hidden epic__card--info" style={height}>
                <div className="epic__card--buttons">
                    <button type="button" id={_id} name={toolkit} onClick={edit} className="action"><EditIcon/></button>
                    <button type="button" id={_id} onClick={deleteEpic} className="action"><DeleteIcon/></button>
                </div>
                <p>{description}</p>
                <h4>{status}</h4>
                <div className="epic__card--container">
                {dependencies.map((dep, i) => {
                    return  <div key={dep.id} className="epic__card--dependency">
                                <h4>{dep.title}</h4>
                                <p>{dep.description}</p>
                                <h5>{dep.status}</h5>
                            </div>
                })}
                </div>
            </div>
        </div>
    )
}

export default Epic
