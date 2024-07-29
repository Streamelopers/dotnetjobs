

function Form_PostJob() {
    return (
      <>
        <form>
            <h4>
            Job Submission Form
            </h4>
            <div className="form_row">
            <div className="form_column">
                <label htmlFor="">Job Title</label>
                <input type="text" name="" id="" value='' />
            </div>
            <div className="form_column">
                <label htmlFor="">Job Type</label>
                <select name="" id="">
                <option value="">Fulltime</option>
                <option value="">Part-time</option>
                <option value="">Internship</option>
                </select>
            </div>
            <div className="form_column">
                <label htmlFor="">Job Category</label>
                <input type="text" name="" id="" value='' />
            </div>
            </div>
            <div className="form_row">
            <div className="form_column">
                <label htmlFor="">Location</label>
                <input type="text" name="" id="" value='' />
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
            <div className="form_row">
            <label htmlFor="">Job Description</label>
            <textarea name="" id="" rows={4} cols={40}></textarea>
            </div>
            <div className="form_row">
            <input type="file" name="" id="" placeholder='Upload Files' />
            </div>
        </form>
        <button>+ Post a Job</button>
      </>
    )
}

export default Form_PostJob