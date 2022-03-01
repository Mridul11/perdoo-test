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

export const GET_LOCATIONS = gql`
  query {
    locations(page: 1) {
      results {
        name
        type
        dimension
        created
        residents {
          name
          species
        }
      }
    }
  }
`;

export const GET_EPISODES = gql`
  query {
    episodes(page: 1) {
      results {
        name
        air_date
        episode
        created
        characters {
          name
          species
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

export const GET_LOCATIONS_DETAIL = gql`
  query ($id: ID!) {
    location(id: $id) {
      name
      type
      dimension
      created
    }
  }
`;

export const GET_EPISODES_DETAIL = gql`
  query ($id: ID!) {
    episode(id: $id) {
      name
      air_date
      created
      episode
    }
  }
`;
