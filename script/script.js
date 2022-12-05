function getData() {
    d3.json("../items.json").then((data) => {
        console.log(data);
        /*
        d3.select("#main")
            .selectAll("div")
            .data(data)
            .enter()
            .append("div")
            .attr("id", (d, i) => "id" + i)
            .html(
                (d, i) => "Element : " + i + " " + d["dcterms:title"][0]["@value"]
            );
            */
    });
}