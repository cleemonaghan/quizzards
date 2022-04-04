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
          title
          ownerUsername
          description
          picture
          createdAt
          updatedAt
          userQuizOwnersId
        }
        nextToken
      }
      admin
      blocked
      quizAnswers {
        items {
          id
          username
          quizID
          answers
          result
          createdAt
          updatedAt
          userQuizAnswersId
          quizUserAnswersId
        }
        nextToken
      }
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
          title
          ownerUsername
          description
          picture
          createdAt
          updatedAt
          userQuizOwnersId
        }
        nextToken
      }
      admin
      blocked
      quizAnswers {
        items {
          id
          username
          quizID
          answers
          result
          createdAt
          updatedAt
          userQuizAnswersId
          quizUserAnswersId
        }
        nextToken
      }
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
          title
          ownerUsername
          description
          picture
          createdAt
          updatedAt
          userQuizOwnersId
        }
        nextToken
      }
      admin
      blocked
      quizAnswers {
        items {
          id
          username
          quizID
          answers
          result
          createdAt
          updatedAt
          userQuizAnswersId
          quizUserAnswersId
        }
        nextToken
      }
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
        quizAnswers {
          nextToken
        }
        createdAt
        updatedAt
      }
      ownerUsername
      quizzes {
        items {
          id
          groupID
          quizID
          createdAt
          updatedAt
        }
        nextToken
      }
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
        quizAnswers {
          nextToken
        }
        createdAt
        updatedAt
      }
      ownerUsername
      quizzes {
        items {
          id
          groupID
          quizID
          createdAt
          updatedAt
        }
        nextToken
      }
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
        quizAnswers {
          nextToken
        }
        createdAt
        updatedAt
      }
      ownerUsername
      quizzes {
        items {
          id
          groupID
          quizID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      title
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
        quizAnswers {
          nextToken
        }
        createdAt
        updatedAt
      }
      ownerUsername
      description
      groups {
        items {
          id
          groupID
          quizID
          createdAt
          updatedAt
        }
        nextToken
      }
      questions {
        items {
          id
          quizID
          name
          picture
          createdAt
          updatedAt
          quizQuestionsId
        }
        nextToken
      }
      results {
        items {
          id
          quizID
          name
          description
          picture
          createdAt
          updatedAt
          quizResultsId
        }
        nextToken
      }
      picture
      userAnswers {
        items {
          id
          username
          quizID
          answers
          result
          createdAt
          updatedAt
          userQuizAnswersId
          quizUserAnswersId
        }
        nextToken
      }
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
      title
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
        quizAnswers {
          nextToken
        }
        createdAt
        updatedAt
      }
      ownerUsername
      description
      groups {
        items {
          id
          groupID
          quizID
          createdAt
          updatedAt
        }
        nextToken
      }
      questions {
        items {
          id
          quizID
          name
          picture
          createdAt
          updatedAt
          quizQuestionsId
        }
        nextToken
      }
      results {
        items {
          id
          quizID
          name
          description
          picture
          createdAt
          updatedAt
          quizResultsId
        }
        nextToken
      }
      picture
      userAnswers {
        items {
          id
          username
          quizID
          answers
          result
          createdAt
          updatedAt
          userQuizAnswersId
          quizUserAnswersId
        }
        nextToken
      }
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
      title
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
        quizAnswers {
          nextToken
        }
        createdAt
        updatedAt
      }
      ownerUsername
      description
      groups {
        items {
          id
          groupID
          quizID
          createdAt
          updatedAt
        }
        nextToken
      }
      questions {
        items {
          id
          quizID
          name
          picture
          createdAt
          updatedAt
          quizQuestionsId
        }
        nextToken
      }
      results {
        items {
          id
          quizID
          name
          description
          picture
          createdAt
          updatedAt
          quizResultsId
        }
        nextToken
      }
      picture
      userAnswers {
        items {
          id
          username
          quizID
          answers
          result
          createdAt
          updatedAt
          userQuizAnswersId
          quizUserAnswersId
        }
        nextToken
      }
      createdAt
      updatedAt
      userQuizOwnersId
    }
  }
