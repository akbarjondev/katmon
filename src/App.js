import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import { useState } from 'react'
import { data } from './Components/Data/Data'
import { Katmon } from './Components/Katmon/Katmon'

function App() {

	const [database, setDatabase] = useState([...data])
	const katmon = new Katmon(database)

	// console.log(katmon)

  return (
    <>
    	<div className="bg-primary p-4 w-100">
    		<div className='h3 text-white'>Katmon</div>
    	</div>

    	<div className="container d-flex flex-column justify-content-center align-items-center">
	      
	      <div className="text-input form-group d-flex mt-4 align-items-center">
	      	<div className="mr-3">
			      <input className="form-control mb-1" type="text" placeholder="Sum" />
			      <input className="form-control" type="text" placeholder="Comment" />
	      	</div>
	      	<button className="btn btn-success"><b>Add</b></button>
	      </div>

	      <ul className="list-group w-50 mt-4">
		      {
		      	data.map(d => <li className="list-group-item d-flex justify-content-between" key={d.id}>
									      		<div>{d.comment}</div>
									      		<div>{d.sum}</div>
								      		</li>)
		      }
	      	
	      </ul>
    	</div>
    </>
  );
}

export default App;
