/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createFriends = /* GraphQL */ `
  mutation CreateFriends(
    $input: CreateFriendsInput!
    $condition: ModelFriendsConditionInput
  ) {
    createFriends(input: $input, condition: $condition) {
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
export const updateFriends = /* GraphQL */ `
  mutation UpdateFriends(
    $input: UpdateFriendsInput!
    $condition: ModelFriendsConditionInput
  ) {
    updateFriends(input: $input, condition: $condition) {
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
export const deleteFriends = /* GraphQL */ `
  mutation DeleteFriends(
    $input: DeleteFriendsInput!
    $condition: ModelFriendsConditionInput
  ) {
    deleteFriends(input: $input, condition: $condition) {
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
export const createFriendConnection = /* GraphQL */ `
  mutation CreateFriendConnection(
    $input: CreateFriendConnectionInput!
    $condition: ModelFriendConnectionConditionInput
  ) {
    createFriendConnection(input: $input, condition: $condition) {
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
export const updateFriendConnection = /* GraphQL */ `
  mutation UpdateFriendConnection(
    $input: UpdateFriendConnectionInput!
    $condition: ModelFriendConnectionConditionInput
  ) {
    updateFriendConnection(input: $input, condition: $condition) {
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
export const deleteFriendConnection = /* GraphQL */ `
  mutation DeleteFriendConnection(
    $input: DeleteFriendConnectionInput!
    $condition: ModelFriendConnectionConditionInput
  ) {
    deleteFriendConnection(input: $input, condition: $condition) {
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
export const createFriendRequests = /* GraphQL */ `
  mutation CreateFriendRequests(
    $input: CreateFriendRequestsInput!
    $condition: ModelFriendRequestsConditionInput
  ) {
    createFriendRequests(input: $input, condition: $condition) {
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
export const updateFriendRequests = /* GraphQL */ `
  mutation UpdateFriendRequests(
    $input: UpdateFriendRequestsInput!
    $condition: ModelFriendRequestsConditionInput
  ) {
    updateFriendRequests(input: $input, condition: $condition) {
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
export const deleteFriendRequests = /* GraphQL */ `
  mutation DeleteFriendRequests(
    $input: DeleteFriendRequestsInput!
    $condition: ModelFriendRequestsConditionInput
  ) {
    deleteFriendRequests(input: $input, condition: $condition) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createQuiz = /* GraphQL */ `
  mutation CreateQuiz(
    $input: CreateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    createQuiz(input: $input, condition: $condition) {
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
export const updateQuiz = /* GraphQL */ `
  mutation UpdateQuiz(
    $input: UpdateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    updateQuiz(input: $input, condition: $condition) {
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
export const deleteQuiz = /* GraphQL */ `
  mutation DeleteQuiz(
    $input: DeleteQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    deleteQuiz(input: $input, condition: $condition) {
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
export const createMembers = /* GraphQL */ `
  mutation CreateMembers(
    $input: CreateMembersInput!
    $condition: ModelMembersConditionInput
  ) {
    createMembers(input: $input, condition: $condition) {
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
export const updateMembers = /* GraphQL */ `
  mutation UpdateMembers(
    $input: UpdateMembersInput!
    $condition: ModelMembersConditionInput
  ) {
    updateMembers(input: $input, condition: $condition) {
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
export const deleteMembers = /* GraphQL */ `
  mutation DeleteMembers(
    $input: DeleteMembersInput!
    $condition: ModelMembersConditionInput
  ) {
    deleteMembers(input: $input, condition: $condition) {
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
