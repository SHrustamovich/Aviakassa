const  model =  require('./model')
module.exports = {
Query: {
    aviaCash:async() => {
        return  await model.avia()
    },
   Ticket:async(_,{avia_id}) => {
       return  await model.ticket(avia_id)
   }
},
Mutation: {
    newTicket:async(_,{name,time,price,avia_id}) => {
       return await model.newTicket(name,time,price,avia_id)
   }
}
}