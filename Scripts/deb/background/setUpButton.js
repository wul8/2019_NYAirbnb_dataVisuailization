function setUpButton(){
     /**
     * set up the button and button background
     * @param  None
     * @return None
     */

      buttonWidth = $("#NY_svg").width();
      buttonHeight =$("#NY_svg").height();

      var buttonDiv = d3.select("#map").append('div').attr('id','button').attr("style","height:5%")
      Len = $("#button").height()
      WidLen = ($("#button").width())/3

      // move left button
      buttonDiv.append('img')
               .attr('src','img/left.png')
               .attr('width',Len)
               .attr('height',Len)
               .attr("id","left")
               .attr('style','margin-left:'+WidLen +"px; margin-top: -20px")

      // move right button
      buttonDiv.append('img')
               .attr('src','img/right.png')
               .attr('width',Len)
               .attr('height',Len)
               .attr("id","right")
               .attr('style','margin-left: 5px')

      // move down button
      buttonDiv.append('img')
               .attr('src','img/down.png')
               .attr('width',Len)
               .attr('height',Len)
               .attr("id","down")
               .attr('style','margin-left: 5px')

      //move up button
      buttonDiv.append('img')
               .attr('src','img/up.png')
               .attr('width',Len)
               .attr('height',Len)
               .attr("id","up")
               .attr('style','margin-left: 5px')

      //zoom in button
      buttonDiv.append('img')
               .attr('src','img/zoomIn.png')
               .attr('width',Len)
               .attr('height',Len)
               .attr("id","ZoomIn")
               .attr('style','margin-left: 5px')

      //zoom out button
      buttonDiv.append('img')
               .attr('src','img/zoomOut.png')
               .attr('width',Len)
               .attr('height',Len)
               .attr("id","ZoomOut")
               .attr('style','margin-left: 5px')

}