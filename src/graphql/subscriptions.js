/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateResult = /* GraphQL */ `
  subscription OnCreateResult {
    onCreateResult {
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
export const onUpdateResult = /* GraphQL */ `
  subscription OnUpdateResult {
    onUpdateResult {
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
export const onDeleteResult = /* GraphQL */ `
  subscription OnDeleteResult {
    onDeleteResult {
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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreateQuiz = /* GraphQL */ `
  subscription OnCreateQuiz {
    onCreateQuiz {
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
export const onUpdateQuiz = /* GraphQL */ `
  subscription OnUpdateQuiz {
    onUpdateQuiz {
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
export const onDeleteQuiz = /* GraphQL */ `
  subscription OnDeleteQuiz {
    onDeleteQuiz {
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
export const onCreateResponse = /* GraphQL */ `
  subscription OnCreateResponse {
    onCreateResponse {
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
export const onUpdateResponse = /* GraphQL */ `
  subscription OnUpdateResponse {
    onUpdateResponse {
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
export const onDeleteResponse = /* GraphQL */ `
  subscription OnDeleteResponse {
    onDeleteResponse {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
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
export const onCreateGroupMessage = /* GraphQL */ `
  subscription OnCreateGroupMessage {
    onCreateGroupMessage {
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
export const onUpdateGroupMessage = /* GraphQL */ `
  subscription OnUpdateGroupMessage {
    onUpdateGroupMessage {
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
export const onDeleteGroupMessage = /* GraphQL */ `
  subscription OnDeleteGroupMessage {
    onDeleteGroupMessage {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
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
export const onCreateUserMessage = /* GraphQL */ `
  subscription OnCreateUserMessage {
    onCreateUserMessage {
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
export const onUpdateUserMessage = /* GraphQL */ `
  subscription OnUpdateUserMessage {
    onUpdateUserMessage {
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
export const onDeleteUserMessage = /* GraphQL */ `
  subscription OnDeleteUserMessage {
    onDeleteUserMessage {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateUserToResult = /* GraphQL */ `
  subscription OnCreateUserToResult {
    onCreateUserToResult {
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
export const onUpdateUserToResult = /* GraphQL */ `
  subscription OnUpdateUserToResult {
    onUpdateUserToResult {
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
export const onDeleteUserToResult = /* GraphQL */ `
  subscription OnDeleteUserToResult {
    onDeleteUserToResult {
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
export const onCreateQuizToGroup = /* GraphQL */ `
  subscription OnCreateQuizToGroup {
    onCreateQuizToGroup {
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
export const onUpdateQuizToGroup = /* GraphQL */ `
  subscription OnUpdateQuizToGroup {
    onUpdateQuizToGroup {
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
export const onDeleteQuizToGroup = /* GraphQL */ `
  subscription OnDeleteQuizToGroup {
    onDeleteQuizToGroup {
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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember {
    onCreateMember {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember {
    onUpdateMember {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember {
    onDeleteMember {
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
export const onCreateGroupAdmin = /* GraphQL */ `
  subscription OnCreateGroupAdmin {
    onCreateGroupAdmin {
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
export const onUpdateGroupAdmin = /* GraphQL */ `
  subscription OnUpdateGroupAdmin {
    onUpdateGroupAdmin {
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
export const onDeleteGroupAdmin = /* GraphQL */ `
  subscription OnDeleteGroupAdmin {
    onDeleteGroupAdmin {
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
