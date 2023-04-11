import { React, useEffect, useState } from 'react';
import { Container } from '@edx/paragon';

import getRequest from "../request"
import './coursesListPage.scss';

const CoursesListPage = () => {
  const [coursesList, setCoursesList] = useState([]);
  const [filterText, setFilterText] = useState('');
  debugger;
  var url = 'http://local.overhang.io/api/courses_list/list/';
  async function handleSearch() {
    url = url + '?name=' + filterText;
    const response = await getRequest(apiUrl);
    setCoursesList(response);
    debugger;
    url = 'http://local.overhang.io/api/courses_list/list/';
  }

  useEffect(() => {
    async function fetchCourses() {
      const response = await getRequest(url);
      setCoursesList(response);
    }
    fetchCourses();
  }, []);

  return (
    <main>
      <Container>
        <input
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </Container>
      {coursesList &&
        coursesList.map((course) => (
          <Container className='styleCard'>
            <h1>Title : {course.display_name}</h1>
            <p>Language : {course.language || 'None'}</p>
          </Container>
        ))}
    </main>
  );
};

export default CoursesListPage;
