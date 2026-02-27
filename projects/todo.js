const fs = require("fs");
const filePath = "./tasks.json";

const command = process.argv[2]; // Get the command from the command line arguments
const argument = process.argv[3]; // Get the argument for the command (e.g., task description or task ID)

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath); // Read the file as a buffer
    const dataJSON = dataBuffer.toString(); // Convert buffer to string
    return JSON.parse(dataJSON); // Parse the JSON string to an object
  } catch (error) {
    return []; // If file doesn't exist, return an empty array
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks); // Convert the tasks object to a JSON string
  fs.writeFileSync(filePath, dataJSON); // Write the JSON string back to the file
};

const addTask = (task) => {
  // Function to add a task
  const tasks = loadTasks(); // Load existing tasks
  tasks.push({ task }); // Add the new task to the tasks array
  saveTasks(tasks); // Save the updated tasks back to the file
  console.log(`Task added: ${task}`);
};

const listTask = () =>{
    // Function to list all tasks
    const tasks = loadTasks(); // Load existing tasks
    if(tasks.length === 0){
        return console.log("No Task found");
    } else {
       tasks.map((task, index) =>{
        console.log(`${index + 1} -> ${task.task}`);
       });
    }
};

const removeTask = (taskId) => {
    // Function to remove a task by its ID
    const tasks = loadTasks(); // Load existing tasks
    if(taskId > 0 && taskId <= tasks.length){
        const removedTask = tasks.splice(taskId - 1, 1); // Remove the task from the array (adjusting for 0-based index)
        saveTasks(tasks); // Save the updated tasks back to the file
        console.log(`Task removed: ${removedTask[0].task}`);
    } else{
        console.log("Invalid Task ID");
    }
};

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTask();
} else if (command === "delete") {
  removeTask(parseInt(argument)); // Convert the argument to an integer for task ID
} else {
  console.log("Invalid command");
}
