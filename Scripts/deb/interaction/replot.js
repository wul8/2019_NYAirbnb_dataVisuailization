   function replot(xTag,yTag,data){
                /**
            * Select two features of the dataset,  update the visualization on the scatter plot
            * @param  xTag: Name of the feature plotted on the x axis
            * @param  yTag: Name of the feature plotted on the y axis
            * @param  data: airbnb data
            * @return None
            */
            var margin = {top: 10, right: 30, bottom: 30, left: 60}
            var minX = d3.min(data,function(d){return d[xTag]})
            var maxX = d3.max(data,function(d){return d[xTag]})
            var minY = d3.min(data,function(d){return d[yTag]})
            var maxY = d3.max(data,function(d){return d[yTag]})

            X_width = $("#plotCanvas").width() - margin.left - margin.right
            Y_height = $("#plotCanvas").height() - margin.top - margin.bottom

            var xScale =d3.scaleLinear().domain([minX,maxX]).range([0, width]);
            var yScale = d3.scaleLinear().domain([minY,maxY]).range([Y_height, 0]);


            // Add dots
            d3.select("#plotCanvas")
               .selectAll("circle")
               .data(data)
               .attr("cx", function (d) { return xScale(d[xTag])+41; } )
               .attr("cy", function (d) { return yScale(d[yTag]); } )
               .style("opacity",1)

            // Update X Axis
            d3.select("#Xaxis")
               .transition()
               .call(d3.axisBottom(xScale));

            // Update Y Axis
            d3.select("#Yaxis")
               .transition()
               .call(d3.axisLeft(yScale));
        }
