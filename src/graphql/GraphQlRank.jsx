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
      competitionId
      userId
      voice_Type
    }
  }
`;
export function GraphQlRank() {
  const { data, loading, error } = useSubscription(getRank);
  return { dataRank:data, loadingRank:loading, errorRank:error };
}

const inputRank = gql`
  mutation MyMutation($object: rank_insert_input!) {
    insert_rank_one(object: $object) {
        id
    }
  }
`;

export function GraphQlInputRank() {
  const [AddRank, loading, error] = useMutation(inputRank);
  return { AddRank, Addloading:loading, Adderror:error };
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
