import React from 'react'

function FilterBoards({currentUser}) {

  return (
        <div>
          <form>
            <label className='label-text'>Filter by Board Name</label>
            <select name="board-names-list" id="board-names-list">
            
            </select>
          </form> 
        </div>
  )
}

export default FilterBoards


// {
//   (currentUser.boards).map((board) => {
//     return (
//       <option value={board.name}>{board.name}</option>
//     )
//   })
// }