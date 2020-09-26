import React from 'react'
import { connect } from 'react-redux'

const ProfessionalSummary = props => {
    return (
        <div className={props.wrapper}>
            <p className='title' style={{textAlign:'left'}}>Professional Summary</p> {/* styling of title should be moved to dashboard.module.css to ensure consistent title styling for each section */}
            <p>{props.summary}</p>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        summary: state.personal_info.bio
    }
}

export default connect(mapStateToProps)(ProfessionalSummary)
