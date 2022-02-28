/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResult = /* GraphQL */ `
  query GetResult($id: ID!) {
    getResult(id: $id) {
      id
      quizID {
        id
        quizID
        owner {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        groups {
          nextToken
        }
        questions {
          nextToken
        }
        results {
          nextToken
        }
        topic
        publicPrivate
        createdAt
        updatedAt
        userQuizOwnersId
      }
      resultID
      users {
        items {
          id
          resultID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      answers {
        items {
          id
          answerID
          weight
          answer
          createdAt
          updatedAt
          resultAnswersId
          questionAnswersId
        }
        nextToken
      }
      description
      image
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
        quizID {
          id
          quizID
          topic
          publicPrivate
          createdAt
          updatedAt
          userQuizOwnersId
        }
        resultID
        users {
          nextToken
        }
        answers {
          nextToken
        }
        description
        image
        createdAt
        updatedAt
        quizResultsId
      }
      nextToken
    }
  }
`;
export const getAnswer = /* GraphQL */ `
  query GetAnswer($id: ID!) {
    getAnswer(id: $id) {
      id
      questionID {
        id
        quizID {
          id
          quizID
          topic
          publicPrivate
          createdAt
          updatedAt
          userQuizOwnersId
        }
        questionID
        answers {
          nextToken
        }
        createdAt
        updatedAt
        quizQuestionsId
      }
      answerID
      result {
        id
        quizID {
          id
          quizID
          topic
          publicPrivate
          createdAt
          updatedAt
          userQuizOwnersId
        }
        resultID
        users {
          nextToken
        }
        answers {
          nextToken
        }
        description
        image
        createdAt
        updatedAt
        quizResultsId
      }
      userAnswers {
        items {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        nextToken
      }
      weight
      answer
      createdAt
      updatedAt
      resultAnswersId
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
        questionID {
          id
          questionID
          createdAt
          updatedAt
          quizQuestionsId
        }
        answerID
        result {
          id
          resultID
          description
          image
          createdAt
          updatedAt
          quizResultsId
        }
        userAnswers {
          nextToken
        }
        weight
        answer
        createdAt
        updatedAt
        resultAnswersId
        questionAnswersId
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      quizID {
        id
        quizID
        owner {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        groups {
          nextToken
        }
        questions {
          nextToken
        }
        results {
          nextToken
        }
        topic
        publicPrivate
        createdAt
        updatedAt
        userQuizOwnersId
      }
      questionID
      answers {
        items {
          id
          answerID
          weight
          answer
          createdAt
          updatedAt
          resultAnswersId
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
        quizID {
          id
          quizID
          topic
          publicPrivate
          createdAt
          updatedAt
          userQuizOwnersId
        }
        questionID
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
export const getQuiz = /* GraphQL */ `
  query GetQuiz($id: ID!) {
    getQuiz(id: $id) {
      id
      quizID
      owner {
        userID
        admin
        friends {
          nextToken
        }
        friendRequests {
          nextToken
        }
        blocked
        highlightColor
        profilePicture
        publicPrivate
        bio
        groups {
          nextToken
        }
        groupAdmins {
          nextToken
        }
        groupOwners {
          nextToken
        }
        groupLikes {
          nextToken
        }
        groupResponses {
          nextToken
        }
        quizOwners {
          nextToken
        }
        quizResults {
          nextToken
        }
        id
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
        userFriendRequestsId
      }
      groups {
        items {
          id
          quizID
          groupID
          createdAt
          updatedAt
        }
        nextToken
      }
      questions {
        items {
          id
          questionID
          createdAt
          updatedAt
          quizQuestionsId
        }
        nextToken
      }
      results {
        items {
          id
          resultID
          description
          image
          createdAt
          updatedAt
          quizResultsId
        }
        nextToken
      }
      topic
      publicPrivate
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
        quizID
        owner {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        groups {
          nextToken
        }
        questions {
          nextToken
        }
        results {
          nextToken
        }
        topic
        publicPrivate
        createdAt
        updatedAt
        userQuizOwnersId
      }
      nextToken
    }
  }
