import { Resolver, Example } from '../../generated/resolvers-types'

export const example: Resolver<Example> = (root, args, context) => {
    return {
        isExample: true
    }
}