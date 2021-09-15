import React from 'react'

const NewEpic = ({epics}) => {
    return (
        <form>
            <label htmlFor="toolkit">Toolkit</label>
            <input id="toolkit" type="text"></input>
            <label htmlFor="title">Title</label>
            <input id="title" type="text"></input>
            <label htmlFor="description">Description</label>
            <textarea id="description"></textarea>
            <label htmlFor="status">Status</label>
            <input id="status" type="text"></input>
            <label htmlFor="priority">Priority</label>
            <input id="priority" type="text"></input>
            <label htmlFor="blocking">Blocking:</label>
            <select id="blocking">
                <option value="">None</option>
                {epics.map((item) => <option key={item._id} value={item._id}>{item.title}</option>)}
            </select>
            <label htmlFor="blocked">Blocked By:</label>
            <select id="blocked">
                <option value="">None</option>
                {epics.map((item) => <option key={item._id} value={item._id}>{item.title}</option>)}   
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewEpic
