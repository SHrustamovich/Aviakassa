const {fetch, fetchAll} = require('../../lib/postgres')

const AviaCashBox = `
SELECT
    * 
FROM
   avia_cashbox
`
const TICKET = `
SELECT 
  * 
FROM 
  ticket
WHERE
  avia_id =$1
`
const NEW_TICKET = `
INSERT INTO ticket(name,time,price,avia_id)
VALUES ($1,$2,$3,$4)
RETURNING *
`
const avia  = () => fetchAll(AviaCashBox)
const ticket = (id) => fetchAll(TICKET,id)
const newTicket = (name,time,price,avia_id) => fetchAll(NEW_TICKET,name,time,price,avia_id)
module.exports = {
    avia,
    ticket,
    newTicket
}