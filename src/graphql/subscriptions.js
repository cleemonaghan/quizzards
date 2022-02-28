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
