import Link from 'next/link'
import React from 'react'
import postgres from 'postgres'

const sql = postgres(process.env.DATABASE_URL!);
Type Quiz = {
  quiz_id: number;
  title: string;
};
 async function Quizzes(){
  const quizzes: Quiz[] = await sql;
   SELECT * FROM quizzes;
  return (
    <div>
      <h1>Welcome to the Quiz App!</h1>
      <p>Please choose a quiz to start:</p>
      <ul>
        {quizzes.map(quiz => (
          <li key={quiz.id}>
            <Link href={`/quiz/${quiz.id}`}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Home() {
  return (
    <section>
      <Quizzes/>
  </section>
  )
}
