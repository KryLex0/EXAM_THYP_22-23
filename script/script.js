function getData() {
    d3.json("./items.json").then((data) => {
        console.log(data);

        arrayChercheur = [
            data[0]["o:id"],
            data[0]["o:title"],
            data[0]["o:media"],


        ];
        arrayResultat = [
            data[1]["o:id"],
            data[1]["o:title"],
            data[1]["o:media"]
        ];
        arrayThese = [
            data[2]["o:id"],
            data[2]["o:title"],
            data[2]["o:media"]
        ];

        console.log(arrayChercheur);


        document.getElementById("tableBody").innerHTML += "<tr><td>" + arrayChercheur[0] + "</td>"
            + "<td>" + arrayChercheur[1] + "</td>"
            + "<td><img src='" + arrayChercheur[2] + "' alt='media " + arrayChercheur[2] + "'" + "</td></tr>";

        document.getElementById("tableBody").innerHTML += "<tr><td>" + arrayResultat[0] + "</td>"
            + "<td>" + arrayResultat[1] + "</td>"
            + "<td><img src='" + arrayResultat[2] + "' alt='media " + arrayResultat[2] + "'" + "</td></tr>";

        document.getElementById("tableBody").innerHTML += "<tr><td>" + arrayThese[0] + "</td>"
            + "<td>" + arrayThese[1] + "</td>"
            + "<td><img src='" + arrayThese[2] + "' alt='media " + arrayThese[2] + "'" + "</td></tr>";
        
        /************************************************************/
/*
        arrayChercheurData = [];
        
        arrayChercheurTmp = ["relationCherch:relationCherchChercheurMail",
            "relationCherch:relationCherchChercheurNom",
            "relationCherch:relationCherchChercheurPrenom"
        ];

        for (i = 0; i < arrayChercheurTmp.length; i++) {
            var data1 = data[0][arrayChercheurTmp[i]][0];

            arrayChercheurData[data1["property_label"]] = data1["@value"];
        }

        console.log(arrayChercheurData);


        arrayResultatData = [];

        arrayResultatTmp = ["relationCherch:relationCherchChercheurNom",
            "relationCherch:relationCherchChercheurPrenom",
            "relationCherch:relationCherchResultatDate",
            "relationCherch:relationCherchResultatTitre",
            "relationCherch:relationCherchResultatType",
        ];

        for (i = 0; i < arrayResultatTmp.length; i++) {
            var data1 = data[1][arrayResultatTmp[i]][0];

            arrayResultatData[data1["property_label"]] = data1["@value"];
        }
        console.log(arrayResultatData);


        

        arrayTheseData = [];

        arrayResultatTmp = ["relationCherch:relationCherchChercheurNom",
            "relationCherch:relationCherchChercheurPrenom",
            "relationCherch:relationCherchTheseDate",
            "relationCherch:relationCherchTheseTitre",
            "relationCherch:relationCherchTheseType",
        ];

        for (i = 0; i < arrayResultatTmp.length; i++) {
            var data1 = data[2][arrayResultatTmp[i]][0];

            arrayTheseData[data1["property_label"]] = data1["@value"];
        }
        console.log(arrayTheseData);


        document.getElementById("tableHead1").innerHTML += "<tr>"
        for (var key in arrayChercheurData) {
            console.log(key + " -> " + arrayChercheurData[key]);
            document.getElementById("tableHead1").innerHTML += "<th>" + key + "</th>"
        }
        document.getElementById("tableHead1").innerHTML += "</tr>"

        document.getElementById("tableBody1").innerHTML += "<tr>"
        for (var key in arrayChercheurData) {
            console.log(key + " -> " + arrayChercheurData[key]);
            document.getElementById("tableBody1").innerHTML += "<td>" + arrayChercheurData[key] + "</td>";
        }
        document.getElementById("tableBody1").innerHTML += "</tr>"

*/

        
/*
        d3.select("#main")
            .selectAll("div")
            .data(data)
            .enter()
            .append("div")
            .attr("id", (d, i) => "id" + i)
            .html(
                (d, i) => "Element : " + i + " " + d[0]["o:id"]
        );
        */
    });
}


getData();