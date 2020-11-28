import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';
import ReactPaginate from 'react-paginate';



class ToDo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        { _id: 1, complete: false, text: 'Do Dishes', difficulty: 3, assignee: 'Person A'},
        { _id: 2, complete: false, text: 'Practice coding', difficulty: 2, assignee: 'Person A'},
        { _id: 3, complete: false, text: 'Clean Files', difficulty: 4, assignee: 'Person B'},
        { _id: 4, complete: false, text: 'Do Challenges', difficulty: 3, assignee: 'Person C'},
        { _id: 5, complete: false, text: 'Do Laundry', difficulty: 1, assignee: 'Person B'},
        { _id: 6, complete: false, text: 'Fix Dinner', difficulty: 3, assignee: 'Person A'},
        { _id: 7, complete: false, text: 'Tackle chores', difficulty: 2, assignee: 'Person A'},
        { _id: 8, complete: false, text: 'Work Out', difficulty: 4, assignee: 'Person B'},
        { _id: 9, complete: false, text: 'Call back home', difficulty: 3, assignee: 'Person C'},
        { _id: 10, complete: false, text: 'Catch the news', difficulty: 1, assignee: 'Person B'},
        { _id: 11, complete: false, text: 'Go grocery shopping', difficulty: 3, assignee: 'Person A'},
        { _id: 12, complete: false, text: 'Get Cat food', difficulty: 2, assignee: 'Person A'},
        { _id: 13, complete: false, text: 'Buy some candy', difficulty: 5, assignee: 'Person B'},
        { _id: 14, complete: false, text: 'Catch up with friends', difficulty: 3, assignee: 'Person C'},
        { _id: 15, complete: false, text: 'Go for a walk', difficulty: 1, assignee: 'Person B'},
      ],
      offset: 0,
      perPage: 5,
      currentPage: 0
    };
  }

  componentDidMount() {

    // this.setState({list});
    this.receivedData();
  }

            
        
            receivedData() {
              
      
              const list = this.state.list;
              list.sort(function(b, a) {
                return b.difficulty - a.difficulty;
            });
                      const slice = list.slice(this.state.offset, this.state.offset + this.state.perPage)
                      const postData = slice.map(pd => 
                    
                        
                       
                    <ul> <li onClick={this.crossLine}
            className={`complete-${pd.complete.toString()}`}
            key={pd._id}
          >
            <span onClick={() => this.toggleComplete(pd._id)}>
                          Task: {pd.text}, Priority: {pd.difficulty}
                          </span></li>
                          
                          
                          
                          
                          
                          </ul>
             )
      
                      this.setState({
                          pageCount: Math.ceil(list.length / this.state.perPage),
                          postData
                      })
                      
                 
          }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.receivedData()
    });

};

  addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    this.setState({ list: [...this.state.list, item]});
    this.receivedData();
  };

  toggleComplete = id => {

    let item = this.state.list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list = this.state.list.map(listItem => listItem._id === item._id ? item : listItem);
      this.setState({list});
    }

  };

  crossLine = event => {
    const element = event.target;
    element.classList.toggle("crossed-line");
};

  render() {
    return (
      <>
       <section id='form-header'>
          <h2 data-testid="display-head" >
          There are {this.state.list.filter(item => !item.complete).length} Items To Complete
          </h2>
        </section>

        <section id='form-space' className="todo">

          <div>
            <TodoForm handleSubmit={this.addItem} />
          </div>

          <div id='list-holder'>
          {/* <ul>
        {this.state.list.map(item => (
          <li 
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => this.toggleComplete(item._id)}>
              {item.text}
              
              
            </span>
          </li>
        ))}
      </ul> */}

      {/* <div> */}
        
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination pag"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
          {/* </div> */}



        </section>
      </>
    );
  }
}

export default ToDo;