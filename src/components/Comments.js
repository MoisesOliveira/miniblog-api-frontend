import React from 'react'
import axios from 'axios'
import CommentSection from './commentSection'

export default class Comments extends React.Component{
    state = {
        comment: [],
        content: '',
        isLiked: false
    }
    generateID = () =>{
      return Math.floor(Math.random()*125)
  }

    doLike(event){
      const user_id = localStorage.getItem('user_id')
        const id = this.generateID()
        const token = localStorage.getItem('token')
        axios.post(`http://localhost:5000/${this.props.post_id}/like`,{id,user_id},{headers:{
          'x-access-token': token
      }}).then(
        res =>{
            this.state.isLiked = true;
        })

    }
   
    getComments(){
      const token = localStorage.getItem('token')
      axios.get(`http://localhost:5000/${this.props.post_id}/comment`,{headers:{
        'x-access-token': token
    }}).then(res =>{
      this.setState({comment: res.data['comments']})}
    )
    }
    postComments(event){
      const token = localStorage.getItem('token')
      event.preventDefault()
      const user_id = localStorage.getItem('user_id')
      const id = this.generateID()
      let content = this.state.content
      axios.post(`http://localhost:5000/${this.props.post_id}/comment`,{user_id,id,content},{headers:{
        'x-access-token': token
    }}).then( res =>{
      window.location.reload()}
    )
    }
    handleChange = event =>{
      this.setState({[event.target.name]:event.target.value})
     
  }
 
    componentDidMount(){
        this.getComments()
        if(this.state.isLiked === true){
          this.refs.heart.style.fill = 'red';
        }
    }
    render(){
     
        return(
        <div>
        <div>
        <button type="button" class="btn btn-outline-light" data-toggle="collapse" data-target="#comment_section">
        <svg  width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-fill" fill="gray gray" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
</svg>
        </button>
        <button onClick={e => this.doLike(e)} class="btn btn-outline-light heart">
        <svg ref="heart" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="grey" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
        </button>
  <div id="comment_section" class="collapse">
          <form onSubmit={e => this.postComments(e)}>
            <textarea require name="content" value={this.state.content} onChange={e => this.handleChange(e)}></textarea>
            <button type="submit"  class="btn">Send</button>
          </form>
        {this.state.comment.map(c => {
          return(
            <CommentSection name={c.username} content={c.content}/>
          )
        })}
  </div>
        </div>
        </div>
        )}
}