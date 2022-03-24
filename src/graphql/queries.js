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
      friends
      friendRequests
      outgoingFriendRequests
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
      groupRequests {
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
          description
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
        friends
        friendRequests
        outgoingFriendRequests
        groups {
          nextToken
        }
        groupRequests {
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
        items {
          id
          userID
          groupID
          createdAt
          updatedAt
        }
        nextToken
      }
      owner {
        username
        name
        profilePicture
        bio
        publicPrivate
        highlightColor
        friends
        friendRequests
        outgoingFriendRequests
        groups {
          nextToken
        }
        groupRequests {
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
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          nextToken
        }
        owner {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          friends
          friendRequests
          outgoingFriendRequests
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
        friends
        friendRequests
        outgoingFriendRequests
        groups {
          nextToken
        }
        groupRequests {
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
      description
      createdAt
      updatedAt
      userQuizOwnersId
    }
  }
`;
export const listQuizzes = /* GraphQL */ `
  query ListQuizzes(
    $filter: ModelQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizzes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          friends
          friendRequests
          outgoingFriendRequests
          admin
          blocked
          createdAt
          updatedAt
        }
        ownerUsername
        description
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
        friends
        friendRequests
        outgoingFriendRequests
        groups {
          nextToken
        }
        groupRequests {
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
          nextToken
        }
        owner {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          friends
          friendRequests
          outgoingFriendRequests
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
          friends
          friendRequests
          outgoingFriendRequests
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
export const getMemberRequests = /* GraphQL */ `
  query GetMemberRequests($id: ID!) {
    getMemberRequests(id: $id) {
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
        friends
        friendRequests
        outgoingFriendRequests
        groups {
          nextToken
        }
        groupRequests {
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
          nextToken
        }
        owner {
          username
          name
          profilePicture
          bio
          publicPrivate
          highlightColor
          friends
          friendRequests
          outgoingFriendRequests
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
export const listMemberRequests = /* GraphQL */ `
  query ListMemberRequests(
    $filter: ModelMemberRequestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMemberRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          friends
          friendRequests
          outgoingFriendRequests
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
