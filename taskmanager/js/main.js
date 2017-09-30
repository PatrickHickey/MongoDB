$(document).ready(function(){
  getTasks();
});

const apiKey = 'oxMq5u0BVZQIzp6m-mXHkQcrWUd20Jw2';

function getTasks(){
  $.get('https://api.mlab.com/api/1/databases/taskmanager_test/collections/tasks?apiKey='+apiKey, function(data){
    let output = '<ul class="list-group">';
    $.each(data, function(key, task){
      output += '<li class="list-group-item">';
      output += task.task_name+'<span class="due_on">[Due on '+task.due_date+']</span>'
      if(task.is_urgent == "true"){
        output += '<span class="label label-danger">Urgent</span>'
      }
      output += '<div class="pull-right"><a class="btn btn-primary" href="#">Edit</a> <a class="btn btn-danger" href="#">Delete</a></div>';
    });
    output += '</ul>';
    $('#tasks').html(output);
  });
}
