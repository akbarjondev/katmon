import { useRef } from 'react'

import './Modal.css'

function Modal({ children, classVal, modalController }) {

	const closeModal = (evt) => {
		// close modal by useState in App
		modalController(false)
	}

	return (
		<div className={ classVal ? 'modalComp modalComp--open' : 'modalComp' }>
			<div className="modalComp__inner d-flex flex-column">
				<div className="modalComp__inner-top d-flex justify-content-end">
					<button className="btn btn-danger btn-sm" onClick={ closeModal }>X</button>
				</div>
				<div className="modal-body modalComp__inner-body flex-grow-1">
					<h3 className="h4">{ children.comment }</h3>
					<div className="form-group d-flex align-items-center mb-0">
							<div className="text-muted">Date</div>
							<div className="modal-body__date">
								{ children.date }
							</div>
					</div>
					<div className="form-group d-flex align-items-center mb-0">
						<div className="text-muted">Sum</div>
						<input className="border border-0 mb-2" type='text' value={ children.sum } />
					</div>
					<div className="form-group d-flex align-items-center mb-0">
						<div className="text-muted">Comment</div>
						<input className="border border-0" type='text' value={ children.comment } />
					</div>

				</div>
				<div className="modalComp__inner-bottom d-flex justify-content-end">
					<button className="btn btn-success btn-sm">Save</button>
				</div>
			</div>
		</div>
	)
}

export default Modal