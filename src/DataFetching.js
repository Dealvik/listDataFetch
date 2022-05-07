import axios from "axios";
import { useEffect, useState } from "react";

function DataFetching() {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.hatchways.io/assessment/students`)
      .then((res) => {
        setStudents(res.data.students);
        console.log(res.data.students);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function findAverage(grades) {
    let average = 0;

    grades.map((grade) => (average += parseInt(grade)));

    return average / grades.length;
  }

  function toggleSort() {
    setSortOrder(!sortOrder);
    console.log(sortOrder);
  }

  return (
    <div>
      <input
        id="filter"
        name="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />

      <button className="toggle-button" onClick={() => {toggleSort()}}>
        Sort Toggle
      </button>

      <ul>
        {sortOrder === true ? students 
          .filter(
            (student) =>
              student.firstName.toLowerCase().includes(filter.toLowerCase()) ||
              student.lastName.toLowerCase().includes(filter.toLowerCase())
          )
          .sort(function (a, b) {
            if (a.firstName < b.firstName) {
              return -1;
            }
            if (a.firstName > b.firstName) {
              return 1;
            }
            return 0;
          })
          .map((student) => (
            <div>
              <div className="parent">
                <div className="image">
                  <img src={student.pic} alt="" />
                </div>
                <div className="child">
                  <div className="top-row">
                    <h1>
                      {student.firstName} {student.lastName}
                    </h1>
                    <button
                      className="collapsible"
                      onClick={() => {
                        var coll =
                          document.getElementsByClassName("collapsible");
                        var i;

                        for (i = 0; i < coll.length; i++) {
                          coll[i].addEventListener("click", function () {
                            this.classList.toggle("active");
                            var content = this.nextElementSibling;
                            if (content.style.maxHeight) {
                              content.style.maxHeight = null;
                            } else {
                              content.style.maxHeight =
                                content.scrollHeight + "px";
                            }
                          });
                        }
                      }}
                    >
                      +
                    </button>
                  </div>

                  <p>Email: {student.email}</p>
                  <p>Company: {student.company}</p>
                  <p>Skill: {student.skill}</p>
                  <p>Average: {findAverage(student.grades)}%</p>

                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          )) : students 
          .filter(
            (student) =>
              student.firstName.toLowerCase().includes(filter.toLowerCase()) ||
              student.lastName.toLowerCase().includes(filter.toLowerCase())
          )
          .sort((a, b) => (a.firstName > b.firstName ? -1 : 1))
          .map((student) => (
            <div>
              <div className="parent">
                <div className="image">
                  <img src={student.pic} alt="" />
                </div>
                <div className="child">
                  <div className="top-row">
                    <h1>
                      {student.firstName} {student.lastName}
                    </h1>
                    <button
                      className="collapsible"
                      onClick={() => {
                        var coll =
                          document.getElementsByClassName("collapsible");
                        var i;

                        for (i = 0; i < coll.length; i++) {
                          coll[i].addEventListener("click", function () {
                            this.classList.toggle("active");
                            var content = this.nextElementSibling;
                            if (content.style.maxHeight) {
                              content.style.maxHeight = null;
                            } else {
                              content.style.maxHeight =
                                content.scrollHeight + "px";
                            }
                          });
                        }
                      }}
                    >
                      +
                    </button>
                  </div>

                  <p>Email: {student.email}</p>
                  <p>Company: {student.company}</p>
                  <p>Skill: {student.skill}</p>
                  <p>Average: {findAverage(student.grades)}%</p>

                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))}
      </ul>
    </div>
  );
}

export default DataFetching;
