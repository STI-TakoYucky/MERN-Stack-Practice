import { useEffect, useState} from 'react'

export default function Home() {

    const [ workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')

            const json = await response.json() 

            if (response.ok) {
                setWorkouts(json);
            }
        }

        fetchWorkouts();
    }, [])

  return (
    <div>
        <div className='workouts'>
            {workouts && workouts.map((workout) => {
                return <p key={workout._id}>{workout.title}</p>
            })}
        </div>
    </div>
  )
}
