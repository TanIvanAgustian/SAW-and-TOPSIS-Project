import { gql, useMutation, useQuery, useSubscription } from "@apollo/client"

{/*Menampilkan semua User*/}
const getUsers = gql`
subscription MySubscription {
    users {
        email
        id
        image
        name
        password
        position
        status
        voice_type
        }
    }
`
export function GraphQlUsers(){
    const {data,loading,error} = useSubscription(getUsers)
    return {data, loading, error}
}