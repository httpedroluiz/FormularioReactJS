import React from 'react'
import './style.css'


class Loading extends React.Component {
   render() {
     return (
       <div className='loading-container'>
         <div className='spinner'></div>
       </div>
     );
   }
 }

export default Loading