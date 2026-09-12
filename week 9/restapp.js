<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>Student Management Portal</title>

    <style>

        :root {
            --primary: #1465e5;
            --primary-hover: #0f4bb8;
            --danger: #e14a4a;
            --bg: #f8fafc;
            --text: #1e293b;
        }


        body {

            font-family: Arial, sans-serif;

            margin: 0;

            padding: 40px 20px;

            background-color: var(--bg);

            color: var(--text);

            display: flex;

            justify-content: center;

        }


        .container {

            width: 100%;

            max-width: 650px;

        }


        .card {

            background: white;

            padding: 30px;

            border-radius: 12px;

            box-shadow: 0 10px 25px rgba(0,0,0,0.1);

        }


        h1 {

            text-align: center;

            color: var(--primary);

        }


        .form-group {

            display: flex;

            flex-direction: column;

            gap: 12px;

            margin-bottom: 25px;

        }


        input {

            padding: 12px;

            border: 1px solid #d1d5db;

            border-radius: 6px;

            font-size: 14px;

        }


        button {

            padding: 12px;

            background: var(--primary);

            color: white;

            border: none;

            border-radius: 6px;

            cursor: pointer;

            font-size: 15px;

        }


        button:hover {

            background: var(--primary-hover);

        }


        h3 {

            border-bottom: 2px solid #e5e7eb;

            padding-bottom: 10px;

        }


        ul {

            list-style: none;

            padding: 0;

        }


        li {

            display: flex;

            justify-content: space-between;

            align-items: center;

            padding: 15px;

            border-bottom: 1px solid #e5e7eb;

        }


        .student-info {

            display: flex;

            flex-direction: column;

        }


        .student-name {

            font-weight: bold;

        }


        .student-meta {

            font-size: 13px;

            color: #64748b;

        }


        .delete-btn {

            padding: 7px 12px;

            background: transparent;

            color: var(--danger);

            border: 1px solid var(--danger);

        }


        .delete-btn:hover {

            background: var(--danger);

            color: white;

        }

    </style>

</head>


<body>

    <div class="container">

        <div class="card">

            <h1>Student Management System</h1>


            <form id="studentForm"
                  class="form-group">

                <input
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    required
                >


                <input
                    type="number"
                    id="rollNumber"
                    placeholder="Roll Number"
                    required
                >


                <input
                    type="text"
                    id="course"
                    placeholder="Enrolled Course"
                    required
                >


                <button type="submit">

                    Enroll Student

                </button>

            </form>


            <h3>Active Enrollments</h3>


            <ul>

                <% students.forEach(student => { %>

                    <li>

                        <div class="student-info">

                            <span class="student-name">

                                <%= student.name %>

                            </span>


                            <span class="student-meta">

                                <%= student.course %>

                                |

                                Roll Number:

                                <%= student.rollNumber %>

                            </span>

                        </div>


                        <button

                            onclick="deleteStudent('<%= student._id %>')"

                            class="delete-btn"

                        >

                            Delete

                        </button>

                    </li>

                <% }) %>

            </ul>

        </div>

    </div>


    <script>


        // CREATE STUDENT

        document
            .getElementById("studentForm")
            .addEventListener("submit", async (e) => {

                e.preventDefault();


                const studentData = {

                    name:

                        document
                            .getElementById("name")
                            .value,


                    rollNumber:

                        document
                            .getElementById("rollNumber")
                            .value,


                    course:

                        document
                            .getElementById("course")
                            .value

                };


                const response = await fetch("/students", {

                    method: "POST",

                    headers: {

                        "Content-Type":

                            "application/json"

                    },


                    body:

                        JSON.stringify(studentData)

                });


                if (response.ok) {

                    window.location.reload();

                } else {

                    const error = await response.json();

                    alert(error.message);

                }

            });



        // DELETE STUDENT

        async function deleteStudent(id) {


            const confirmDelete =

                confirm("Remove this student record?");


            if (!confirmDelete) {

                return;

            }


            const response = await fetch(

                `/students/${id}`,

                {

                    method: "DELETE"

                }

            );


            if (response.ok) {

                window.location.reload();

            }

        }


    </script>


</body>

</html>
