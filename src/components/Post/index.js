import React, { Component } from "react";
import "./Post.css";
import { Query } from "react-apollo";
import gql from "graphql-tag";  

    class Post extends Component {// eslint-disable-next-line 
            constructor(props){// eslint-disable-next-line 
                super(props);
            }
      render() {// eslint-disable-next-line 
          const nickname= this.props.nickname;// eslint-disable-next-line 
          const avatar = this.props.avatar;// eslint-disable-next-line 
          const image = this.props.image;// eslint-disable-next-line 
          const caption= this.props.caption;// eslint-disable-next-line 
         
        return <article className="Post" ref="Post">
            <header>
              <div className="Post-user">
                <div className="Post-user-avatar">
                  <img src="https://image.flaticon.com/icons/svg/1384/1384015.svg" alt="Chris" />
                </div>
                <div className="Post-user-nickname">
                  <span>Chris</span>
                </div>
              </div>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                <img alt="Icon Living" src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
              </div>
            </div>
            <div className="Post-caption">
              <strong>Chris</strong> Moving the community!
            </div>
          </article>;
        }
        
    }
   
        
    const Post = () => {
      return (
        <Query
          query={gql`
            {
              post(user_id: "a", post_id: "a") {
                image
                caption
                user {
                  nickname
                  avatar
                }
              }
            }
          `}
        >
          // handle result of the query
          
        </Query>
      )
    }
    export default Post;
