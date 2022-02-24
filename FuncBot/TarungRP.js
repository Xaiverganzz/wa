const fs = require('fs')

function bertarungSave(db, obj, session) {
	mine = db
	const dbdir = `./media/${session}.json`
	fs.writeFileSync(dbdir, JSON.stringify(obj, null, 2))
}

function setBertarung(session) {
	const dbdir = `./media/${session}.json`
	if (!fs.existsSync(dbdir)) {
		const objtic = {
			status: true,
			session: session,
			Z: null,
			Y: null
		}
		bertarungSave(dbdir, objtic, session)
		return objtic
	} else {
		const read = JSON.parse(fs.readFileSync(dbdir))
		return read
	}
}

module.exports = setBertarung