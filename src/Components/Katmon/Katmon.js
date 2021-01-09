class Katmon {

	id
	date
	sum
	comment
	isCompleted
	type

	database

	constructor(database) {
		this.database = database
	}

	//* set behaviours *//
	set setData(sumVal) {
		this.sum = sumVal
		
		this.id = (new Date()).getTime()
		this.date = this._getDateTime()
	}

	set deleteData(id) {
		this.database.splice(this.database.findIndex(data => data.id === Number(id)), 1)
	}

	set editData(id) {
		let needToEdit = this.database.findIndex(data => data.id === Number(id))
		console.log(needToEdit)
	}

	//* set states *//
	set setComment(commentVal) {
		this.comment = commentVal
	}

	set setIsCompleted(isCompletedVal) {
		this.isCompleted = isCompletedVal
	}

	set setType(typeVal) {
		this.type = typeVal
	}

	getData(id) {
		return this.database.find(data => data.id === Number(id))
	}

	/**Utilities**/
	_getDateTime() {
		const date = new Date()
		return `${date.getDate().toString().padStart(2, 0)}-${(date.getMonth() + 1).toString().padStart(2, 0)}-${date.getFullYear()}`
	}
}

module.exports.Katmon = Katmon