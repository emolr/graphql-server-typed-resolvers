import gql from 'graphql-tag'

export const queryTypeDef = gql`
    type Query {
        example: Example!
    }
`

export default queryTypeDef