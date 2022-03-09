/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateFriends = /* GraphQL */ `
  subscription OnCreateFriends {
    onCreateFriends {
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
export const onUpdateFriends = /* GraphQL */ `
  subscription OnUpdateFriends {
    onUpdateFriends {
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
export const onDeleteFriends = /* GraphQL */ `
  subscription OnDeleteFriends {
    onDeleteFriends {
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
export const onCreateFriendConnection = /* GraphQL */ `
  subscription OnCreateFriendConnection {
    onCreateFriendConnection {
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
export const onUpdateFriendConnection = /* GraphQL */ `
  subscription OnUpdateFriendConnection {
    onUpdateFriendConnection {
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
export const onDeleteFriendConnection = /* GraphQL */ `
  subscription OnDeleteFriendConnection {
    onDeleteFriendConnection {
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
export const onCreateFriendRequests = /* GraphQL */ `
  subscription OnCreateFriendRequests {
    onCreateFriendRequests {
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
export const onUpdateFriendRequests = /* GraphQL */ `
  subscription OnUpdateFriendRequests {
    onUpdateFriendRequests {
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
export const onDeleteFriendRequests = /* GraphQL */ `
  subscription OnDeleteFriendRequests {
    onDeleteFriendRequests {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
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
export const onCreateQuiz = /* GraphQL */ `
  subscription OnCreateQuiz {
    onCreateQuiz {
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
export const onUpdateQuiz = /* GraphQL */ `
  subscription OnUpdateQuiz {
    onUpdateQuiz {
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
export const onDeleteQuiz = /* GraphQL */ `
  subscription OnDeleteQuiz {
    onDeleteQuiz {
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
export const onCreateMembers = /* GraphQL */ `
  subscription OnCreateMembers {
    onCreateMembers {
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
export const onUpdateMembers = /* GraphQL */ `
  subscription OnUpdateMembers {
    onUpdateMembers {
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
export const onDeleteMembers = /* GraphQL */ `
  subscription OnDeleteMembers {
    onDeleteMembers {
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
