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
export const createQuiz = /* GraphQL */ `
  mutation CreateQuiz(
    $input: CreateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    createQuiz(input: $input, condition: $condition) {
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
export const updateQuiz = /* GraphQL */ `
  mutation UpdateQuiz(
    $input: UpdateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    updateQuiz(input: $input, condition: $condition) {
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
export const deleteQuiz = /* GraphQL */ `
  mutation DeleteQuiz(
    $input: DeleteQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    deleteQuiz(input: $input, condition: $condition) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
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
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
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
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
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
export const createResult = /* GraphQL */ `
  mutation CreateResult(
    $input: CreateResultInput!
    $condition: ModelResultConditionInput
  ) {
    createResult(input: $input, condition: $condition) {
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
export const updateResult = /* GraphQL */ `
  mutation UpdateResult(
    $input: UpdateResultInput!
    $condition: ModelResultConditionInput
  ) {
    updateResult(input: $input, condition: $condition) {
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
export const deleteResult = /* GraphQL */ `
  mutation DeleteResult(
    $input: DeleteResultInput!
    $condition: ModelResultConditionInput
  ) {
    deleteResult(input: $input, condition: $condition) {
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
export const createUserAnswers = /* GraphQL */ `
  mutation CreateUserAnswers(
    $input: CreateUserAnswersInput!
    $condition: ModelUserAnswersConditionInput
  ) {
    createUserAnswers(input: $input, condition: $condition) {
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
export const updateUserAnswers = /* GraphQL */ `
  mutation UpdateUserAnswers(
    $input: UpdateUserAnswersInput!
    $condition: ModelUserAnswersConditionInput
  ) {
    updateUserAnswers(input: $input, condition: $condition) {
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
export const deleteUserAnswers = /* GraphQL */ `
  mutation DeleteUserAnswers(
    $input: DeleteUserAnswersInput!
    $condition: ModelUserAnswersConditionInput
  ) {
    deleteUserAnswers(input: $input, condition: $condition) {
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
export const createMemberRequests = /* GraphQL */ `
  mutation CreateMemberRequests(
    $input: CreateMemberRequestsInput!
    $condition: ModelMemberRequestsConditionInput
  ) {
    createMemberRequests(input: $input, condition: $condition) {
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
export const updateMemberRequests = /* GraphQL */ `
  mutation UpdateMemberRequests(
    $input: UpdateMemberRequestsInput!
    $condition: ModelMemberRequestsConditionInput
  ) {
    updateMemberRequests(input: $input, condition: $condition) {
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
export const deleteMemberRequests = /* GraphQL */ `
  mutation DeleteMemberRequests(
    $input: DeleteMemberRequestsInput!
    $condition: ModelMemberRequestsConditionInput
  ) {
    deleteMemberRequests(input: $input, condition: $condition) {
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
export const createQuizToGroup = /* GraphQL */ `
  mutation CreateQuizToGroup(
    $input: CreateQuizToGroupInput!
    $condition: ModelQuizToGroupConditionInput
  ) {
    createQuizToGroup(input: $input, condition: $condition) {
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
export const updateQuizToGroup = /* GraphQL */ `
  mutation UpdateQuizToGroup(
    $input: UpdateQuizToGroupInput!
    $condition: ModelQuizToGroupConditionInput
  ) {
    updateQuizToGroup(input: $input, condition: $condition) {
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
export const deleteQuizToGroup = /* GraphQL */ `
  mutation DeleteQuizToGroup(
    $input: DeleteQuizToGroupInput!
    $condition: ModelQuizToGroupConditionInput
  ) {
    deleteQuizToGroup(input: $input, condition: $condition) {
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
