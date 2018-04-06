// $("#formPage").live("pagebeforeshow", function(event) {
//   if (ToDoList.currentTask === null) {
//     $("formPageTitle").text("New Task");
//     $("taskName").val("");
//     $("deleteButton").hide();
//   }
//   else {
//     ToDoList.taskManager.getTaskById(ToDoList.currentTask, function(task) {
//       ToDoList.currentTask = task;
//       $("formPageTitle").text("Update Task");
//       $("taskName").val(ToDoList.currentTask.name());
//       $("deleteButton").show();
//     });
//   }
// });


var task = {
  name: $("taskName").val(),
  description: $("taskDescription").val(),
  completed: ($("taskCompleted").val() === "yes"),
  duedate: $("taskDueDate").data("datebox").theDate
};
