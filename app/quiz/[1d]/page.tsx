import React from 'react'

export default function QuizPage({ params }: { params:{id:string}} ) {
  return (
      <section>
          <h1>Quiz {params.id}</h1>
    </section>
  )
}