`;
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
      id
      quiz {
        id
        title
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
        groups {
          nextToken
        }
        questions {
          nextToken
        }
        results {
          nextToken
        }
        picture
        userAnswers {
          nextToken
        }
        createdAt
        updatedAt
        userQuizOwnersId
      }
      quizID
      name
      picture
      answers {
        items {
          id
          questionID
          name
          weights
          createdAt
          updatedAt
          questionAnswersId
        }
        nextToken
      }
      createdAt
      updatedAt
      quizQuestionsId
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
      id
      quiz {
        id
        title
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
        groups {
          nextToken
        }
        questions {
          nextToken
        }
        results {
          nextToken
        }
        picture
        userAnswers {
          nextToken
        }
        createdAt
        updatedAt
        userQuizOwnersId
      }
      quizID
      name
      picture
      answers {
        items {
          id
          questionID
          name
          weights
          createdAt
          updatedAt
          questionAnswersId
        }
        nextToken
      }
      createdAt
      updatedAt
      quizQuestionsId
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
      id
      quiz {
        id
        title
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
        groups {
          nextToken
        }
        questions {
          nextToken
        }
        results {
          nextToken
        }
        picture
        userAnswers {
          nextToken
        }
        createdAt
        updatedAt
        userQuizOwnersId
      }
      quizID
      name
      picture
      answers {
        items {
          id
          questionID
          name
          weights
          createdAt
          updatedAt
          questionAnswersId
        }
        nextToken
      }
      createdAt
      updatedAt
      quizQuestionsId
    }
  }
`;
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
      id
      question {
        id
        quiz {
          id
          title
          ownerUsername
          description
          picture
          createdAt
          updatedAt
          userQuizOwnersId
        }
        quizID
        name
        picture
        answers {
          nextToken
        }
        createdAt
        updatedAt
        quizQuestionsId
      }
      questionID
      name
      weights
      createdAt
      updatedAt
      questionAnswersId
    }
  }
`;
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
      id
      question {
        id
        quiz {
          id
          title
          ownerUsername
          description
          picture
          createdAt
          updatedAt
          userQuizOwnersId
        }
        quizID
        name
        picture
        answers {
          nextToken
        }
        createdAt
        updatedAt
        quizQuestionsId
      }
      questionID
      name
      weights
      createdAt
      updatedAt
      questionAnswersId
    }
  }
`;
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
      id
      question {
        id
        quiz {
          id
          title
          ownerUsername
          description
          picture
          createdAt
          updatedAt
          userQuizOwnersId
        }
        quizID
        name
        picture
        answers {
          nextToken
        }
        createdAt
        updatedAt
        quizQuestionsId
      }
      questionID
      name
      weights
      createdAt
      updatedAt
      questionAnswersId
    }
  }
`;
export const onCreateResult = /* GraphQL */ `
  subscription OnCreateResult {
    onCreateResult {
      id
      quiz {
        id
        title
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
        groups {
          nextToken
        }
        questions {
          nextToken
        }
        results {
          nextToken
        }
        picture
        userAnswers {
          nextToken
        }
        createdAt
        updatedAt
        userQuizOwnersId
      }
      quizID
      name
      description
      picture
      createdAt
      updatedAt
      quizResultsId
    }
  }
`;
export const onUpdateResult = /* GraphQL */ `
  subscription OnUpdateResult {
    onUpdateResult {
      id
      quiz {
        id
        title
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
        groups {
          nextToken
        }
        questions {
          nextToken
        }
        results {
          nextToken
        }
        picture
        userAnswers {
          nextToken
        }
        createdAt
        updatedAt
        userQuizOwnersId
      }
      quizID
      name
      description
      picture
      createdAt
      updatedAt
      quizResultsId
    }
  }
`;
export const onDeleteResult = /* GraphQL */ `
  subscription OnDeleteResult {
    onDeleteResult {
      id
      quiz {
        id
        title
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
        groups {
          nextToken
        }
        questions {
          nextToken
        }
        results {
          nextToken
        }
        picture
        userAnswers {
          nextToken
        }
        createdAt
        updatedAt
        userQuizOwnersId
      }
      quizID
      name
      description
      picture
      createdAt
      updatedAt
      quizResultsId
    }
  }
`;
export const onCreateUserAnswers = /* GraphQL */ `
  subscription OnCreateUserAnswers {
    onCreateUserAnswers {
      id
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
        quizAnswers {
          nextToken
        }
        createdAt
        updatedAt
      }
      username
      quiz {
        id
        title
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
        groups {
          nextToken
        }
        questions {
          nextToken
        }
        results {
          nextToken
        }
        picture
        userAnswers {
          nextToken
        }
        createdAt
        updatedAt
        userQuizOwnersId
      }
      quizID
      answers
      result
      createdAt
      updatedAt
      userQuizAnswersId
      quizUserAnswersId
    }
  }
