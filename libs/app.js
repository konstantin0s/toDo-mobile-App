$("#formPage").on("pagebeforeshow", function(event) {
if (ToDoList.currentTask === null) {
$("#formPageTitle").text("New Task");
$("#taskName").val("");
$("#deleteButton").hide();
}
else {
ToDoList.taskManager.getTaskById(ToDoList.currentTask, function(task) {
ToDoList.currentTask = task;
$("#formPageTitle").text("Update Task");
$("#taskName").val(ToDoList.currentTask.name());
$("#deleteButton").show();
});
}
});

var task = {
name: $("#taskName").val(),
description: $("#taskDescription").val(),
completed: ($("#taskCompleted").val() === "yes"),
duedate: $("#taskDuedate").data("datebox").theDate
};


var MyTaskListApp = function() {
var tasks = [];
var TASKS_KEY = 'jQueryTasks';

var loadTasks = function() {
  if (localStorage) {
    var storedTasks = localStorage[TASKS_KEY];
    if (!storedTasks) {
      saveTasks();
    } else {
      tasks = JSON.parse(storedTasks);
    }
  }
};

var saveTasks = function() {
  if (localStorage) {
    localStorage[TASKS_KEY] = JSON.stringify(tasks);
  }
};


  return {
    init: function () {
      loadTasks();
    },
    displayCurrentTask: function() {},
    saveCurrentTask: function() {},
    refreshTasks: function() {},
    addTask: function(task) {
      task.push(task);
      saveTasks();
    },
    removeCurrentTask: function() {},
    setCurrentTask: function() {}
  };
}();



MyTaskListApp.Task = function() {
  this.done = false;
  this.title = "New Task";
  this.description = "Empty Task";
  this.dueDate = new Date();
};
