<html>
    <heah>
    <title>Meu primeiro site em PHP! Woohoo!</title>

    <style type="text/css">
        .linha {
            font-weight: bold;
            color: green;
            padding-left: 10px;
            line-height: 50px;
        }
    </style>
    </head>
    <body>
        <?php
            for ($i = 0 ; $i < 10 ; $i++) {
                print( " <span class=\"linha\"Linha número " . $i . "</span><br />");
            }
        ?>
    </body>

</html>