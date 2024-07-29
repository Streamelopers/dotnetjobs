import '../styles/form_postjob.css'

function Form_PostJob() {
    return (
      <div className='form_container'>
        <h4 className='form_postjob_subtitle'>
            Job Submission Form
        </h4>
        <form className='form_postjob'>
            <div className="form_row">
            <div className="form_column">
                <label htmlFor="">Job Title</label>
                <input type="text" name="" id="" />
            </div>
            <div className="form_column">
                <label htmlFor="">Job Type</label>
                <select name="" id="">
                    <option value="">Select</option>
                    <option value="Fulltime">Fulltime</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Internship">Internship</option>
                </select>
            </div>
            <div className="form_column">
                <label htmlFor="">Job Category</label>
                <input type="text" name="" id="" />
            </div>
            </div>
            <div className="form_row">
            <div className="form_column">
                <label htmlFor="">Location</label>
                <input type="text" name="" id="" />
            </div>
            <div className="form_column">
                <label htmlFor="">Salary</label>
                <div className="salary_input">
                    <input type="number" name="" id="" placeholder='Min'/>
                    <input type="number" name="" id="" placeholder='Max'/>
                </div>
            </div>
            <div className="form_column">
                <label htmlFor="">Tags (optional)</label>
                <input type="text" name="" id="" />
            </div>
            </div>
            <div className="form_column">
                <label htmlFor="">Job Description</label>
                <textarea name="" id="" rows={7} cols={40}></textarea>
            </div>
            <div className="form_row">
            <input type="file" name="" id="" placeholder='Upload Files' />
            </div>
        </form>
        <button className='postjob_btn'>+ Post a Job</button>
      </div>
    )
}

export default Form_PostJob