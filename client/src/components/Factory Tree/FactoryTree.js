import React, {useState, useEffect, Component} from 'react'
import rd3 from 'react-d3-library';
import node from 'd3file';
const RD3Component = rd3.Component;

// import d3 from 'react-d3-library';
import { 
    select, 
    tree, 
    hierarchy,
    linkHorizontal
} from 'd3';

function FactoryTree () {

    // var div = document.createElement('div');
    // d3.select(div);
    // Scalable Vectory Graphics - d3

    const [ d3Elements, setD3Elements] = useState({d3: ''})
    
      useEffect(() => {
          setD3Elements({d3: node})
      }, [])

    const svg = select('svg');
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    const factoryTree = tree().size([height, width]);

    svg
        .attr('width', width)
        .attr('height', height)
      .append('rect')
        .attr('width', width)
        .attr('height', height)
        .attr('rx', 40);

        // useEffect(() => {
            fetch("/boards")
            .then(r => r.json())
            .then(data => {
                console.log(data)
                const root = hierarchy(data);
                const links = factoryTree(root).links();
                const linkPathGen = linkHorizontal()
                    .x(d => d.y)
                    .y(d => d.x);

                svg.selectAll('path').data(links)
                    .enter().append('path')
                        .attr('d', linkPathGen);
                svg.selectAll('text').data(root.descendants())
                    .enter().append('text')
                        .attr('x', d => d.y)
                        .attr('y', d => d.x)
                        .text(d => console.log(d));
                    })
                    // go to 7:52 in Data Visualization with D3.js - Full Tutorial Course video
                    // https://www.youtube.com/watch?v=_8V5o2UHG0E&ab_channel=freeCodeCamp.org
        //   }, [])

  return (
    <div>
        <head>
            FactoryTree
        </head>
        <body>
            <RD3Component data={d3Elements} />
        </body>
    </div>
  )
}

export default FactoryTree

// import d3 from 'react-d3-library';
// import rd3 from 'react-d3-library';
// import node from 'd3file';
// const RD3Component = rd3.Component;

// var div = document.createElement('div');
// d3.select(div);

// constructor(props) {
//     super(props);
//     this.state = {d3: ''}
//   }

//   componentDidMount() {
//     this.setState({d3: node});
//   }

// <RD3Component data={this.state.d3} />


 // constructor(props) {
    //     super(props);
    //     {d3: ''}
    //     this.state = {d3: ''}
    //   }
    
    // componentDidMount() {
    //     this.setState({d3: node});
    //   }