`;
export const onUpdateUserAnswers = /* GraphQL */ `
  subscription OnUpdateUserAnswers {
    onUpdateUserAnswers {
      id
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
        quizAnswers {
          nextToken
        }
        createdAt
        updatedAt
      }
      username
      quiz {
        id
        title
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
        groups {
          nextToken
        }
        questions {
          nextToken
        }
        results {
          nextToken
        }
        picture
        userAnswers {
          nextToken
        }
        createdAt
        updatedAt
        userQuizOwnersId
      }
      quizID
      answers
      result
      createdAt
      updatedAt
      userQuizAnswersId
      quizUserAnswersId
    }
  }
`;
export const onDeleteUserAnswers = /* GraphQL */ `
  subscription OnDeleteUserAnswers {
    onDeleteUserAnswers {
      id
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
        quizAnswers {
          nextToken
        }
        createdAt
        updatedAt
      }
      username
      quiz {
        id
        title
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
        groups {
          nextToken
        }
        questions {
          nextToken
        }
        results {
          nextToken
        }
        picture
        userAnswers {
          nextToken
        }
        createdAt
        updatedAt
        userQuizOwnersId
      }
      quizID
      answers
      result
      createdAt
      updatedAt
      userQuizAnswersId
      quizUserAnswersId
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
        quizAnswers {
          nextToken
        }
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
        quizzes {
          nextToken
        }
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
        quizAnswers {
          nextToken
        }
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
        quizzes {
          nextToken
        }
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
        quizAnswers {
          nextToken
        }
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
        quizzes {
          nextToken
        }
        createdAt
        updatedAt
        userGroupOwnersId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMemberRequests = /* GraphQL */ `
  subscription OnCreateMemberRequests {
    onCreateMemberRequests {
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
        quizAnswers {
          nextToken
        }
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
        quizzes {
          nextToken
        }
        createdAt
        updatedAt
        userGroupOwnersId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMemberRequests = /* GraphQL */ `
  subscription OnUpdateMemberRequests {
    onUpdateMemberRequests {
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
        quizAnswers {
          nextToken
        }
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
        quizzes {
          nextToken
        }
        createdAt
        updatedAt
        userGroupOwnersId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMemberRequests = /* GraphQL */ `
  subscription OnDeleteMemberRequests {
    onDeleteMemberRequests {
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
        quizAnswers {
          nextToken
        }
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
        quizzes {
          nextToken
        }
        createdAt
        updatedAt
        userGroupOwnersId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuizToGroup = /* GraphQL */ `
  subscription OnCreateQuizToGroup {
    onCreateQuizToGroup {
      id
      groupID
      quizID
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
        quizzes {
          nextToken
        }
        createdAt
        updatedAt
        userGroupOwnersId
      }
      quiz {
        id
        title
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
        groups {
          nextToken
        }
        questions {
          nextToken
        }
        results {
          nextToken
        }
        picture
        userAnswers {
          nextToken
        }
        createdAt
        updatedAt
        userQuizOwnersId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuizToGroup = /* GraphQL */ `
  subscription OnUpdateQuizToGroup {
    onUpdateQuizToGroup {
      id
      groupID
      quizID
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
        quizzes {
          nextToken
        }
        createdAt
        updatedAt
        userGroupOwnersId
      }
      quiz {
        id
        title
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
        groups {
          nextToken
        }
        questions {
          nextToken
        }
        results {
          nextToken
        }
        picture
        userAnswers {
          nextToken
        }
        createdAt
        updatedAt
        userQuizOwnersId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuizToGroup = /* GraphQL */ `
  subscription OnDeleteQuizToGroup {
    onDeleteQuizToGroup {
      id
      groupID
      quizID
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
        quizzes {
          nextToken
        }
        createdAt
        updatedAt
        userGroupOwnersId
      }
      quiz {
        id
        title
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
        groups {
          nextToken
        }
        questions {
          nextToken
        }
        results {
          nextToken
        }
        picture
        userAnswers {
          nextToken
        }
        createdAt
        updatedAt
        userQuizOwnersId
      }
      createdAt
      updatedAt
    }
  }
`;
