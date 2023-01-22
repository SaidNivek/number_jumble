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
                        <h2 className="modal-title fs-5" id="addClientModalLabel">Game Rules</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit>
                            <div className="mb-3">
                                <label className="form-label"><strong>What Is The Goal?</strong></label>
                                <p>Your goal is to add, subtract, and split the given numbers until only one number remains. In order to score a point, this final number should either be 0 or a multiple of 5. Negative numbers are NOT allowed.</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><strong>Adding</strong></label>
                                <p>Any two numbers that you select can be added. To do so, click or tap on the 1st number you wish to add and then tap or click on the 2nd number you wish to add. The "Add" button will light up. Tap or click on this button and you will then add those numbers together. </p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><strong>Subtracting</strong></label>
                                <p>To subtract numbers, you also have to tap or click on two numbers. However, since you cannot go into the negative, only numbers that are less than or equal to the first number selected can be subtracted. For example, if I select 5 as my 1st number and 4 as my 2nd number, the "Subtract" button will light up, as well as the "Add" button. By selecting the "Subtract" button, I will be left with 1. If I choose 4 as my 1st number and 5 as my 2nd number, that would leave me with -1, which is not allowed. In this case, only the "Add" button will light up.</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><strong>Splitting</strong></label>
                                <p>After adding or subtracting a number, if that number is greater than or equal to 10, you can "Split" the number. To do so, select only the number that is to be Split. If just one number 10 or larger is slected, the "Split" button will light up. By pressing the "Split" button, this number will split into its 2 numbers. For example, if I were to Split 14, I would now have a "1" and a "4" in stead of a 14. Numbers greater than or equal to 10 can be "added and Subtracted just like any other single digit numbers by highlighting it and another number.</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><strong>Additional Rules</strong></label>
                                <p>Only 2 numbers can be selected at any time. To select a different number, deselect one of the currently selected numbers.</p>
                                <p>If you wish to deselect a number that is currently selected, simply click on the number you want to deslect.</p>
                                <p>If you split a multiple of 10, you will be left with a 0, which will be removed immediately. 0 + or - any number is the same number, and is not useful. This is a great way to reduce your numbers and reach a conclusion.</p>
                            </div>
                            <button className="btn btn-secondary" type="submit" data-bs-dismiss="modal">
                                Close
                            </button>
                        </form>
                    </div>            
                </div>
            </div>
            </div>
        </>
      )
}
