import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost, deletePost } from "../actions";
import { Link } from "react-router-dom";

class PostsShow extends Component {
  componentDidMount() {
    if (!this.props.post) {
      // if we haven't fetched the post before // needn't make a request again
      const { id } = this.props.match.params; // this.props.match.params.id; -provided by react-router; from url
      this.props.fetchPost(id);
    }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  // ownProps - props obj which is going to this.props of this component
  return { post: posts[ownProps.match.params.id] }; // now our component will receive a single post, not big list posts
}

export default connect(
  mapStateToProps,
  { fetchPost, deletePost } // actionCreators
)(PostsShow);
