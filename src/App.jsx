import { useState, useEffect } from "react";
import QuestionForm from "./components/QuestionForm";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import QuestionCard from "./components/QuestionCard";

const App = () => {
  const [title, setTitle] = useState("");

  const [questions, setQuestions] = useState(() => {
  const savedQuestions = localStorage.getItem("questions");

  if (savedQuestions) {
    return JSON.parse(savedQuestions);
  }

  return [];
});

  const [category, setCategory] = useState("Technical");
  const [difficulty, setDifficulty] = useState("Easy");

  const [searchText, setSearchText] = useState("");

  const [filterCategory, setFilterCategory] = useState("All");
const [filterStatus, setFilterStatus] = useState("All");
const [filterDifficulty, setFilterDifficulty] = useState("All");

  function addQuestion(event) {
    event.preventDefault();

    if (title.trim() === "") {
      return;
    }

    const newQuestion = {
      id: Date.now(),
      title: title,
      category: category,
      difficulty: difficulty,
      status: "Pending",
    };

    setQuestions([...questions, newQuestion]);
    setTitle("");
  }

  function deleteQuestion(id) {
    const updatedQuestions = questions.filter((question) => question.id !== id);

    setQuestions(updatedQuestions);
  }

  function completeQuestion(id) {
    const updatedQuestions = questions.map((question) => {
      if (question.id === id) {
        return {
          ...question,
          status: "Completed",
        };
      }

      return question;
    });

    setQuestions(updatedQuestions);
  }

  
const filteredQuestions = questions.filter((question) => {
  const matchesSearch = question.title
    .toLowerCase()
    .includes(searchText.toLowerCase());

  const matchesCategory =
    filterCategory === "All" ||
    question.category === filterCategory;

  const matchesStatus =
    filterStatus === "All" ||
    (question.status || "Pending") === filterStatus;

  const matchesDifficulty =
    filterDifficulty === "All" ||
    question.difficulty === filterDifficulty;

  return (
    matchesSearch &&
    matchesCategory &&
    matchesStatus &&
    matchesDifficulty
  );
});


useEffect(() => {
  localStorage.setItem("questions", JSON.stringify(questions));
}, [questions]);



  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main id="dashboard" className="min-w-0 flex-1 p-8">
        <h2 className="text-3xl font-bold text-gray-900">Dashboard 👋</h2>

        <p className="mt-2 text-gray-500">
          Track your interview preparation in one place.
        </p>

        <button className="mt-6 rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600">
          + Add Question
        </button>

        {/* Statistics Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Questions"
            value={questions.length}
            valueColor="text-gray-900"
          />

          <StatCard
            title="Completed DSA"
            value={
              questions.filter(
                (question) =>
                  question.category === "DSA" &&
                  question.status === "Completed",
              ).length
            }
            valueColor="text-green-600"
          />

          <StatCard
            title="Technical Questions"
            value={
              questions.filter((question) => question.category === "Technical")
                .length
            }
            valueColor="text-blue-600"
          />

          <StatCard
            title="Git Questions"
            value={
              questions.filter((question) => question.category === "Git").length
            }
            valueColor="text-purple-600"
          />
        </div>

        {/* Add Question Form */}
        <QuestionForm
          title={title}
          setTitle={setTitle}
          addQuestion={addQuestion}
          category={category}
          setCategory={setCategory}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />

        {/* <section className="mt-8 rounded-xl border bg-white p-6">
          <h3 className="text-lg font-semibold">Welcome to PrepTrack</h3>

          <p className="mt-2 text-sm text-gray-500">
            Your interview preparation dashboard starts here.
          </p>
        </section> */}

        {/* My Questions List */}
        <section id="questions" className="mt-8 rounded-xl border bg-white p-6">
          <h3 className="text-xl font-bold">My Questions</h3>

          <input
            type="text"
            placeholder="Search questions..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            className="mt-4 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
          />



          
<div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
  <select
    value={filterCategory}
    onChange={(event) => setFilterCategory(event.target.value)}
    className="rounded-lg border border-gray-300 bg-white p-3"
  >
    <option>All</option>
    <option>DSA</option>
    <option>Git</option>
    <option>Technical</option>
  </select>

  <select
    value={filterStatus}
    onChange={(event) => setFilterStatus(event.target.value)}
    className="rounded-lg border border-gray-300 bg-white p-3"
  >
    <option>All</option>
    <option>Pending</option>
    <option>In Progress</option>
    <option>Completed</option>
  </select>

  <select
    value={filterDifficulty}
    onChange={(event) => setFilterDifficulty(event.target.value)}
    className="rounded-lg border border-gray-300 bg-white p-3"
  >
    <option>All</option>
    <option>Easy</option>
    <option>Medium</option>
    <option>Hard</option>
  </select>
</div>




          {filteredQuestions.length === 0 ? (
            <p className="mt-3 text-gray-500">No questions found.</p>
          ) : (
            filteredQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                onDelete={deleteQuestion}
                onComplete={completeQuestion}
              />
            ))
          )}
        </section>
      </main>
    </div>
  );
};

export default App;
