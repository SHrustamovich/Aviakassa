const {gql} = require('apollo-server-express')

module.exports = gql`
type aviaCash {
    id:ID!
    address:String!
}
type Ticket {
    id:ID!
    name:String!
    time:String!
    price:String!
    avia_id:Int!
}
type Query {
    aviaCash:[aviaCash!]!
    Ticket(avia_id:ID!):[Ticket!]!
}
type Mutation {
    newTicket(name:String! time:String! price:String! avia_id:ID!):[Ticket]
}
`