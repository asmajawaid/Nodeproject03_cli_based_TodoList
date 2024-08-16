#! /usr/bin/env node

import inquirer from "inquirer";

let todos: string[] = [];
let condition: boolean = true;

while (condition === true) {

  //=================optional===============

  let option = await inquirer.prompt([
    {
      name: "userOption",
      type: "list",
      message: "select an option",
      choices: ["add", "show List", "update", "remove"],
    },
  ]);

  //===============ADD=========================

  if (option.userOption === "add") {
    let todoQuestions = await inquirer.prompt([
      {
        name: "firstQuestion",
        type: "input",
        message: "what would you like to add in your todos?",
      },
    ]);

    if (todoQuestions.firstQuestion !== "") {
      todos.push(todoQuestions.firstQuestion);
      console.log("Task added successfully.");
      console.log("Updated List:");
      todos.forEach((item) => {
        console.log(`\t- ${item}`);
      });

      console.log("\n");

    } else {
      console.log("you cannot enter an empty item in the list.");
    }
  }

  // ==============show list===================

  else if (option.userOption === "show List") {
    if (todos.length > 0) {
      console.log("your list");
      todos.forEach((item) => {
        console.log(`${item}`);
      });

    } else {
      console.log("your list is empty.");
    }
  }

  //=================REMOVE==================

  else if (option.userOption === "remove") {
    if (todos.length > 0) {

      let removeChoice = await inquirer.prompt([
        {
          type: "list",
          name: "remove_items",
          message: "\n select items to remove",
          choices: todos,
        },
      ]);

      let indexToRemove = todos.indexOf(removeChoice.remove_items);

      if (indexToRemove >= 0) {
        todos.splice(indexToRemove, 1);
        console.log(`\n you removed : ${removeChoice.remove_items}`);
        console.log("\n Updated List");
        todos.forEach((item) => {
          console.log(`\t ${item}`);
        });

        console.log("\n");

      } else {
        console.log("To-Do list empty. add something before removing.");
      }
    }
  }

  //===================Updated==================

  else if (option.userOption === "update") {
    if (todos.length > 0) {

      let updateShow = await inquirer.prompt([
        {
          type: "list",
          name: "updateItems",
          message: "select an item to update:",
          choices: todos,
        },
      ]);

      let index = todos.indexOf(updateShow.updateItems);

      let editValue = await inquirer.prompt([
        {
          type: "input",
          name: "editItem",
          message: "Enter the updated item:",
        },
      ]);

    } else {
      console.log("you cannot update to an empty item.");
    }
   }else {
    console.log("The To-Do list is empty.Please add tasks before updating.");
  }

  // ===================confirmation=============

  let user_ans = await inquirer.prompt([
    {
      name: "secondQuestion",
      type: "confirm", //when type is confirm answer is in yes or no
      message: "would you like to add more in your todos?",
      defult: true,
    },
  ]);

  if (user_ans.secondQuestion === false) {
    condition = false;
  }
}
console.log("Thank you for using todo list");
// the loop is running on the based of this variable condition
//   condition = todoQuestions.secondQuestion;

//read.update.delete.add (manal rana)
