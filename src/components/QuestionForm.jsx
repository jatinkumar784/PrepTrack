import React from 'react'

const QuestionForm = ({ title, setTitle, addQuestion, category, setCategory, difficulty, setDifficulty }) => {
  return (
    <section className="mt-8 rounded-xl border bg-white p-6">
      <h3 className="text-xl font-bold text-gray-900">
        Add New Question
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        Add a question to your preparation list.
      </p>

      <form onSubmit={addQuestion} className="mt-6">
        <label className="mb-2 block text-sm font-medium">
          Question Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(event) =>
            setTitle(event.target.value)
          }
          placeholder="e.g. Explain useState in React"
          className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
        />

        
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
  <div>
    <label className="mb-2 block text-sm font-medium">
      Category
    </label>
    <select
  value={category}
  onChange={(event) => setCategory(event.target.value)}
  className="w-full rounded-lg border border-gray-300 bg-white p-3"
>
  <option>Technical</option>
  <option>DSA</option>
  <option>Git</option>
</select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium">
      Difficulty
    </label>
    <select
  value={difficulty}
  onChange={(event) => setDifficulty(event.target.value)}
  className="w-full rounded-lg border border-gray-300 bg-white p-3"
>
  <option>Easy</option>
  <option>Medium</option>
  <option>Hard</option>
</select>
  </div>
</div>


        <button
          type="submit"
          className="mt-4 rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
        >
          + Add Question
        </button>
      </form>
    </section>
  );
}

export default QuestionForm
