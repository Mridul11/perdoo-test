import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query {
    characters(page: 1) {
      results {
        name
        status
        gender
        species
        origin {
          name
        }
        episode {
          name
        }
      }
    }
  }
`;

export const GET_CHARACTERS_DETAIL = gql`
  query ($id: ID!) {
    character(id: $id) {
      name
      status
      species
      image
    }
  }
`;
