import './App.css';
import logo from  "./images/logo.svg"
import search from "./images/search.png"
import message from './images/new.png'
import profil from "./images/photo.png"
import sort from "./images/sort.svg"
import filter from "./images/filter.png"
import user from "./images/m 5.png"
import menu from "./images/more - vertical.png"

// ! saidbar img

import overview from './images/1. overview.png'
import tickets from './images/2. tickets.svg'
import idea from "./images/3. ideas.svg"
import contact from "./images/4. contacts.svg"
import agent from "./images/5. agents.svg"
import articles from "./images/6. articles.svg"
import settings from "./images/a_1. settings.svg"
import subscription from "./images/a_2. subscription.svg"

function App() {
  return (
    <>
      <div className="container">

          <div className="saidbar">
            <div className="logo">
              <img src={logo} alt="" />
              <h2>Dashboard Kit</h2>
            </div>

            <span>
              <img src={overview} alt="" />
              <h5>Overview</h5>
            </span>

            <span>
              <img src={tickets} alt="" />
              <h5>Tickets</h5>
            </span>
            
            <span>
              <img src={idea} alt="" />
              <h5>Ideas</h5>
            </span>
            
            <span>
              <img src={contact} alt="" />
              <h5>Contacts</h5>
            </span>
            
            <span>
              <img src={agent} alt="" />
              <h5>Agents</h5>
            </span>
            
            <span>
              <img src={articles} alt="" />
              <h5>Articles</h5>
            </span>
            
            <hr />

            <span>
              <img src={settings} alt="" />
              <h5>Settings</h5>
            </span>

            <span>
              <img src={subscription} alt="" />
              <h5>Subscription</h5>
            </span>







          </div>

        <div className="panel">

          <div className="navbar">
            <h1>Overview</h1>

            <div className='nav-icon'>
              <img src={search} alt="" />
              <img src={message} alt="" />
              <hr />
              <span>
                <h5>Jones Ferdinand</h5>
                <img src={profil} alt="" />
              </span>
            </div>
          </div>

         
         <div className="cards">

            <div className="card">
                <p>Unresolved</p>
                <h2>60</h2>
            </div>

            <div className="card">
                <p>Overdue</p>
                <h2>16</h2>
            </div>

            <div className="card">
                <p>Open</p>
                <h2>43</h2>
            </div>

            <div className="card">
                <p>On hold</p>
                <h2>64</h2>
            </div>

         </div>


        <div className="trends">

          <div className="trendsPanel">
            <h3>Today’s trends</h3>
          
            <div className="trendsInfo">
            <p>as of 25 May 2019, 09:41 PM</p>
              <div className="spanDiv">
                <span>
                  <hr/>
                  <p>Today</p>
                </span>
                <span>
                  <hr/>
                  <p>Yesterday</p>
                </span>
              </div>
            </div>
          </div>


          <div className="trendsCards">

            <div className="card">
              <p>Resolved</p>
              <h3>449</h3>
            </div>

            <div className="card">
              <p>Received</p>
              <h3>426</h3>
            </div>

            <div className="card">
              <p>Average first response time</p>
              <h3>33m</h3>
            </div>

            <div className="card">
              <p>Average response time</p>
              <h3>3h 8m</h3>
            </div>

            <div className="card">
              <p>Resolution within SLA</p>
              <h3>94%</h3>
            </div>
          </div>
        </div>

          
          

          <div className="footer">
            <div className="footerCards">

              <div className="card">
                  <div className="cardText">
                      <span>
                        <h3>
                            Unresolved tickets
                        </h3>
                        <p>
                            Group: <strong>Support</strong>
                        </p>
                      </span>
                      <a href="#" >
                          View details
                      </a>
                  </div>

                  <div className="cardStatic">
                      <span>
                        <h5>Waiting on Feature Request</h5>
                        <p>4238</p>
                      </span>
                      <hr/>

                      <span>
                        <h5>Awaiting Customer Response</h5>
                        <p>1005</p>
                      </span>
                      <hr/>

                      <span>
                        <h5>Awaiting Developer Fix</h5>
                        <p>914</p>
                      </span>
                      <hr/>

                      <span>
                        <h5>Pending</h5>
                        <p>281</p>
                      </span>
                  </div>
              </div>

              <div className="card">
                  <div className="cardText">
                      <span>
                        <h3>
                          Tasks
                        </h3>
                        <p>
                          Today
                        </p>
                      </span>
                      <a href="#" >
                          View all
                      </a>
                  </div>

                  <div className="cardCheck">
                    <div>
                        <h5>Create new task</h5>

                        <button>+</button>
                    </div>

                    <span>
                      <label>
                           <input type="radio"/>
                          Finish ticket update
                      </label>

                      <button className="btn">Urgent</button>

                    </span>
                    <hr/>

                    <span>
                      <label>
                           <input type="radio"/>
                          Finish ticket update
                      </label>

                      <button className="btn">Urgent</button>

                    </span>
                    <hr/>

                    <span>
                      <label>
                           <input type="radio"/>
                          Finish ticket update
                      </label>

                      <button className="btn">Urgent</button>

                    </span>
                    


                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
