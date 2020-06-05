function moveDown(svg){
    /**
    * move svg down 10px
    * @param  svg: targeted svg to be moved
    * @return None
    */
    // viewBox.x = viewBox[0] viewBox.y = viewBox[1] viewBox.width = viewBox[2] viewBox.height = viewBox[3]
    var viewBox = svg.attr("viewBox").split(" ").map(function(item){ return parseInt(item,10)})
    viewBox[1] = viewBox[1] -10;
    svg.attr("viewBox", viewBox[0]+" "+viewBox[1]+" "+viewBox[2]+" "+viewBox[3])
}

function moveLeft(svg){
    /**
    * move svg left 10px
    * @param  svg: targeted svg to be moved
    * @return None
    */
    // viewBox.x = viewBox[0] viewBox.y = viewBox[1] viewBox.width = viewBox[2] viewBox.height = viewBox[3]
    var viewBox = svg.attr("viewBox").split(" ").map(function(item){ return parseInt(item,10)})
    viewBox[0] = viewBox[0] + 10;
    svg.attr("viewBox", viewBox[0]+" "+viewBox[1]+" "+viewBox[2]+" "+viewBox[3])
}

function moveRight(svg){
    /**
    * move svg right 10px
    * @param  svg: targeted svg to be moved
    * @return None
    */
    // viewBox.x = viewBox[0] viewBox.y = viewBox[1] viewBox.width = viewBox[2] viewBox.height = viewBox[3]
    var viewBox = svg.attr("viewBox").split(" ").map(function(item){ return parseInt(item,10)})
    viewBox[0] = viewBox[0] - 10;
    svg.attr("viewBox", viewBox[0]+" "+viewBox[1]+" "+viewBox[2]+" "+viewBox[3])
}

function moveUp(svg){
    /**
    * move svg up 10px
    * @param  svg: targeted svg to be moved
    * @return None
    */
    // viewBox.x = viewBox[0] viewBox.y = viewBox[1] viewBox.width = viewBox[2] viewBox.height = viewBox[3]
    var viewBox = svg.attr("viewBox").split(" ").map(function(item){ return parseInt(item,10)})
    viewBox[1] = viewBox[1] + 10;
    svg.attr("viewBox", viewBox[0]+" "+viewBox[1]+" "+viewBox[2]+" "+viewBox[3])
}

function zoomIn(svg){
    /**
    * zoom in svg by 2
    * @param  svg: targeted svg to be zoomed
    * @return None
    */
    // viewBox.x = viewBox[0] viewBox.y = viewBox[1] viewBox.width = viewBox[2] viewBox.height = viewBox[3]
    var viewBox = svg.attr("viewBox").split(" ").map(function(item){ return parseInt(item,10)})
    viewBox[0] = viewBox[0] + viewBox[2] / 4;
    viewBox[1] = viewBox[1] + viewBox[3] / 4;
    viewBox[2] = viewBox[2] / 2;
    viewBox[3] = viewBox[3] / 2;
    svg.attr("viewBox", viewBox[0]+" "+viewBox[1]+" "+viewBox[2]+" "+viewBox[3])

    var radius = d3.select("#dot").select("circle").attr("r")
    if (radius > 0.3) {d3.select("#dot").selectAll("circle").attr('r',radius/1.2)}
}

function zoomOut(svg){
    /**
    * zoom out svg by 2
    * @param  svg: targeted svg to be zoomed
    * @return None
    */
    // viewBox.x = viewBox[0] viewBox.y = viewBox[1] viewBox.width = viewBox[2] viewBox.height = viewBox[3]
    var viewBox = svg.attr("viewBox").split(" ").map(function(item){ return parseInt(item,10)})
    viewBox[0] = viewBox[0] - viewBox[2]/2;
    viewBox[1] = viewBox[1] - viewBox[3]/2;
    viewBox[2] = viewBox[2] * 2;
    viewBox[3] = viewBox[3] * 2;
    svg.attr("viewBox", viewBox[0]+" "+viewBox[1]+" "+viewBox[2]+" "+viewBox[3])

    var radius = d3.select("#dot").select("circle").attr("r")
    if (radius < 1.3) {d3.select("#dot").selectAll("circle").attr('r',radius * 2)}

}
