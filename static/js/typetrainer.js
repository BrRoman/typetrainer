$("document").ready(function(){
    write_line($("#select_lesson option:selected").text());

    $("#select_lesson").change(function(){
        write_line($("#select_lesson option:selected").text());
    });

    $("#change_sentence").click(function(){
        write_line($("#select_lesson option:selected").text());
    });
});

function write_line(letters){
    letters = letters + " ";
    var letters_split = letters.split("");
    var text = "";
    for(var i = 0; i < 100; i++){
        text += letters_split[Math.floor(Math.random() * letters_split.length)];
    }
    $("#sentence").text(text);
}
