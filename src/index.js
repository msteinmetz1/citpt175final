import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/calendar/calendar';
import './index.css';

//Calendar created with "http://appsbuilders.org/guides/build-a-reactjs-calendar-component-tutorial-part-1/"

function Tweet() {
  return (
        <div className="buttons">
          <Back/>
          <House/>
          <Next/>
          <Pencil/>
          <Clipboard/>
          <Plus/>
          <Last/>

        <div className="content">
          <Calendar/>
          <Avatar/><NameWithHandle/>
          <Time/>
      </div>
    </div>
  );
}

function NameWithHandle() {
  return (
    <div id="namewithhandle">
      <span className="name-with-handle">
      <span className="name">afterwards</span><br/>
      <span className="handle">annotation</span><br/>
      <span className="name">bought</span><br/>
      <span className="handle">brian</span><br/>
      <span className="name">categories</span><br/>
      <span className="handle">category</span><br/>
      <span className="name">click</span><br/>
      <span className="handle">cloud</span><br/>
      <span className="name">could</span><br/>
      <span className="handle">different</span>
    </span>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      Search Bar
    </div>
  );
}

const Time = () => (
  <span className="time" id="time">
  <div id="con">
  My Day <br/>

  Today I went to the pet shop and bought a #tiger. We went to the park and had <br/>
  a nice time there. Afterwards we watched Life of brian. <br/>
  (http.//en.wikipedia.org/wiki/Life_of_Brian).
  </div>
  <img
src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tiger_in_Ranthambhore.jpg/1280px-Tiger_in_Ranthambhore.jpg"
id="logo"
alt="logo" />
</span>
);

const Back = () => (
  <i id="back" class="fa fa-chevron-left"></i>
);

const House = () => (
  <i id="back" class="fa fa-home"></i>
);

const Next = () => (
  <i id="back" class="fa fa-chevron-right"></i>
);

const Pencil = () => (
  <i id="next" class="fa fa-pencil" aria-hidden="true"></i>
);

const Clipboard = () => (
  <i id="back" class="fa fa-clipboard"></i>
);

const Plus = () => (
  <i id="back" class="fa fa-plus"></i>
);

const Last = () => (
  <span class="iconify" data-icon="fa-brands:amilia" data-inline="false"></span>
);

ReactDOM.render(<Tweet/>,
  document.querySelector('#root'));
