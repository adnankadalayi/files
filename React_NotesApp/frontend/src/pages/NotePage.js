import React, {useState, useEffect} from 'react'

const NotePage = ({match}) => {

  let noteId = match.params.id
  let [note, setNote] = useState(null)

  useEffect(()=> {
    getNote()
  })

  let getNote = async ()=>{
    let response = await fetch(`/api/notes/${noteId}/`)
    let data = await response.json()
    setNote(data)
  }

  return (
    <div>
      <p>{note?.body}</p>   
      <h1>Single Note</h1>
    </div>
  )
}
export default NotePage
