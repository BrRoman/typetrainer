$("document").ready(function(){
    write_line($("#select_lesson option:selected").text());

    $("#select_lesson").change(function(){
        write_line($("#select_lesson option:selected").text());
    });

    $("#reset_sentence").click(function(){
        write_line($("#select_lesson option:selected").text());
    });
});

function write_line(letters){
    letters = letters + " ";
    var letters_split = letters.split("");
    var text = "<span id='char_0' class='char_current'>" + letters_split[Math.floor(Math.random() * (letters_split.length - 1))] + "</span>";
    for(var i = 1; i <= 100; i++){
        character = letters_split[Math.floor(Math.random() * letters_split.length)];
        text += ("<span id='char_" + i + "' class='char_normal'>" + character + "</span>");
    }
    $("#sentence").html(text).off("keypress");
}
