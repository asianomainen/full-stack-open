import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { hideNotification, showNotification } from '../reducers/notificationReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleAddAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(addAnecdote(anecdote))

    dispatch(showNotification(`You added '${anecdote}'`))
    setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleAddAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm