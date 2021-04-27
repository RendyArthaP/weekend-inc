import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Definition from './assets/components/Definition';
import Home from './assets/components/Home';
import Navbar from './assets/components/Navbar';
import Testimonial from './assets/components/Testimonial/Testimonial';
import { getHelpTips } from './redux/actions/help-tips.actions'
import { getTestimoni } from './redux/actions/testimoni.actions'

function App() {
  const dispatch = useDispatch()
  const tipsHelpData = useSelector((state) => state.handleHelpTips.data)
  const testimoniData = useSelector((state) => state.handleTestimonial.data)

  useEffect(() => {
    dispatch(getHelpTips())
    dispatch(getTestimoni())

  }, [dispatch])

  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="flex flex-col">
        <Definition />
        <Testimonial 
          testimoniData = {testimoniData}
          tipsHelpData = {tipsHelpData}
        />
      </div>
    </div>
  );
}

export default App;
