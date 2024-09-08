// firestoreOperations.js
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from './firebase'; // Ensure the correct path to firebase.js

const tasksCollection = collection(db, "tasks");

export const addTask = async (task) => {
  try {
    const docRef = await addDoc(tasksCollection, task);
    console.log("Task added with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding task: ", e.message);
    throw e;
  }
};

export const fetchTasks = async () => {
  try {
    const querySnapshot = await getDocs(tasksCollection);
    const tasks = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return tasks;
  } catch (e) {
    console.error("Error fetching tasks: ", e.message);
    throw e;
  }
};

export const deleteTask = async (taskId) => {
  try {
    const taskDoc = doc(db, "tasks", taskId);
    await deleteDoc(taskDoc);
    console.log("Task deleted with ID: ", taskId);
  } catch (e) {
    console.error("Error deleting task: ", e.message);
    throw e;
  }
};
