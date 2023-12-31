

var vertices = [
    -0.9,0.0,0.5,    //titik 0
    -0.5,0.0,0.5,    //titik 1
    -0.9,0.0,0.1,    //titik 2
    -0.5,0.0,0.1,    //titikD 3

    -1.3,1.0,0.5,    //titik 4
    -0.9,1.0,0.5,    //titik 5
    -1.3,1.0,0.1,    //titik 6
    -0.9,1.0,0.1,    //titik 7

    -0.5,1.0,0.5,    //titik 8
    -0.1,1.0,0.5,    //titik 9
    -0.5,1.0,0.1,    //titik 10
    -0.1,1.0,0.1,   //titik 11

    //gambar 'N'

    0.6,0.0,0.5,    //titik 12
    0.2,0.0,0.5,    //titik 13
    0.6,0.0,0.1,    //titik 14
    0.2,0.0,0.1,    //titik 15

    0.6,1.0,0.5,    //titik 16
    0.2,1.0,0.5,    //titik 17
    0.6,1.0,0.1,    //titik 18
    0.2,1.0,0.1,    //titik 19

    1.4,0.0,0.5,    //titik 20
    1.0,0.0,0.5,    //titik 21
    1.4,0.0,0.1,    //titik 22
    1.0,0.0,0.1,    //titik 23

    1.4,1.0,0.5,    //titik 24
    1.0,1.0,0.5,    //titik 25
    1.4,1.0,0.1,    //titik 26
    1.0,1.0,0.1,    //titik 27


];

var triangles = [
    0.1,0.0,0.5, 0.5,0.0,0.5,
    0.1,0.0,0.1, 0.5,0.0,0.1
];

var colors = [
   1,0,0, 1,0,0, 1,0,0, 1,0,0,
   0,0,1, 0,0,1, 0,0,1, 0,0,1,
   0,0,1, 0,0,1, 0,0,1, 0,0,1,
   1,0,1, 1,0,1, 1,0,1, 1,0,1,
   0,1,1, 0,1,1, 0,1,1, 0,1,1,
   1,0,1, 1,0,1, 1,0,1, 1,0,1,
   0,1,1, 0,1,1, 0,1,1, 0,1,1
   
];

var indices = [
    //gambar 'V'
    0,1,2, 1,2,3,
    4,5,6, 5,6,7,
    8,9,10, 9,10,11, 

    0,1,4, 1,4,5,
    2,3,6, 3,6,7,
    0,2,4, 2,4,6,
    1,3,5, 3,5,7,

    0,1,8, 1,8,9,
    2,3,10, 3,10,11,
    0,2,8, 2,8,10,
    1,3,9, 3,9,11,

    //gambar 'N'
    12,13,14, 13,14,15,
    16,17,18, 17,18,19,
    20,21,22, 21,22,23,
    24,25,26, 25,26,27,

    12,13,16, 13,16,17,
    14,15,18, 15,18,19,
    12,14,16, 14,16,18,
    13,15,17, 15,17,19,

    20,21,24, 21,24,25,
    22,23,26, 23,26,27,
    20,22,24, 22,24,26,
    21,23,25, 23,25,27,

    20,21,16, 21,16,17,
    22,23,18, 23,18,19,
    20,22,16, 22,16,18,
    21,23,19, 21,19,17

 ];