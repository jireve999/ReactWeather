var React = require('react');

var WeatherMessage = ({temp,location}) => {
  // var {temp,location} = props;
  return(
    <h3 className="text-center">It's {temp} in {location}.</h3>
  );
};

module.exports = WeatherMessage;

// var WeatherMessage = React.createClass({
//   render:function(){
//     var {temp,location} = this.props;
//     return(
//       <h3>It's {temp} in {location}.</h3>
//     );
//   }
// });
