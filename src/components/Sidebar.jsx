import React from 'react'

const Sidebar = () => {
  return (
    <aside className="w-64 shrink-0 border-r bg-white p-6">
      <h1 className="text-2xl font-bold text-orange-500">
        PrepTrack
      </h1>

      <p className="mt-2 text-sm text-gray-400">
        Interview Workspace
      </p>

      <nav className="mt-10 space-y-3">
        <a
          href="#dashboard"
          className="block rounded-lg bg-orange-50 p-3 font-semibold text-orange-600"
        >
          Dashboard
        </a>

        <a
          href="#questions"
          className="block rounded-lg p-3 text-gray-600 hover:bg-gray-100"
        >
          My Questions
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar
