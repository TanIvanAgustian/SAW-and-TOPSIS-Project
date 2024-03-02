import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

const getUsers = gql`
  subscription MySubscription {
    users (order_by: {created_at: asc}){
      image
      email
      name
      position
      status
      voice_type
      password
      angkatan
      id
      instagram
      facebook
      twitter
      created_at
    }
  }
`;
export function GraphQlUsers() {
  const { data, loading, error } = useSubscription(getUsers);
  return { data, loading, error };
}

const inputUsers = gql`
  mutation MyMutation($object: users_insert_input!) {
    insert_users_one(object: $object) {
      id
      name
      email
      password
      image
      voice_type
      position
      angkatan
      status
      instagram
      facebook
      twitter
    }
  }
`;

export function GraphQlInputUsers() {
  const [AddUsers, loading, error] = useMutation(inputUsers);
  return { AddUsers, loading, error };
}

const deleteUsersById = gql`
  mutation MyMutation($id: uuid!) {
    delete_users_by_pk(id: $id) {
      id
    }
  }
`;

export function GraphQlDeleteUsersById() {
  const [DeleteUsers, loading, error] = useMutation(deleteUsersById);
  return { DeleteUsers, LoadingDelete: loading, ErrorDelete: error };
}

const updateUserById = gql`
  mutation MyMutation($id: uuid!, $object: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $object) {
      id
      name
      email
      password
      image
      voice_type
      position
      angkatan
      status
      instagram
      facebook
      twitter
    }
  }
`;

export function GraphQLUpdateUsersById() {
  const [UpdateUsers, loading, error] = useMutation(updateUserById);
  return { UpdateUsers, LoadingUpdate: loading, ErrorUpdate: error };
}
