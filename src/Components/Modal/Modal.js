import { useState, useRef } from 'react'

import './Modal.css'

function Modal({ children, classVal, modalController, editDataController }) {

	const [sum, setSum] = useState('')
	const [comment, setComment] = useState('')

	const refSumInput = useRef()
	const refCommentInput = useRef()

	const closeModal = (evt) => {
		// close modal by useState in App
		modalController(false)
	}

	const saveEditedData = () => {
		setSum(refSumInput.current.value)
		setComment(refCommentInput.current.value)
		
		editDataController({
			sum: refSumInput.current.value,
			comment: refCommentInput.current.value
		})
	}

	const realTimeEdit = (evt) => {
		if(evt.target.classList[1] === 'input-data--sum') {
			setSum(evt.target.value)
		} else {
			setComment(evt.target.value)
		}
	}

	return (
		<div className={ classVal ? 'modalComp modalComp--open' : 'modalComp' }>
			<div className="modalComp__inner d-flex flex-column">
				<div className="modalComp__inner-top d-flex justify-content-end">
					<button className="btn btn-danger btn-sm" onClick={ closeModal }>X</button>
				</div>
				<div className="modal-body modalComp__inner-body flex-grow-1">
					<h3 className="h4">{ children.comment }</h3>
					<div className="form-group d-flex align-items-center mb-2">
							<div className="text-muted">Date</div>
							<div className="modal-body__date">
								{ children.date }
							</div>
					</div>
					
					<div className="form-group d-flex align-items-center mb-2">
						<div className="text-muted">Sum</div>
						<div className="input-wrapper">
							<div className="text-muted text-muted-input">
								{ Boolean(sum) ? sum : `${children.sum}` }
							</div>
							<input className="input-data input-data--sum border border-0 mb-2" onChange={ realTimeEdit } ref={ refSumInput } type='number' />
						</div>
					</div>

					<div className="form-group d-flex align-items-center mb-0">
						<div className="text-muted">Comment</div>
						<div className="input-wrapper">
							<div className="text-muted text-muted-input">
								{ Boolean(comment) ? comment : `${children.comment}` }
							</div>
							<input className="input-data input-data--comment border border-0 mb-2" onChange={ realTimeEdit } ref={ refCommentInput } type='text' />
						</div>
					</div>

				</div>
				<div className="modalComp__inner-bottom d-flex justify-content-end">
					<button className="btn btn-success btn-sm" onClick={ saveEditedData }>Save</button>
				</div>
			</div>
		</div>
	)
}

export default Modal
