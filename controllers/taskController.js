import Task from "../models/Task.js";

// יצירת משימה
export const createTask = async (req, res) => {
  const { title } = req.body;

  try {
    const newTask = await Task.create({
      title,
      owner: req.user,
    });

    res.status(201).json(newTask);
  } catch (err) {
    res
      .status(401)
      .json({ message: "Error creating task", error: err.message });
  }
};

// שליפת כל המשימות של המשתמש
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ owner: req.user });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Error fetching tasks" });
  }
};

// עדכון משימה
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  try {
    const task = await Task.findOneAndUpdate(
      { _id: id, owner: req.user },
      { title, completed },
      { new: true }
    );

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Error updating task" });
  }
};
// מחיקת משימה
export const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findOneAndDelete({ _id: id, owner: req.user });

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting task" });
  }
};
