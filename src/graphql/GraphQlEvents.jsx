import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

const getAllEvents = gql`
subscription MySubscription {
  events(order_by: {created_at: desc}) {
      content
      documentation
      header_image
      id
      link
      program_name
      title
      created_at
      start_date
    }
  }
`

export function GraphQlEvents(){
    const {data,loading,error} = useSubscription(getAllEvents);
    return {data,loading,error};
}

const deleteEventsById = gql`
  mutation MyMutation($id: uuid!) {
    delete_events_by_pk(id: $id) {
      id
    }
  }
`;

export function GraphQlDeleteEventsById() {
  const [DeleteEvents, loading, error] = useMutation(deleteEventsById);
  return { DeleteEvents, LoadingDelete: loading, ErrorDelete: error };
}

const inputevent = gql`
  mutation MyMutation($object: events_insert_input!) {
    insert_events_one(object: $object) {
      id
      header_image
      title
      content
      link
      documentation
      program_name
      created_at
      start_date
    }
  }
`;

export function GraphQlInputEvents() {
  const [AddEvents, loading, error] = useMutation(inputevent);
  return { AddEvents, loading, error };
}

const updateEventById = gql`
  mutation MyMutation($id: uuid!, $object: events_set_input!) {
    update_events_by_pk(pk_columns: { id: $id }, _set: $object) {
      id
    }
  }
`;

export function GraphQLUpdateEventsById() {
  const [UpdateEvents, loading, error] = useMutation(updateEventById);
  return { UpdateEvents, LoadingUpdate: loading, ErrorUpdate: error };
}