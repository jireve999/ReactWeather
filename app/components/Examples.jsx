var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few examples locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Shanghai'>Shanghai,China</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio,Brazil</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;

// var Examples = React.createClass({
//   render:function(){
//     return (
//       <h3>Examples Component</h3>
//     );
//   }
// });
