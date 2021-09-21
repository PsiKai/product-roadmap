import React, { Fragment } from 'react'
import { CircularProgress } from '@mui/material'

const DeleteModal = ({ confirm, cancel, epicName, loading }) => {
    const confirmDelete = () => {
        confirm()
    }

    const cancelDelete = (e) => {
        if (e.target !== e.currentTarget) return
        e.stopPropagation()
        cancel(false)
    }

    return (
        <div className="modal-backdrop" onClick={cancelDelete}>
            <div className="delete-modal">
                <h2>Are you sure you want to delete this epic?</h2>
                <h3>"{epicName}"</h3>
                <p>This action is permanent, and will compeletely remove all records of this epic.</p>
                <div className="modal-button-group">
                    <button onClick={confirmDelete}>
                        {loading ?
                            <Fragment>Deleting <CircularProgress/></Fragment>
                            :
                            "Delete"
                        }
                    </button>
                    <button onClick={cancelDelete}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal
