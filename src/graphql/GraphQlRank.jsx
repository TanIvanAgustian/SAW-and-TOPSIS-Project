import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

const getRank = gql`
  subscription MySubscription {
    rank (order_by: {nilai: desc}){
      id
      name
      support
      placement
      ruangan
      keaktifan
      nilai
    }
  }
`;
export function GraphQlRank() {
  const { data, loading, error } = useSubscription(getRank);
  return { data, loading, error };
}

const inputRank = gql`
  mutation MyMutation($object: rank_insert_input!) {
    insert_rank_one(object: $object) {
        id
        name
        support
        placement
        ruangan
        keaktifan
        nilai
    }
  }
`;

export function GraphQlInputRank() {
  const [AddRank, loading, error] = useMutation(inputRank);
  return { AddRank, loading, error };
}

const updateRankById = gql`
  mutation MyMutation($id: uuid!, $object: rank_set_input!) {
    update_rank_by_pk(pk_columns: { id: $id }, _set: $object) {
        id
        name
        support
        placement
        ruangan
        keaktifan
        nilai
    }
  }
`;

export function GraphQLUpdateRankById() {
  const [UpdateRank, loading, error] = useMutation(updateRankById);
  return { UpdateRank, LoadingUpdate: loading, ErrorUpdate: error };
}
