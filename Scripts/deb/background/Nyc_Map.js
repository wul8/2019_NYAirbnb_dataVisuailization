function plot_NY_map(){
    /**
    * plot NYC map and indicate the name of neighbour when mouse on
    * @param  None
    * @return None
    */

    var div = d3.select("#map")

    div.append('div')
       .attr('id','neighborhoodPopover')
       .style('height','10px')

    var svg = div.append('svg')
                 .attr('width',"100%")
                 .attr('height',"90%")
                 .attr('id','NY_svg')
                 .attr('style',"border-right: 1px solid black")


    width = $("#NY_svg").width();
    height =$("#NY_svg").height();

    svg.attr('viewBox','0 0 '+ width +' ' + height)

    var pathGroup = svg.append('g').attr('id','path')

    d3.json("data/nyc.json", function(error, nyc) {
        if (error) throw error;

        window.projection = d3.geoConicConformal()
                              .parallels([33, 45])
                              .rotate([96, -39])
                              .fitSize([width, height], nyc)

        var path = d3.geoPath()
                     .projection(projection)


        pathGroup.selectAll("path")
            .data(nyc.features)
            .enter().append("path")
            .attr("d", path)
            .attr("id","mapPath")
            .on("mouseenter", function(d) {
                d3.select(this)
                  .style("stroke-width", 1.5)
                  .style("stroke-dasharray", 0)

        d3.select("#neighborhoodPopover")
            .transition()
            .style("opacity", 1)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY) + "px")
            .text(d.properties.neighborhood)})

            .on("mouseleave", function(d) {
                d3.select(this)
                  .style("stroke-width", .25)
                  .style("stroke-dasharray", 1)

                d3.select("#cneighborhoodPopoverountyText")
                  .transition()
                  .style("opacity", 0);});
        plot_dot();
    });

}


