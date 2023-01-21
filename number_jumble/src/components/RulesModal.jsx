export default function RulesModal() {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addClientModal">
                <div className="d-flex align-items-center">                    
                    <div>Game Rules</div>
                </div>
            </button>
    
            {/* <!-- Modal --> */}
            <div className="modal fade" id="addClientModal" tabIndex="-1" aria-labelledby="addClientModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="addClientModalLabel">Add Client</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit>
                            <div className="mb-3">
                                <label className="form-label">Name</label>

                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>

                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>

                            </div>
                            <button className="btn btn-secondary" type="submit" data-bs-dismiss="modal">
                                Submit
                            </button>
                        </form>
                    </div>            
                </div>
            </div>
            </div>
        </>
      )
}
