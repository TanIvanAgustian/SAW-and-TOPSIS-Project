import { gql, useMutation, useSubscription } from "@apollo/client";

const getAllKategory = gql`
subscription MySubscription {
  kategori(order_by: {id: asc}) {
      id
      name
      weight
    }
  }
`

export function GraphQlKategory(){
    const {data,loading,error} = useSubscription(getAllKategory);
    return {dataKategory: data, loading, error};
}

const updateKategoryById = gql`
mutation MyMutation($id: Int!, $object: kategori_set_input!) {
    update_kategori_by_pk(pk_columns: {id: $id}, _set: $object) {
      id
    }
  }
  
`;

export function GraphQLUpdateKategoryById() {
  const [UpdateKategory, loading, error] = useMutation(updateKategoryById);
  return { UpdateKategory, LoadingUpdateKategory: loading, ErrorUpdateKategory: error };
}