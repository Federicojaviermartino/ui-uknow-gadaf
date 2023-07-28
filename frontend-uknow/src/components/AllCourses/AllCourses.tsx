import { Container } from 'react-bootstrap'
import { AllCoursesCard } from './AllCoursesCard'
import styles from './AllCourses.module.css'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  { Dropdown } from '../Dropdown/Dropdown'

export const AllCourses = () => {
  const [course, setCourse] = useState<any[]>([])

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/courses')
        const data = await response.json()
        setCourse(data.data)
      } catch (error) {
        console.log('No se encuentra ese curso por su:', error)
      }
    }
    fetchCourse()
  }, [])

  const navigate = useNavigate()

  const handleCourseClick = async (courseId: any) => {
    navigate(`/course/${courseId}`)
    try {
      const response = await fetch(`http://localhost:3000/api/courses/${courseId}`)
      const data = await response.json()
      console.log('Course details:', data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className={styles.container}>
      <div className={styles.topBar}>
        <h4>All courses</h4>

        {/* <div className='dropdown'> */}
        <Dropdown />
      </div>

      <div className='d-flex flex-wrap justify-content-center' style={{ display: 'inline-block', gap: 10 }}>
        {course.map((course, i) => (
          <div key={i} onClick={() => handleCourseClick(course._id)}>
            <Link to={`/course/${course._id}`}>
              <AllCoursesCard
                img={course.image}
                rating={course.rating}
                title={course.name}
                price={course.price}
              />
            </Link>
          </div>
        ))}
      </div>
    </Container>
  )
}
