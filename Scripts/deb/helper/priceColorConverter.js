function priceColorConverter(data){
        var min = d3.min(data,function(d){return d.price})
        var max = d3.max(data,function(d){return d.price})
        var logScale = d3.scaleLog()
                         .domain([min,max])
                         .range([0,1])
        return logScale
        }