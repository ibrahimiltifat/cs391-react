import LoginTeacher from './LoginTeacher.js';
import React, { useEffect } from 'react';
function App() {

  useEffect(() => {
    const testUsers = [
      {
        email: 'erdem.gonul@ozu.edu.tr',
        password: 'admin1234'
      },
      {
        email: 'ahmet.gonul@ozu.edu.tr',
        password: 'admin1234'
      },
      {
        email: 'deneme.gonul@ozu.edu.tr',
        password: 'admin1234'
      }
    ]

    localStorage.setItem('users', JSON.stringify(testUsers));
  }, []);
  return (
    <div className="container-fluid my-auto ">
      <LoginTeacher />
    </div>
  );
}

export default App;
