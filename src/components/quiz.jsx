import React from "react";
import ProfilePhoto from "../images/photo12.png";
import BackgroundImage from "../images/photo15.png"; //what is this?
//import FirstResultImage from "../images/logo.png";
//import SecondResultImage from "../images/logo.png";
//Format: JSON with
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/lib/styles.css";
// function Quiz() {
class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.user = null;
    this.state = {
      results: [{ name: "", img: "" }],
      questions: [{ name: "", img: "", answers: [{ name: "", weights: [] }] }],
      colors: [
        "#db278d",
        "#f14e48",
        "#ff9038",
        "#feca1d",
        "#43c12c",
        "#27dbae",
        "#0273e9",
        "#7248f1",
        "#c035e7",
      ],
    };
  }

  render() {
    return (
      <BuzzFeedQuiz
        title={"Your title goes here."}
        description={"Your description goes here."} //byline={true}
        bylineAuthor={"Your name"}
        bylineAvatarImageSrc={ProfilePhoto}
        autoScroll={true}
        onRestart={() =>
          alert("This alert was triggered by the onRestart prop!")
        } //what?
        onResult={() => alert("The onResult prop triggered this alert!")}
        /* facebookShareButton={true}
        facebookShareLink={"www.yourlink.com"}
        twitterShareButton={true}
        twitterShareLink={"www.yourlink.com"}
        copyShareButton={true}
        copyShareLink={"This text was copied using the copyShareLink prop."} */
        questions={[
          {
            question: "Question One",
            backgroundImageSrc: BackgroundImage,
            answers: [
              {
                answer: "Answer one",
                backgroundColor: this.state.colors[0],
                resultID: 0,
              },
              {
                answer: "Answer two",
                backgroundColor: this.state.colors[1],
                resultID: 1,
              },
              {
                answer: "Answer three",
                backgroundColor: this.state.colors[2],
                resultID: 2,
              },
              {
                answer: "Answer four",
                backgroundColor: this.state.colors[3],
                resultID: 3,
              },
              {
                answer: "Answer five",
                backgroundColor: this.state.colors[4],
                resultID: 4,
              },
              {
                answer: "Answer six",
                backgroundColor: this.state.colors[5],
                resultID: 5,
              },
              {
                answer: "Answer seven",
                backgroundColor: this.state.colors[6],
                resultID: 6,
              },
              {
                answer: "Answer eight",
                backgroundColor: this.state.colors[7],
                resultID: 7,
              },
              {
                answer: "Answer nine",
                backgroundColor: this.state.colors[8],
                resultID: 8,
              },
            ],
          },
          {
            question: "Question Two",
            backgroundImageSrc: BackgroundImage,
            answers: [
              {
                answer: "Answer one",
                backgroundColor: this.state.colors[4],
                resultID: 0,
              },
              {
                answer: "Answer two",
                backgroundColor: this.state.colors[5],
                resultID: 1,
              },
              {
                answer: "Answer three",
                backgroundColor: this.state.colors[6],
                resultID: 2,
              },
            ],
          },
          {
            question: "Question Three",
            backgroundImageSrc: BackgroundImage,
            answers: [
              {
                answer: "Answer one",
                backgroundColor: this.state.colors[0],
                resultID: 0,
              },
              {
                answer: "Answer two",
                backgroundColor: this.state.colors[1],
                resultID: 1,
              },
            ],
          },
        ]}
        results={[
          {
            title: "Result One",
            resultImageSrc: BackgroundImage,
            // imageAttribution: "Your photo attribution text goes here",
            resultID: 0,
          },
          {
            title: "Result Two",
            resultImageSrc: BackgroundImage,
            resultID: 1,
          },
          {
            title: "Result Three",
            resultImageSrc: BackgroundImage,
            resultID: 2,
          },
          {
            title: "Result Four",
            resultImageSrc: BackgroundImage,
            resultID: 3,
          },
          {
            title: "Result Five",
            resultImageSrc: BackgroundImage,
            resultID: 4,
          },
          {
            title: "Result Six",
            resultImageSrc: BackgroundImage,
            resultID: 5,
          },
          {
            title: "Result Seven",
            resultImageSrc: BackgroundImage,
            resultID: 6,
          },
          {
            title: "Result Eight",
            resultImageSrc: BackgroundImage,
            resultID: 7,
          },
          {
            title: "Result Nine",
            resultImageSrc: BackgroundImage,
            resultID: 8,
          },
          {
            title: "Result Ten",
            resultImageSrc: BackgroundImage,
            resultID: 9,
          },
          {
            title: "Result Eleven",
            resultImageSrc: BackgroundImage,
            resultID: 10,
          },
          {
            title: "Result Twelve",
            resultImageSrc: BackgroundImage,
            resultID: 11,
          },
        ]}
      />
    );
  }
}
export default Quiz;

// {
//   question: "Let's add some background and font colors",
//   backgroundColor: "rgb(211, 211, 211)",
//   fontColor: "#000",
//   answers: [
//     {
//       answer: "First answer",
//       backgroundColor: "red",
//       fontColor: "rgb(215, 215, 215)",
//       resultID: 0,
//     },
//     {
//       answer: "Second answer",
//       backgroundColor: "orange",
//       fontColor: "green",
//       resultID: 1,
//     },
//     {
//       answer: "Third answer",
//       backgroundColor: "yellow",
//       fontColor: "#000",
//       resultID: 2,
//     },
//   ],
// },
// {
//   question: "Here is some overlapping image text",
//   questionRelativeToImage: "overlap",
//   imageAttribution: "Question image attribution text goes here",
//   answerArrangement: "tile",
//   backgroundImageSrc: BackgroundImage,
//   answers: [
//     {
//       answer: "This answer has a background photo",
//       resultID: 0,
//       backgroundImageSrc: BackgroundImage,
//       imageAttribution: "Answer photo attribution text goes here",
//     },
//     {
//       answer: "Not this one, though",
//       resultID: 1,
//       backgroundColor: "rgb(238,243,247)",
//       fontColor: "rgb(53,51,48)",
//     },
//     {
//       answer: "Not this one, either",
//       resultID: 2,
//       backgroundColor: "rgb(238,243,247)",
//       fontColor: "rgb(53,51,48)",
//     },
//   ],
// },
// {
//   question: "Here is some adjacent image text",
//   questionRelativeToImage: "adjacent",
//   answerArrangement: "row",
//   backgroundImageSrc: BackgroundImage,
//   answers: [
//     {
//       answer: "Answer one",
//       resultID: 0,
//     },
//     {
//       answer: "Answer two",
//       resultID: 1,
//     },
//     {
//       answer: "Answer three",
//       resultID: 2,
//     },
//   ],
// },
// {
//   question: "Answers can also trigger a callback function",
//   answers: [
//     {
//       answer: "This one does not trigger a function",
//       resultID: 0,
//     },
//     {
//       answer: "Click for answer function",
//       onAnswerSelection: () =>
//         alert("This alert is caused by an answer selection!"),
//       resultID: 1,
//     },
//   ],
// },
