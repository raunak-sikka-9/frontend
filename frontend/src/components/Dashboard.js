import React, { useState } from "react"

const Dashboard = () => {
  const url = "http://localhost:4000"

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))

  return (
    <div>
      <header>
        <h3 className="text-center">Your API Key : {currentUser._id}</h3>
      </header>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img className="img-fluid" alt="" src="http://localhost:4000/util/ret-doc-preview/193064d8-6af1-45e6-9768-4699b8093841" />
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img className="img-fluid" alt="" src="http://localhost:4000/util/ret-vid-preview/8QOFIpvU1Q" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
