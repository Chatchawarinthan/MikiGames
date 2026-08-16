"use client";

import { useState } from "react";

/* =========================================
   QUESTIONS
========================================= */

const questions = [
  {
    question: "เอมแฮม",
    choices: [
      "ปอนด์หยง",
      "เน่หยง",
      "เอ้วหยง",
      "ชาหยง",
    ],
    answer: "เอ้วหยง",
  },

  {
    question: "อาชิฮินะ",
    choices: [
      "เอ้วหยง",
      "นิชาหยง",
      "จิงหยง",
      "หลิงหยง",
    ],
    answer: "เอ้วหยง",
  },

  {
    question: "เชนหยี",
    choices: [
      "เอ้วแพร",
      "นิชาหยง",
      "ปอนด์หยง",
      "หลิงหยง",
    ],
    answer: "นิชาหยง",
  },

  {
    question: "ลิงค์ฮันนี่",
    choices: [
      "จิงหยง",
      "หลิงหยง",
      "เอ้วหยง",
      "เอ้วแพร",
    ],
    answer: "หลิงหยง",
  },

  {
    question: "เป้แฮม",
    choices: [
      "เอ้วหยง",
      "ปอนด์หยง",
      "นิชาหยง",
      "จิงหยง",
    ],
    answer: "ปอนด์หยง",
  },

  {
    question: "เกื้อพริ้ม",
    choices: [
      "เกดแพร / ลูกแพร",
      "เอ้วแพร",
      "จิงหยง",
      "หลิงหยง",
    ],
    answer: "เกดแพร / ลูกแพร",
  },

  {
    question: "จัสหมิง",
    choices: [
      "หลิงหยง",
      "เอ้วหยง",
      "จิงหยง",
      "ปอนด์หยง",
    ],
    answer: "จิงหยง",
  },

  {
    question: "อลันม่านไหม",
    choices: [
      "นิชาหยง",
      "เอ้วแพร",
      "หลิงหยง",
      "เอ้วหยง",
    ],
    answer: "เอ้วแพร",
  },

  {
    question: "นานะเจส",
    choices: [
      "นาจิง",
      "เอมเน่",
      "เอ้วปอนด์",
      "เน่หยง",
    ],
    answer: "นาจิง",
  },

  {
    question: "เอมิชิชา",
    choices: [
      "วาปอนด์",
      "เอมเน่",
      "ชาเพลิน",
      "ขวัญแพร",
    ],
    answer: "เอมเน่",
  },

  {
    question: "ไอกิสแตมป์",
    choices: [
      "เอ้วปอนด์",
      "นาจิง",
      "ขวัญเพลิน",
      "เน่หยง",
    ],
    answer: "เอ้วปอนด์",
  },

  {
    question: "เชอหยี",
    choices: [
      "เน่หยง",
      "เอ้วหยง",
      "ปอนด์หยง",
      "นิชาหยง",
    ],
    answer: "เน่หยง",
  },

  {
    question: "วาโยปารีส",
    choices: [
      "ขวัญแพร",
      "เอ้วแพร",
      "วาปอนด์",
      "ชาเพลิน",
    ],
    answer: "วาปอนด์",
  },

  {
    question: "แชมป์พรีน",
    choices: [
      "นาจิง",
      "ชาเพลิน",
      "เอมเน่",
      "ขวัญเพลิน",
    ],
    answer: "ชาเพลิน",
  },

  {
    question: "คิวไพลิน",
    choices: [
      "เกดแพร / ลูกแพร",
      "ขวัญเพลิน",
      "วาปอนด์",
      "เอ้วปอนด์",
    ],
    answer: "ขวัญเพลิน",
  },

  {
    question: "ครามพอใจ",
    choices: [
      "ขวัญแพร",
      "หลิงหยง",
      "เอมเน่",
      "เอ้วแพร",
    ],
    answer: "ขวัญแพร",
  },

  {
    question: "เกรสจูน",
    choices: [
      "เกดจิง",
      "นาจิง",
      "ขวัญแพร",
      "เอ้วปอนด์",
    ],
    answer: "เกดจิง",
  },
];


/* =========================================
   SHUFFLE
========================================= */

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}


/* =========================================
   CREATE NEW GAME
========================================= */

function createGameQuestions() {
  return shuffle(questions).map((question) => ({
    ...question,
    choices: shuffle(question.choices),
  }));
}


/* =========================================
   HOME
========================================= */

