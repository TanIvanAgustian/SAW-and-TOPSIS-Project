import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

const getAllCompetitions = gql`
  subscription MySubscription {
    competition(order_by: { created_at: desc }) {
      id
      name
      created_at
      date
    }
  }
`;

export function GraphQlCompetition() {
  const { data, loading, error } = useSubscription(getAllCompetitions);
  return {
    CompetitionData: data,
    CompetitionLoading: loading,
    CompetitionError: error,
  };
}

const inputcompetition = gql`
  mutation MyMutation($object: competition_insert_input!) {
    insert_competition_one(object: $object) {
      id
      name
      date
      created_at
    }
  }
`;

export function GraphQlInputCompetition() {
  const [AddCompetition, loading, error] = useMutation(inputcompetition);
  return { AddCompetition, loading, error };
}

const updateCompetitionById = gql`
  mutation MyMutation($id: uuid!, $object: competition_set_input!) {
    update_competition_by_pk(pk_columns: { id: $id }, _set: $object) {
      id
    }
  }
`;

export function GraphQLUpdateCompetitionById() {
  const [UpdateCompetition, loading, error] = useMutation(
    updateCompetitionById
  );
  return { UpdateCompetition, LoadingUpdate: loading, ErrorUpdate: error };
}
