function plot_dot(){
    /**
    * Visualize the airbnb housing on the new york map
    * @param  None
    * @return None
    */
    d3.json("data/AB_NYC_2019_shuffled.json",function(error,data){
        if (error) throw error

        // Convert price to color
        colorConverter = priceColorConverter(data)

        //Draw the dot
        var svg = d3.select("#NY_svg")
        width = $("#NY_svg").width();
        height =$("#NY_svg").height();
        var myCircle = svg.append('g').attr("id","dot")
            .selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', function (d) {return projection([d.longitude, d.latitude])[0]} )
            .attr('cy', function (d) {return projection([d.longitude, d.latitude])[1]} )
            .attr('r', 1.3)
            .attr('fill',function (d) { return d3.interpolateOrRd(colorConverter(d.price))})
            .attr('opacity',0.5)
            .attr("stroke-width", 0.1)
            .attr('stroke', "black")
            .attr("id", function (d,index){ return index})
    })
}