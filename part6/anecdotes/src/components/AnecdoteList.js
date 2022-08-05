import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { showNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const handleVote = (anecdote) => {
    dispatch(voteAnecdote(anecdote))
    dispatch(showNotification(`You voted for '${anecdote.content}'`, 5))
  }

  return (
    <div>
      {anecdotes
        .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        )}
    </div>
  )
}

export default AnecdoteList