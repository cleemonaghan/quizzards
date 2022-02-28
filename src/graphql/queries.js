/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($username: String!) {
    getUser(username: $username) {
      username
      name
      profilePicture
      bio
      publicPrivate
      highlightColor
      friends {
        username
        name
        profilePicture
        bio
        publicPrivate
        highlightColor
        friends {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        friendRequests {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        groupOwners {
          nextToken
        }
        quizOwners {
          nextToken
        }
        admin
        blocked
        createdAt
        updatedAt
      }
      friendRequests {
        username
        name
        profilePicture
        bio
        publicPrivate
        highlightColor
        friends {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        friendRequests {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        groupOwners {
          nextToken
        }
        quizOwners {
          nextToken
        }
        admin
        blocked
        createdAt
        updatedAt
      }
      groups {
        items {
          id
          userID
          groupID
          createdAt
          updatedAt
        }
        nextToken
      }
      groupOwners {
        items {
          id
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          ownerUsername
          createdAt
          updatedAt
          userGroupOwnersId
        }
        nextToken
      }
      quizOwners {
        items {
          id
          quizname
          ownerUsername
          createdAt
          updatedAt
          userQuizOwnersId
        }
        nextToken
      }
      admin
      blocked
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $username: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      username: $username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        username
        name
        profilePicture
        bio
        publicPrivate
        highlightColor
        friends {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        friendRequests {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        groupOwners {
          nextToken
        }
        quizOwners {
          nextToken
        }
        admin
        blocked
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      name
      profilePicture
      bio
      publicPrivate
      highlightColor
      members {
        items {
          id
          userID
          groupID
          createdAt
          updatedAt
        }
        nextToken
      }
      memberRequests {
        username
        name
        profilePicture
        bio
        publicPrivate
        highlightColor
        friends {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        friendRequests {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        groupOwners {
          nextToken
        }
        quizOwners {
          nextToken
        }
        admin
        blocked
        createdAt
        updatedAt
      }
      owner {
        username
        name
        profilePicture
        bio
        publicPrivate
        highlightColor
        friends {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        friendRequests {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        groupOwners {
          nextToken
        }
        quizOwners {
          nextToken
        }
        admin
        blocked
        createdAt
        updatedAt
      }
      ownerUsername
      createdAt
      updatedAt
      userGroupOwnersId
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $id: ID
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGroups(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        profilePicture
        bio
        publicPrivate
        highlightColor
        members {
          nextToken
        }
        memberRequests {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        owner {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        ownerUsername
        createdAt
        updatedAt
        userGroupOwnersId
      }
      nextToken
    }
  }
`;
export const getQuiz = /* GraphQL */ `
  query GetQuiz($id: ID!) {
    getQuiz(id: $id) {
      id
      quizname
      owner {
        username
        name
        profilePicture
        bio
        publicPrivate
        highlightColor
        friends {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        friendRequests {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        groupOwners {
          nextToken
        }
        quizOwners {
          nextToken
        }
        admin
        blocked
        createdAt
        updatedAt
      }
      ownerUsername
      createdAt
      updatedAt
      userQuizOwnersId
    }
  }
`;
export const listQuizzes = /* GraphQL */ `
  query ListQuizzes(
    $id: ID
    $filter: ModelQuizFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listQuizzes(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        quizname
        owner {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        ownerUsername
        createdAt
        updatedAt
        userQuizOwnersId
      }
      nextToken
    }
  }
`;
export const getMembers = /* GraphQL */ `
  query GetMembers($id: ID!) {
    getMembers(id: $id) {
      id
      userID
      groupID
      user {
        username
        name
        profilePicture
        bio
        publicPrivate
        highlightColor
        friends {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        friendRequests {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        groupOwners {
          nextToken
        }
        quizOwners {
          nextToken
        }
        admin
        blocked
        createdAt
        updatedAt
      }
      group {
        id
        name
        profilePicture
        bio
        publicPrivate
        highlightColor
        members {
          nextToken
        }
        memberRequests {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        owner {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        ownerUsername
        createdAt
        updatedAt
        userGroupOwnersId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMembersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        groupID
        user {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          admin
          blocked
          createdAt
          updatedAt
        }
        group {
          id
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          ownerUsername
          createdAt
          updatedAt
          userGroupOwnersId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
