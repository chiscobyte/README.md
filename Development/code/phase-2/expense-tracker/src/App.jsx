import { useState } from 'react'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([])
  const [input, setInput] = useState({
    title: '',
    note: '',
    type: '',
    cost: '',
    date: ''
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setInput(prev => ({ ...prev, [name]: value }))
  }

  const addExpense = (e) => {
    e.preventDefault()
    if (!input.title || !input.cost) return

    setExpenses(prev => [...prev, input])
    setInput({
      title: '',
      note: '',
      type: '',
      cost: '',
      date: ''
    })
  }

  return (
    <div className="wrapper">
      <h1>Expense Tracker</h1>
      <div className="content">
        <form onSubmit={addExpense}>
          <h2>Add Expense</h2>
          <input
            name="title"
            value={input.title}
            onChange={handleInput}
            placeholder="Expense title"
          />
          <input
            name="note"
            value={input.note}
            onChange={handleInput}
            placeholder="Description"
          />
          <input
            name="type"
            value={input.type}
            onChange={handleInput}
            placeholder="Category"
          />
          <input
            name="cost"
            type="number"
            value={input.cost}
            onChange={handleInput}
            placeholder="Amount"
          />
          <input
            name="date"
            type="date"
            value={input.date}
            onChange={handleInput}
          />
          <button type="submit">Add</button>
        </form>

        <div className="list">
          <table>
            <thead>
              <tr>
                <th>Expense</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((item, i) => (
                <tr key={i}>
                  <td>{item.title}</td>
                  <td>{item.note}</td>
                  <td>{item.type}</td>
                  <td>{item.cost}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App