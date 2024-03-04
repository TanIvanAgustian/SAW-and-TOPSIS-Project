import { gql, useMutation, useSubscription } from "@apollo/client";

const getAllNews = gql`
subscription MySubscription {
  news(order_by: {created_at: asc}) {
      id
      title
      content
      image
      created_at
    }
  }
`

export function GraphQlNews(){
    const {data,loading,error} = useSubscription(getAllNews);
    return {data,loading,error};
}

const deleteNewsById = gql`
  mutation MyMutation($id: uuid!) {
    delete_news_by_pk(id: $id) {
      id
    }
  }
`

export function GraphQlDeleteNewsById() {
  const [DeleteNews, loading, error] = useMutation(deleteNewsById);
  return { DeleteNews, LoadingDelete: loading, ErrorDelete: error };
}

const inputNews = gql`
  mutation MyMutation($object: news_insert_input!) {
    insert_news_one(object: $object) {
        id
        title
        content
        image
        created_at
    }
  }
`;

export function GraphQlInputNews() {
  const [AddNews, loading, error] = useMutation(inputNews);
  return { AddNews, loading, error };
}

const updateNewsById = gql`
  mutation MyMutation($id: uuid!, $object: news_set_input!) {
    update_news_by_pk(pk_columns: { id: $id }, _set: $object) {
      id
    }
  }
`;

export function GraphQLUpdateNewsById() {
  const [UpdateNews, loading, error] = useMutation(updateNewsById);
  return { UpdateNews, LoadingUpdate: loading, ErrorUpdate: error };
}