## Automate the manual process of setting huge amount of text content in different layers.

This script automates a manual work in After Effects that involves copying data from an excel file, pasting it into the composition, rendering and start again.

This script automates the whole process: For each row in the CSV file, it copies the data, sets it in the text layers, and renders the composition in the selected video format. This way, a job of hours is reduced to minutes.

<img src='./capture.jpg' />

## Instructions:

1. Open the terminal and clone the repo
   ```sh
   git clone https://github.com/lopezrunco/csv-to-ae-script
   ```
2. Export your Excel file in .csv format (values separated by commas). You can use the sample file "list.csv" in the assets folder for tests.

```sh
    # .csv example data:

    Lote,Categoria,Cant.,Peso,Clase,Estado,Dpto,Propietario
    -------------------------------------------------------
    76,Terneras,71,184 kg,MBB,B,Durazno,EL PUESTO
    45,Terneras,56,180 kg,MB,MB,Florida,BATALLA SDI
    32,Vacas,78,160 kg,B,MBB,Canelones,BATALLA SDI
    56,Toros,66,175 kg,MBB,MB,Flores,EL PUESTO
    26,Toros,44,80 kg,MBB,MB,Flores,BATALLA SDI
    77,Terneras,32,175 kg,MB,MB,Artigas,BATALLA SDI
    98,Vacas,67,180 kg,MB,MB,Colonia,EL PUESTO
    12,Toros,69,127 kg,MBB,B,San Jose,EL PUESTO
    22,Vacas,61,166 kg,MBB,MBB,Flores,BATALLA SDI
    35,Toros,68,189 kg,MB,MB,Maldonado,BATALLA SDI
```

This version of the script is running with this example data, to automate your own work, you have to customize the script according to your data.

3. Go to index.js and edit the variable *csvFile* adding the path to the .csv file in your computer.

```js
    var csvFile = File('~/Documents/list.csv')
```

4. Go to the After Effects sample project (ae-project.aep). Click in *Edit > Templates - Output module templates* and set the default output to your preference.

5. Run the script *index.js*

(According to the content your're working on, you might need to edit the motion graphics).

## Tested in:

```sh
    # Adobe After Effects 2022
```
## Versions:

```sh
    # Basic script (main branch)
    # angus-abr-2024
    # video-subts
    # yubely-oct-2023
    # sierravista-oct-2023
    # ai-shorts
    # delparana-set-2023
    # baqueano-set-2023
    # yaguari-set-2023
    # ost-set-2023
    # barracas-set-2023
    # santa-graciana-set-2023
    # el-puesto-set-2023
    # la-oracion-2023
    # san-alberto-2023
```