export default function Home() {

  const [started, setStarted] = useState(false);

  const [gameQuestions, setGameQuestions] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selected, setSelected] = useState(null);

  const [score, setScore] = useState(0);

  const [finished, setFinished] = useState(false);


  /* =========================================
     START GAME
  ========================================= */

  function startGame() {

    const newGame = createGameQuestions();

    setGameQuestions(newGame);

    setCurrentQuestion(0);

    setSelected(null);

    setScore(0);

    setFinished(false);

    setStarted(true);
  }


  /* =========================================
     GO HOME
  ========================================= */

  function goHome() {

    setStarted(false);

    setGameQuestions([]);

    setCurrentQuestion(0);

    setSelected(null);

    setScore(0);

    setFinished(false);
  }


  /* =========================================
     RESTART GAME
  ========================================= */

  function restartGame() {

    const confirmed = window.confirm(
      "ต้องการเริ่มเกมใหม่ใช่ไหม?\nคะแนนและข้อปัจจุบันจะถูกรีเซ็ต"
    );

    if (!confirmed) return;

    const newGame = createGameQuestions();

    setGameQuestions(newGame);

    setCurrentQuestion(0);

    setSelected(null);

    setScore(0);

    setFinished(false);

    setStarted(true);
  }


  /* =========================================
     SELECT ANSWER
  ========================================= */

  function selectAnswer(choice) {

    if (selected !== null) return;

    setSelected(choice);

    if (
      choice ===
      gameQuestions[currentQuestion].answer
    ) {
      setScore((prev) => prev + 1);
    }
  }


  /* =========================================
     NEXT QUESTION
  ========================================= */

  function nextQuestion() {

    if (
      currentQuestion + 1 >=
      gameQuestions.length
    ) {

      setFinished(true);

      return;
    }

    setCurrentQuestion(
      (prev) => prev + 1
    );

    setSelected(null);
  }


  /* =========================================
     CHOICE COLOR
  ========================================= */

  function getChoiceClass(choice, index) {

    if (selected === null) {

      return `choice choice-${index + 1}`;
    }


    if (
      choice ===
      gameQuestions[currentQuestion].answer
    ) {

      return "choice correct";
    }


    if (choice === selected) {

      return "choice wrong";
    }


    return "choice disabled";
  }


  /* =========================================
     HOME PAGE
  ========================================= */

  if (!started) {

    return (
      <main className="page home-page">

        <div className="start-card">

          <div className="logo">
            มัมหมาเกมส์
          </div>

          <div className="subtitle">
            PAIRING QUIZ
          </div>

          <div className="heart">
            ♥
          </div>

          <h1>
            ทายชื่อคู่ชิป
          </h1>

          <p>
            ทายชื่อคู่ชิป Ver.หนีตำรวจ
          </p>

          <button
            className="start-button"
            onClick={startGame}
          >
            START
          </button>

        </div>

      </main>
    );
  }


  /* =========================================
     GAME OVER
  ========================================= */

  if (finished) {

    return (
      <main className="page">

        <div className="start-card">

          <div className="logo">
            มัมหมาเกมส์
          </div>

          <div className="subtitle">
            PAIRING QUIZ
          </div>

          <div className="heart">
            ♥
          </div>

          <h1>
            GAME OVER
          </h1>

          <div className="final-score">

            {score}

            <span>
              {" / "}
              {gameQuestions.length}
            </span>

          </div>

          <p className="result-text">

            {score === gameQuestions.length

              ? "นี่หล่ะๆๆๆ ระดับครูบา ส่องเราบ่อยอ่ะดิ้ ✨"

              : score >= gameQuestions.length * 0.7

              ? "เหย เก่งเว่อแม่ 💜"

              : score >= gameQuestions.length * 0.5

              ? "เกือบแล้ว! ลองอีกครั้งนะ"

              : "ตัวเองคงต้องส่องแอคเราบ่อยๆแล้วแหละ 😂"}

          </p>


          <button
            className="start-button"
            onClick={startGame}
          >
            PLAY AGAIN
          </button>


          <button
            className="back-button"
            onClick={goHome}
          >
            กลับหน้าแรก
          </button>

        </div>

      </main>
    );
  }


  /* =========================================
     NO QUESTIONS
  ========================================= */

  if (!gameQuestions.length) {
    return null;
  }


  const question =
    gameQuestions[currentQuestion];


  /* =========================================
     GAME PAGE
  ========================================= */

  return (
    <main className="page">

      <div className="game-card">


        {/* =====================================
            TOP ACTIONS
        ===================================== */}

        <div className="game-top-actions">

          <button
            className="top-action home-action"
            onClick={goHome}
            aria-label="กลับหน้าหลัก"
          >

            <span className="action-icon">
              ⌂
            </span>

            <span className="action-text">
              หน้าหลัก
            </span>

          </button>


          <button
            className="top-action restart-action"
            onClick={restartGame}
            aria-label="เริ่มเกมใหม่"
          >

            <span className="action-icon">
              ↻
            </span>

            <span className="action-text">
              เริ่มใหม่
            </span>

          </button>

        </div>


        {/* =====================================
            GAME HEADER
        ===================================== */}

        <div className="game-header">

          <div className="small-logo">
            มัมหมาเกมส์
          </div>

          <div className="progress">
            {currentQuestion + 1}
            {" / "}
            {gameQuestions.length}
          </div>

          <div className="score-small">
            ♥ {score}
          </div>

        </div>


        {/* =====================================
            QUESTION
        ===================================== */}

        <div className="question-box">

          <div className="question-label">
            PAIRING QUIZ
          </div>

          <h1>
            {question.question}
          </h1>

          <div className="equals">
            =
          </div>

          <div className="question-mark">
            ?
          </div>

        </div>


        {/* =====================================
            CHOICES
        ===================================== */}

        <div className="choices">

          {question.choices.map(
            (choice, index) => (

              <button
                key={choice}
                className={getChoiceClass(
                  choice,
                  index
                )}
                onClick={() =>
                  selectAnswer(choice)
                }
              >

                <span className="choice-letter">
                  {
                    ["A", "B", "C", "D"][index]
                  }
                </span>

                <span>
                  {choice}
                </span>

              </button>

            )
          )}

        </div>


        {/* =====================================
            ANSWER
        ===================================== */}

        {selected !== null && (

          <div className="answer-area">

            {selected === question.answer ? (

              <div className="answer-message correct-message">

                <strong>
                  ✓ ถูกต้อง!
                </strong>

                <span>
                  {question.question}
                  {" = "}
                  {question.answer}
                </span>

              </div>

            ) : (

              <div className="answer-message wrong-message">

                <strong>
                  ✕ ยังไม่ใช่!
                </strong>

                <span>
                  คำตอบคือ{" "}
                  {question.answer}
                </span>

              </div>

            )}


            <button
              className="next-button"
              onClick={nextQuestion}
            >

              {currentQuestion + 1 ===
              gameQuestions.length
                ? "ดูคะแนน"
                : "ข้อถัดไป →"}

            </button>

          </div>

        )}

      </div>

    </main>
  );
}