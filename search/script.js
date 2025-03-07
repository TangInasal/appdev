document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("searchBar");
    const subjectsList = document.getElementById("subjectsList");

    // Fetch courses.json
    fetch("./courses.json")
        .then(response => response.json())
        .then(data => {
            let subjects = data.courses; // Extract courses array
            
            function displaySubjects(filteredSubjects) {
                subjectsList.innerHTML = ""; // Clear previous list
                
                filteredSubjects.forEach(subject => {
                    let li = document.createElement("li");
                    li.textContent = `${subject.code} - ${subject.description}`;
                    subjectsList.appendChild(li);
                });
            }

            // Show all subjects initially
            displaySubjects(subjects);

            // Search filter event
            searchBar.addEventListener("input", function() {
                const searchText = searchBar.value.toLowerCase();
                const filteredSubjects = subjects.filter(subject =>
                    subject.code.toLowerCase().includes(searchText) ||
                    subject.description.toLowerCase().includes(searchText) ||
                    subject.year_level.toLowerCase().includes(searchText)
                );
                displaySubjects(filteredSubjects);
            });
        })
        .catch(error => console.error("Error fetching subjects:", error));
});
