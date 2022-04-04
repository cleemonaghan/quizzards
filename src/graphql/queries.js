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
        quizAnswers {
          nextToken
        }
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
        quizzes {
          nextToken
        }
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
export const listQuizzes = /* GraphQL */ `
  query ListQuizzes(
    $filter: ModelQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizzes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAnswer = /* GraphQL */ `
  query GetAnswer($id: ID!) {
    getAnswer(id: $id) {
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
export const listAnswers = /* GraphQL */ `
  query ListAnswers(
    $filter: ModelAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question {
          id
          quizID
          name
          picture
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
      nextToken
    }
  }
`;
export const getResult = /* GraphQL */ `
  query GetResult($id: ID!) {
    getResult(id: $id) {
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
export const listResults = /* GraphQL */ `
  query ListResults(
    $filter: ModelResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        description
        picture
        createdAt
        updatedAt
        quizResultsId
      }
      nextToken
    }
  }
`;
export const getUserAnswers = /* GraphQL */ `
  query GetUserAnswers($id: ID!) {
    getUserAnswers(id: $id) {
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
export const listUserAnswers = /* GraphQL */ `
  query ListUserAnswers(
    $filter: ModelUserAnswersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          admin
          blocked
          createdAt
          updatedAt
        }
        username
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
        answers
        result
        createdAt
        updatedAt
        userQuizAnswersId
        quizUserAnswersId
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
export const getQuizToGroup = /* GraphQL */ `
  query GetQuizToGroup($id: ID!) {
    getQuizToGroup(id: $id) {
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
export const listQuizToGroups = /* GraphQL */ `
  query ListQuizToGroups(
    $filter: ModelQuizToGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizToGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          ownerUsername
          createdAt
          updatedAt
          userGroupOwnersId
        }
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
