import React from 'react'

const QuestionCard = ( { question, onDelete, onComplete } ) => {
   return (
    <div className="mt-3 rounded-xl border bg-white p-4 shadow-sm">
      <h4 className="font-semibold text-gray-900">
        {question.title}
      </h4>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
          {question.category}
        </span>

        <span className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-700">
          {question.difficulty}
        </span>
      </div>

      <p className="mt-3 text-sm text-gray-500">
        Status: {question.status || "Pending"}
      </p>

      <button
  onClick={() => onComplete(question.id)}
  disabled={question.status === "Completed"}
  className="mr-2 rounded-lg bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 disabled:opacity-50"
>
  {question.status === "Completed"
    ? "Completed"
    : "Mark Complete"}
</button>

      <button
        onClick={() => onDelete(question.id)}
        className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-100"
      >
        Delete
      </button>
    </div>
  );
}

export default QuestionCard
