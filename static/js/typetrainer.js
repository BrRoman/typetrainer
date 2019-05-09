$("document").ready(function(){
    // Reset sentence:
    // On start:
    $("#hidden").focus();
    write_line($("#select_lesson option:selected").text());
    // On select lesson:
    $("#select_lesson").change(function(){
        write_line($("#select_lesson option:selected").text());
    });
    // On click on Reset:
    $("#reset_sentence").click(function(){
        write_line($("#select_lesson option:selected").text());
    });

    // Compare target and letter typed in hidden input:
    $("#hidden").keyup(function(event){
        if(event.keyCode != 16 && event.keyCode != 17 && event.keyCode != 225){
            var input = $(this).val().split("");
            var offset = $(".char_current").attr("id").split("char_")[1];
            if(input[input.length - 1] == $(".char_current").text()){
                $("#char_" + offset).removeClass("char_current").addClass("char_success");
                $("#char_" + (parseInt(offset) + 1)).removeClass("char_normal").addClass("char_current");
            }
            else{
                $("#char_" + offset).addClass("char_error");
            }
        }
    });
});

function write_line(letters){
    switch(letters){
        case "letters":
            letters = "abcdefghijklmnopqrstuvwxyz";
            break;
        case "Special characters 1":
            letters = ",;:!?./§";
            break;
        case "Special characters 2":
            letters = "&é\"'(-è_çà)=°+";
            break;
        case "Special characters 3":
            letters = "#{[|`\\^@]}";
            break;
        case "Special characters 4":
            letters = "*$ù£µ%";
            break;
        case "All":
            letters = "abcdefghijklmnopqrstuvwxyz,;:!?./§&é\"'(-è_çà)=°+#{[|`\\^@]}*$ù£µ%";
            break;
    }
    letters_array = letters.split("");
    letters_space = letters + " ";
    letters_space_array = letters_space.split("");
    // We begin with a letter:
    var text = "<span id='char_0' class='char_current'>" + letters_array[Math.floor(Math.random() * (letters_array.length - 1))] + "</span>";
    var character = "";
    for(var i = 1; i < 50; i++){
        // We don't want a space following a space:
        if(character == " "){
            character = letters_array[Math.floor(Math.random() * letters_array.length)].toUpperCase();
        }
        else{
            character = letters_space_array[Math.floor(Math.random() * letters_space_array.length)];
        }
        text += ("<span id='char_" + i + "' class='char_normal'>" + character + "</span>");
    }
    // We finish with a letter:
    character = letters_array[Math.floor(Math.random() * letters_array.length)];
    text += ("<span id='char_" + i + "' class='char_normal'>" + character + "</span>");

    $("#sentence").html(text);
    $("#select_lesson").blur();
    $("#hidden").focus();
}
