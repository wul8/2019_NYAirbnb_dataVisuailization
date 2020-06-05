function scatterPlot(){
    /**
    * Select two features of the dataset and visualize them on the scatter plot
    * @param  None
    * @return None
    */
    var VisDiv = d3.select("#dataVisual")

    d3.json("data/AB_NYC_2019_shuffled.json",function(error,data){
        if (error) {console.log(error)}

        var X = ""
        var Y = ""

        // Create two selection element
        var dynamicUpdate = VisDiv.append("hr")
        var selectionX  = dynamicUpdate.append('select')
                                       .attr("id","selectionX")
                                       .attr('style','float:left')
        var selectionY = dynamicUpdate.append('select')
                                      .attr('id','selectionY')
                                      .attr('style','margin-left:10px')
        Object.keys(data[0]).forEach(function(key){
             if (key != "neighbourhood_group" || key != "room_type"){
                    selectionX.append('option').text(key)
                    selectionY.append('option').text(key)
             }
        })

        // selection trigger
        VisDiv.append('div').attr("id","scatterPlot")
        $("#selectionX").on("change", function() {
                                         X = $("#selectionX option:selected").text()
                                         if (Y!="") {
                                            replot(X,Y,data)}
                                         })
        $("#selectionY").on("change",function() {
                                         Y = $("#selectionY option:selected").text()
                                         if (X!="") {
                                            replot(X,Y,data)}
                                         })


        // initialized the scatter plot
        d3.select("#scatterPlot")
          .append("svg").attr("id","plotCanvas")
          .attr("width",$("#scatterPlot").width())
              .attr("height",$("#scatterPlot").height()*0.85)

        var margin = {top: 10, right: 30, bottom: 30, left: 60}
        var minX = d3.min(data,function(d){return d["price"]})
        var maxX = d3.max(data,function(d){return d["price"]})

        X_width = $("#plotCanvas").width() - margin.left - margin.right
        Y_height = $("#plotCanvas").height() - margin.top - margin.bottom

        //Add X axis
        var xScale =d3.scaleLinear().domain([minX,maxX]).range([0, width]);
        d3.select("#plotCanvas")
          .append("g")
          .attr("id","Xaxis")
          .attr("transform", "translate(40," + Y_height + ")")
          .call(d3.axisBottom(xScale));

        // Add Y axis
        var yScale = d3.scaleLinear().domain([minX,maxX]).range([Y_height, 0]);
        d3.select("#plotCanvas")
          .append("g")
          .attr("id","Yaxis")
          .attr("transform","translate(40,0)")
          .call(d3.axisLeft(yScale));

        // Add dots
        d3.select("#plotCanvas")
          .append('g')
          .attr("id","scatterPlotCircle")
          .selectAll("circle")
          .data(data)
          .enter()
          .append("circle")
          .attr("cx", function (d) { return xScale(d["price"])+41; } )
          .attr("cy", function (d) { return yScale(d["price"]); } )
          .attr("r", 1.5)
          .style("fill", "#69b3a2")
          .style("opacity",0)
    })
 }