var CommentBox = React.createClass({
  render:function(){
    return (
      <div className="commentBox">
        <h1> Comments </h1>
        <CommentList/>
        <CommentForm/>
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function(){
    return (
      <div className="commentList">
        <Comment>
          What I want to tell is...
        </Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function(){
    return (
      <form className="commentForm">
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Say something..."/>
      </form>
    );
  }
});

var Comment = React.createClass({
  render: function(){
    return(
      <div className="comment">
        <h2 className="commentAuthor">
          Your name
        </h2>
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox/>,
  document.getElementById('content')
);