`;
export const getResponse = /* GraphQL */ `
  query GetResponse($id: ID!) {
    getResponse(id: $id) {
      id
      responseID
      messageID {
        id
        groupID {
          id
          groupID
          highlightColor
          publicPrivate
          profilePicture
          bio
          createdAt
          updatedAt
        }
        poster {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        postID
        text
        image
        likes {
          nextToken
        }
        responses {
          nextToken
        }
        createdAt
        updatedAt
        groupMessagesId
      }
      postID
      responder {
        userID
        admin
        friends {
          nextToken
        }
        friendRequests {
          nextToken
        }
        blocked
        highlightColor
        profilePicture
        publicPrivate
        bio
        groups {
          nextToken
        }
        groupAdmins {
          nextToken
        }
        groupOwners {
          nextToken
        }
        groupLikes {
          nextToken
        }
        groupResponses {
          nextToken
        }
        quizOwners {
          nextToken
        }
        quizResults {
          nextToken
        }
        id
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
        userFriendRequestsId
      }
      text
      createdAt
      updatedAt
      groupMessageResponsesId
      userGroupResponsesId
    }
  }
`;
export const listResponses = /* GraphQL */ `
  query ListResponses(
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        responseID
        messageID {
          id
          postID
          text
          image
          createdAt
          updatedAt
          groupMessagesId
        }
        postID
        responder {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        text
        createdAt
        updatedAt
        groupMessageResponsesId
        userGroupResponsesId
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      messageID {
        id
        groupID {
          id
          groupID
          highlightColor
          publicPrivate
          profilePicture
          bio
          createdAt
          updatedAt
        }
        poster {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        postID
        text
        image
        likes {
          nextToken
        }
        responses {
          nextToken
        }
        createdAt
        updatedAt
        groupMessagesId
      }
      postID
      liker {
        userID
        admin
        friends {
          nextToken
        }
        friendRequests {
          nextToken
        }
        blocked
        highlightColor
        profilePicture
        publicPrivate
        bio
        groups {
          nextToken
        }
        groupAdmins {
          nextToken
        }
        groupOwners {
          nextToken
        }
        groupLikes {
          nextToken
        }
        groupResponses {
          nextToken
        }
        quizOwners {
          nextToken
        }
        quizResults {
          nextToken
        }
        id
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
        userFriendRequestsId
      }
      createdAt
      updatedAt
      groupMessageLikesId
      userGroupLikesId
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        messageID {
          id
          postID
          text
          image
          createdAt
          updatedAt
          groupMessagesId
        }
        postID
        liker {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        createdAt
        updatedAt
        groupMessageLikesId
        userGroupLikesId
      }
      nextToken
    }
  }
`;
export const getGroupMessage = /* GraphQL */ `
  query GetGroupMessage($id: ID!) {
    getGroupMessage(id: $id) {
      id
      groupID {
        id
        groupID
        owner {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        members {
          nextToken
        }
        admin {
          nextToken
        }
        messages {
          nextToken
        }
        quizzes {
          nextToken
        }
        highlightColor
        publicPrivate
        profilePicture
        bio
        createdAt
        updatedAt
      }
      poster {
        userID
        admin
        friends {
          nextToken
        }
        friendRequests {
          nextToken
        }
        blocked
        highlightColor
        profilePicture
        publicPrivate
        bio
        groups {
          nextToken
        }
        groupAdmins {
          nextToken
        }
        groupOwners {
          nextToken
        }
        groupLikes {
          nextToken
        }
        groupResponses {
          nextToken
        }
        quizOwners {
          nextToken
        }
        quizResults {
          nextToken
        }
        id
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
        userFriendRequestsId
      }
      postID
      text
      image
      likes {
        items {
          id
          postID
          createdAt
          updatedAt
          groupMessageLikesId
          userGroupLikesId
        }
        nextToken
      }
      responses {
        items {
          id
          responseID
          postID
          text
          createdAt
          updatedAt
          groupMessageResponsesId
          userGroupResponsesId
        }
        nextToken
      }
      createdAt
      updatedAt
      groupMessagesId
    }
  }
`;
export const listGroupMessages = /* GraphQL */ `
  query ListGroupMessages(
    $filter: ModelGroupMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupID {
          id
          groupID
          highlightColor
          publicPrivate
          profilePicture
          bio
          createdAt
          updatedAt
        }
        poster {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        postID
        text
        image
        likes {
          nextToken
        }
        responses {
          nextToken
        }
        createdAt
        updatedAt
        groupMessagesId
      }
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      groupID
      owner {
        userID
        admin
        friends {
          nextToken
        }
        friendRequests {
          nextToken
        }
        blocked
        highlightColor
        profilePicture
        publicPrivate
        bio
        groups {
          nextToken
        }
        groupAdmins {
          nextToken
        }
        groupOwners {
          nextToken
        }
        groupLikes {
          nextToken
        }
        groupResponses {
          nextToken
        }
        quizOwners {
          nextToken
        }
        quizResults {
          nextToken
        }
        id
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
        userFriendRequestsId
      }
      members {
        items {
          id
          groupID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      admin {
        items {
          id
          groupID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          postID
          text
          image
          createdAt
          updatedAt
          groupMessagesId
        }
        nextToken
      }
      quizzes {
        items {
          id
          quizID
          groupID
          createdAt
          updatedAt
        }
        nextToken
      }
      highlightColor
      publicPrivate
      profilePicture
      bio
      createdAt
      updatedAt
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
        groupID
        owner {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        members {
          nextToken
        }
        admin {
          nextToken
        }
        messages {
          nextToken
        }
        quizzes {
          nextToken
        }
        highlightColor
        publicPrivate
        profilePicture
        bio
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserMessage = /* GraphQL */ `
  query GetUserMessage($id: ID!) {
    getUserMessage(id: $id) {
      id
      sender {
        userID
        admin
        friends {
          nextToken
        }
        friendRequests {
          nextToken
        }
        blocked
        highlightColor
        profilePicture
        publicPrivate
        bio
        groups {
          nextToken
        }
        groupAdmins {
          nextToken
        }
        groupOwners {
          nextToken
        }
        groupLikes {
          nextToken
        }
        groupResponses {
          nextToken
        }
        quizOwners {
          nextToken
        }
        quizResults {
          nextToken
        }
        id
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
        userFriendRequestsId
      }
      receiver {
        userID
        admin
        friends {
          nextToken
        }
        friendRequests {
          nextToken
        }
        blocked
        highlightColor
        profilePicture
        publicPrivate
        bio
        groups {
          nextToken
        }
        groupAdmins {
          nextToken
        }
        groupOwners {
          nextToken
        }
        groupLikes {
          nextToken
        }
        groupResponses {
          nextToken
        }
        quizOwners {
          nextToken
        }
        quizResults {
          nextToken
        }
        id
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
        userFriendRequestsId
      }
      text
      createdAt
      updatedAt
    }
  }
`;
export const listUserMessages = /* GraphQL */ `
  query ListUserMessages(
    $filter: ModelUserMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sender {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        receiver {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        text
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      userID
      admin
      friends {
        items {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        nextToken
      }
      friendRequests {
        items {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        nextToken
      }
      blocked
      highlightColor
      profilePicture
      publicPrivate
      bio
      groups {
        items {
          id
          groupID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      groupAdmins {
        items {
          id
          groupID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      groupOwners {
        items {
          id
          groupID
          highlightColor
          publicPrivate
          profilePicture
          bio
          createdAt
          updatedAt
        }
        nextToken
      }
      groupLikes {
        items {
          id
          postID
          createdAt
          updatedAt
          groupMessageLikesId
          userGroupLikesId
        }
        nextToken
      }
      groupResponses {
        items {
          id
          responseID
          postID
          text
          createdAt
          updatedAt
          groupMessageResponsesId
          userGroupResponsesId
        }
        nextToken
      }
      quizOwners {
        items {
          id
          quizID
          topic
          publicPrivate
          createdAt
          updatedAt
          userQuizOwnersId
        }
        nextToken
      }
      quizResults {
        items {
          id
          resultID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      answerUserAnswersId
      userFriendsId
      userFriendRequestsId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        userID
        admin
        friends {
          nextToken
        }
        friendRequests {
          nextToken
        }
        blocked
        highlightColor
        profilePicture
        publicPrivate
        bio
        groups {
          nextToken
        }
        groupAdmins {
          nextToken
        }
        groupOwners {
          nextToken
        }
        groupLikes {
          nextToken
        }
        groupResponses {
          nextToken
        }
        quizOwners {
          nextToken
        }
        quizResults {
          nextToken
        }
        id
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
        userFriendRequestsId
      }
      nextToken
    }
  }
`;
export const getUserToResult = /* GraphQL */ `
  query GetUserToResult($id: ID!) {
    getUserToResult(id: $id) {
      id
      resultID
      userID
      result {
        id
        quizID {
          id
          quizID
          topic
          publicPrivate
          createdAt
          updatedAt
          userQuizOwnersId
        }
        resultID
        users {
          nextToken
        }
        answers {
          nextToken
        }
        description
        image
        createdAt
        updatedAt
        quizResultsId
      }
      user {
        userID
        admin
        friends {
          nextToken
        }
        friendRequests {
          nextToken
        }
        blocked
        highlightColor
        profilePicture
        publicPrivate
        bio
        groups {
          nextToken
        }
        groupAdmins {
          nextToken
        }
        groupOwners {
          nextToken
        }
        groupLikes {
          nextToken
        }
        groupResponses {
          nextToken
        }
        quizOwners {
          nextToken
        }
        quizResults {
          nextToken
        }
        id
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
        userFriendRequestsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserToResults = /* GraphQL */ `
  query ListUserToResults(
    $filter: ModelUserToResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserToResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        resultID
        userID
        result {
          id
          resultID
          description
          image
          createdAt
          updatedAt
          quizResultsId
        }
        user {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
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
      quizID
      groupID
      quiz {
        id
        quizID
        owner {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        groups {
          nextToken
        }
        questions {
          nextToken
        }
        results {
          nextToken
        }
        topic
        publicPrivate
        createdAt
        updatedAt
        userQuizOwnersId
      }
      group {
        id
        groupID
        owner {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        members {
          nextToken
        }
        admin {
          nextToken
        }
        messages {
          nextToken
        }
        quizzes {
          nextToken
        }
        highlightColor
        publicPrivate
        profilePicture
        bio
        createdAt
        updatedAt
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
        quizID
        groupID
        quiz {
          id
          quizID
          topic
          publicPrivate
          createdAt
          updatedAt
          userQuizOwnersId
        }
        group {
          id
          groupID
          highlightColor
          publicPrivate
          profilePicture
          bio
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
      id
      groupID
      userID
      group {
        id
        groupID
        owner {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        members {
          nextToken
        }
        admin {
          nextToken
        }
        messages {
          nextToken
        }
        quizzes {
          nextToken
        }
        highlightColor
        publicPrivate
        profilePicture
        bio
        createdAt
        updatedAt
      }
      user {
        userID
        admin
        friends {
          nextToken
        }
        friendRequests {
          nextToken
        }
        blocked
        highlightColor
        profilePicture
        publicPrivate
        bio
        groups {
          nextToken
        }
        groupAdmins {
          nextToken
        }
        groupOwners {
          nextToken
        }
        groupLikes {
          nextToken
        }
        groupResponses {
          nextToken
        }
        quizOwners {
          nextToken
        }
        quizResults {
          nextToken
        }
        id
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
        userFriendRequestsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupID
        userID
        group {
          id
          groupID
          highlightColor
          publicPrivate
          profilePicture
          bio
          createdAt
          updatedAt
        }
        user {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroupAdmin = /* GraphQL */ `
  query GetGroupAdmin($id: ID!) {
    getGroupAdmin(id: $id) {
      id
      groupID
      userID
      group {
        id
        groupID
        owner {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        members {
          nextToken
        }
        admin {
          nextToken
        }
        messages {
          nextToken
        }
        quizzes {
          nextToken
        }
        highlightColor
        publicPrivate
        profilePicture
        bio
        createdAt
        updatedAt
      }
      user {
        userID
        admin
        friends {
          nextToken
        }
        friendRequests {
          nextToken
        }
        blocked
        highlightColor
        profilePicture
        publicPrivate
        bio
        groups {
          nextToken
        }
        groupAdmins {
          nextToken
        }
        groupOwners {
          nextToken
        }
        groupLikes {
          nextToken
        }
        groupResponses {
          nextToken
        }
        quizOwners {
          nextToken
        }
        quizResults {
          nextToken
        }
        id
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
        userFriendRequestsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGroupAdmins = /* GraphQL */ `
  query ListGroupAdmins(
    $filter: ModelGroupAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupID
        userID
        group {
          id
          groupID
          highlightColor
          publicPrivate
          profilePicture
          bio
          createdAt
          updatedAt
        }
        user {
          userID
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          id
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
          userFriendRequestsId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
