function Interaction(){
    /**
    * Select Move and Change the size of the map
    * @param  None
    * @return None
    */

    // Zoom In
    d3.select("#ZoomIn").on("click",function(){
        var selectedSvg = d3.select("#NY_svg")
        zoomIn(selectedSvg)
    })

    //Zoom Out
    d3.select("#ZoomOut").on("click",function(){
        var selectedSvg = d3.select("#NY_svg")
        zoomOut(selectedSvg)
    })

    //Move Up
    d3.select("#up").on("click",function(){
        var selectedSvg = d3.select("#NY_svg")
        moveUp(selectedSvg)
    })

    //Move Down
    d3.select("#down").on("click",function(){
        var selectedSvg = d3.select("#NY_svg")
        moveDown(selectedSvg)
    })

    //Move Left
    d3.select("#left").on("click",function(){
        var selectedSvg = d3.select("#NY_svg")
        moveLeft(selectedSvg)
    })

    //Move Right
    d3.select("#right").on("click",function(){
        var selectedSvg = d3.select("#NY_svg")
        moveRight(selectedSvg)
    })
}