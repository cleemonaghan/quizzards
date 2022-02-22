/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResult = /* GraphQL */ `
  mutation CreateResult(
    $input: CreateResultInput!
    $condition: ModelResultConditionInput
  ) {
    createResult(input: $input, condition: $condition) {
      id
      quizID {
        id
        quizID
        owner {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
export const updateResult = /* GraphQL */ `
  mutation UpdateResult(
    $input: UpdateResultInput!
    $condition: ModelResultConditionInput
  ) {
    updateResult(input: $input, condition: $condition) {
      id
      quizID {
        id
        quizID
        owner {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
export const deleteResult = /* GraphQL */ `
  mutation DeleteResult(
    $input: DeleteResultInput!
    $condition: ModelResultConditionInput
  ) {
    deleteResult(input: $input, condition: $condition) {
      id
      quizID {
        id
        quizID
        owner {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
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
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
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
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
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
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      quizID {
        id
        quizID
        owner {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      quizID {
        id
        quizID
        owner {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      quizID {
        id
        quizID
        owner {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
export const createQuiz = /* GraphQL */ `
  mutation CreateQuiz(
    $input: CreateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    createQuiz(input: $input, condition: $condition) {
      id
      quizID
      owner {
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
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
export const updateQuiz = /* GraphQL */ `
  mutation UpdateQuiz(
    $input: UpdateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    updateQuiz(input: $input, condition: $condition) {
      id
      quizID
      owner {
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
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
export const deleteQuiz = /* GraphQL */ `
  mutation DeleteQuiz(
    $input: DeleteQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    deleteQuiz(input: $input, condition: $condition) {
      id
      quizID
      owner {
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
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
export const createResponse = /* GraphQL */ `
  mutation CreateResponse(
    $input: CreateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    createResponse(input: $input, condition: $condition) {
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
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
        userGroupMessagesId
      }
      postID
      responder {
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      text
      createdAt
      updatedAt
      groupMessageResponsesId
      userGroupResponsesId
    }
  }
`;
export const updateResponse = /* GraphQL */ `
  mutation UpdateResponse(
    $input: UpdateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    updateResponse(input: $input, condition: $condition) {
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
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
        userGroupMessagesId
      }
      postID
      responder {
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      text
      createdAt
      updatedAt
      groupMessageResponsesId
      userGroupResponsesId
    }
  }
`;
export const deleteResponse = /* GraphQL */ `
  mutation DeleteResponse(
    $input: DeleteResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    deleteResponse(input: $input, condition: $condition) {
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
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
        userGroupMessagesId
      }
      postID
      responder {
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      text
      createdAt
      updatedAt
      groupMessageResponsesId
      userGroupResponsesId
    }
  }
`;
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
        userGroupMessagesId
      }
      postID
      liker {
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      createdAt
      updatedAt
      groupMessageLikesId
      userGroupLikesId
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
        userGroupMessagesId
      }
      postID
      liker {
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      createdAt
      updatedAt
      groupMessageLikesId
      userGroupLikesId
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
        userGroupMessagesId
      }
      postID
      liker {
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      createdAt
      updatedAt
      groupMessageLikesId
      userGroupLikesId
    }
  }
`;
export const createGroupMessage = /* GraphQL */ `
  mutation CreateGroupMessage(
    $input: CreateGroupMessageInput!
    $condition: ModelGroupMessageConditionInput
  ) {
    createGroupMessage(input: $input, condition: $condition) {
      id
      groupID {
        id
        groupID
        owner {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
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
      userGroupMessagesId
    }
  }
`;
export const updateGroupMessage = /* GraphQL */ `
  mutation UpdateGroupMessage(
    $input: UpdateGroupMessageInput!
    $condition: ModelGroupMessageConditionInput
  ) {
    updateGroupMessage(input: $input, condition: $condition) {
      id
      groupID {
        id
        groupID
        owner {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
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
      userGroupMessagesId
    }
  }
`;
export const deleteGroupMessage = /* GraphQL */ `
  mutation DeleteGroupMessage(
    $input: DeleteGroupMessageInput!
    $condition: ModelGroupMessageConditionInput
  ) {
    deleteGroupMessage(input: $input, condition: $condition) {
      id
      groupID {
        id
        groupID
        owner {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
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
      userGroupMessagesId
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
      groupID
      owner {
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
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
          userGroupMessagesId
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
      id
      groupID
      owner {
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
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
          userGroupMessagesId
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
      id
      groupID
      owner {
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
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
          userGroupMessagesId
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
export const createUserMessage = /* GraphQL */ `
  mutation CreateUserMessage(
    $input: CreateUserMessageInput!
    $condition: ModelUserMessageConditionInput
  ) {
    createUserMessage(input: $input, condition: $condition) {
      id
      sender {
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      receiver {
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      text
      createdAt
      updatedAt
    }
  }
`;
export const updateUserMessage = /* GraphQL */ `
  mutation UpdateUserMessage(
    $input: UpdateUserMessageInput!
    $condition: ModelUserMessageConditionInput
  ) {
    updateUserMessage(input: $input, condition: $condition) {
      id
      sender {
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      receiver {
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      text
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserMessage = /* GraphQL */ `
  mutation DeleteUserMessage(
    $input: DeleteUserMessageInput!
    $condition: ModelUserMessageConditionInput
  ) {
    deleteUserMessage(input: $input, condition: $condition) {
      id
      sender {
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      receiver {
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      text
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      userID
      firstName
      lastName
      age
      admin
      friends {
        items {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
      groupMessages {
        items {
          id
          postID
          text
          image
          createdAt
          updatedAt
          groupMessagesId
          userGroupMessagesId
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
      createdAt
      updatedAt
      answerUserAnswersId
      userFriendsId
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      userID
      firstName
      lastName
      age
      admin
      friends {
        items {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
      groupMessages {
        items {
          id
          postID
          text
          image
          createdAt
          updatedAt
          groupMessagesId
          userGroupMessagesId
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
      createdAt
      updatedAt
      answerUserAnswersId
      userFriendsId
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      userID
      firstName
      lastName
      age
      admin
      friends {
        items {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
      groupMessages {
        items {
          id
          postID
          text
          image
          createdAt
          updatedAt
          groupMessagesId
          userGroupMessagesId
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
      createdAt
      updatedAt
      answerUserAnswersId
      userFriendsId
    }
  }
`;
export const createUserToResult = /* GraphQL */ `
  mutation CreateUserToResult(
    $input: CreateUserToResultInput!
    $condition: ModelUserToResultConditionInput
  ) {
    createUserToResult(input: $input, condition: $condition) {
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
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUserToResult = /* GraphQL */ `
  mutation UpdateUserToResult(
    $input: UpdateUserToResultInput!
    $condition: ModelUserToResultConditionInput
  ) {
    updateUserToResult(input: $input, condition: $condition) {
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
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserToResult = /* GraphQL */ `
  mutation DeleteUserToResult(
    $input: DeleteUserToResultInput!
    $condition: ModelUserToResultConditionInput
  ) {
    deleteUserToResult(input: $input, condition: $condition) {
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
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
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
      quizID
      groupID
      quiz {
        id
        quizID
        owner {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
export const updateQuizToGroup = /* GraphQL */ `
  mutation UpdateQuizToGroup(
    $input: UpdateQuizToGroupInput!
    $condition: ModelQuizToGroupConditionInput
  ) {
    updateQuizToGroup(input: $input, condition: $condition) {
      id
      quizID
      groupID
      quiz {
        id
        quizID
        owner {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
export const deleteQuizToGroup = /* GraphQL */ `
  mutation DeleteQuizToGroup(
    $input: DeleteQuizToGroupInput!
    $condition: ModelQuizToGroupConditionInput
  ) {
    deleteQuizToGroup(input: $input, condition: $condition) {
      id
      quizID
      groupID
      quiz {
        id
        quizID
        owner {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
      id
      groupID
      userID
      group {
        id
        groupID
        owner {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
      id
      groupID
      userID
      group {
        id
        groupID
        owner {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
      id
      groupID
      userID
      group {
        id
        groupID
        owner {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const createGroupAdmin = /* GraphQL */ `
  mutation CreateGroupAdmin(
    $input: CreateGroupAdminInput!
    $condition: ModelGroupAdminConditionInput
  ) {
    createGroupAdmin(input: $input, condition: $condition) {
      id
      groupID
      userID
      group {
        id
        groupID
        owner {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGroupAdmin = /* GraphQL */ `
  mutation UpdateGroupAdmin(
    $input: UpdateGroupAdminInput!
    $condition: ModelGroupAdminConditionInput
  ) {
    updateGroupAdmin(input: $input, condition: $condition) {
      id
      groupID
      userID
      group {
        id
        groupID
        owner {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGroupAdmin = /* GraphQL */ `
  mutation DeleteGroupAdmin(
    $input: DeleteGroupAdminInput!
    $condition: ModelGroupAdminConditionInput
  ) {
    deleteGroupAdmin(input: $input, condition: $condition) {
      id
      groupID
      userID
      group {
        id
        groupID
        owner {
          id
          userID
          firstName
          lastName
          age
          admin
          blocked
          highlightColor
          profilePicture
          publicPrivate
          bio
          createdAt
          updatedAt
          answerUserAnswersId
          userFriendsId
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
        id
        userID
        firstName
        lastName
        age
        admin
        friends {
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
        groupMessages {
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
        createdAt
        updatedAt
        answerUserAnswersId
        userFriendsId
      }
      createdAt
      updatedAt
    }
  }
`;
