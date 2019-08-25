import React,{component}from 'react'

class Right extends component {
    render() {
        const {
          name,
          email,
          phone,
          city,
          state,
          country,
          orgnisation,
          jobProfile,
          additionalInfo
        } = this.props.info;
    
        return (
          <div>
            <div className="card text-center">
              <div className="card-header">{name}</div>
              <div className="card-body">
                <div className="card-text">
                      {/* <RightBar/> */}
      <p>Name: {name} </p>
                  <p>Email: {email} </p>
                  <p>Phone: {phone} </p>
                  <p>City: {city} </p>
                  <p>State: {state} </p>
                  <p>Country: {country} </p>
                  <p>Orgnaisation: {orgnisation} </p>
                  <p>Job Profile: {jobProfile} </p>
                  <p>Additional Info: {additionalInfo} </p>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
 
export default Right;