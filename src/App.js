import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import { useState, useRef } from 'react'
import Modal from './Components/Modal/Modal'
import { data } from './Components/Data/Data'
import { Katmon } from './Components/Katmon/Katmon'

function App() {

	const [database, setDatabase] = useState([...data])
	const katmon = new Katmon(database)
	
	const refSum = useRef()
	const refComment = useRef()
	const refType = useRef()

	const [openModal, setOpenModal] = useState('')
	const [dataForEdit, setDataForEdit] = useState(false)

	const createData = (evt) => {
		if(refSum.current.value.length === 0 || refComment.current.value.length === 0)
			return

		katmon.setData = refSum.current.value
		katmon.setComment = refComment.current.value
		katmon.setIsCompleted = false
		katmon.setType = refType.current.value

		setDatabase([katmon, ...database])

		refSum.current.value = ''
		refComment.current.value = ''
	}

	const deleteData = (evt) => {
		katmon.deleteData = evt.currentTarget.dataset.id
		setDatabase([...database])
	}

	const openEditData = (evt) => {
		setDataForEdit(katmon.getData(evt.currentTarget.dataset.id))
		setOpenModal(true)
		// katmon.editData = evt.currentTarget.dataset.id
	}

  return (
    <>
    	<div className="bg-primary p-2 w-100">
    		<div className='h3 text-white'>Katmon</div>
    	</div>

    	<div className="container d-flex flex-column justify-content-center align-items-center mb-4">
	      
	      <div className="text-input form-group mt-3">
	      	<div className="d-flex align-items-center mr-3">
		      	<select className="form-control" ref={ refType }>
		      		<option value="expenses">Expenses</option>
		      		<option value="income">Income</option>
		      	</select>
			      <input className="form-control mx-2" ref={ refSum } type="text" placeholder="Sum" />
			      <input className="form-control mr-2" ref={ refComment } type="text" placeholder="Comment" />
		      	<button className="btn btn-success" onClick={ createData }><b>Add</b></button>
	      	</div>
	      </div>

	      <ul className="list-group w-50 mt-4">
		      {
		      	database.sort((a, b) => b - a).map(d => {
		      		return (
		      			<li className="list-group-item p-1 d-flex justify-content-between align-items-center" key={d.id}>
				      		<div className="d-flex justify-content-between w-100 mr-2">
					      		<div>{d.comment}</div>
					      		<div>{(d.type !== 'income' ? '-' : '') + d.sum}</div>
				      		</div>
			      			<button className="btn btn-warning btn-sm" onClick={ openEditData } data-id={ d.id }>edit</button>
			      			<button className="btn btn-danger btn-sm ml-2" onClick={ deleteData } data-id={ d.id }>delete</button>
			      		</li>
		      		)
		      	})
		      }
	      	
	      </ul>
    	</div> {/*End of container*/}

    	<Modal classVal={ openModal } modalController={ setOpenModal }>
    		{
					Boolean(dataForEdit) ? dataForEdit : ''
    		}
    	</Modal>
    </>
  );
}

export default App;
