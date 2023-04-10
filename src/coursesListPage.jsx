import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './action';

import { Container } from '@edx/paragon';
import styles from './coursesListPage.scss';

const CoursesListPage = () => {
  const dispatch = useDispatch();
  const courses_list = useSelector((state) => state?.courses_list.list);
  const [filterText, setFilterText] = useState('');

  const handleSearch = () => {
    dispatch(actions.getCourseList(filterText));
  };
  useEffect(() => {
    dispatch(actions.getCourseList(filterText));
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
      {courses_list &&
        courses_list.map((course) => (
          <Container className='styleCard'>
            <h1>Title : {course.display_name}</h1>
            <p>Language : {course.language || 'None'}</p>
          </Container>
        ))}
    </main>
  );
};

export default CoursesListPage;
