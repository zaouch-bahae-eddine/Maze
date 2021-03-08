//Creation d'une Maze parfaite
function mazePerfect(inputWidth, inputHeight){

    //Nombre de mur cassés
    mureCassee = 0;
    //Création de deux tableaux représentant les murs verticaux et horizontaux
    NbMureVertival =  ((width - 1) * height);
    NbMureHorizontal = (width * (height - 1));
    tabIdMureH = [...Array(NbMureHorizontal).keys()];
    tabIdMureV = [...Array(NbMureVertival).keys()];
    reglage = 0;
    for (i = 1; i < tabIdMureV.length; i++) {
        if (tabIdMureV[i] % (width - 1) == 0) {
            reglage ++;
        }
        tabIdMureV[i] += reglage;
    }
    //Initialisation d'un tableau représentant notre maze
    k = 0;
    maze = new Array(height);
    for(i = 0; i < height; i++){
        maze[i] = new Array(width);
        for(j = 0; j < width; j++){
            maze[i][j] = k;
            k++;
        }
    }
    do{
        //Choisir au hasard un mur à casser 
        direction = DIRECTION[Math.floor(Math.random() * DIRECTION.length)];
        if(direction == 'h'){
            indexMure = Math.floor(Math.random() * tabIdMureH.length);
            idMureACasser = tabIdMureH[indexMure];
        } else {
            indexMure = Math.floor(Math.random() * tabIdMureV.length);
            idMureACasser = tabIdMureV[indexMure];
        }
        //Identification de la case qui contient le mur à casser
        cell_i = Math.floor(idMureACasser / width);
        cell_j = Math.floor(idMureACasser % width);
        //Casser un mur horizontal
        if(direction == 'h' && maze[cell_i][cell_j] != maze[cell_i + 1][cell_j]){
            tabIdMureH.splice(indexMure, 1);
            uniValue(maze[cell_i + 1][cell_j], maze[cell_i][cell_j], maze);
            mureCassee++;
        }
        //Casser un mur horizontal
        if(direction == 'v' && maze[cell_i][cell_j] != maze[cell_i][cell_j + 1]){
            tabIdMureV.splice(indexMure, 1);
            uniValue(maze[cell_i][cell_j + 1], maze[cell_i][cell_j], maze);
            mureCassee++;
        }
    } while(mureCassee < (width * height) -1);
}

//Former un groupe de case avec les mêmes valeurs s'ils sont accessibles entre eux
function uniValue(value, nvValue, tab){
    for (i = 0; i < tab.length; i++) {
        for (j = 0; j < tab[0].length; j++) {
            if(tab[i][j] == value){
                tab[i][j] = nvValue;
            }
        }
    }
}
//Dessiner une Maze
function drowMaze(tabIdMureH, tabIdMureV, width, height){
    h = 0;
    v = 0;
    table = $("#maze");
    $(".size span").first().text("Width = "+ width*TAILLE_MURE + "px");
    $(".size span").last().text("Height = "+ height*TAILLE_MURE + "px");
    for (i = 0; i < height; i++) {
        var tr = $("<tr></tr>");
        for (j = 0; j < width; j++) {
            var td = $("<td></td>");
                if (i == 0) {
                    td.addClass("t-display");
                } else if(i == height -1) {
                    td.addClass("b-display");
                }
                if (j == 0) {
                    td.addClass("l-display");
                } else if (j == width -1) {
                    td.addClass("r-display");
                }
                if (Math.floor(tabIdMureH[h] / width) == i &&  Math.floor(tabIdMureH[h] % width) == j) {
                    if(h < tabIdMureH.length){
                        h++;
                    }
                    td.addClass("b-display");
                }
                if (Math.floor(tabIdMureV[v] / width) == i &&  Math.floor(tabIdMureV[v] % width) == j) {
                    if(v < tabIdMureV.length){
                        v++;
                    }
                    td.addClass("r-display");
                }
                tr.append(td);
        }
        table.append(tr);
    }
    $("#maze tr td").first().removeClass("t-display");
    $("#maze tr td").last().removeClass("b-display");
}