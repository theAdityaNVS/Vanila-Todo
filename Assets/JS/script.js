//check off specific todos
$("ul").on("click", "li", function(){
    $(this).toggleClass("completedTodo");
});
//remove todo 
$('ul').on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});
//add new todo
$('input[type="text"]').keypress(function(event){
    if(event.which == 13){
        var todoItem = $(this).val();
        todoItem = todoIt
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoItem+"</li>");
    }
});
$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
});