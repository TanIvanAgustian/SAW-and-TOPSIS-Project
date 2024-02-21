import { gql, useMutation, useQuery, useSubscription } from "@apollo/client"

{/*Menampilkan semua User*/}
const getUsers = gql`
subscription MySubscription {
    users {
      image
      email
      name
      position
      status
      voice_type
      password
      id
      instagram
      facebook
      twitter
    }
  }
`
export function GraphQlUsers(){
    const {data,loading,error} =  useSubscription(getUsers)
    return {data, loading, error}
}

const getLeader = gql`
subscription MySubscription {
    users(where: {position: {_eq: "ketua"}, _and: {status: {_eq: true}}}) {
      image
      name
      position
      voice_type
    }
  }`

export function GraphQlLeader(){
    const {data,loading,error} = useSubscription(getLeader)
    return {data, loading, error}
}