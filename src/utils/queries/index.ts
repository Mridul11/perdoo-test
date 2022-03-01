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
