import { useState, useEffect } from 'react';
import { logOut } from '../../utilities/users-service';
const user = localStorage.getItem('user')


export default function ExercisePage(){
    console.log('Props from excercise page')
    console.log(user)
    const [user1, setUser1] = useState(user)
    const [exercises, setExercises] = useState([])
    const [completedExercises, setCompletedExercises] = useState([])
    const [newExercise, setNewExercise] = useState({
        description: '',
        duration: '',
        date: '',
        createdBy: ''
    })

    //createExercises
    const createExercise = async () => {
        const body = {...newExercise}
        try {
            const response = await fetch('/api/exercises', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            const createdExercise = await response.json()
            const exercisesCopy = [createdExercise,...exercises]
            setExercises(exercisesCopy)
            setNewExercise({
                description: '',
                duration: '',
                date: '',
                createdBy: ''
            })
        } catch (error) {   
            console.error(error)
        }
    }
  
    const moveToCompleted = async (id) => {
        try {
            const index = exercises.findIndex((exercise) => exercise._id === id)
            const exercisesCopy = [...exercises]
            const subject = exercisesCopy[index]
            subject.completed = true 
            const response = await fetch(`/api/exercises/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(subject)
            })
            const updatedExercise = await response.json()
            const completedTDsCopy = [updatedExercise, ...completedExercises]
            setCompletedExercises(completedTDsCopy)
            exercisesCopy.splice(index, 1)
            setExercises(exercisesCopy)
        } catch (error) {
            console.error(error)
        }
    }


    //getExercises
    const getExercises = async () => {
        try{
            const response = await fetch(`/api/exercises?createdBy=${user}`)
            const foundExercises = await response.json()
            setExercises(foundExercises.reverse())
            const responseTwo = await fetch(`/api/exercises/completed?createdBy=${user}`)
            const foundCompletedExercises = await responseTwo.json()
            setCompletedExercises(foundCompletedExercises.reverse())
        } catch(error){
            console.error(error)
        }
    }
    useEffect(() => {
        getExercises()
    }, [])
    return(<>
         <button id='logout' onClick={() => logOut() }>Log Out</button><br></br>
        <div className='exercise-page'><br></br></div>
        Description:<input type="text" 
        value={newExercise.description} 
        onChange={(e) => {
            setNewExercise({...newExercise, description: e.target.value, createdBy: user1})
        }} 
        onKeyDown={(e) => {
            e.key === 'Enter' && createExercise()
        }}
        />
        Duration:<input type="text" 
        value={newExercise.duration} 
        onChange={(e) => {
            setNewExercise({...newExercise, duration: e.target.value, createdBy: user1})
        }} 
        onKeyDown={(e) => {
            e.key === 'Enter' && createExercise()
        }}
        />
        Date:<input type="date" 
        value={newExercise.date} 
        onChange={(e) => {
            setNewExercise({...newExercise, date: e.target.value, createdBy: user1})
        }} 
        onKeyDown={(e) => {
            e.key === 'Enter' && createExercise()
        }}
        />
        
        
        
        <h3>Exercises</h3>
        <div id='table'>
        {exercises.map(exercise => {
            return(
                <div id='exercise-div' key={exercise._id}>{exercise.date}<br />{exercise.description}<br />{exercise.duration}<br />
                    <button onClick={() => moveToCompleted(exercise._id) }>Delete Exercise</button>
                </div>
            )})
        }
        </div>
    </>)
}