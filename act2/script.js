document.addEventListener("DOMContentLoaded", function() {
    fetch("../courses.json")
        .then(response => response.json())
        .then(data => {
            const subjectsList = document.getElementById("subjectsList");
            let subjects = data.courses;
            
            function displaySubjects(subjects) {
                subjectsList.innerHTML = "";
                subjects.slice(0, 1000).forEach(subject => { // Show 50 items
                    let li = document.createElement("li");
                    li.textContent = subject.description;
                    subjectsList.appendChild(li);
                });
            }
            
            displaySubjects(subjects);
        })
        .catch(error => console.error("Error fetching subjects:", error));
});
