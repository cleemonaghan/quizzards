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
          friendsFriendsId
          userFriendsId
          userFriendRequestsId
        }
        username
        friends {
          nextToken
        }
        createdAt
        updatedAt
      }
      friendRequests {
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
          friendsFriendsId
          userFriendsId
          userFriendRequestsId
        }
        username
        friendRequests {
          nextToken
        }
        friendUsernames
        createdAt
        updatedAt
      }
      friendList {
        items {
          username
          friendUsername
          id
          createdAt
          updatedAt
          userFriendListId
        }
        nextToken
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
      friendsFriendsId
      userFriendsId
      userFriendRequestsId
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
          createdAt
          updatedAt
        }
        friendRequests {
          username
          friendUsernames
          createdAt
          updatedAt
        }
        friendList {
          nextToken
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
        friendsFriendsId
        userFriendsId
        userFriendRequestsId
      }
      nextToken
    }
  }
`;
export const getFriends = /* GraphQL */ `
  query GetFriends($username: String!) {
    getFriends(username: $username) {
      user {
        username
        name
        profilePicture
        bio
        publicPrivate
        highlightColor
        friends {
          username
          createdAt
          updatedAt
        }
        friendRequests {
          username
          friendUsernames
          createdAt
          updatedAt
        }
        friendList {
          nextToken
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
        friendsFriendsId
        userFriendsId
        userFriendRequestsId
      }
      username
      friends {
        items {
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
          friendsFriendsId
          userFriendsId
          userFriendRequestsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFriends = /* GraphQL */ `
  query ListFriends(
    $username: String
    $filter: ModelFriendsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFriends(
      username: $username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
          friendsFriendsId
          userFriendsId
          userFriendRequestsId
        }
        username
        friends {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFriendConnection = /* GraphQL */ `
  query GetFriendConnection($id: ID!) {
    getFriendConnection(id: $id) {
      user {
        username
        name
        profilePicture
        bio
        publicPrivate
        highlightColor
        friends {
          username
          createdAt
          updatedAt
        }
        friendRequests {
          username
          friendUsernames
          createdAt
          updatedAt
        }
        friendList {
          nextToken
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
        friendsFriendsId
        userFriendsId
        userFriendRequestsId
      }
      username
      friend {
        username
        name
        profilePicture
        bio
        publicPrivate
        highlightColor
        friends {
          username
          createdAt
          updatedAt
        }
        friendRequests {
          username
          friendUsernames
          createdAt
          updatedAt
        }
        friendList {
          nextToken
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
        friendsFriendsId
        userFriendsId
        userFriendRequestsId
      }
      friendUsername
      id
      createdAt
      updatedAt
      userFriendListId
    }
  }
`;
export const listFriendConnections = /* GraphQL */ `
  query ListFriendConnections(
    $filter: ModelFriendConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriendConnections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          friendsFriendsId
          userFriendsId
          userFriendRequestsId
        }
        username
        friend {
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
          friendsFriendsId
          userFriendsId
          userFriendRequestsId
        }
        friendUsername
        id
        createdAt
        updatedAt
        userFriendListId
      }
      nextToken
    }
  }
`;
export const getFriendRequests = /* GraphQL */ `
  query GetFriendRequests($username: String!) {
    getFriendRequests(username: $username) {
      user {
        username
        name
        profilePicture
        bio
        publicPrivate
        highlightColor
        friends {
          username
          createdAt
          updatedAt
        }
        friendRequests {
          username
          friendUsernames
          createdAt
          updatedAt
        }
        friendList {
          nextToken
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
        friendsFriendsId
        userFriendsId
        userFriendRequestsId
      }
      username
      friendRequests {
        items {
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
          friendsFriendsId
          userFriendsId
          userFriendRequestsId
        }
        nextToken
      }
      friendUsernames
      createdAt
      updatedAt
    }
  }
`;
export const listFriendRequests = /* GraphQL */ `
  query ListFriendRequests(
    $username: String
    $filter: ModelFriendRequestsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFriendRequests(
      username: $username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
          friendsFriendsId
          userFriendsId
          userFriendRequestsId
        }
        username
        friendRequests {
          nextToken
        }
        friendUsernames
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
          createdAt
          updatedAt
        }
        friendRequests {
          username
          friendUsernames
          createdAt
          updatedAt
        }
        friendList {
          nextToken
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
        friendsFriendsId
        userFriendsId
        userFriendRequestsId
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
          createdAt
          updatedAt
        }
        friendRequests {
          username
          friendUsernames
          createdAt
          updatedAt
        }
        friendList {
          nextToken
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
        friendsFriendsId
        userFriendsId
        userFriendRequestsId
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
          friendsFriendsId
          userFriendsId
          userFriendRequestsId
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
          friendsFriendsId
          userFriendsId
          userFriendRequestsId
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
          createdAt
          updatedAt
        }
        friendRequests {
          username
          friendUsernames
          createdAt
          updatedAt
        }
        friendList {
          nextToken
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
        friendsFriendsId
        userFriendsId
        userFriendRequestsId
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
          friendsFriendsId
          userFriendsId
          userFriendRequestsId
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
        friends {
          username
          createdAt
          updatedAt
        }
        friendRequests {
          username
          friendUsernames
          createdAt
          updatedAt
        }
        friendList {
          nextToken
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
        friendsFriendsId
        userFriendsId
        userFriendRequestsId
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
          friendsFriendsId
          userFriendsId
          userFriendRequestsId
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
          friendsFriendsId
          userFriendsId
          userFriendRequestsId
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
          friendsFriendsId
          userFriendsId
          userFriendRequestsId
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
