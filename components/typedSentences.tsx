import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Text = styled.h1`
  color: #fff;
  width: 100%;
  font-family: "Roboto Mono", monospace;

  ::after {
    position: absolute;
    height: 3.5rem;
    content: "";
    border-left: 0.1em solid white;
    margin-left: 0.5rem;
    animation: caret 1s steps(1) infinite;

    @media screen and (min-width: 600px) {
      height: 7rem;
    }
  }

  @keyframes caret {
    50% {
      border-color: transparent;
    }
  }
`;

type PropsType = {
  sentences: string[];
  speed: number;
};

export default function TypedSentences(props: PropsType) {
  const [index, setIndex] = useState(-1);
  const [renderedLetters, setRenderedLetters] = useState("");
  const [currentSentence, setCurrentSentence] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    console.log("props", props);
    setCurrentSentence(props.sentences[0]);
    setIndex(0);
  }, []);

  function nextSentence() {
    if (props.sentences.length > props.sentences.indexOf(currentSentence) + 1) {
      setCurrentSentence(
        props.sentences[props.sentences.indexOf(currentSentence) + 1]
      );
    } else {
      setCurrentSentence(props.sentences[0]);
    }
  }

  function typeText() {
    if (renderedLetters.length === currentSentence.length) {
      setTimeout(() => {
        setTyping(false);
        setIndex(0);
      }, 2000);
    } else {
      setRenderedLetters(currentSentence.slice(0, index));
      setIndex(index + 1);
    }
  }

  function deleteText() {
    if (renderedLetters.length <= 1) {
      setTimeout(() => {
        setTyping(true);
        setIndex(0);
        nextSentence();
      }, 500);
    } else {
      let i = currentSentence.length - index;
      setRenderedLetters(currentSentence.slice(0, i < 2 ? 0 : i));
      setIndex(index + 2);
    }
  }

  function sentenceHandler() {
    if (typing) {
      typeText();
    } else {
      deleteText();
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      sentenceHandler();
    }, props.speed);
    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  return <Text>{renderedLetters}</Text>;
}