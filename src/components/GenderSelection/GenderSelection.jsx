import './GenderSelection.css'
const GenderSelection = () => {
    return (
        <div className="radio-input">
            <input value="value-1" name="value-radio" id="value-1" type="radio" className="input i_female" />
            <input value="value-2" name="value-radio" id="value-2" type="radio" className="input i_no-gender" />
            <input value="value-3" name="value-radio" id="value-3" type="radio" className="input i_male" />
            <div className="card female">
                <svg className="logo" width="48" height="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15.75A7.125 7.125 0 1 0 12 1.5a7.125 7.125 0 0 0 0 14.25Z"></path>
                    <path d="M12 15.75v6.75"></path>
                    <path d="M14.719 19.5H9.28"></path>
                </svg>
                <div className="title">Female</div>
            </div>
            <div className="card no-gender">
                <svg className="logo" width="48" height="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.125 15.75a6.375 6.375 0 1 0 0-12.75 6.375 6.375 0 0 0 0 12.75Z"></path>
                    <path d="M10.125 16.5v6"></path>
                    <path d="M12.75 19.5H7.5"></path>
                    <path d="M20.25 5.25V1.5H16.5"></path>
                    <path d="M15.717 6.034 20.25 1.5"></path>
                </svg>
                <div className="title">N/A</div>
            </div>
            <div className="card male">
                <svg className="logo" width="48" height="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.125 21a7.125 7.125 0 1 0 0-14.25 7.125 7.125 0 0 0 0 14.25Z"></path>
                    <path d="M21 7.5V3h-4.5"></path>
                    <path d="M15.188 8.813 21 3"></path>
                </svg>
                <div className="title">Male</div>
            </div>

        </div>
    )
}

export default GenderSelection