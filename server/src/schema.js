const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type Query {
    bitcoin: Bitcoin
    trendingMovies: [Movie]!
    foobars: [Foobar]
    tags: [Tag]
    users: [User]
    launches(
      """
      The number of results to show. Must be >= 1. Default = 20
      """
      pageSize: Int
      """
      If you add a cursor here, it will only return results _after_ this cursor
      """
      after: String
    ): LaunchConnection!
    launch(id: ID!): Launch
    me: User
  }

  type Mutation {
    # if false, signup failed -- check errors
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    # if false, cancellation failed -- check errors
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): String # login token
    createFoobar(foobar: String): String

    createTag(title: String): TagCreateResponse!
    upsertTag(tag: InputTag!): TagCreateResponse!
    deleteTag(id: ID!): String
  }

  input InputTag {
    id: ID
    title: String!
  }

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }

  type TagCreateResponse {
    success: Boolean!
    data: TagItem
  }

  type TagItem {
    id: String
    title: String
    createdAt: Date
    updatedAt: Date
  }

  """
  Simple wrapper around our list of launches that contains a cursor to the
  last item in the list. Pass this cursor to the launches query to fetch results
  after these.
  """
  type LaunchConnection {
    cursor: String!
    hasMore: Boolean!
    launches: [Launch]!
  }

  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String!
    trips: [Launch]!
  }

  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  type Bitcoin {
    chartName: String!
    disclaimer: String
    updated: Date
    price: Float
  }

  type Movie {
    id: Int
    title: String
    release_date: String
    backdrop_path: String
    overview: String
    media_type: String
  }

  enum PatchSize {
    SMALL
    LARGE
  }

  type Foobar {
    foobar: String
  }

  type Tag {
    id: ID
    title: String
  }
`;

module.exports = typeDefs;
