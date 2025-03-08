const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "aar@v.com",
    password: "123",
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Update website",
        taskDescription: "Revamp the homepage design",
        taskDate: "2025-02-19",
        category: "Design",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Client meeting",
        taskDescription: "Discuss requirements",
        taskDate: "2025-02-19",
        category: "Meeting",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug fixing",
        taskDescription: "Resolve bugs",
        taskDate: "2025-02-19",
        category: "Development",
      },
    ],
    taskCount: { active: 1, newtask: 1, completed: 2, failed: 0 }
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Ad Campaign",
        taskDescription: "Launch a new ad campaign on social media",
        taskDate: "2025-02-21",
        category: "Marketing",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Optimization",
        taskDescription: "Improve database queries for better performance",
        taskDate: "2025-02-18",
        category: "Development",
      },
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Financial Report",
        taskDescription: "Analyze last quarter's financial data",
        taskDate: "2025-02-20",
        category: "Finance",
      },
    ],
    taskCount: { active: 2, newtask: 1, completed: 1, failed: 0 }
  },
  {
    id: 3,
    firstName: "Kabir",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Schedule Interviews",
        taskDescription: "Coordinate with candidates for interviews",
        taskDate: "2025-02-16",
        category: "HR",
      },
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Blog Post",
        taskDescription: "Draft an article about industry trends",
        taskDate: "2025-02-22",
        category: "Content",
      },
      {
        active: false,
        newtask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Security Vulnerability",
        taskDescription: "Patch security issues in the application",
        taskDate: "2025-02-17",
        category: "Security",
      },
    ],
    taskCount: { active: 1, newtask: 1, completed: 1, failed: 1 }
  },
  {
    id: 4,
    firstName: "Aryan",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Review Code",
        taskDescription: "Conduct a code review for the new feature",
        taskDate: "2025-02-23",
        category: "Development",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Employee Training",
        taskDescription: "Organize a skill development session",
        taskDate: "2025-02-14",
        category: "HR",
      },
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskTitle: "Product Testing",
        taskDescription: "Perform usability testing for the new app update",
        taskDate: "2025-02-25",
        category: "QA",
      },
    ],
    taskCount: { active: 2, newtask: 1, completed: 1, failed: 0 }
  },
  {
    id: 5,
    firstName: "Reyansh",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Create a presentation for the upcoming client pitch",
        taskDate: "2025-02-20",
        category: "Marketing",
      },
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Update API Documentation",
        taskDescription: "Ensure API documentation is up to date",
        taskDate: "2025-02-21",
        category: "Development",
      },
      {
        active: false,
        newtask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix UI Layout",
        taskDescription: "Resolve UI alignment issues in mobile view",
        taskDate: "2025-02-19",
        category: "Design",
      },
    ],
    taskCount: { active: 1, newtask: 1, completed: 1, failed: 1 }
  },
];
const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123",
  },
];

// console.log(employees);
export const setLocalStorage = () => {
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees,admin}
}
