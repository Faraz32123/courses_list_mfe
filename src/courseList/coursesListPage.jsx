import { React, useEffect, useState } from 'react';
import { Container } from '@edx/paragon';

import getRequest from "../request"
import './coursesListPage.scss';

const CoursesListPage = () => {
  const [coursesList, setCoursesList] = useState([]);
  const [filterText, setFilterText] = useState('');
  var url = 'http://local.overhang.io:8000/api/courses_list/list/';
  async function handleSearch() {
    if (filterText) {
      url = url + '?filterText=' + filterText;
    }
    const response = await getRequest(url);
    setCoursesList(response);
    url = 'http://local.overhang.io:8000/api/courses_list/list/';
  }

  useEffect(() => {
    handleSearch();
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
