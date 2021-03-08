<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maze</title>
    <link rel="stylesheet"  href="../css/maze.css">
</head>
<body>
    <h1> <a id="home-link" href="../index.html">- Maze -</a></h1>
    <div class="size">
        <span></span>
        <span></span>
    </div>
    <table id="maze">
    </table>
</body>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="../js/maze.js"></script>
<script>
                                    /* Variables globales */

        //Taille du mur
        const TAILLE_MURE = 10;
        //Orientation du mur
        const DIRECTION = ['h', 'v'];
        //Taille de notre Maze
        <?php
            $inputWidth = $_GET['width'];
            $inputHeight = $_GET['height'];
        ?>
        inputWidth = "<?php echo $inputWidth; ?>";
        inputHeight = "<?php echo $inputHeight; ?>";
        //Divise sur la taille du mur
        width = inputWidth/TAILLE_MURE;
        height = inputHeight/TAILLE_MURE;
        //Les murs interne de notre maze
        tabIdMureH = [];
        tabIdMureV = [];

                                     /* Variables globales */


    //Creation d'une Maze Parfaite
    mazePerfect(width, height);
    //Dessiner notre Maze parfaite
    drowMaze(tabIdMureH, tabIdMureV, width, height);

</script>
</html>