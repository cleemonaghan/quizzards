// custom getQuiz query
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
        admin
        blocked
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
        nextToken
      }
      results {
        items {
          id
          quizID
          name
          description
          index
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

// custom listQuiz query
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
        picture
        createdAt
        updatedAt
        userQuizOwnersId
      }
      nextToken
    }
  }
`;
