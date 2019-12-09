import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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

function Calendar() {
  return (
    <div className="calander">
      This is the Calendar space
    </div>
  );
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">word box</span>
      <span className="handle">different words</span>
    </span>
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
  <span className="time">Box with Tiger Image</span>
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
