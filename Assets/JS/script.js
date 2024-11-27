// Sample data for jobs
const jobs = [
    {
      title: "Math - John Doe",
      time: "Today 3 PM",
      status: "success",
    },
    {
      title: "Science - Jane Doe",
      time: "Tomorrow 10 AM",
      status: "warning",
    },
    {
      title: "History - Mike",
      time: "Overdue",
      status: "danger",
    },
  ];
  
  // Function to render jobs in the "Upcoming Jobs" section
  function renderJobs() {
    const jobList = document.getElementById("job-list");
    jobList.innerHTML = ""; // Clear the list first
  
    jobs.forEach((job, index) => {
      const listItem = document.createElement("li");
      listItem.className = "list-group-item d-flex justify-content-between align-items-center";
      listItem.innerHTML = `
        ${job.title} 
        <span class="badge bg-${job.status}">${job.time}</span>
        <button class="btn btn-sm btn-danger ms-2" onclick="removeJob(${index})">Remove</button>
      `;
      jobList.appendChild(listItem);
    });
  }
  
  // Function to add a job
  function addJob(title, time, status) {
    jobs.push({ title, time, status });
    renderJobs();
  }
  
  // Prompt user to add a new job
  function addJobPrompt() {
    const title = prompt("Enter the job title (e.g., Math - John Doe):");
    const time = prompt("Enter the job time (e.g., Today 3 PM):");
    const status = prompt("Enter the job status (success, warning, danger):");
  
    if (title && time && status) {
      addJob(title, time, status);
    } else {
      alert("Please provide all job details!");
    }
  }
  
  // Function to remove a job
  function removeJob(index) {
    jobs.splice(index, 1);
    renderJobs();
  }
  
  // Initialize the job list on page load
  document.addEventListener("DOMContentLoaded", renderJobs);
  